const {deepEqual} = require("assert");
const txtToJson = require("txt-file-to-json");
const csvToJson = require("csv-file-to-json");
const {createWrapper} = require("../src/lib");

const {
    STRING_TXT_DATA,
    STRING_CSV_DATA,
    OBJ_FOR_LINE_1,
    OBJ_FOR_LINE_2
} = require("./constants_for_test");

describe("DataWrapper", function () {
    it("should return all data in array for txtToJson and textData in String", function () {
        const wrapper = createWrapper(txtToJson);
        const dataToJson = wrapper({data: STRING_TXT_DATA});
        const actual = dataToJson.toJson();
        const expected = [OBJ_FOR_LINE_1, OBJ_FOR_LINE_2];

        deepEqual(actual, expected);
    });

    it("should return all data in array for csvToJson and csvData in String", function () {
        const wrapper = createWrapper(csvToJson);
        const dataToJson = wrapper({data: STRING_CSV_DATA});
        const actual = dataToJson.toJson();
        const expected = [OBJ_FOR_LINE_1, OBJ_FOR_LINE_2];

        deepEqual(actual, expected);
    });

    it("should return only given number of records in array for txtToJson and textData in String", function () {
        const wrapper = createWrapper(txtToJson);
        const dataToJson = wrapper({data: STRING_TXT_DATA});
        const actual = dataToJson.records(1).toJson();
        const expected = [OBJ_FOR_LINE_1];

        deepEqual(actual, expected);
    });

    it("should return only given number of records in array for csvToJson and csvData in String", function () {
        const wrapper = createWrapper(csvToJson);
        const dataToJson = wrapper({data: STRING_CSV_DATA});
        const actual = dataToJson.records(1).toJson();
        const expected = [OBJ_FOR_LINE_1];

        deepEqual(actual, expected);
    });
});
