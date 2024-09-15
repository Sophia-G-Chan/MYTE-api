import express from 'express'
import { google } from 'googleapis'

const router = express.Router();

const auth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,

)

export default router;
