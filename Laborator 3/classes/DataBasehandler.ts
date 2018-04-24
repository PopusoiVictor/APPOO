
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
import {MySqlDatabase} from '../classes/MySqlDatabase'

export class DataBasehandler {
  private mySqlDatabase : MySqlDatabase
  public DataBasehandler() {
    this.mySqlDatabase = new MySqlDatabase()
  }
  public connect() : void {
    this
      .mySqlDatabase
      .connect();
  }
  public disconnect() : void {
    this
      .database
      .mySqlDatabase
      .disconnect();
  }
}