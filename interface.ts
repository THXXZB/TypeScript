// 接口：定义行为和动作规范
// 属性类接口、函数类型接口、可索引接口、类类型接口、接口扩展



// 属性接口：对json的约束
// 对象指定的某个方法进行参数约束
// function printLabel1(label:string):void {
//   console.log(`print ${label}`)
// }
// // printLabel(123)

// // 对指定的类进行约束
// function printLabel2(labelInfo:{label: string}):void {
//   console.log(`print ${labelInfo.label}`)
// }
// // printLabel2({name: 'tt'})
// printLabel2({label: 'ttLabel'})


// 接口：行为和动作规范，对批量方法进行约束
interface FullName{  //传入对象的约束 属性接口
  firstName:string;
  secondName:string;
}
function printName(name:FullName) {
  // 要求传入的对象包含且仅包含firstName和secondName的对象
  console.log(name.firstName, name.secondName)
}
function printInfo(name:FullName) {
  // 要求传入的对象包含且仅包含firstName和secondName的对象
  console.log('Info is ' + name.firstName + name.secondName)
}
let person = {
  firstName: 't',
  secondName: 'hx'
}
printName(person)
printInfo(person)



// 接口：可选属性
interface FullName2{
  firstName:string;
  secondName?:string;
}
function getName(name:FullName2) {
  console.log(name)
}
getName({firstName: 'T'})
//下面用ajax请求演示
/*
$.ajax({
  type：'GET',
  url: 'test.json',
  data: {username:$('#username').val(), content:$('#content').val()},
  dataType:'json'
})
*/
interface Config{
  type:string;
  url:string;
  data?:string;
  dataType:string;
}
function ajax(config:Config) {
  let xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('success')
      if (config.dataType === 'json') {
        console.log(JSON.parse(xhr.responseText))
      } else {
        console.log(xhr.responseText)
      }
    }
  }
}
ajax({
  type: 'get',
  data: 'name:user',
  url: 'http://a.itying.com/api/productlist',
  dataType: 'json'
})



// 函数类型接口：对方法传入的参数以及返回值进行约束
// 举个栗子：加密函数
interface encrypt{
  (key:string, value:string):string;
}
let md5:encrypt = function(key:string, value:string):string {
  // 模拟操作
  return key + value
}
console.log(md5('name', '123'))



// 可索引接口：对数组、对象的约束（不常用）
// ts定义数组的方式
interface UserArr{
  [index:number]:string
}
let array2:UserArr = ['1', 'b']
console.log(array2[0])
// 对对象的约束
interface UserObj{
  [index:string]:string
}
let obj:UserObj = {name: 'thx'}



// 类类型接口：对类的约束，与抽象类有点相似
interface People{
  name:string;
  age:number;
  run(str:string):void;
}
class Students implements People{
  name:string;
  age:number;
  constructor(name:string, age:number) {
    this.name = name
    this.age = age
  }
  run() {
    console.log(this.name + 'is running')
  }
}
let stud = new Students('小黑',7)
stud.run()



// 接口扩展：接口可以继承接口
interface Animals{
  eat():void;
}
interface Per extends Animals{
  work():void;
}
class Programmer{
  public workName:string
  constructor(name:string){
    this.workName = name
  }
  coding(code:string) {
    console.log(this.workName + code)
  }
}
class Yami extends Programmer implements Per{
  constructor(name:string) {
    super(name)
  }
  eat() {
    console.log(this.workName + 'is eating')
  }
  work() {
    console.log(this.workName + 'is working')
  }
}
let mi = new Yami('minor')
mi.work()
mi.coding(' is codding for ts')

