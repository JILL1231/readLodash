import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
/**
 * 从右边开始裁剪数组中的 N 个数组，返回剩余的部分
 * @param array 需要处理的数组
 * @param n 裁剪的个数,设置默认参数为1
 * @returns {Array} 返回数组剩余的部分
 */
function dropRight(array, n=1) {
  //通过三目运算符判断是否传入一个数组，若是，则将长度设置为数组的长度，否则，设置为0
  const length = array == null ? 0 : array.length
  //slice函数的第二个参数，若传入的数值是负数，则与数组长度相加
  return length ? slice(array, 0, n < 0 ? 0 : -n) : []
}

export default dropRight
