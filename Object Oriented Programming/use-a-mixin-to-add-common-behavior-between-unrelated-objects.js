let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("Woof, we are glide");
  }
}
glideMixin(bird);
glideMixin(boat);
boat.glide();
bird.glide();