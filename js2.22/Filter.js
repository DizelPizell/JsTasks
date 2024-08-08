function inRange(a, b) {
    if (a > b) {
        return () => false;
    }

    return function(element) {
        let num = Number(element);
        return num >= a && num <= b;
    };
}

function inArray(arr) {
    return function(element) {
        return arr.includes(element);
    };
}

function notInArray(arr) {
    return function(element) {
        return !arr.includes(element);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6))); 
console.log(arr.filter(inArray([1, 2, 10, undefined]))); 
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true])));