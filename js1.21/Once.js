function once(func) {
    let called = false;
    
    return function(...args) {
        if (!called) {
            called = true;
            return func(...args);
        }
    };
}


const f = () => console.log('hi!');
const onceF = once(f);

onceF();
onceF();