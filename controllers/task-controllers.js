import { readTasks, findATasks } from "../middleware/middleware.js";
import initKnex from "knex";
import configuration from "./../knexfile.js";

const knex = initKnex(configuration)

const allTasks = async (_req, res) => {
    try {
        const response = await readTasks();
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}

const addATasks = async (req, res) => {
    try {
        const {
            user_id,
            task_name,
            description,
            start_date_and_time,
            end_date_and_time,
            status
        } = req.body;

        if (!user_id || !task_name || !description || !start_date_and_time || !end_date_and_time || !status) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        const startDate = new Date(start_date_and_time);
        const endDate = new Date(end_date_and_time)

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return res.status(400).json({ message: "Invalid date format" });
        }

        const [insertedId] = await knex('tasks')
            .insert({
                user_id,
                task_name,
                description,
                start_date_and_time: startDate,
                end_date_and_time: endDate,
                status,
                created_at: knex.fn.now()
            })
        const newTask = await knex('tasks').where({task_id: insertedId}).first();

        res.status(201).json(newTask);
    } catch (error) {
        console.error({ message: error.message, stack: error.stack });
        res.status(500).send('Unable to add a tasks');
    }
}

const editATask = async (req, res) => {
    try {
        const selectedTask = req.params.taskId;
        const {
            user_id,
            task_name,
            description,
            start_date_and_time,
            end_date_and_time,
            status
        } = req.body;

        const task = await knex('tasks').where({task_id: selectedTask}).first();

        if (!task) {
            return res.status(404).send({message: 'Task not found'})
        }

        const startDate = new Date(start_date_and_time);
        const endDate = new Date(end_date_and_time);

        await knex('tasks').where({task_id: selectedTask}).update({
            user_id,
            task_name,
            description,
            start_date_and_time: startDate,
            end_date_and_time: endDate,
            status,
            updated_at: knex.fn.now()
        });
        const editedTask = await knex('tasks').where({ task_id: selectedTask}).first();
        res.status(201).json(editedTask);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to edit a task');
    }
}

const deleteATask = async (req, res) => {
    try {
        const selectedTask = req.params.taskId;
        const task = await knex('tasks').where({task_id: selectedTask}).first();

        if (!task) {
            return res.status(404).send({message: 'Task not found'})
        }

        await knex('tasks').where({ task_id: selectedTask}).del()

        res.status(204).send({message: 'Task deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to delete task');
    }
}
export {
    allTasks,
    addATasks,
    editATask,
    deleteATask
}
