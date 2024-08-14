class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

class Account {
    constructor(person, initialAmount = 0) {
        this.person = person;
        this.balance = initialAmount;
        this.history = [];
    }

    addMoney(amount, description) {
        this.balance += amount;
        this._addToHistory('in', amount, description);
    }

    withdrawMoney(amount, description) {
        this.balance -= amount;
        this._addToHistory('out', amount, description);
    }

    getAmount() {
        return this.balance;
    }

    getAccountHistory() {
        return this.history;
    }

    static transfer(fromAccount, toAccount, amount) {
        fromAccount.withdrawMoney(amount, `Transfer to ${toAccount.person.fullName}`);
        toAccount.addMoney(amount, `Transfer from ${fromAccount.person.fullName}`);
    }

    _addToHistory(target, amount, description) {
        this.history.push({
            timestamp: Date.now(),
            target: target,
            amount: amount,
            description: description,
        });
    }
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
console.log(alexAccount.getAmount());

alexAccount.withdrawMoney(200, 'Налоги');
console.log(alexAccount.getAmount()); 

Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount());
console.log(alexAccount.getAmount());

console.log(alexAccount.getAccountHistory());
console.log(helenAccount.getAccountHistory());