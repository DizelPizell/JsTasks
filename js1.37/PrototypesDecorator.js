class Addition {
    constructor (num) {
        this.num = num;
    }

    add (...nums) {
        const sum = (a, b) => a + b;
        return this.num + nums.reduce(sum);
    }
}

// Write your code here
Addition.prototype.add = (function(originalAdd) {
    return function(...args) {
        console.log('called');
        return originalAdd.apply(this, args);
    };
})(Addition.prototype.add);

const startedValue = new Addition(5);
const result = startedValue.add(3, 5, 6);
console.log(result);
