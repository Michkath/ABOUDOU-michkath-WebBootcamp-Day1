function  isLeapYear(years) {
let a = years % 4;
if(a == 0){
    return true 
}else{
    return false
}
}
const year = 1902;
const isLeap = isLeapYear(year);
console.log(`Is ${year} a leap year? ${isLeap}`);