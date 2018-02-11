import isArrayLike from './isArrayLike.js'
import isObjectLike from './isObjectLike.js'

/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
/**
 * 这个方法类似_.isArrayLike。除了它还检查value是否是个对象
 * @param value
 * @returns {boolean}
 */
function isArrayLikeObject(value) {
  //isObjectLike()函数用户判断 value 是否为对象[`function`必须实例化]，判断条件：typeof value = 'object' && value != null
  //isArrayLike()函数检查 value 是否是类数组，判断条件：typeof value != 'function && value != null && isLength(value.length)
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
