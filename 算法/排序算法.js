/**
* 思路：普通的sort方法是根据字符串进行比较，大多数情况下没有用的
*      但是该方法可以接收一个比较函数作为参数（自定义比较方式）
* @return Array
* 默认：从小到大
*/
export function compare (value1,value2) {
  if (value1 > value2) {
    return 1 // 如果value1应该位于value2后面，则正数
  } else if (value1 < value2) {
      return -1 // 如果value1应该位于value2前面，则负数
  } else {
      return 0 // 相等
  }
}