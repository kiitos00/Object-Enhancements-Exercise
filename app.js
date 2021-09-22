// Same keys and values
// ES 5
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

// ES 2015

function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

// Computed Property Names
// ES5
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// ES2015

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber] : "That is my favorite!"
}


// Object Methods
// ES5
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

// ES2015

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

// createAnimal function
function createAnimal(spices, verb, noise) {
  return {
  spices,
  [verb]() {
    return noise;
  } 
  }
}
