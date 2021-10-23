function booWho(bool) {
  if(true === bool || false === bool){
    return true;
  }
  return false;
}

console.log(booWho(null));