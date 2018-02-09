import baseWhile from './.internal/baseWhile.js'

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
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
 * dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 */
/**
 * 从右边开始裁剪数组，起点从 predicate 返回假值开始。predicate 会传入3个参数：(value, index, array)
 * @param array
 * @param predicate
 * @returns {Array}
 */
function dropRightWhile(array, predicate) {
  //array != null && array.length ＝>判断是否传入一个数组且传入的数组长度是否大于0，
  //若是，则调用baseWhile函数，且传入四个参数：要处理的数组array，判断函数predicate，移除指定函数true，从右到左判断true
  //否则返回空数组
  return (array != null && array.length)
    ? baseWhile(array, predicate, true, true)
    : []
}

export default dropRightWhile
