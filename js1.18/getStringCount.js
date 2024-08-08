function getStringCount(input) {
    if (typeof input === 'string') {
        return 1;
    }

    if (Array.isArray(input) || typeof input === 'object' && input !== null) {
        let count = 0;

        for (const key in input) {
            count += getStringCount(input[key]);
        }

        return count;
    }

    return 0;
}

console.log(getStringCount({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
}));

console.log(getStringCount(['1', '2', ['3']]));

console.log(getStringCount('string'));