class AttemptsLimitExceeded extends Error {
    constructor() {
        super('Max attempts limit exceeded');
        this.name = 'AttemptsLimitExceeded';
    }
}

class NotFoundError extends Error {
    constructor() {
        super('Not found');
        this.name = 'NotFoundError';
    }
}

class TemporaryError extends Error {
    constructor() {
        super('TemporaryError');
        this.name = 'TemporaryError';
    }
}

function getRepeatableData(getData, key, maxRequestsNumber = Infinity) {
    let attemptCount = 0;

    const fetchData = () => {
        attemptCount++;

        try {
            const result = getData(key);
            return result;
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            } else if (error instanceof TemporaryError) {
                if (attemptCount > maxRequestsNumber) {
                    throw new AttemptsLimitExceeded();
                }
                return fetchData();
            } else {
                throw error;
            }
        }
    };

    return fetchData();
}

const getData = (key) => {
    if (key === '1') {
        return 'hello' + key;
    } else {
        throw new TemporaryError();
    }
};

try {
    const res1 = getRepeatableData(getData, '1', 3);
    console.log('Result for key "1":', res1);
} catch (error) {
    console.error('Error:', error);
}