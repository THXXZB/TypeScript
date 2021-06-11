"use strict";
/*
  装饰器：一种特殊类型的声明，能够被附加到类声明，方法，属性或参数上
  可以修改类的行为
  通俗理解装饰器就是一个方法，可以注入到类、方法和属性参数上来扩展类、属性、方法和参数的功能
  常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器
  装饰器的写法：普通装饰器(无法传参)，装饰器工厂(可传参)
  装饰器已经是es7的标准特性之一
*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器：在类声明之前被声明(紧接着类声明)，类装饰器应用于类构造函数
// 可以用来监听，修改或替换类定义
// 类装饰器：在不修改HTTPClient的前提下，动态扩展类的属性和方法
function logClass(params) {
    // params就是当前类，此处是HttpClient
    // 静态成员，params相当于构造函数
    console.log(params, params.prototype);
    params.prototype.apiUrl = '动态扩展的属性';
    console.log(params, params.prototype);
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        console.log('constructor');
    }
    HttpClient.prototype.getData = function () {
        console.log('httpClient getData');
    };
    HttpClient = __decorate([
        logClass // 普通装饰器，无法传参，参数默认是当前的类（注意不要加分号）
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
http.getData();
console.log(http.apiUrl);
// 装饰器工厂（可传参）
function logClass2(params) {
    return function (target) {
        // target为当前类
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = params;
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () {
    };
    HttpClient2 = __decorate([
        logClass2('httpClient2')
    ], HttpClient2);
    return HttpClient2;
}());
var http2 = new HttpClient2();
console.log('url------', http2.apiUrl);
// 类装饰器：重载构造函数
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
// 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
function logClass3(target) {
    // target当前类
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 此处相当于target.prototype 原型
            _this.apiUrl = '修改后的apiUrl';
            _this.url = 'url--';
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log(this.apiUrl + '***', this.url);
        };
        return class_1;
    }(target));
}
// 属性装饰器:运行时当做函数调用，传入两个参数：
// 第一个参数：对于静态成员来说是类的构造函数，对于实例成员来说是原型对象
// 第二个参数：成员的名字,紧接着属性装饰器后面的属性
function logProperty(param) {
    return function (target, attr) {
        console.log('target == 原型prototype', target);
        console.log('attr ', attr);
        console.log('param ', param);
        target[attr] = param;
    };
}
// @logClass3
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
        this.apiUrl = '原构造函数中的apiUrl';
    }
    HttpClient3.prototype.getData = function () {
        console.log(this.apiUrl, this.url, '**');
    };
    __decorate([
        logProperty('http://www.baidu.com')
    ], HttpClient3.prototype, "url", void 0);
    return HttpClient3;
}());
var http3 = new HttpClient3();
http3.getData();
// 方法装饰器：应用于方法的属性描述符，用来监视，修改或替换方法定义
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是原型对象
// 参数2：成员的名字
// 参数3：成员的属性描述符
function get(params) {
    return function (target, methodName, desc) {
        // target => 原型对象
        console.log(target, methodName, desc, params);
        // 扩展属性和方法
        target.apiUrl = '修改后的apiUrl';
        target.url = 'xxx';
        target.run = function () { console.log('run'); };
        // 修改装饰的方法,将getData传入的参数都改为string类型
        console.log(desc.value);
        var oldMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // args收入所有的参数
            args = args.map(function (value) {
                // 将所有参数修改为string类型
                return String(value);
            });
            // console.log(args)
            oldMethod.apply(this, args);
        };
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
        this.apiUrl = '原构造函数中的apiUrl';
    }
    HttpClient4.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('传入的数据', args);
        console.log('原函数输出');
    };
    __decorate([
        get('www.method.com')
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var http4 = new HttpClient4();
console.log(http4.url, http4.apiUrl);
http4.run();
http4.getData(123, 'adg', true);
console.log(http4.getData);
// 方法参数装饰器
// 参数方法装饰器运行时当做函数调用，参数装饰器可以为类原型增加一些元素数据
// 参数1：静态成员->类的构造函数，实例成员->类的原型对象
// 参数2：方法的名字
// 参数3：参数在函数列表中的索引
function logParams(param) {
    return function (target, methodName, paramIndex) {
        console.log('params', param);
        console.log('paramTarget', target);
        console.log('methodName', methodName);
        console.log('paramIndex', paramIndex);
        target.url = param;
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function (uid, u) {
        console.log('参数装饰器', uid, u, this.url);
    };
    __decorate([
        __param(0, logParams('uuid'))
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var http5 = new HttpClient5();
// 先执行装饰器再执行getData中的代码
http5.getData(123, 1);
// 装饰器的执行顺序：从后往前
// 属性 > 方法 > 参数 > 类
function logClasses1(param) {
    return function (target) {
        console.log('类装饰器1');
    };
}
function logClasses2(param) {
    return function (target) {
        console.log('类装饰器2');
    };
}
function logParam(param) {
    return function (target, attr) {
        console.log('属性装饰器');
    };
}
function logMethod(param) {
    return function (target, methodName, desc) {
        console.log('方法装饰器');
    };
}
function logParam1(param) {
    return function (target, methodName, paramIndex) {
        console.log('参数装饰器1');
    };
}
function logParam2(param) {
    return function (target, methodName, paramIndex) {
        console.log('参数装饰器2');
    };
}
var HttpClient6 = /** @class */ (function () {
    function HttpClient6() {
    }
    HttpClient6.prototype.getData = function () {
    };
    HttpClient6.prototype.setData = function (attr1, attr2) { };
    __decorate([
        logParam()
    ], HttpClient6.prototype, "url", void 0);
    __decorate([
        logMethod()
    ], HttpClient6.prototype, "getData", null);
    __decorate([
        __param(0, logParam1()), __param(1, logParam2())
    ], HttpClient6.prototype, "setData", null);
    HttpClient6 = __decorate([
        logClasses1(),
        logClasses2()
    ], HttpClient6);
    return HttpClient6;
}());
