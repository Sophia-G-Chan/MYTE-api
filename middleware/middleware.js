import initKnex from "knex";
import configuration from "./../knexfile.js";

const knex = initKnex(configuration)

const readTasks = async () => {
    try{
        const tasks = await knex('tasks')
        .orderBy("task_id", "asc");
        return tasks
    } catch (error) {
        console.error('Error reading tasks:', error);
    }
}

const findATasks = async (id) => {
    try{
        const tasks = await knex('tasks').where({task_id: id}).first()
        return tasks
    } catch (error) {
        console.error('Warehouse not found', error);
    }
}


export {
    readTasks,
    findATasks
}
