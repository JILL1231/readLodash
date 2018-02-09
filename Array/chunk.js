import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
/*
 * 将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
 *
 * chunk函数两个参数
 * @param {Array} 需要处理的数组
 * @param {number} [size=1] 每个块的长度
 * @returns {Array} 返回一个拆分好的新数组
 *
 */
function chunk(array, size) {
  //通过给Math.max()函数传入一个比较数字0，从而保证每个块的长度size大于0
  size = Math.max(size, 0)
  //通过三目运算符判断是否传入一个数组，若是，则将长度设置为数组的长度，否则，设置为0
  const length = array == null ? 0 : array.length
  //若数组长度为0，或者每个块的长度小于1，则返回空数组
  if (!length || size < 1) {
    return []
  }
  //定义了两个变量，index用来作为原数组的索引，resIndex用来作为新生成的数组的索引
  let index = 0
  let resIndex = 0
  //根据size的大小生成了一个新的数组,使用Math.ceil()向上取整,解决出现剩余元素的情况
  const result = new Array(Math.ceil(length / size))

  //通过循环索引的方式，不断地从原数组里取出指定长度的片段，最后返回拆分好的数组
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
