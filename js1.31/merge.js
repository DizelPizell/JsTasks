function merge(...objects) {
    return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

console.log(
  merge(
    {
      name: 'John',
      age: 22,
    },
    {
      surname: 'Klein',
      age: 20,
      profession: 'student',
    },
    {
      profession: 'frontend developer',
      country: 'USA',
    }
  )
);
