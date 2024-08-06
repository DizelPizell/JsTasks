function fizzbuzz(a){
    if(a % 3 == 0 && a % 5 == 0){
        return 'FizzBuzz';
    }
    if(a % 3 == 0){
        return 'Fizz';
    }
    if(a % 5 == 0){
        return 'Buzz';
    }
    else {
        return a;
    }
}

console.log(fizzbuzz(9));
console.log(fizzbuzz(15));
console.log(fizzbuzz(7));
console.log(fizzbuzz(10));
console.log(fizzbuzz(30));
