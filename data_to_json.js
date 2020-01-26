const txtToJson = require("txt-file-to-json");
const csvToJson = require("csv-file-to-json");
const {createWrapper} = require("./src/lib");

const dataToJson = {
    txt: createWrapper(txtToJson),
    csv: createWrapper(csvToJson)
};

module.exports = dataToJson;
