class ExecutionError extends Error {
    constructor(argData, originalError) {
        super(originalError.message);
        this.argData = argData;
        this.originalError = originalError;
    }
    getArgData() {
        return this.argData;
    }
}

function applyFn(dataArr, callback) {
    const result = {
        succeeded: [],
        errors: []
    };

    dataArr.forEach((item) => {
        try {
            const res = callback(item);
            result.succeeded.push(res);
        } catch (error) {
            const execError = new ExecutionError(item, error);
            result.errors.push(execError);
        }
    });

    return result;
}

const dataArr = ['{"login":"login","password":"password"}', '{{}'];
const callback = JSON.parse;
const { succeeded, errors } = applyFn(dataArr, callback);

console.log('Succeeded:', succeeded);
console.log('Errors:', errors);