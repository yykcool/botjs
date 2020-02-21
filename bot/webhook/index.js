const sendMessage = require("../util/sendMessage");
const parseText = require("../util/parseText");


const parseUpdate = async (req, res) => {
  console.log("webhook invoked");
  const { message } = req.body;
  const { from, chat, text } = message;
  console.log(message);

  const method = parseText(text);
  const res_message = await method(from, chat, text);
  sendMessage(res_message, chat.id);
  res.sendStatus(200);
};

module.exports = parseUpdate;

// webhook body format is this
// {
//     message_id: 20,
//     from: {
//       id: <NO>,
//       is_bot: false,
//       first_name: <NO>,
//       username: <NO>,
//       language_code: 'en'
//     },
//     chat: {
//       id: <REDACTED>,
//       title: <REDACTED>,
//       type: 'group',
//       all_members_are_administrators: true
//     },
//     date: 1581587290,
//     text: '/set_key asdasdasd',
//     entities: [ { offset: 0, length: 8, type: 'bot_command' } ]
//   }
