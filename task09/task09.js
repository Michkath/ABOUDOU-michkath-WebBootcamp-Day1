function  capitalizeWords(str) {
    const arr = str.split(" ");
    let a = arr.length;
    var filtre = /[\W_]/g;

   for (let i = 0; i < a;i++){
    if (filtre.test(arr[i])){
        throw "error"
      }
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
const sentence = "the quick brown fox";
const capitalizedSentence = capitalizeWords(sentence);
console.log(`Capitalized sentence: ${capitalizedSentence}`);