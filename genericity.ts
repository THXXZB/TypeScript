// 泛型：一个组件可以支持多种类型的数据
// 泛型就是解决类、接口和方法的复用性，以及对不特定数据类型的支持

// 泛型函数，eg: 要求传入的参数和返回值保持一致
function getData<T>(value:T):T{
  return value
}
getData<number>(123)
getData<string>('123')



//泛型类， eg: 找出最小值，支持数字和字符串a-z两者类型
class Min<T>{
  list:T[] = []
  add(value:T):void{
    this.list.push(value)
  }
  min():T{
    let min:T = this.list[0]
    for(let i = 1; i < this.list.length; i++) {
      if (this.list[i] < min) {
        min = this.list[i]
      }
    }
    return min
  }
}
let m = new Min<number>()
m.add(33)
m.add(3)
m.add(9)
m.add(2)
console.log(m.min())
let m2 = new Min<string>()
m2.add('ai')
m2.add('ty')
m2.add('ha')
m2.add('ah')
console.log(m2.min())



// 泛型接口一
interface ConfigFn{
  <T>(value:T):T
}
let getData2:ConfigFn = function<T>(value:T):T{
  return value
}
console.log(getData2<string>('tt'))
console.log(getData2(124))
// 泛型接口二
interface ConfigFn2<T>{
  (value:T):T
}
function getData4<T>(value:T):T {
  return value
}
let strGet:ConfigFn2<string> = getData4
let numGet:ConfigFn2<number> = getData4
console.log(strGet('string'))
console.log(numGet(123))



// 把类当做参数的泛型类
// 定义一个类，把类作为参数来约束数据传入的类型
// eg:定义一个User类，用来映射数据库字段，
// 再定义一个mysqlDB的类用来操作数据库
// 把User类作为参数传入到MySqlDB中
class User{
  userName:string | undefined;
  password:number | undefined;
}
class Article{
  title:string | undefined;
  desc:string | undefined;
}
class MySqlDB1<T>{
  // 传入的参数使用User接口，验证传入数据的合法性
  add(info:T):boolean{
    console.log(info)
    return true
  }
}
let u = new User()
u.userName = 'tt'
u.password = 123
let a = new Article()
a.title = 'beautiful flowers'
a.desc = '...'
let db = new MySqlDB1<User>()
db.add(u)
let db2 = new MySqlDB1<Article>()
db2.add(a)



/*
功能：定义一个操作数据库的库， 支持 mysql mssql MongoDB
要求：都有add update delete get方法
注意：约束统一的规范以及代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用所以要用到泛型
1、接口：在面向对象的编程中，接口是一种规范的定义，他定义了行为和动作的规范
2、泛型：解决类、接口和方法的复用性
*/
// 定义操作数据库的接口
interface DBI<T> {
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  get(id:number):any[];
  delete(id:number):boolean;
}
// 定义一个操作mysql数据库的类
class MySqlDb<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info:T):boolean {
    console.log(info)
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
class MsSqlDb<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    throw new Error("Method not implemented.")
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
class MongoDb<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    throw new Error("Method not implemented.")
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

// 操作用户表，定义一个user表和数据库做映射
class Users {
  name:string | undefined
  passW:string | undefined
}
let users = new Users()
users.name = 'tt'
users.passW = '123'

// 使用mysql数据库操作Users表，约束只能传入Users对象
let mySql = new MySqlDb<Users>()
mySql.add(users)
// mySql.add({name:'r', passWs: '123'})  报错

