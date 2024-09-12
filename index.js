import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import taskRouter from './routes/tasks.js'
import calendarRouter from './routes/calendar.js'

const app = express();
const {PORT, CORS_ORIGIN} = process.env;

app.use(express.json());
app.use(cors({CORS_ORIGIN}));

app.use('/tasks', taskRouter);
app.use('/calendars', calendarRouter);

app.use('/', (_req, res) => {
    res.send('Hello, welcome to the back-end server for JourneyTask');
})

app.use((err, _req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Internal Server Error'})
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
