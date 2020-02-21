const axios = require('axios');
axios.defaults.baseURL = "https://api.telegram.org/bot" + process.env.BOT_KEY;

const sendMessage = async (text, chat_id) => {
    const config = {
        method: 'post',
        url: '/sendMessage',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            chat_id,
            text,
        },

    };
    try{
        await axios(config);
    }catch(err){
        console.log(err.stack);
    }

}

module.exports = sendMessage;