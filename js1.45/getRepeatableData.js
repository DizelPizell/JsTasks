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

function getData(key) {
    console.log(`Calling getData with key: ${key}`);
    if (key === '1') {
        return 'hello' + key;
    } else {
        throw new TemporaryError();
    }
}

function getRepeatableData(getData, key, maxRequestsNumber = Infinity) {
    let attemptCount = 0;

    while (attemptCount <= maxRequestsNumber) {
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
            } else {
                throw error;
            }
        }
    }

    throw new AttemptsLimitExceeded();
}

try {
    const res1 = getRepeatableData(getData, '1', 3);
    console.log('Result for key "1":', res1);
} 
catch (error) {
    console.error('Error:', error);
}

try {
    const res2 = getRepeatableData(getData, '2', 3);
    console.log('Result for key "2":', res2);
} 
catch (error) {
    console.error('Error:', error);
}
