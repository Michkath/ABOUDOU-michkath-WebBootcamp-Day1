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
