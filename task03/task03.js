function findLargestElement(tab) {
let nb = tab[0];    
if (tab.length === 0){
    return null;
}
for (let i = 1; i < tab.length; i++){
if (tab[i] > nb){
    nb = tab[i];
}
}return nb;
    }

const array = [5, 2, 9, 1, 10];
//const array = [];
const largestElement = findLargestElement(array);
console.log(`The largest element in the array is: ${largestElement}`);