function factorialize(num) {
  let num1 =1;
  if(num === 0){
    return 1;
  }else{
    num1 = factorialize(num-1)* num;
  }
  return num1;
}

console.log(factorialize(5));