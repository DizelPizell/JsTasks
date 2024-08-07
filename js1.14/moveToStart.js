function moveToStart(arr, n) {
    if (n >= arr.length) {
        return [...arr];
    }
    
    const endPart = arr.slice(-n); 
    const startPart = arr.slice(0, arr.length - n);
    
    return [...endPart, ...startPart];
}

console.log(moveToStart([1, 2, 3, 4, 5], 3));
console.log(moveToStart([1, 2, 3, 4, 5], 3));
console.log(moveToStart([1, 2, 3, 4, 5], 10));