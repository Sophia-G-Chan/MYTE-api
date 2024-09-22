import express from 'express'
import * as listController from '../controllers/lists-controllers.js';

const router = express.Router();

router
    .get("/", listController.allLists)
    .get("/list-tasks", listController.allListTasks)


export default router;
