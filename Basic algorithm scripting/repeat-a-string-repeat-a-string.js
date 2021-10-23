function repeatStringNumTimes(str, num) {
  let stringName = "";
  for(let i=0; i<num ; i++){
    stringName += str;
  }
  return stringName;
}

let name= repeatStringNumTimes("abc", 3);
console.log(name);