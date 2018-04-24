
import {IDatabase} from "../interfaces/IDatabase";

export class MySqlDatabase implements IDatabase {
export class MySqlDatabase {

  public connect() : void {
    console.log("MySqldatabase is connected");
  }
  public disconnect() : void {
    console.log("MySqldatabase is disconnected");
  }
}
