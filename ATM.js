import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/money.json`;

let action;

const storeData = (number) => {
    try {
        accessSync(filePath);
        const jsonObject = readFileSync(filePath, 'utf8');
        const decoded = JSON.parse(jsonObject);
        console.log(`The balance was: ${decoded.balance}`);
        if (action === '+') {
            decoded.balance += number;
            writeFileSync(filePath, JSON.stringify(decoded));
            console.log(`The current balance is: ${decoded.balance}`)
        };
        if (action === '-') {
            decoded.balance -= number;
            writeFileSync(filePath, JSON.stringify(decoded));
            console.log(`The current balance is: ${decoded.balance}`)
        };

       
    } catch (err) {
        console.log("Something wrong!".err)
    }
};

rl.question('Please enter an action (+ or -): ', (answer) => {
    action = answer;

    rl.question('Please enter an amount: ', (answer) => {
        storeData(parseInt(answer));
        rl.close();
    });
});

