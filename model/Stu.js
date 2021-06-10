"use strict";
exports.__esModule = true;
exports.stuMongo = exports.stuMsSql = exports.stuMySql = exports.Stu = void 0;
var dbClass_1 = require("../module/dbClass");
var Stu = /** @class */ (function () {
    function Stu() {
    }
    return Stu;
}());
exports.Stu = Stu;
var stuMySql = new dbClass_1.MySqlDB();
exports.stuMySql = stuMySql;
var stuMsSql = new dbClass_1.MsSqlDB();
exports.stuMsSql = stuMsSql;
var stuMongo = new dbClass_1.MongoDB();
exports.stuMongo = stuMongo;
