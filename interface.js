"use strict";
// 接口：定义行为和动作规范
// 属性类接口、函数类型接口、可索引接口、类类型接口、接口扩展
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(name) {
    // 要求传入的对象包含且仅包含firstName和secondName的对象
    console.log(name.firstName, name.secondName);
}
function printInfo(name) {
    // 要求传入的对象包含且仅包含firstName和secondName的对象
    console.log('Info is ' + name.firstName + name.secondName);
}
var person = {
    firstName: 't',
    secondName: 'hx'
};
printName(person);
printInfo(person);
function getName(name) {
    console.log(name);
}
getName({ firstName: 'T' });
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
            if (config.dataType === 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    data: 'name:user',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(md5('name', '123'));
var array2 = ['1', 'b'];
console.log(array2[0]);
var obj = { name: 'thx' };
var Students = /** @class */ (function () {
    function Students(name, age) {
        this.name = name;
        this.age = age;
    }
    Students.prototype.run = function () {
        console.log(this.name + 'is running');
    };
    return Students;
}());
var stud = new Students('小黑', 7);
stud.run();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.workName = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.workName + code);
    };
    return Programmer;
}());
var Yami = /** @class */ (function (_super) {
    __extends(Yami, _super);
    function Yami(name) {
        return _super.call(this, name) || this;
    }
    Yami.prototype.eat = function () {
        console.log(this.workName + 'is eating');
    };
    Yami.prototype.work = function () {
        console.log(this.workName + 'is working');
    };
    return Yami;
}(Programmer));
var mi = new Yami('minor');
mi.work();
mi.coding(' is codding for ts');
