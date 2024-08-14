function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function isEmptyWithProtos(obj) {
    let currentObj = obj;

    while (currentObj !== null && currentObj !== Object.prototype) {
        if (Object.keys(currentObj).length > 0) {
            return false; // Если у текущего объекта есть собственные свойства
        }
        currentObj = Object.getPrototypeOf(currentObj); // Переходим к прототипу
    }

    return true;
}

// Примеры использования для isEmpty:
const obj1 = Object.create(null);
console.log(isEmpty(obj1)); // -> true

const obj2 = { prop: 'value' };
console.log(isEmpty(obj2)); // -> false

// Примеры использования для isEmptyWithProtos:
const protoObj = Object.create(null);
const obj3 = Object.create(protoObj);
console.log(isEmptyWithProtos(obj3)); // -> true

const obj4 = {};
console.log(isEmptyWithProtos(obj4)); // -> false
