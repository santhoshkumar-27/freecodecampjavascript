function Dog(name) {
  this.name = name;
}

// Only change code below this line
let beagle = new Dog("shaddy")
console.log(joinDogFraternity(beagle))
function joinDogFraternity(candidate){
  if(candidate.constructor === Dog){
    return true;
  }else{
  return false;
  }
  
}