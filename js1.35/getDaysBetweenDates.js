function getDaysBetweenDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        return NaN;
    }

    const timeDifference = Math.abs(d2 - d1);
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.floor(timeDifference / millisecondsInADay);

    return daysDifference;
}

console.log(getDaysBetweenDates('1-1-2020', '1-2-2020'));
console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)));
console.log(getDaysBetweenDates(1409796000000, 1409925600000));
console.log(getDaysBetweenDates('1-1-2020', 'дата'));
