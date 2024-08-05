function capitalise(text) {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    
}

const str = 'sOme RanDoM sTRING';
console.log(capitalise(str));