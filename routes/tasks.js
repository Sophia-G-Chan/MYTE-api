import express from 'express'
import * as taskController from '../controllers/task-controllers.js';

const router = express.Router();

router
    .get('/', taskController.allTasks)
    .post('/', taskController.addATasks)
    .put('/:taskId', taskController.editATask)
    .delete('/:taskId', taskController.deleteATask);

export default router;
