import { readLists, readListTasks } from "../middleware/middleware.js";
import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration)

const allLists = async (_req, res) => {
    try {
        const response = await readLists();
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}

const allListTasks = async (_req, res) => {
    try{
        const response = await readListTasks();
        res.status(200).send(response);
    } catch (error){
        res.status(500).send('Unable to get list-tasks')
    }
}

export {
    allLists,
    allListTasks
}
