function getField(arr = [], key) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][key]);
    }
    return result;
}

const data1 = [
    {name: 'Denis', age: 25},
    {name: 'Ivan'},
    {name: 'Ann', age: 18}
    ];
    console.log(getField(data1, 'age'));
