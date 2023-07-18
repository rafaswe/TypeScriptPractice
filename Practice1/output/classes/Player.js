export class PlayersModule {
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
