// 模块理解：将一些公共功能单独抽离成一个文件作为一个模块
// 模块中的变量、函数和类等默认私有
// 在外面访问模块里的数据（变量、函数、类）需要export暴露模块中的数据
// 再通过import引入模块即可

// 浏览器不支持export和import会报错，用node运行
import { dbUrl, getData as get, save } from './module/db';
get()
save()
console.log(dbUrl)
// export default
// import getData from './module/db'

// 封装mysql\mssql\mongo数据库操作Stu对象
import {Stu, stuMySql, stuMsSql, stuMongo} from './model/Stu'
let s = new Stu()
s.name = 'tt'
s.passW = '123'
stuMySql.add(s)
stuMsSql.add(s)
stuMongo.add(s)