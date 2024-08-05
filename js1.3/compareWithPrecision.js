function compareWithPrecision(num1, num2, num3){
    return Math.abs(num1 - num2) <= num3
}

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(0.5 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(0.1, 0.3, 0.0001));
