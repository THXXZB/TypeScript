"use strict";
// 1、浏览器无法解析es6和ts文件，需要编译成es5
// tsc --init 生成tsconfig.json文件并配置js输出目录
// 打开vscode-terminal-run task-tsc监视，自动编译并生成js文件
var str = 'hello';
console.log(str);
// 2、数据类型：boolean,number,string,array,tuple(元祖),enum(枚举),any,never(包括null和undefined),void
// 数组定义
var arr1 = [1, 2, 3];
var strArr = ['1', 'a'];
var arr2 = [1, 2, 3];
var strArr2 = ['1', 'a'];
// 元祖类型（属于数组的一种）
var tup = ['ts', 1, true];
// 枚举（定义标识符）
// payStatus  0：未支付  1：已支付
var PayStatus;
(function (PayStatus) {
    PayStatus[PayStatus["nonPay"] = 0] = "nonPay";
    PayStatus[PayStatus["payed"] = 1] = "payed";
})(PayStatus || (PayStatus = {}));
var p = PayStatus.nonPay;
console.log(p); // 0
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 5] = "red";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
// 默认为索引值,若前面的元素已赋值，则以前面赋值的元素为准
console.log(Color.green, Color.red, Color.orange); // 0  5  6
// 任意类型
var num = 123;
num = '123';
num = true;
// 任意类型作用
// let box = document.getElementById('box')
// // box.style.color = 'red'  报错
// let box2:any = document.getElementById('box')
// box2.style.color = 'red'
// null 和 undefined -》 其他（never）数据类型的子类型
// console.log(und)  //报错 没有定义
var und;
console.log(und); // undefined 不报错
// und = 123  报错
var number;
console.log(number);
number = 123;
console.log(number);
// 一个变量可能是number，可能是undefined， 可能是null
var number2 = null;
// void： 没有任何类型，一般用于定义方法时没有返回值
function run() {
    console.log('run');
}
function run2() {
    console.log('run');
    return 1;
}
// never 其他类型，代表从不会出现的值
// 声明never的变量只能被never类型所赋值
// let err:never = (() => { throw new Error('错误')})()
// 3、函数定义
// 函数声明
function look(name, age) {
    return name + " -- " + age;
}
look('tt', 22);
// 匿名函数
// 可选参数age，建议可选参数放在最后
var look2 = function (name, age) {
    if (age) {
        console.log(name + "---" + age);
    }
    else {
        console.log(name + "---\u5E74\u9F84\u4FDD\u5BC6");
    }
};
look2('tt', 22);
look2('tt');
// 默认参数
var look3 = function (name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        console.log(name + "---" + age);
    }
    else {
        console.log(name + "---\u5E74\u9F84\u4FDD\u5BC6");
    }
};
look3('tt', 22);
look3('tt');
// 剩余参数:三点运算符
// let sum = function(a:number, b:number, c:number):number {
//   return a + b + c
// }
// console.log(sum(1, 2, 3))
var sum2 = function (a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};
console.log(sum2(1, 2, 3, 4, 5));
function getInfo(str) {
    if (typeof str === 'number') {
        return 'I am ' + str + 'years old';
    }
    else {
        return 'my name is ' + str;
    }
}
function getInfo2(name, age) {
    if (age) {
        return "my name is " + name + ". I am " + age + " years old.";
    }
    else {
        return "my name is " + name + ".";
    }
}
alert(getInfo2('tt'));
alert(getInfo2('tt', 22));
