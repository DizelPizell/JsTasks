function sum(...args) {
    return args.reduce((total, current) => {
        const num = Number(current);
        if (!isNaN(num)) {
            return total + num;
        }
        return total;
    }, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(-10, 15, 100));
console.log(sum());
console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false));