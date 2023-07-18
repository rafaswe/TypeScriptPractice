// practice 1
// console.log("hello world!");
// const country = "I love my Bangladesh";
// console.log(country);

import { PlayersModule } from "./classes/Player.js";

// ----------------------------------------------------------------

// practice 2
// let playerName = "Mashrafi";
// console.log(playerName);

// playerName = 24;
// console.log(playerName);

// ----------------------------------------------------------------

// practice 3
// let playerName;
// console.log(playerName);

// playerName = "Mashrafi";

// console.log(playerName);

// playerName = 24;

// console.log(playerName);

// ----------------------------------------------------------------

// practice 4
// function multiply(x: number, y: number): number {
//   return x * y;
// }

// console.log(multiply(2, 3));

// ----------------------------------------------------------------

// Array
// Practice 5

// let fruits = ["apple", "orange", "banana"];

// // fruits.push(34)

// // will show error. as declare and define in one line.

// // practice 6
// let fruit = [];
// fruit.push(23);
// fruit.push("pinapple");

// // practice 7
// let mixed = ["apple", 3, true];

// // mixed.push({
// //     name: "Mashrafi",
// //     age: 24,
// // })

// Object
// Practice 8

let person = {
  name: "John",
  age: 24,
  isCaptain: true,
};

// Explicit declaration
let a: string;
let b: number;

a = "apple";
// a = 10;

b = 10;
// b = "a";

//Array

let value: string[] = [];
value.push("apple");
// value.push(12);

// Union
let variable: number | string;
variable = 10;

// For array
let arrayVarriable: (number | string)[] = [];
arrayVarriable.push(10);
arrayVarriable.push("a");
console.log(arrayVarriable);

//Object

let objectVariable: object;

objectVariable = {
  name: "John",
  age: 24,
  isCaptain: true,
};

//In javaScript, Array is considered as Object type. If we don't give any structure, we can assign array, in a object declared variable.

let arrayTypeObjectVariable: object;
arrayTypeObjectVariable = [10, "a"];

// when we want to follow specific structure
let c: {
  name: string;
  age: number;
  isCaptain: boolean;
};
c = {
  name: "John",
  age: 24,
  isCaptain: true,
};
// c = [];

//Any type
let anyTypeVariable: any;
anyTypeVariable = 10;
anyTypeVariable = "a";

//array
let arrayAnyTypeVariable: any[];
arrayAnyTypeVariable = [10, "a"];

// object
let objectAnyType: {
  name: any;
  age: any;
};
objectAnyType = {
  name: "John",
  age: 24,
};

//Function Type

let myFunc: Function;

myFunc = () => {
  console.log("Hello World");
};

myFunc();

// myFunc = 5;

// Function parameter
const parameterisedFunction = (a: string, b: string) => {
  console.log("hello " + a + " and " + b);
};

parameterisedFunction("rafa", "tanvirul");

// Oprional Perameter
const parameterisedFunction2 = (a: string, b: string, c?: string) => {
  console.log("hello " + a + " and " + b);
};

parameterisedFunction2("rafa", "tanvirul");

// default value set
const parameterisedFunction3 = (a: string, b: string = "default") => {
  console.log("hello " + a + " and " + b);
};

parameterisedFunction3("rafa");

// Define Return Typen
const parameterisedFunction4 = (a: string, b: string): string => {
  return a + " " + b;
};

console.log(parameterisedFunction4("rafa", "tanvirul"));

// Type Alias

type stringOrNumber = string | number;
type userType = {
  name: string;
  age: number;
  isCaptain: boolean;
};

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(id);
  console.log(user.name);
};

//Function Signature

let add: (a: number, b: number) => number;

add = (x: number, y: number) => {
  return x + y;
};

console.log(add(10, 20));

let calculation: (a: number, b: number, c: string) => number;

calculation = (x: number, y: number, z: string) => {
  if (z === "add") return x + y;
  else return x - y;
};

console.log(calculation(10, 2, "substract"));

let userDetailsInfo: (
  id: number | string,
  user: {
    name: string;
    age: number;
  }
) => void;

userDetailsInfo = (
  id: number | string,
  userInfo: { name: string; age: number }
  // user k replace kora jabe. kintu vitorer property er nam change kora jabe na
) => {
  console.log(id);
  console.log(userInfo.name);
};

//Classes- Blue-print of the object
class Player {
  //properties- here, also we can assign the type
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      this.name + " is playing from " + this.country + " his age is " + this.age
    );
  }
}

//Creating Object
const mashrafi = new Player("Mashrafi", 23, "Bangladesh");
const sakib = new Player("Sakib", 20, "Bangladesh");
// Every properties is accessible from the outside of the class. We can get value and modify them .As they are defined as public by default
console.log(sakib.name);

//here, for every created object, their type will be there class. Class can be work like type. Here we created an Array which will have player type of objects.

const players: Player[] = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
// players.push("sakib)";

//Access Modifier
//* Public - By default
class PlayerInfo {
  // By dafault Public e thake.
  public name: string;
  public age: number;
  public country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      this.name + " is playing from " + this.country + " his age is " + this.age
    );
  }
}

// * Private
class PlayerInfo2 {
  // Cannot be accessed directly from outside of this class
  private name: string;
  private age: number;
  private country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      this.name + " is playing from " + this.country + " his age is " + this.age
    );
  }
}

const playerIntro = new PlayerInfo2("player", 23, "Uruguya");

// console.log(playerIntro.name);
console.log(playerIntro.play);

// * readonly
class PlayerInfo3 {
  //Access kora jabe but modify kora jabe na.
  readonly name: string;
  readonly age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      this.name + " is playing from " + this.country + " his age is " + this.age
    );
  }
}

const playerIntro2 = new PlayerInfo3("player", 23, "Uruguya");

console.log(playerIntro2.name);

// jodi properties er access modifier gulo specific vabe bole dewa jay, tahole evabe likhleo chole-

class PlayersInfo {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  // evabe korle this.name, evabe set kora lage na.

  play() {
    console.log(
      this.name + " is playing from " + this.country + " his age is " + this.age
    );
  }
}

// Import and export use-
const playerModule = new PlayersModule("rafa", 25, "Dhaka");
console.log(playerModule.age);
