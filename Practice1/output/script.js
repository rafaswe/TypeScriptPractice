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
let a;
let b;
a = "apple";
// a = 10;
b = 10;
// b = "a";
//Array
let value = [];
value.push("apple");
// value.push(12);
// Union
let variable;
variable = 10;
// For array
let arrayVarriable = [];
arrayVarriable.push(10);
arrayVarriable.push("a");
console.log(arrayVarriable);
//Object
let objectVariable;
objectVariable = {
    name: "John",
    age: 24,
    isCaptain: true,
};
//In javaScript, Array is considered as Object type. If we don't give any structure, we can assign array, in a object declared variable.
let arrayTypeObjectVariable;
arrayTypeObjectVariable = [10, "a"];
// when we want to follow specific structure
let c;
c = {
    name: "John",
    age: 24,
    isCaptain: true,
};
// c = [];
//Any type
let anyTypeVariable;
anyTypeVariable = 10;
anyTypeVariable = "a";
//array
let arrayAnyTypeVariable;
arrayAnyTypeVariable = [10, "a"];
// object
let objectAnyType;
objectAnyType = {
    name: "John",
    age: 24,
};
//Function Type
let myFunc;
myFunc = () => {
    console.log("Hello World");
};
myFunc();
// myFunc = 5;
// Function parameter
const parameterisedFunction = (a, b) => {
    console.log("hello " + a + " and " + b);
};
parameterisedFunction("rafa", "tanvirul");
// Oprional Perameter
const parameterisedFunction2 = (a, b, c) => {
    console.log("hello " + a + " and " + b);
};
parameterisedFunction2("rafa", "tanvirul");
// default value set
const parameterisedFunction3 = (a, b = "default") => {
    console.log("hello " + a + " and " + b);
};
parameterisedFunction3("rafa");
// Define Return Typen
const parameterisedFunction4 = (a, b) => {
    return a + " " + b;
};
console.log(parameterisedFunction4("rafa", "tanvirul"));
const userDetails = (id, user) => {
    console.log(id);
    console.log(user.name);
};
//Function Signature
let add;
add = (x, y) => {
    return x + y;
};
console.log(add(10, 20));
let calculation;
calculation = (x, y, z) => {
    if (z === "add")
        return x + y;
    else
        return x - y;
};
console.log(calculation(10, 2, "substract"));
let userDetailsInfo;
userDetailsInfo = (id, userInfo
// user k replace kora jabe. kintu vitorer property er nam change kora jabe na
) => {
    console.log(id);
    console.log(userInfo.name);
};
//Classes- Blue-print of the object
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(this.name + " is playing from " + this.country + " his age is " + this.age);
    }
}
//Creating Object
const mashrafi = new Player("Mashrafi", 23, "Bangladesh");
const sakib = new Player("Sakib", 20, "Bangladesh");
// Every properties is accessible from the outside of the class. We can get value and modify them .As they are defined as public by default
console.log(sakib.name);
//here, for every created object, their type will be there class. Class can be work like type. Here we created an Array which will have player type of objects.
const players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
// players.push("sakib)";
//Access Modifier
//* Public - By default
class PlayerInfo {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(this.name + " is playing from " + this.country + " his age is " + this.age);
    }
}
// * Private
class PlayerInfo2 {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(this.name + " is playing from " + this.country + " his age is " + this.age);
    }
}
const playerIntro = new PlayerInfo2("player", 23, "Uruguya");
// console.log(playerIntro.name);
console.log(playerIntro.play);
// * readonly
class PlayerInfo3 {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(this.name + " is playing from " + this.country + " his age is " + this.age);
    }
}
const playerIntro2 = new PlayerInfo3("player", 23, "Uruguya");
console.log(playerIntro2.name);
// jodi properties er access modifier gulo specific vabe bole dewa jay, tahole evabe likhleo chole-
class PlayersInfo {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // evabe korle this.name, evabe set kora lage na.
    play() {
        console.log(this.name + " is playing from " + this.country + " his age is " + this.age);
    }
}
// Import and export use-
const playerModule = new PlayersModule("rafa", 25, "Dhaka");
console.log(playerModule.age);
