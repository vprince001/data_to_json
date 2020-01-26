module.exports = class DataWrapper {
    constructor(data) {
        this._data = data;
    }

    records(number) {
        let newData = this._data.slice(0, number);
        return new DataWrapper(newData);
    }

    toJson() {
        return this._data;
    }
};
