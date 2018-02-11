/** Used as references for various `Number` constants. */
//Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中最大的安全整数（maxinum safe integer)（2^53 - 1）,MAX_SAFE_INTEGER 常量值为 9007199254740991。这个数字形成的原因是，Javascript 使用 IEEE 754 中规定的 双精度浮点格式数据，在这个规定中能安全的表示数字的范围在 -(253 - 1) 到 253 - 1 之间，包含 -(253 - 1) 和 253 - 1
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
/**
 * 检查 value 是否为有效的类数组长度
 * @param value
 * @returns {boolean}
 */
function isLength(value) {
  /**
   * 判断的条件
   * 1、数据类型是number，（可能存在NaN特殊值，因为 typeof NaN;//number）
   * 2、value的大小在［0，MAX_SAFE_INTEGER］区间 （Number(NaN);//NaN,因此解决了1的问题，但是有可能存在小数的问题）
   * 3、一定是有效的整数数字 （通过value % 1 == 0判断是否整数)
   */
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}
export default isLength
