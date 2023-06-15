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