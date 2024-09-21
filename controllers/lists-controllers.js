import { readLists } from "../middleware/middleware.js";
import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration)

const allTasks = async (_req, res) => {
    try {
        const response = await readLists();
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}

export {
    allTasks
}
