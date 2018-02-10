/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
/**
 * 检查传入的`value`是否为对象，如：(arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * 详情可查看[language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * @param value
 * @returns {boolean} 如果传入参数是对象，返回true，否则返回false
 */
function isObject(value) {
  const type = typeof value
  //typeof 操作符对于引用类型的处理，除 function 以外，一律只返回处于其原型链最顶端的 object 类型，另对于null，返回object类型
  //因此，需对传入的值判断是否为null
  return value != null && (type == 'object' || type == 'function')
}

export default isObject
