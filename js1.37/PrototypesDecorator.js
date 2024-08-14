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
function Decorator(func) {
    return function(...args) {
        console.log('called');
        return func.apply(this, args);
    };
}

Addition.prototype.add = Decorator(Addition.prototype.add);

const startedValue = new Addition(5);
const result = startedValue.add(3, 5, 6);
console.log(result);
