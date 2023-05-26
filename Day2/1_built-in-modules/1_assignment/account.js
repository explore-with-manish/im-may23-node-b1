const EventEmitter = require('events');

class Account extends EventEmitter {
    constructor(accNumber = 0, balance = 0, intRate = 0, date = new Date()) {
        super();
        this._accNumber = accNumber;
        this._balance = balance;
        this._annualIntrestRate = intRate;
        this._dateCreated = date;
    }

    get AccountNumber() {
        return this._accNumber;
    }

    get AnnualInterestRate() {
        return this._annualInterestRate;
    }

    set Balance(balance) {
        this._balance = balance;
    }

    set AnnualInterestRate(annualInterestRate) {
        this._annualIntrestRate = annualInterestRate;
    }

    deposit(amount) {
        this._balance += amount;
        this.emit('depositSuccess', this._balance);
    }

    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this.emit('withdrawSuccess', this._balance);
        } else {
            this.emit('withdrawFailed', this._balance);
        }
    }

    toString() {
        return `Account: ${this._accNumber}, Balance is: ${this._balance}`;
    }
}

module.exports = Account;