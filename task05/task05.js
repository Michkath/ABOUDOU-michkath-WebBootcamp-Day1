function  isPalindrome(string) {
    let str = string.toLowerCase(string);
    let dest = str.replace(/[\W_]/g, ''); 
				
  if( dest == dest.split('').reverse().join('')){
    return true;
   }else {
    return false;
   }
}

const str = "A man, a plan, a canal: Panama";
const isPalindromeString = isPalindrome(str);
console.log(`Is "${str}" a palindrome? ${isPalindromeString}`);