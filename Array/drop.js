import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
/**
 * 裁剪数组中的前 N 个数组，返回剩余的部分。
 * @param array 需要处理的数组
 * @param n 裁剪的个数,设置默认参数为1
 * @returns {Array} 返回数组的剩余的部分。
 */
function drop(array, n=1) {
  //通过三目运算符判断是否传入一个数组，若是，则将长度设置为数组的长度，否则，设置为0
  const length = array == null ? 0 : array.length
  //通过三目运算符判断长度是否大于0 ，若是，再通过三目运算符判断传入的裁剪个数是否小于0，若是，设置为0，否则设置为传入的值，再调用slice函数进行裁剪，否则返回空数组
  return length ? slice(array, n < 0 ? 0 : n, length) : []
}

//想想：从右边开始裁剪数组中的 N 个数组，返回剩余的部分
export default drop
