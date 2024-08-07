function findAllIdx(arr, value){
    const index = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            index.push(i);
        }
    }

    return index;
}

console.log(findAllIdx([1, 0, 1, 0, 0, 1], 0));
console.log(findAllIdx([1, 1], 0));            
console.log(findAllIdx([1, 2, 3, 4, 2], 2));   
console.log(findAllIdx([1, 2, 3, 4, 5], 5));   
console.log(findAllIdx([1, 2, 3, 4, 5], 6));  
