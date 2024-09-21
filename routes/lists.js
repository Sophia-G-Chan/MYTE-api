import express from 'express'
import * as listController from '../controllers/lists-controllers.js';

const router = express.Router();

router
    .get("/", listController.allTasks)


export default router;
