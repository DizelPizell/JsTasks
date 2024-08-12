function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

const firstObject = {
    a: {
        b: {
            c: 1,
            d: 'string',
            e: {
                num: 1
            }
        }
    }
};

const secondObject = {
    a: {
        b: {
            c: 1,
            d: 'string',
            e: {
                num: 1
            }
        }
    }
};

console.log(deepEqual(firstObject, secondObject));
console.log(deepEqual({ a: 1, b: 3 }, { b: 2, a: 1}));
console.log(deepEqual(1, 2));
console.log(deepEqual(true, false));