import baseWhile from './.internal/baseWhile.js'

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, ({ active }) => active)
 * // => objects for ['fred', 'pebbles']
 */
/**
 * 从数组的最右边开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)
 * @param array
 * @param predicate
 * @returns {Array}
 */
function takeRightWhile(array, predicate) {
  //array != null && array.length ＝>判断是否传入一个数组且传入的数组长度是否大于0，
  //若是，则调用baseWhile函数，且传入四个参数：要处理的数组array，判断函数predicate，获取指定元素false，从右到左判断true
  //否则返回空数组
  return (array != null && array.length)
    ? baseWhile(array, predicate, false, true)
    : []
}

export default takeRightWhile
