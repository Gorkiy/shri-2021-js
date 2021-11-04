module.exports = class {
    constructor(array) {
        console.log('array: ', array);
        this._data = this.getUniqueValues(array);
    }

    _data = [];

    [Symbol.toStringTag] = '^_^';

    *[Symbol.iterator]() {
        for (let value of this._data) {
            yield value;
        }
    }

    static getValue() {
        console.log(this.value)
    }

    getUniqueValues(array) {
        const map = {};

        return array.filter(el => {
            if (map[el]) return false;

            map[el] = true;
            return el;
        })
    }

    add(element) {
        this._data.push(element);
        return this;
    }

    delete(element) {
        let isFound = false;
        this._data = this._data.filter(el => {
            if (el === element) isFound = true;
            return el !== element;
        })

        return isFound;
    }

    has(element) {
        const found = this._data.find(el => el === element);
        return found ? true : false;
    }

    forEach(callback, context = this) {
        const array = this._data;
        const contextCallback = callback.bind(context);

        for (let i = 0; i < array.length; i++) {
            contextCallback(array[i], i, array);
        }
    }

    clear() {
        this._data = [];
    }

    *keys() {
        for (let key of this._data) {
            yield key;
        }
    }

    *values() {
        for (let value of this._data) {
            yield value;
        }
    }

    *entries() {
        for (let value of this._data) {
            yield [value, value];
        }
    }

    get size() {
        return this._data.length;
    }
}