function defaultTo(value, defaultValue) {
    // Проверка на null, undefined или NaN
    if (value === null || value === undefined || Number.isNaN(value)) {
        return defaultValue;
    }
    return value;
}

console.log(defaultTo(1, 10)); // 1
console.log(defaultTo(undefined, 10)); // 10
console.log(defaultTo(null, 10)); // 10
console.log(defaultTo(NaN, 10)); // 10
console.log(defaultTo(0, 10)); // 0
console.log(defaultTo('', 10)); // ''
console.log(defaultTo(false, 10)); // false