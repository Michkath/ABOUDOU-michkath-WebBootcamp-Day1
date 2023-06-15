function factorial(nombre) {
let numberfactoriel = 1;

if (nombre <= 0){
    return -1
}
for (let i = 5; i > 1; i--) {
    numberfactoriel = numberfactoriel * i;  
}
return numberfactoriel;
}

const number = -2;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);