function  getRandomNumber(min, max) {
    if (min  > max){
        throw "Too less";
    }
    min = min + 1;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }