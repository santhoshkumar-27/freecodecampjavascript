function truncateString(str, num) {
  let name = str.slice(0,num);
 
  if(str.length > num){
    name += '...';
  }   
  return name;
}

let late = truncateString("A-tisket a-tasket A green and yellow basket", 8);
 
console.log(late);