import initKnex from "knex";
import configuration from "./../knexfile.js";

const knex = initKnex(configuration)

const readTasks = async (user_id) => {
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

const readLists = async (user_id) => {
    try{
        const lists = await knex('lists').orderBy("id", "asc");
        return lists
    } catch (error) {
        console.error('Error reading lists:', error);
    }
}

const readListTasks = async (user_id) => {
    try{
        const list_tasks = await knex('list_tasks').orderBy("id", "asc");
        return list_tasks
    } catch (error) {
        console.error('Error reading lists:', error);
    }
}

export {
    readTasks,
    findATasks,
    readLists,
    readListTasks
}
