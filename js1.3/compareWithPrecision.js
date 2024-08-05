function compareWithPrecision(num1, num2, num3){
    let IntResult = num1 - num2;
    if(Math.abs(IntResult) <= num3){
        return true;
    }
    else{
        return false;
    }
}

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(0.5 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(0.1, 0.3, 0.0001));
