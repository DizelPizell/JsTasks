function optionalChaining(obj, mass) {
    if (obj === undefined || obj === null) {
        return undefined;
    }

    if (mass.length === 0) {
        return obj;
    }

    return optionalChaining(obj[mass[0]], mass.slice(1));
}

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
};

console.log(optionalChaining(obj, ["a", "b", "c", "d"]));
console.log(optionalChaining(obj, ["a", "b", "x", "d"]));
console.log(optionalChaining(obj, ["a", "b"]));
console.log(optionalChaining(obj, ["a", "x", "c", "d"]));
console.log(optionalChaining({}, ["a", "b", "c", "d"]));