/*
  装饰器：一种特殊类型的声明，能够被附加到类声明，方法，属性或参数上
  可以修改类的行为
  通俗理解装饰器就是一个方法，可以注入到类、方法和属性参数上来扩展类、属性、方法和参数的功能
  常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器
  装饰器的写法：普通装饰器(无法传参)，装饰器工厂(可传参)
  装饰器已经是es7的标准特性之一
*/

// 类装饰器：在类声明之前被声明(紧接着类声明)，类装饰器应用于类构造函数
// 可以用来监听，修改或替换类定义

// 类装饰器：在不修改HTTPClient的前提下，动态扩展类的属性和方法
function logClass(params:any) {
  // params就是当前类，此处是HttpClient
  // 静态成员，params相当于构造函数
  console.log(params, params.prototype)
  params.prototype.apiUrl = '动态扩展的属性'
  console.log(params, params.prototype)
}
@logClass   // 普通装饰器，无法传参，参数默认是当前的类（注意不要加分号）
class HttpClient {
  constructor() {
    console.log('constructor')
  }
  getData() {
    console.log('httpClient getData')
  }
}
let http:any = new HttpClient()
http.getData()
console.log(http.apiUrl)

// 装饰器工厂（可传参）
function logClass2(params:string) {
  return (target:any) => {
    // target为当前类
    console.log(target)
    console.log(params)
    target.prototype.apiUrl = params
  }
}
@logClass2('httpClient2')
class HttpClient2 {
  constructor() {

  }
  getData() {

  }
}
let http2:any = new HttpClient2()
console.log('url------', http2.apiUrl)


// 类装饰器：重载构造函数
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
// 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
function logClass3(target:any) {
  // target当前类
  console.log(target)
  return class extends target {
    // 此处相当于target.prototype 原型
    apiUrl:string = '修改后的apiUrl'
    url:string = 'url--'
    getData() {   //getData方法也要重载
      console.log(this.apiUrl + '***', this.url)
    }
  }
}
// 属性装饰器:运行时当做函数调用，传入两个参数：
// 第一个参数：对于静态成员来说是类的构造函数，对于实例成员来说是原型对象
// 第二个参数：成员的名字,紧接着属性装饰器后面的属性
function logProperty(param: any) {
  return (target:any, attr:any) => {
    console.log('target == 原型prototype',target)
    console.log('attr ', attr)
    console.log('param ',param)
    target[attr] = param
  }
}
// @logClass3
class HttpClient3 {
  @logProperty('http://www.baidu.com')
  public url:string | undefined
  public apiUrl:string | undefined
  constructor() {
    this.apiUrl = '原构造函数中的apiUrl'
  }
  getData() {
    console.log(this.apiUrl, this.url, '**')
  }
}
let http3 = new HttpClient3()
http3.getData()



// 方法装饰器：应用于方法的属性描述符，用来监视，修改或替换方法定义
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是原型对象
// 参数2：成员的名字
// 参数3：成员的属性描述符

function get(params:any) {
  return (target:any, methodName:any, desc:any) => {
    // target => 原型对象
    console.log(target, methodName, desc, params)
    // 扩展属性和方法
    target.apiUrl = '修改后的apiUrl'
    target.url = 'xxx'
    target.run = () => {console.log('run')}
    // 修改装饰的方法,将getData传入的参数都改为string类型
    console.log(desc.value)
    let oldMethod = desc.value
    desc.value = function(...args:any[]) {
      // args收入所有的参数
      args = args.map(value => {
        // 将所有参数修改为string类型
        return String(value)
      })
      // console.log(args)
      oldMethod.apply(this, args)
    }
  }
}
class HttpClient4 {
  public apiUrl:string | undefined
  constructor() {
    this.apiUrl = '原构造函数中的apiUrl'
  }
  @get('www.method.com')
  getData(...args:any[]) {
    console.log('传入的数据', args)
    console.log('原函数输出')
  }
}
let http4:any = new HttpClient4()
console.log(http4.url, http4.apiUrl)
http4.run()
http4.getData(123,'adg',true)
console.log(http4.getData)



// 方法参数装饰器
// 参数方法装饰器运行时当做函数调用，参数装饰器可以为类原型增加一些元素数据
// 参数1：静态成员->类的构造函数，实例成员->类的原型对象
// 参数2：方法的名字
// 参数3：参数在函数列表中的索引
function logParams(param:any) {
  return (target:any, methodName:any, paramIndex:any) => {
    console.log('params', param)
    console.log('paramTarget', target)
    console.log('methodName', methodName)
    console.log('paramIndex', paramIndex)
    target.url = param
  }
}
class HttpClient5 {
  public url:string | undefined
  constructor() {

  }
  getData(@logParams('uuid') uid:any, u:any|undefined) {
    console.log('参数装饰器', uid, u, this.url)
  }
}
let http5 = new HttpClient5()
// 先执行装饰器再执行getData中的代码
http5.getData(123, 1)




// 装饰器的执行顺序：从后往前
// 属性 > 方法 > 参数 > 类

function logClasses1(param?:string) {
  return (target:any) => {
    console.log('类装饰器1')
  }
}
function logClasses2(param?:string) {
  return (target:any) => {
    console.log('类装饰器2')
  }
}
function logParam(param?:string) {
  return (target:any, attr:any) => {
    console.log('属性装饰器')
  }
}
function logMethod(param?:string) {
  return (target:any, methodName:any, desc:any) => {
    console.log('方法装饰器')
  }
}
function logParam1(param?:string) {
  return (target:any, methodName:any, paramIndex:any) => {
    console.log('参数装饰器1')
  }
}
function logParam2(param?:string) {
  return (target:any, methodName:any, paramIndex:any) => {
    console.log('参数装饰器2')
  }
}
@logClasses1()
@logClasses2()
class HttpClient6 {
  @logParam()
  public url:string | undefined
  constructor() {}
  @logMethod()
  getData() {

  }
  setData(@logParam1() attr1:any, @logParam2() attr2:any) {}
}
