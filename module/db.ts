let dbUrl = 'XXX'

function getData():any[] {
  console.log('获取数据库的数据')
  return [{title: 'hello'}]
}
function save():boolean {
  console.log('保存成功')
  return true
}

// 可以单个暴露也可以批量暴露
export {dbUrl, getData, save}
// export 可以使用多次，而export default（默认导出）只能使用一次
// 当模块中只有一个方法或一个数据时，可以使用export default暴露
// export default getData;