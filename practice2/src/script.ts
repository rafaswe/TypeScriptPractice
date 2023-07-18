interface RactangleOptions {
  width: number;
  height: number;
}

function drawRectangle(options: RactangleOptions) {
  let width = options.width,
    height = options.height;
}

drawRectangle({
  width: 100,
  height: 100,
});

drawRectangle({
  width: 100,
  height: 100,
  // length: 122,
  // As passed direct object.
});

let threeDOptions = {
  width: 100,
  height: 100,
  length: 122,
};
drawRectangle(threeDOptions);
// As we didn't pass those object directly. Thats why it only sees if there is required field or not.

import { IsPlayer } from "./interfecs/IsPlayer.js";

class PlayerInfo implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    public country: string
  ) {}

  getAge(): number {
    return this.age;
  }

  play() {
    console.log(
      this.name + " is playing from " + this.country + " his age is " + this.age
    );
  }
}

// as PlayerInfo implemented Isplayer interface, PlayerInfo theke created object WebGLUniformLocation, Isplayer Interface k support korbe

let sakib: IsPlayer;

sakib = new PlayerInfo("rafa", 23, "Bangla");

// ................................................................

// Generics

//Without Generics
const addID = (obj: object) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user = addID({
  name: "rafa",
  age: 23,
  country: "Bangla",
});
//  user.id
// Although user have name,age and country properties, only is is available hin that way.

//With generics
const addID2 = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user2 = addID2({
  name: "rafa",
  age: 23,
  country: "Bangla",
});
console.log(user2.name);

let user3 = addID2("hello");
console.log(user3);
//all things are accessible there. Here user2 is passing an object and user3 is passsing string, and addID2 is accepting all of them as there is no defined type.

//If we want we will have only object type data. we can do -

const addID3 = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user4 = addID3({
  name: "rafa",
  age: 23,
  country: "Bangla",
});
// let user5 = addID3("hello"); //show error

// if we want our generics type will be interface, We can do that also
interface User {
  name: string;
  age: number;
  country: string;
}
const addID4 = <T extends User>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user6 = addID4({
  name: "rafa",
  age: 23,
  country: "Bangla",
  city: "Dhaka",
});

// Another Example-
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
  // Now data can accept any type of data
}

const response1: APIResponse<object> = {
  status: 200,
  type: "success",
  data: {
    name: "rafa",
    age: 23,
    country: "Bangla",
    city: "Dhaka",
  },
};

const response2: APIResponse<string> = {
  status: 200,
  type: "success",
  data: "hello world",
};

//if we want our generics type  will have certain structure-
const addID5 = <
  T extends {
    name: string;
    age: number;
    country: string;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user7 = addID5({
  name: "rafa",
  age: 23,
  country: "Bangla",
  city: "Dhaka",
});

// ************************************************************************************************************************************************

// ENUMS

enum ResponseType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface ResponseInfo<T> {
  status: number;
  type: ResponseType;
  data: T;
}

const response3: ResponseInfo<object> = {
  status: 200,
  type: ResponseType.SUCCESS,
  // Only shows the index Number
  data: {
    name: "rafa",
    age: 23,
    country: "Bangla",
    city: "Dhaka",
  },
};
console.log(response3);

// ***********************************************************************************************************************************************

//TUPLES- works like array.

let a = [3, "hello", { p: "hello" }];
// here, typeScript assumed that array will have number, string and object type value. It has no boundaries about positions

// But if we want to concern about position also, we can use tupples.

let b: [number, string, object] = [3, "hello", { p: "hello" }];

// let b: [number, string, object] = ["hello", 3, { p: "hello" }];
