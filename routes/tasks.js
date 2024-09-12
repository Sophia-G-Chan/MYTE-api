import express from 'express'
import * as taskController from '../controllers/task-controllers.js';

const router = express.Router();

router
    .get('/', taskController.allTasks);


export default router;
