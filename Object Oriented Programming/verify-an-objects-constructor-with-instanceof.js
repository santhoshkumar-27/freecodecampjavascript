function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(3);
console.log(myHouse instanceof House);
console.log(myHouse.numBedrooms);