import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * takeRight([1, 2, 3])
 * // => [3]
 *
 * takeRight([1, 2, 3], 2)
 * // => [2, 3]
 *
 * takeRight([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * takeRight([1, 2, 3], 0)
 * // => []
 */
/**
 * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素
 * @param array 要检索的数组
 * @param n     要提取的元素个数，默认为1
 * @returns {*}
 */
function takeRight(array, n=1) {
  //判断是否传入一个数组,若是，则将length设置为数组的长度，否则设置为0
  const length = array == null ? 0 : array.length
  //若长度为0，则返回空数组
  if (!length) {
    return []
  }
  //获取开始提取的索引
  n = length - n
  //若要提取的元素个数大于数组的长度，则从0开始提取，否则从n开始提取，直至数组长度
  return slice(array, n < 0 ? 0 : n, length)
}

export default takeRight
