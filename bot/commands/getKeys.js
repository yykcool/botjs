
const { getKeys } = require('../util/mongoClient');

const _getKeys = async (from, chat, text) => {
    const keys = await getKeys();
    let message = "";

    for (entry of keys) {
        message += `${entry.name}: ${entry.key}`;
        message += "\n";
    }
    return message;
};

module.exports = _getKeys;
