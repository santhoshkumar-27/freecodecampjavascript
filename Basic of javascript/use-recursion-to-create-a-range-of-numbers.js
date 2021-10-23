function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
    return[];
    }else{
        const con = rangeOfNumbers(startNum, endNum-1);
        con.push(endNum);
        return con;
    }
};