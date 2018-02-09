import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */
/**
 * 创建一个数组切片，从array数组的起始元素开始提取n个元素
 * @param array 要检索的数组
 * @param n     要提取的元素个数，默认为1
 * @returns {*}
 */
function take(array, n=1) {
  //判断是否传入一个数组且传入的数组长度是否大于0，若不是，则返回空数组
  if (!(array != null && array.length)) {
    return []
  }
  //调用baseSlice函数的第二个参数，通过三目运算符判断传入的n是否小于0，若是，则n设置为0，否则为传入的数值
  return slice(array, 0, n < 0 ? 0 : n)
}

export default take
