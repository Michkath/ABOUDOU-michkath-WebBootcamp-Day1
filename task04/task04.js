function  getRandomNumber(min, max) {
    if (min  > max){
        throw "Too less";
    }
    min = min + 1;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

const min = 10;
const max = 5;
const randomNumber = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);