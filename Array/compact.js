/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
/**
 * 创建一个移除了所有假值的数组。例如：false、null、 0、""、undefined， 以及NaN 都是 “假值”.
 * @param array 需要处理的数组
 * @returns {Array}  移除了所有假值的数组
 */
function compact(array) {
  //用来表示返回数组的索引
  let resIndex = 0
  //新创建一个数组，存放有效数据，也是返回的数组
  const result = []

  //若传入的数组为空，则返回空数组
  if (array == null) {
    return result
  }

  //for...of对传递的数组进行循环,想想，如果用map或while，性能有什么区别呢？为什么？
  //for最快，因为它没有任何额外的函数调用栈和上下文
  for (const value of array) {
    //将能够通过布尔转化为false的值去除
    if (value) {
      result[resIndex++] = value
    }
  }

  //map 最慢，因为它的返回值是一个等长的全新的数组，数组创建和赋值产生的性能开销很大。
  //map适用：将数组按照某种规则映射为另一个数组
  array.map(function(value){
    if(value){
      result.push(value);
    }
  })

  //while实现
  let index = 0,len = array.length;
  while(index < len){
    let value = array[index++]
    if(value){
      result[resIndex++] = value
    }
  }


  return result
}

export default compact
