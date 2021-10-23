function confirmEnding(str, target) {
  if(str.slice(str.length-target.length)=== target){
    console.log(str.slice(str.length-target.length))
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");