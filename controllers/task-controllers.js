import { readTasks, findATasks } from "../middleware/middleware.js";
import initKnex from "knex";
import configuration from "./../knexfile.js";

const knex = initKnex(configuration)

const allTasks = async (_req, res) => {
    try {
        const tasks = await readTasks();
        console.log(tasks)
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}
//TODO: add new task = POST
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

        console.log(req.body)
        if ( !user_id || !task_name || !description || !start_date_and_time || !end_date_and_time || !status) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        const startDate =  new Date(start_date_and_time);
        const endDate = new Date(end_date_and_time)

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())){
            return res.status(400).json({ message: "Invalid date format"});
        }

        const [newTask] = await knex('tasks')
            .insert({
                user_id,
                task_name,
                description,
                start_date_and_time: startDate,
                end_date_and_time: endDate,
                status,
                created_at: knex.fn.now()
            })

        res.status(201).json({
            task_id: newTask[0],
            user_id,
            task_name,
            description,
            start_date_and_time,
            end_date_and_time,
            status,
            created_at: new Date()
        });
    } catch (error) {
        console.error({message: error.message, stack: error.stack});
        res.status(500).send('Unable to add a tasks');
    }
}

//TODO: edit = PUT
const editATask = async (req, res) => {
    try {
        const selectedTask = req.params.taskId;
        const tasks = await readTasks();
        console.log(tasks)
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}
//TODO: delete
const deleteATask = async (req, res) => {
    try {
        const tasks = await readTasks();
        console.log(tasks)
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}
export {
    allTasks,
    addATasks
}
