/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

/*
 * 该函数接收三个参数
 * @param {Array} 数组，可以是元素的节点集合
 * @param {number} [start=0] 开始截取切片的位置，默认0
 * @param {number} [end=array.length] 切片截取的截至位置，但是不包含这个数所在位置的元素。默认为数组的长度

 * 返回 一个数组的切片
 */
function slice(array, start, end) {
  //通过三目运算符判断是否传入一个数组，若不是，则将数组长度设置为0，否则获取数组长度
  let length = array == null ? 0 : array.length
  //若数组长度为0，则返回空数组
  if (!length) {
    return []
  }
  //判断start是否有值，若有值，则传入该值，否则将start值设置为0
  start = start == null ? 0 : start
  //判断end是否有值，若有值，则传入该值，否则将end值设置为数组的长度
  end = end === undefined ? length : end

  //判断参数start是否是负数，如果start是负数的话，比较一下start的相反数与数组长度的大小，如果大于数组的长度，那么就赋值为0；反之，就把start赋值为length + start，也就是从数组的后面开始数开始截取的位置
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  //判断参数end是否大于数组的长度，如果大于数组的长度，那么就赋值为数组的长度，再判断一下end是否小于0，如果小于0的话，就赋值为end + length，也就是从后向前数结束的位置。
  end = end > length ? length : end

  if (end < 0) {
    end += length
  }
  //判断start是否大于end，如果大于end就把length的值设为0，否则就把end减去start然后向右无符号移动零位；然后把start向右无符号移动零位
  length = start > end ? 0 : ((end - start) >>> 0)

  start >>>= 0

  //新创建了一个数组，然后将我们要获取的数组的值，从原数组中拷贝过来；然后返回这个数组。
  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default slice
