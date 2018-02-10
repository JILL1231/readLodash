/**
 * Checks if `value` is `undefined`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
//null 与 undefined 是它们所属类型的唯一一个值。所以判断方法非常方便，只要我们使用恒等比较===
function isUndefined(value) {
  return value === undefined
}

export default isUndefined
