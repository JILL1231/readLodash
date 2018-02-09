import slice from '../slice.js'

/**
 * The base implementation of methods like `dropWhile` and `takeWhile`.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the slice of `array`.
 */
/**
 * `dropWhile` 和 `takeWhile` 的基本实现方法
 * @param array{Array}        需要处理的数组
 * @param predicate{Function} 这个函数用于判断条件且会在每一次迭代调用,接收三个参数：(value, index, array)
 * @param isDrop{boolean}     是移除还是获取指定元素
 * @param fromRight{boolean}  从开始还是末尾开始判断
 * @returns {Array} 返回裁剪后的数组
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  //const {length} = array   <=> const length = array.length ,即获取数组的长度
  const { length } = array
  //通过三目运算符判断是否从末尾开始判断，若是，则起始索引为数组的长度，否则为-1
  let index = fromRight ? length : -1
  //遍历每个元素，找到predicate函数为false的下标index,即临界点
  while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}

  //通过三目运算符判断是否移除指定元素，
  // 若是移除指定元素，再判断从开始还是末尾开始，如果是从结尾开始，则调用baseSlice(0,index+1),否则调用baseSlice(index,length)
  // 若是获取指定元素，再判断从开始还是末尾开始，如果是从结尾开始，则调用baseSlice(index+1,length),否则调用baseSlice(0,index)
  return isDrop
    ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}

export default baseWhile
