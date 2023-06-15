function isPrime(nombre) {
let a = 0;
    for(let i = 1;i <= nombre;i++){
        modulo = nombre % i; 
        if (modulo == 0){
             a++;
        }
    }
    if(a != 2){
        return false
    }else{
        return true
    }        
}
const number = 9;
const isNumberPrime = isPrime(number);
console.log(`Is ${number} prime? ${isNumberPrime}`);