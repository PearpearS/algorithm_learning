/**
 * 回文算法
 * 回文：就是翻转字符串
 * @param str
 * @return reverse str
 * 思路： 先将参数切割成一个一个字符，再反转,join再次把他们连接成一个字符串
 */
export function reverseStr (str) {
  return str.split("").reverse().join("")
}
