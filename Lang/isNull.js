/**
 * Checks if `value` is `null`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
/**
 * 检查value是否为null
 * @param value
 * @returns {boolean} 如果 value 为null，那么返回 true，否则返回 false
 */
//null 与 undefined 是它们所属类型的唯一一个值。所以判断方法非常方便，只要我们使用恒等比较===
function isNull(value) {
  return value === null
}

export default isNull
