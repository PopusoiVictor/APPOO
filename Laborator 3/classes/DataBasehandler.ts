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
      .mySqlDatabase
      .disconnect();
  }
}