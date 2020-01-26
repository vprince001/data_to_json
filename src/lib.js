const DataWrapper = require("./DataWrapper");

const createWrapper = (converter) => {
    return function (params) {
        return new DataWrapper(converter(params));
    }
};

module.exports = {createWrapper};
