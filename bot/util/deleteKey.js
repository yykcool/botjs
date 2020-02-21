const { delKey } = require("./mongoClient");
const sendMessage = require("./sendMessage");

const deleteKey = async (req, res) => {
  const { name } = req.body;
  const resBody = await delKey(name);

  if (resBody == null) {
    res.sendStatus(400);
    return;
  }

  const { id } = resBody;

  sendMessage(
    `hi @${name}, please update your riot api key at\n https://developer.riotgames.com/ `,
    id
  );

  res.sendStatus(200);
};

module.exports = deleteKey;
