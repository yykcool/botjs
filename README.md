botjs
===

handy, lazily written, super basic feature pack for mongodb logging and api key management for scripts running in the background

## setup ##

- clone into server that has access to your mongodb database 
- get telegram api key, set api key as BOT_KEY env variable
- - optionally, either set OWNER_CHAT_ID or remove last line of index.js to disable startup notifs
- set up webhook and point to server
- `npm i`
- ???
- **profit**

*for current list of bot functionalities exposed on telegram, check bot/webhook/index.js to see how it works*

## webhook ##
bot is configured to operate on telegram's [webhook](https://core.telegram.org/bots/api#setwebhook) feature <br/>
curretly used endpoint is `wwww.website.com/bot/<BOT_KEY>`


Server Specific Features
---
these features are for scripts running in the same instance to execute via localhost requests <br/>
all requests to this bot should begin with 127.0.0.1/ <br/>

### /keys/invalidate ###

invalidates api key and informs owner in telegram <br/>
parameters:
- name
<br/>
example: `curl -d "name=yincredulous" 127.0.0.1/keys/invalidate`
