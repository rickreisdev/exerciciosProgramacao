const readline = require('readline');

function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um número: ', (input) => {
    const number = parseInt(input, 10);
    if (isNaN(number)) {
        console.log("Por favor, informe um número válido.");
    } else {
        if (isFibonacci(number)) {
            console.log(`O número ${number} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
        }
    }
    rl.close();
});