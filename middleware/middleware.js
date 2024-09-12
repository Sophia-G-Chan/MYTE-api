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

export {
    readTasks
}
