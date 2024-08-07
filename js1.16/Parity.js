function getNumbersByParity(arr, parity) {
    if (parity === 'even') {
        return arr.filter(number => number % 2 === 0);
    } else if (parity === 'odd') {
        return arr.filter(number => number % 2 !== 0);
    } else {
        return arr;
    }
}

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even'));
console.log(getNumbersByParity(data, 'odd'));
console.log(getNumbersByParity(data, 'beb'));