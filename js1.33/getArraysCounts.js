function getArraysCounts(arr) {
    const counts = new Map();

    arr.forEach(item => {
        if (counts.has(item)) {
            counts.set(item, counts.get(item) + 1);
        } else {
            counts.set(item, 1);
        }
    });

    return counts;
}

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data);

console.log(counts.get(1));
console.log(counts.get(2));
console.log(counts.get(true));
console.log(counts.get(obj));
