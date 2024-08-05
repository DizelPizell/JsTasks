function reverseLongWords(text){
    return text
        .split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}

console.log(reverseLongWords('Hey fellow warriors'));
console.log(reverseLongWords('This is a test'));
console.log(reverseLongWords('This is a new another test Kukoyambo'));