function unique(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}

const data1 = [1, 2, 3, 3, 4, 4];
console.log(unique(data1));

const obj = { name: 'John' };
const data2 = [obj, obj, obj, { name: 'John' }];
const result = unique(data2);
console.log(result);

console.log(result[0] === obj);
console.log(result[1] === obj);
