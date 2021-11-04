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

// тесты
const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
console.log([...set]); // [ 4, 8, 15, 16, 23, 42 ]

// есть свойство size
console.log(set.size); // 6

// работает в цикле for-of
for (const item of set) {
    console.log(item); // 4 8 15 16 23 42
}

// есть методы keys, values, entries
for (const item of set.entries()) {
    console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
}

// есть метод clear
set.clear();
console.log(set.size); // 0

const object = {
    getValue () { return this.value }
}

const data = {
    value: 42
}

// есть метод add
set.add(object);
set.add(data);

// который может работать в цепочке вызовов
set.add(object).add(object).add(object);

// есть метод delete
set.delete(data);

// есть метод has
console.log(set.has({})); // false
console.log(set.has(object)); // true
console.log(set.has(data)); // false