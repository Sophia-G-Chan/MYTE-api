import { readTasks } from "../middleware/middleware.js";

const allTasks = async (_req, res) => {
    try{
        const tasks = await readTasks();
        console.log(tasks)
        res.status(200).send(tasks);
    } catch(error){
        console.error(error);
        res.status(500).send('Unable to get tasks');
    }
}

export {
    allTasks
}
