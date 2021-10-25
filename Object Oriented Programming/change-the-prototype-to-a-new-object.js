function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("mew mew mew")
  },
  describe: function(){
    return "My name is " + this.name
  }
};

let beagle = new Dog("beagle");
console.log(beagle.describe());