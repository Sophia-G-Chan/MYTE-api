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
        const selectedListId = req.params.listId;
        const {list_name} = req.body;

        const list = await knex('lists').where({id: selectedListId}).first();
        if (!list) {
            return res.status(404).send({message: 'Task not found'})
        }

        await knex('lists').where({id: selectedListId}).update({
            list_name
        })

        const editedList = await knex('lists').where({id: selectedListId}).first();
        res.status(200).json(editedList)
    } catch (error){
        res.status(500).send('Unable to edit list')
    }
}

const addAList = async (req, res) => {
    try{
        const {list_name} = req.body;
        if (!list_name){
            return res.status(400).json({message: "Missing required name"})
        }

        const [insertedId] = await knex('lists')
            .insert({list_name})

        const newList = await knex('lists').where({id: insertedId}).first();

        res.status(201).json(newList);
    }catch (error){
        console.log("Unable to add list")
    }
}

const deleteAList = async (req, res) => {
    try{
        const selectedList = req.params.listId;
        const list = await knex('lists').where({id: selectedList}).first();

        if (!list){
            return res.status(404).send({message: "List not found"})
        }

        await knex('lists').where({id: selectedList}).del();

        res.status(204).send({message: "List deleted"})
    }catch (error){
        res.status(500).send("unable to delete list")
    }
}

export {
    allLists,
    allListTasks,
    editAList,
    addAList,
    deleteAList
}
