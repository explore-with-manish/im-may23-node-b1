const Account = require('./account');

let a1 = new Account(1, 1000, 6);

a1.deposit(1000);
a1.withdraw(2000);
a1.withdraw(1000);