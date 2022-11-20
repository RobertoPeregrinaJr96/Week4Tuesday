// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  breathesFire () {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...Dragon) {
    return Dragon.map(ele => ele.name)
  }

}

const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());
// -----------------------
const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());
//----------------------
const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

// try {
//   module.exports = Dragon;
// } catch {
//   module.exports = null;
// }


/*
//!!START
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  // This static method on the Dragon class that will accept any number of
  // instances of that class as parameters, using the rest parameter,
  // which will accept any number of parameters passed to the function and store
  // them in an array. The method maps through that array and returns an new
  // array of just the names of each instance passed into the method.  (Remember
  // when you call this method you have to call it on the class, not an
  // instance of the class)
  static getDragons(...dragons) {
    return dragons.map((dragon) => dragon.name);
  }
}
//!!END

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
/*
try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}

*/
