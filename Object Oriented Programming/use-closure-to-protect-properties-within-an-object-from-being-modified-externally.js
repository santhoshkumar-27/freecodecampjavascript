function Bird() {
  // this.weight = 15;
  let weight = 15;

  this.getWeight = function(){
    return weight;
  }
}

let egg = new Bird();
// console.log(egg.weight);
// egg.weight = 23;
// console.log(egg.weight);
console.log(egg.getWeight())