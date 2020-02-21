const { setKey, getKeys } = require('../commands');

const parseText = text => {
    if (text.includes("/set_key")) {
        return setKey;
    } else if (text.includes("/get_all_keys")) {
        return getKeys
    } else {
        return "got you loud and clear "
    }
};

module.exports = parseText;