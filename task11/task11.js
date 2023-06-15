function  sortByProperty(object,str) {
   return object.sort(function(a, b){return a[str] - b[str]}); 
}
const persons = [
    { name: "John", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Bob", age: 18 },
  ];