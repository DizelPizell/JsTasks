function partition(array, callback) {
    const trueArray = [];
    const falseArray = [];

    if (typeof callback !== 'function') {
        callback = (element) => element;
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (callback(element)) {
            trueArray.push(element);
        } else {
            falseArray.push(element);
        }
    }

    return [trueArray, falseArray];
}

const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(partition(numbers1, (element) => element > 3));

const numbers2 = [0, 1, 2, {}, false, "", "0"];
console.log(partition(numbers2, (element) => element));

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
console.log(partition(users, (element) => element.active ));