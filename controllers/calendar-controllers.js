import { google } from 'googleapis'
import axios from 'axios';
import 'dotenv/config';
import dayjs from 'dayjs';

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

const scopes = ['https://www.googleapis.com/auth/calendar'];
const calendar = google.calendar({
    version: "v3",
    auth: oauth2Client
})
const getGoogle = async (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
    })
    res.redirect(url)
}

const redirect = async (req, res) => {
    const code = req.query.code;
    if (!code) {
        console.error("No code received from Google");
        return res.status(400).send({ message: "Authorization code is missing" });
    }

    try {
        console.log("Attempting to get tokens with code:", code);
        const { tokens} = await oauth2Client.getToken(code)
        oauth2Client.setCredentials(tokens)
        res.send({ message: "You have successfully logged in" })
    }catch (error) {
        res.status(500).send({message: "Error during login"})
    }

}

const scheduleEvents = async (req, res) => {
    try {
        await calendar.events.insert({
            calendarId: "primary",
            auth: oauth2Client,
            requestBody: {
                summary: "Add a new event",
                description: "Don't forget to attend lecture today",
                start: {
                    dateTime: dayjs(new Date()).add(1, "day").toISOString(),
                    timeZone: 'America/Los_Angeles'
                },
                end: {
                    dateTime: dayjs(new Date()).add(1, "day").add(1, "hour").toISOString(),
                    timeZone: 'America/Los_Angeles'
                },
                recurrence: [
                    'RRULE:FREQ=DAILY;COUNT=2'
                ],
                attendees: [
                    { 'email': 'sophia.gy.ng@gmail.com' }
                ],
                reminders: {
                    'useDefault': false,
                    'overrides': [
                        { 'method': 'email', 'minutes': 24 * 60 },
                        { 'method': 'popup', 'minutes': 10 }
                    ]
                }
            }
        })
        res.send({ msg: "send success" })
    } catch (error) {
        console.error('Error scheduling event:', error)
        res.status(500).send({ msg: "Error scheduling event" })
    }



}

export {
    getGoogle,
    redirect,
    scheduleEvents,
    calendar
}
