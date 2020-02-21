const express = require('express');
const parseUpdate = require('./bot/webhook');
const sendMessage = require('./bot/util/sendMessage');
const deleteKey = require('./bot/util/deleteKey');
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 3000;

app.get('/bot', (req, res) => {
    res.send('hello world');
});

app.post('/keys/invalidate', (req,res) => {
    deleteKey(req,res);
});

const webhook_path = '/bot/' + process.env.BOT_KEY;
app.get(webhook_path, (req,res) => {
    res.send("please use POST");
});

app.post(webhook_path, (req,res) => {
    parseUpdate(req,res);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

sendMessage("bot restarted!", process.env.OWNER_CHAT_ID);

