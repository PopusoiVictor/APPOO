import {IDatabase} from "../interfaces/IDatabase";

export class DataBasehandler {
  private database : IDatabase
  constructor(database : IDatabase) {
    this.database = database;
  }
  public DataBasehandler(database : IDatabase) {
    this.database = database;
  }
  public connect() : void {
    this
      .database
      .connect();
  }
  public disconnect() : void {
    this
      .database
      .disconnect();
  }
}