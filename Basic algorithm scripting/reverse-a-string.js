function reverseString(str) {
  let reverseletter = '';
  for(let i= str.length-1 ; i >= 0; i--){
    reverseletter += str[i];
  }
  return reverseletter;
}

console.log(reverseString("hello"));