/**
 * 根据对象的属性，进行排序，属性必须是Number类型
 * 参考：《JavaScript高级程序设计》113页
 * 思路：因为sort函数可以自定义排序方式，所以我们可以传入属性名的值给value的值，让他们
 *      进行比较
 * @param str (你需要排序的属性名,必须是"xxxxx"的格式哦～,并且value1和value2必须要有这个属性)
 * @return sort Array 
 * 默认： 从小到大
 */

export function objSort (propertyName) {
  return function mySort (value1,value2) {
    // 如果value1和value2有相应的参数属性，才会进行排序
    if (value1.hasOwnProperty(propertyName) && value2.hasOwnProperty(propertyName)) {
      value1 = value1[propertyName]
      value2 = value2[propertyName]
      if(value1 > value2) {
      return 1
      } else if (value1 < value2){
        return -1
      } else {
        return 0
      }
    } else {
      console.error("没有这个属性名，请检查是不是写错了，或者没用引号")
    }
  }
}

