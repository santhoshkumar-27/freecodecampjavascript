function largestOfFour(arr) {
  
  let maxArray = [];
  for(let i= 0; i < arr.length; i++){
    let maxNumber= -9999;
    for(let j= 0; j< arr[i].length; j++){
      if(arr[i][j] > maxNumber){
        maxNumber = arr[i][j];
      }
    }
    maxArray.push(maxNumber);
  }
  return maxArray;
}

let four = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(four);