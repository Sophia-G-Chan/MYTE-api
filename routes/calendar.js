import express from 'express'
import * as calendarController from '../controllers/calendar-controllers.js';

const router = express.Router();

router
    .get("/google", calendarController.getGoogle)
    .get("/google/redirect", calendarController.redirect)
    .get('/google/schedule_event', calendarController.scheduleEvents)

export default router;
