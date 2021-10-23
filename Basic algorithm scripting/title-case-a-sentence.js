function titleCase(str) {
  let strWords = str.toLowerCase().split(" ");
  console.log(strWords);
  
  let words = [];
  for(let i=0; i < strWords.length; i++){
    let name = '';
    for(let j=0; j<strWords[i].length; j++){
      if( j === 0){
        name += strWords[i][j].toUpperCase();
      }else{
        name += strWords[i][j];
      }
    }
    if(i !== strWords.length-1){
    name += " ";
    }
    words.push(name);
  }
  // console.log(name);
  // console.log(words.join(""));
  // console.log(strWords.length);
  return words.join("");
}

console.log(titleCase("I'm a little tea pot"));