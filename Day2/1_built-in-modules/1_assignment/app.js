const Account = require('./account');
const { emailClient, smsClient } = require('./utilities');

let a1 = new Account(1, 1000, 6);

// Code to Display message on the console
a1.on('depositSuccess', (balance) => {
    console.log("\nAmount Deposited Successfully...");
    console.log(`New Account Balance is: INR ${balance}`);
});

a1.on('withdrawSuccess', (balance) => {
    console.log("\nAmount Withdrawn Successfully...");
    console.log(`New Account Balance is: INR ${balance}`);
});

a1.on('withdrawFailed', (balance) => {
    console.log("\nAmount Withdraw Failed...");
    console.log(`Account Balance is: INR ${balance}`);
});

// Code to send SMS
a1.on('depositSuccess', (balance) => {
    smsClient.send(`Amount Deposited Successfully - New Account Balance is: INR ${balance}`);
});

a1.on('withdrawSuccess', (balance) => {
    smsClient.send(`Amount Withdrawn Successfully - New Account Balance is: INR ${balance}`);
});

a1.on('withdrawFailed', (balance) => {
    smsClient.send(`Amount Withdraw Failed - Account Balance is: INR ${balance}`);
});

// Code to send Email
a1.on('depositSuccess', (balance) => {
    emailClient.send(`Amount Deposited Successfully - New Account Balance is: INR ${balance}`);
});

a1.on('withdrawSuccess', (balance) => {
    emailClient.send(`Amount Withdrawn Successfully - New Account Balance is: INR ${balance}`);
});

a1.on('withdrawFailed', (balance) => {
    emailClient.send(`Amount Withdraw Failed - Account Balance is: INR ${balance}`);
});

a1.deposit(1000);
a1.withdraw(2000);
a1.withdraw(1000);