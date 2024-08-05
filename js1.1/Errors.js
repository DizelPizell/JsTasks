function reference() {
    return nonExistentVariable;
}


function type() {
    let num = 123;
    num();
}

try {
    reference();
} catch (referenceError) {
    console.log(referenceError instanceof ReferenceError);
    console.log(referenceError.message);
}

try {
    type();
} catch (typeError) {
    console.log(typeError instanceof TypeError);
    console.log(typeError.message);
}