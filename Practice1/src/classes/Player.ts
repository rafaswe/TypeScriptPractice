export class PlayersModule {
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
