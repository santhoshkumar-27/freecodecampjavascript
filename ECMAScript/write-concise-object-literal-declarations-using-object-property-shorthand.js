const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name, age, gender
  };
  // Only change code above this line
};

// person
const createPersons = (name, age, gender) => ({name, age, gender});

console.log(createPersons("santhosh", 22, "male"));