function incrementCounter(counterName) {
    let counters;

    try {
        const storedData = localStorage.getItem('counters');
        counters = storedData ? JSON.parse(storedData) : {};
    } catch (error) {
        counters = {};
    }

    if (counters[counterName] === undefined) {
        counters[counterName] = 1;
    } else {
        counters[counterName] += 1;
    }

    localStorage.setItem('counters', JSON.stringify(counters));

    return counters[counterName];
}

function initializeCounters() {
    const initialCounters = {
        bannerClick: 5
    };
    localStorage.setItem('counters', JSON.stringify(initialCounters));
}
initializeCounters();

console.log(incrementCounter('bannerClick'));
console.log(incrementCounter('bannerClose'));