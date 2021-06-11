/*
命名空间：
  在代码量较大的情况下，为了避免各种变量命名冲突，
  可将相似功能的函数、类、接口等放置到命名空间内
  ts的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象
命名空间和模块的区别：
  命名空间：内部模块，主要用于组织，避免命名冲突
  模快：ts的外部模块简称，侧重代码的复用，一个模块可能有多个命名空间
 */

namespace thx {
  export let stuName = 'tt'
}
namespace sy {
  export let stuName = 'yy'
}
import { zjh, pyj } from './module/namespace'
let stuName = '175'
console.log(thx.stuName, sy.stuName, zjh.stuName, pyj.stuName, stuName)

