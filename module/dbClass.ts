// 定义操作数据库的接口
interface DBI<T> {
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  get(id:number):any[];
  delete(id:number):boolean;
}
// 定义一个操作mysql数据库的类
class MySqlDB<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info:T):boolean {
    console.log('mysql', info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.")
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.")
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.")
  }
}
// 定义一个操作mssql数据库的类
class MsSqlDB<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    console.log('mssql', info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.")
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.")
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.")
  }
}
// 定义一个操作MongoDB数据库的类
class MongoDB<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    console.log('mongo', info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.")
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.")
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.")
  }
}
export {MySqlDB, MsSqlDB, MongoDB}