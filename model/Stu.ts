import {MySqlDB, MsSqlDB, MongoDB} from '../module/dbClass'
class Stu {
  name:string | undefined
  passW:string | undefined
}

let stuMySql = new MySqlDB<Stu>()
let stuMsSql = new MsSqlDB<Stu>()
let stuMongo = new MongoDB<Stu>()

export {Stu, stuMySql, stuMsSql, stuMongo}