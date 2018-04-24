export class User {
  public email : string
  public _status : string
  public _level : string
  public _signed_in : number
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
  public set status(status : string) {
    this._status = status;
  }
  public set level(level : string) {
    this._level = level;
  }
  public set signed_in(signed_in : number) {
    this._signed_in = signed_in;
  }
  public get status() : string {return this._status;}
  public get level() : string {return this._level;}
  public get signed_in() : number {return this._signed_in;}
}