// Only change code below this line
class Thermostat{
  constructor(temperature){
    this._temperature = temperature;
  }
    // getter
    get temperature(){
      return (5/9* (this._temperature - 32));
    }
    // setter
    set temperature(updateTemperature){
      this._temperature = (updateTemperature*9.0)/5+32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);