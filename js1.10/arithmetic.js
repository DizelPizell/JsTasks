function arithmetic(num1, num2, operator){
    if(operator === "add"){
        return num1 + num2;
    }
    if(operator === "subtract"){
        return num1 - num2;
    }
    if(operator === "multiply"){
        return num1 * num2;
    }
    if(operator === "divide"){
        return num1 / num2;
    }
    else {
        return NaN;
    }
}

console.log(arithmetic(5, 2, "add"));
console.log(arithmetic(5, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(5, 2, "divide"));
console.log(arithmetic(5, 2, "aaaa"));

