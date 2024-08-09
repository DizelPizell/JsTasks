function createObjectCalculator(a, b) {
    const calculator = {
        a: a,
        b: b,
    
    
        read(newA, newB) {
            this.a = newA;
            this.b = newB;
        },
    
        sum() {
            return this.a + this.b;
        },
    
        mul() {
            return this.a * this.b;
        }
    };

return calculator;
}

const calculator1 = createObjectCalculator(2, 3);
console.log(calculator1.sum()); 
console.log(calculator1.mul()); 

calculator1.read(12, 34);
console.log(calculator1.sum());
console.log(calculator1.mul());

calculator1.read(-1, -1);
console.log(calculator1.sum());
console.log(calculator1.mul());

calculator1.read(2.3, 0.7);
console.log(calculator1.sum());
console.log(calculator1.mul());
