const { setKey } = require('../util/mongoClient');

const _setKey = async (from, chat, text) => {
    const message = await setKey(from, text.split(" ")[1])
    return `key set: ${message} ` ;
};

module.exports = _setKey;
