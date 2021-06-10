"use strict";
// 模块理解：将一些公共功能单独抽离成一个文件作为一个模块
// 模块中的变量、函数和类等默认私有
// 在外面访问模块里的数据（变量、函数、类）需要export暴露模块中的数据
// 再通过import引入模块即可
Object.defineProperty(exports, "__esModule", { value: true });
// 浏览器不支持export和import会报错，用node运行
var db_1 = require("./module/db");
db_1.getData();
db_1.save();
console.log(db_1.dbUrl);
// export default
// import getData from './module/db'
// 封装mysql\mssql\mongo数据库操作Stu对象
var Stu_1 = require("./model/Stu");
var s = new Stu_1.Stu();
s.name = 'tt';
s.passW = '123';
Stu_1.stuMySql.add(s);
Stu_1.stuMsSql.add(s);
Stu_1.stuMongo.add(s);
