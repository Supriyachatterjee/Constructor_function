function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    };


    this.withdraw = function(amount) {
        if (this.balance >= amount && amount > 0) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    };


    this.checkBalance = function() {
        console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    };


    this.isActive = function() {
        return this.active;
    };
}


let account1 = new BankAccount(1, "Supriya Chatterjee", "Savings", 1000);
let account2 = new BankAccount(2, "Ram", "Checking", 2000);

// Perform operations on the accounts
account1.deposit(500);
account1.checkBalance();
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.checkBalance();
account2.withdraw(500);
account2.checkBalance();


console.log("Account 1 is active:", account1.isActive());
console.log("Account 2 is active:", account2.isActive());


function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}


let accounts = [account1, account2];
console.log("Total balance of all active accounts:", getTotalBalance(accounts));
