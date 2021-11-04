class MySet {
    constructor(array) {
        console.log('array: ', array);
        this._data = this.getUniqueValues(array);
    }

    _data = [];

    *[Symbol.iterator]() {
        for (let value of this._data) {
            yield value;
        }
    }

    getUniqueValues(array) {
        const map = {};

        return array.filter(el => {
            if (map[el]) return false;

            map[el] = true;
            return el;
        })
    }
}
// тесты
const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
console.log([...set]); // [ 4, 8, 15, 16, 23, 42 ]