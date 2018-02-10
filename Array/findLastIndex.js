import baseFindIndex from './.internal/baseFindIndex.js'

/**
 * This method is like `findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @see find, findIndex, findKey, findLast, findLastKey
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
 * 这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素
 * @param array
 * @param predicate
 * @param fromIndex
 * @returns {*}
 */
function findLastIndex(array, predicate, fromIndex) {
  //通过三目运算符判断是否传入数组，若是，则将长度设置为数组的长度，否则，设置为0
  const length = array == null ? 0 : array.length

  //若数组长度为0，则返回-1
  if (!length) {
    return -1
  }

  //fromIndex参数无值传入，则设置默认开始查找的索引length - 1
  let index = length - 1

  // 若fromIndex参数有值传入，则通过三目运算符判断传入的搜索索引是否小于0
  //若是，开始查找的索引 则取 传入的搜索索引值＋数组长度的和 与 0 之间的最大值，保证索引值大于0
  //否则，开始查找的索引 则取 传入的搜索索引值 与 数组长度-1的差 之间的最小值，保证索引值不大于数组长度
  if (fromIndex !== undefined) {
    index = fromIndex < 0
      ? Math.max(length + fromIndex, 0)
      : Math.min(fromIndex, length - 1)
  }
  //调用baseFindIndex函数，传入需要处理的数组、判断条件函数、开始查找的索引、从末尾开始判断，返回匹配的索引值
  return baseFindIndex(array, predicate, index, true)
}

export default findLastIndex
