// 类的定义
class Person{
  name:string  //属性，前面省略了public关键词
  constructor(n:string) { 
    // 构造函数，实例化类的时候触发该方法，将参数传给构造函数后赋值  
    this.name = n
  }
  getName():string {
    return this.name
  }
  setName(name:string):void{
    this.name = name
  }
}
let t = new Person('tt')
console.log(t.getName())
t.setName('hh')
console.log(t.getName())



// 实现继承 extends、 super
class Person2{
  name:string
  constructor(name:string) {
    this.name = name
  }
  run():string {
    return `${this.name}在运动`
  }
}
let t2 = new Person2('oo')
console.log(t2.run())

class Student extends Person2 { }
let stu = new Student('ll')
console.log(stu.run())

class Teacher extends Person2 {
  constructor(name:string) {
    super(name)
  }
  run():string{
    return this.name + '不想运动'
  }
  work():void{
    console.log(this.name + '在工作')
  }
}
let tea = new Teacher('Tom')
console.log(tea.run())
tea.work()
console.log(tea.name)  // 默认公有，外部可访问



// 类的修饰符  类定义属性时用的修饰符
// public公有:  类里面、子类和类外面皆可以访问
// protected保护：类里面和子类可访问，类外面无法访问
// private私有：类里面可以访问，子类和类外部无法访问
// 不加修饰符，默认是public
class Person3 {
  protected name:string
  constructor(name:string) {
    this.name = name
  }
  run():string {
    return `${this.name}在运动`
  }
}
class Teacher3 extends Person3 {
  constructor(name:string) {
    super(name)
  }
  work():void {
    // 子类中可访问
    console.log(this.name + '有很多工作')
  }
}
let tea2 = new Teacher3('Lisa')
// console.log(tea2.name) 报错
tea2.work()

class Person4 {
  private name:string
  constructor(name:string) {
    this.name = name
  }
  run():string {
    // 类里面可以访问
    return `${this.name}在运动`
  }
}
class Teacher4 extends Person4 {
  constructor(name:string) {
    super(name)
  }
  work():void {
    // 子类中无法访问
    // console.log(this.name + '有很多工作')
  }
}
let tea3 = new Teacher4('Lisa')
// console.log(tea3.name)  //报错



// 静态属性 静态方法
// es5中, 实例方法和静态方法的名字可以一样
// function Animal() {
//   // 实例方法
//   this.run = function() {}
// }
// // 静态方法
// Animal.run = function() {}
// // 调用实例方法需要先实例化
// let a = new Animal()
// a.run()
// Animal.run()

class Animal {
  public name:string
  static sex:string = 'male'
  constructor(name:string) {
    this.name = name
  }
  run() {
    console.log(`${this.name} is running`)
  }
  eat() {
    console.log(`${this.name} is eating`)
  }
  static sexInfo() {
    // 只能调用静态属性
    // console.log(`${this.name} is playing ball`) 报错
    console.log('静态方法' + this.sex)
  }
}
let dog = new Animal('Jee')
dog.eat()  // 实例方法
Animal.sexInfo()  // 静态方法



// 多态：父类定义一个方法不去实现，让子类去实现，每个子类都有不同的表现
// 多态也是继承的一种表现
class Animal2 {
  public name:string
  constructor(name:string) {
    this.name = name
  }
  run() {
    console.log(`${this.name} is running`)
  }
  // 多态
  eat() {
    // 不清楚具体吃啥，让继承的子类去实现
    console.log('吃啥捏？')
  }
}
class Dog extends Animal2{
  // constructor(name:string) {
  //   super(name)
  // }
  eat() {
    console.log(`${this.name} 吃骨头`)
  }
}
class Cat extends Animal2{
  constructor(name:string) {
    super(name)
  }
  eat() {
    console.log(`${this.name} 吃鱼`)
  }
}
let d = new Dog('momo')
d.eat()
let c = new Cat('yuyu')
c.eat()



// 抽象类：提供给其他类继承的基类，不能直接被实例化
// 用abstract定义抽象类和抽象方法
// 抽象类中抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法必须放在抽象类中
abstract class Animal3 {
  public name:string
  constructor(name:string) {
    this.name = name
  }
  run() {
    console.log(`running`)
  }
  // 抽象方法
  abstract eat():any; 
}
// let ani = new Animal3()  无法实例化
class Dog2 extends Animal3 {
  // 必须实现抽象类中的抽象方法，即必须实现eat方法
  eat() {
    console.log(`${this.name}喜欢吃骨头棒子`)
  }
}
let dog2 = new Dog2('maka')
dog2.eat()


