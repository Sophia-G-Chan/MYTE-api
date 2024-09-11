import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/tasks.js'

const app = express();
const {PORT, CORS_ORIGIN} = process.env;

app.use('/tasks', router);
