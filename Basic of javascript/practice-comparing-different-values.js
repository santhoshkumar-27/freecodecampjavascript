// Setup
function compareEquality(a, b) {
  console.log(typeof a, typeof b);
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");