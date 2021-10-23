// function countdown(n){
//     if(n > 10){
//         return []
//     }else{
//         const con = countdown(n+1);
//         con.push(n);
//         return con;
//     }
// }
// console.log(countdown(1));

// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));
  
// function countdown(n){
//     if(n < 1){
//         return []
//     }else{
//         const con = countdown(n-1);
//         con.unshift(n);
//         return con;
//     }
// }
// console.log(countdown(10));

function rangeOfNumbers(startNum, endNum){
    if(endNum < startNum){
    return[];
    }else{
        const con = rangeOfNumbers(startNum, endNum-1);
        con.push(endNum);
        return con;
    }
    
}

// console.log(rangeOfNumbers(1,5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(1,8));
// console.log(rangeOfNumbers(4,4));