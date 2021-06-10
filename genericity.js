"use strict";
// 泛型：一个组件可以支持多种类型的数据
// 泛型就是解决类、接口和方法的复用性，以及对不特定数据类型的支持
// 泛型函数，eg: 要求传入的参数和返回值保持一致
function getData(value) {
    return value;
}
getData(123);
getData('123');
//泛型类， eg: 找出最小值，支持数字和字符串a-z两者类型
var Min = /** @class */ (function () {
    function Min() {
        this.list = [];
    }
    Min.prototype.add = function (value) {
        this.list.push(value);
    };
    Min.prototype.min = function () {
        var min = this.list[0];
        for (var i = 1; i < this.list.length; i++) {
            if (this.list[i] < min) {
                min = this.list[i];
            }
        }
        return min;
    };
    return Min;
}());
var m = new Min();
m.add(33);
m.add(3);
m.add(9);
m.add(2);
console.log(m.min());
var m2 = new Min();
m2.add('ai');
m2.add('ty');
m2.add('ha');
m2.add('ah');
console.log(m2.min());
var getData2 = function (value) {
    return value;
};
console.log(getData2('tt'));
console.log(getData2(124));
function getData4(value) {
    return value;
}
var strGet = getData4;
var numGet = getData4;
console.log(strGet('string'));
console.log(numGet(123));
// 把类当做参数的泛型类
// 定义一个类，把类作为参数来约束数据传入的类型
// eg:定义一个User类，用来映射数据库字段，
// 再定义一个mysqlDB的类用来操作数据库
// 把User类作为参数传入到MySqlDB中
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
    }
    // 传入的参数使用User接口，验证传入数据的合法性
    MySqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MySqlDB;
}());
var u = new User();
u.userName = 'tt';
u.password = 123;
var a = new Article();
a.title = 'beautiful flowers';
a.desc = '...';
var db = new MySqlDB();
db.add(u);
var db2 = new MySqlDB();
db2.add(a);
// 定义一个操作mysql数据库的类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        return true;
    };
    MySqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return MySqlDb;
}());
// 定义一个操作mssql数据库的类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
    }
    MsSqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSqlDb;
}());
// 定义一个操作MongoDB数据库的类
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDb;
}());
