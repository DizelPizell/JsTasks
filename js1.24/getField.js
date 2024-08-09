function getField(arr = [], key) {
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.map(item => item[key]);
}

const data1 = [
    {name: 'Denis', age: 25},
    {name: 'Ivan'},
    {name: 'Ann', age: 18}
    ];
    console.log(getField(data1, 'age'));
