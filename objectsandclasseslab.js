// Task 1

const cat = {
  breed: "Tabby Cat",
  furColor: "Grey",
  eyeColor: "Blue",
  name: "Luna"
};
cat.sound = console.log("meow");
console.log(cat["name"]);
console.log(cat.furColor + " " + cat.breed);

// Task 2

class Person {
  #birthMonth;
  #hairColor;
  constructor(firstName, lastName, birthMonth, hairColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.#birthMonth = birthMonth;
    this.#hairColor = hairColor
  }

  get birthMonth() {
    return this.#birthMonth;
  }

  get hairColor() {
    return this.#hairColor;
  }

  set hairColor(hairColor) {
    this.#hairColor = hairColor;
  }

  set birthMonth(birthMonth) {
    this.#birthMonth = birthMonth;
  }


  speak () {
    return this.firstName + " " + this.lastName + " is speaking.";
  }
}

const personA = new Person("John", "Smith", "March", "Black");
const personB = new Person("Cal", "Thomson", "June", "Red");

console.log(personA.firstName);
console.log(personB.lastName);
console.log(personB.speak());