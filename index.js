var isPalindrome = function(x) {
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) 
  {
   console.log(i,rev,rev*10,i%10) 
   rev = rev*10 + i%10
  }
  return rev === x
}
console.log(isPalindrome(12021)) //-> true
console.log(isPalindrome(012021)) //-> false