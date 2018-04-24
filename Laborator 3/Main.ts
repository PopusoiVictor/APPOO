import {DataBasehandler} from "./classes/DataBasehandler";
import {MySqlDatabase} from "./classes/MySqlDatabase";
import {Administrator} from "./admin/Administrator";
import {User} from "./user/User";

const dataBasehandler : DataBasehandler = new DataBasehandler();
const user : User = new User("user@test.com");
const admin : Administrator = new Administrator("admin@test.com");
const today = new Date()

user.settings = {
  level: "Low Security",
  status: "Live",
  signed_in: today.getDate()
}
admin.settings = [
  "Editor", "VIP", today.getDate()
]
const user_database = [user, admin]

dataBasehandler.connect();
user_database.forEach(function (user) {
  if (user.settings.signed_in == today.getDate()) {
    console.log(`${user.email}` + " signed in today, with status " + `${user.status}` + " and level " + `${user.level}`)
  }
});
dataBasehandler.disconnect();