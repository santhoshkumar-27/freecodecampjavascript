function frankenSplice(arr1, arr2, n) {
  let name = arr2.slice(0);

  for(let i=0; i< arr1.length; i++){
   name.splice(n,0, arr1[i]);
   n++;
  }
  return name;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));