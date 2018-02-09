/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
/**
 * 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"
 * @param value
 * @returns {boolean}
 */
function isObjectLike(value) {
  //typeof 操作符对于引用类型的处理，除 function 以外，一律只返回处于其原型链最顶端的 object 类型，另对于null，返回object类型
  //因此，需对传入的值判断是否为null
  return typeof value == 'object' && value !== null
}

export default isObjectLike
