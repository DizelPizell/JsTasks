class Calc {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    add(amount) {
        return new Calc(this.value + amount);
    }

    sub(amount) {
        return new Calc(this.value - amount);
    }

    result() {
        return this.value;
    }
}

const calc = new Calc();
console.log(calc.result());
console.log(calc.add(5).result());
console.log(calc.add(3).sub(10).result());

const ten = calc.add(10);
console.log(ten.sub(5).result());
console.log(ten.result());