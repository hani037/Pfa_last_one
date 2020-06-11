export class User {
  constructor(
    public id: string,
    private tokenn: string,
    public email:string,
  ) {}

  get token() {
    return this.tokenn;
  }

}
