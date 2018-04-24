import {IDatabase} from "../interfaces/IDatabase";

export class OracleDatabase implements IDatabase {
  public connect() : void {
    console.log("Oracledatabase is connecting");
  }
  public disconnect() : void {
    console.log("Oracledatabase is disconnected");
  }
}
