function findLongestWordLength(str) {
  let splits = str.split(' ');
  let maxLength = 0;
  // console.log(splits.length);
  for( let i = 0; i < splits.length; i++){
    // console.log(splits[i])
    if( splits[i].length > maxLength){
    // console.log(splits[i])
    maxLength = splits[i].length
    }  
  }
  // console.log(maxLength);
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");