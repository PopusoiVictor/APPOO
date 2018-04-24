export class User {
  public email : string
  public level : string
  public status : string
  public signed_in : number
  public settings : any
  constructor(email : string) {
    this.email = email;
  }
  public initialize(email : string) {
    this.email = email
  }
}