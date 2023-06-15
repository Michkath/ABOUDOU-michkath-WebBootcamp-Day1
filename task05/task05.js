function  isPalindrome(string) {
    let str = string.toLowerCase(string);
    let dest = str.replace(/[\W_]/g, ''); 
				
  if( dest == dest.split('').reverse().join('')){
    return true;
   }else {
    return false;
   }
}