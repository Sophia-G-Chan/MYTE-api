import express from 'express'
import * as taskController from '../controllers/task-controllers.js';

const router = express.Router();

router
    .get('/', taskController.allTasks)
    .post('/', taskController.addATasks);
 //TODO: POST

     //TODO: edit

      //TODO: delete

export default router;
