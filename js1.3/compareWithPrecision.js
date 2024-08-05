function compareWithPrecision(num1, num2, num3){
    let IntResult = num1 - num2;
    if(IntResult <= num3){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(0.5 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(0.1, 0.3, 0.0001));