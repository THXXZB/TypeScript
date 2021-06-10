"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = 'XXX';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库的数据');
    return [{ title: 'hello' }];
}
exports.getData = getData;
function save() {
    console.log('保存成功');
    return true;
}
exports.save = save;
// export 可以使用多次，而export default（默认导出）只能使用一次
// 当模块中只有一个方法或一个数据时，可以使用export default暴露
// export default getData;
