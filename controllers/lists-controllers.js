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

const editAList = async (req, res) => {
    try{
        const selectedList = req.params.listId;
        const {list_name} = req.body;

        const list = await knex('lists').where({id: selectedList}).first();

        if (!list) {
            return res.status(404).send({message: 'Task not found'})
        }

        await knex('lists').where({id: selectedList}).update({
            list_name
        })

        const editedList = await knex('lists').where({id: selectedList}).first();
        res.status(201).json(editedList)
    } catch (error){
        res.status(500).send('Unable to edit list')
    }
}

const addAList = async (req, res) => {
    try{

    }catch (error){
        console.log("Unable to add list")
    }
}

export {
    allLists,
    allListTasks,
    editAList,
    addAList
}
