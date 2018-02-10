import baseFindIndex from './.internal/baseFindIndex.js'
import toInteger from './.internal/toInteger.js'  //转换为整型
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
/**
 * 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
 * @param array
 * @param predicate
 * @param fromIndex
 * @returns {*}
 */
function findIndex(array, predicate, fromIndex) {
  //通过三目运算符判断是否传入数组，若是，则将长度设置为数组的长度，否则，设置为0
  const length = array == null ? 0 : array.length

  //若数组长度为0，则返回-1
  if (!length) {
    return -1
  }
  //通过三目运算符判断是否传入开始查找的索引，若是，则将开始查找的索引设置为传入的整数值，否则，设置为0
  let index = fromIndex == null ? 0 : toInteger(fromIndex)

  //如果index为负值，从末尾开始算，-1就是最后一个元素，依次计算，如果最后大于数组的长度，就是0
  if(index < 0){
    index = Math.max(index+length,0)
  }
  //调用baseFindIndex函数，传入需要处理的数组、判断条件函数、开始查找的索引、从开始开始判断，返回匹配的索引值
  return baseFindIndex(array, predicate, index)
}

export default findLastIndex
