function objectCreate(prototype, properties) {
    const obj = {};
    Object.setPrototypeOf(obj, prototype);
    if (properties !== undefined) {
        Object.defineProperties(obj, properties);
    }

    return obj;
}

const A = {
    objectName: 'Object A',
    getObjectName: function() {
        return `This is ${this.objectName}!`;
    },
};

const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});

console.log(A.getObjectName());
console.log(B.getObjectName());

console.log(A.hasOwnProperty('getObjectName'));
console.log(A.hasOwnProperty('objectName'));

console.log(B.hasOwnProperty('getObjectName'));
console.log(B.hasOwnProperty('objectName'));
