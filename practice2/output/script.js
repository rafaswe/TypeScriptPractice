function drawRectangle(options) {
    let width = options.width, height = options.height;
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
class PlayerInfo {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(this.name + " is playing from " + this.country + " his age is " + this.age);
    }
}
// as PlayerInfo implemented Isplayer interface, PlayerInfo theke created object WebGLUniformLocation, Isplayer Interface k support korbe
let sakib;
sakib = new PlayerInfo("rafa", 23, "Bangla");
// ................................................................
// Generics
//Without Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "rafa",
    age: 23,
    country: "Bangla",
});
//  user.id
// Although user have name,age and country properties, only is is available hin that way.
//With generics
const addID2 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
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
const addID3 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user4 = addID3({
    name: "rafa",
    age: 23,
    country: "Bangla",
});
const addID4 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user6 = addID4({
    name: "rafa",
    age: 23,
    country: "Bangla",
    city: "Dhaka",
});
const response1 = {
    status: 200,
    type: "success",
    data: {
        name: "rafa",
        age: 23,
        country: "Bangla",
        city: "Dhaka",
    },
};
const response2 = {
    status: 200,
    type: "success",
    data: "hello world",
};
//if we want our generics type  will have certain structure-
const addID5 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user7 = addID5({
    name: "rafa",
    age: 23,
    country: "Bangla",
    city: "Dhaka",
});
// ************************************************************************************************************************************************
// ENUMS
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
const response3 = {
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
let b = [3, "hello", { p: "hello" }];
export {};
// let b: [number, string, object] = ["hello", 3, { p: "hello" }];
