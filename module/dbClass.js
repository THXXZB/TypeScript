"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义一个操作mysql数据库的类
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
        console.log('数据库建立连接');
    }
    MySqlDB.prototype.add = function (info) {
        console.log('mysql', info);
        return true;
    };
    MySqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return MySqlDB;
}());
exports.MySqlDB = MySqlDB;
// 定义一个操作mssql数据库的类
var MsSqlDB = /** @class */ (function () {
    function MsSqlDB() {
        console.log('数据库建立连接');
    }
    MsSqlDB.prototype.add = function (info) {
        console.log('mssql', info);
        return true;
    };
    MsSqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSqlDB;
}());
exports.MsSqlDB = MsSqlDB;
// 定义一个操作MongoDB数据库的类
var MongoDB = /** @class */ (function () {
    function MongoDB() {
        console.log('数据库建立连接');
    }
    MongoDB.prototype.add = function (info) {
        console.log('mongo', info);
        return true;
    };
    MongoDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDB;
}());
exports.MongoDB = MongoDB;
