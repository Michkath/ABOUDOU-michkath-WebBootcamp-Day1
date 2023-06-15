function  findFirstIndex(tab,element) {
    return tab.indexOf(element)
}
const array = [1, 2, 3, 4, 5, 3];
const element = 6;
const index = findFirstIndex(array, element);
console.log(`Index of the first occurrence of ${element} in the array: ${index}`);