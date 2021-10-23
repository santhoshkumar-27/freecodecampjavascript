function checkObj(obj, checkProp) {
  // Only change code below this line
  var idea;
  if (obj.hasOwnProperty(checkProp)){
    idea = obj[checkProp];
  }else{
    return "Not Found";
  }
  return idea;
  // Only change code above this line
}