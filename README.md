# Lodash源码解析记录

最近工作之余学习了[Lodash](https://github.com/lodash/lodash)的源码，准备写成一个专题和大家一起分享分享，若有错误的地方，可以给我Issues,大家一起学习，希望对你有帮助

## 目录
### Array

* [slice.js](https://github.com/JILL1231/readLodash/blob/master/Array/slice.js
) : 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置

* [chunk.js](https://github.com/JILL1231/readLodash/blob/master/Array/chunk.js
) : 将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块

* [compact.js](https://github.com/JILL1231/readLodash/blob/master/Array/compact.js
) : compact函数创建一个移除了所有假值的数组。例如：false、null、 0、""、undefined， 以及NaN 都是 “假值”

* [drop.js](https://github.com/JILL1231/readLodash/blob/master/Array/drop.js
) : 裁剪数组中的前 N 个数组，返回剩余的部分

* [dropRight.js](https://github.com/JILL1231/readLodash/blob/master/Array/dropRight.js
) : 从右边开始裁剪数组中的 N 个数组，返回剩余的部分

* [take.js](https://github.com/JILL1231/readLodash/blob/master/Array/take.js
) : 创建一个数组切片，从array数组的起始元素开始提取n个元素

* [takeRight.js](https://github.com/JILL1231/readLodash/blob/master/Array/takeRight.js
) : 创建一个数组切片，从array数组的最后一个元素开始提取n个元素

* [baseWhile.js](https://github.com/JILL1231/readLodash/blob/master/.internal/baseWhile.js
) :baseWhile函数是`dropWhile`、`dropRightWhile` 和 `takeWhile` 、`takeRightWhile`这四个函数的基本实现方法 

* [dropWhile.js](https://github.com/JILL1231/readLodash/blob/master/Array/dropWhile.js
) : 裁剪数组，起点从 predicate 返回假值开始。predicate 会传入3个参数：(value, index, array)

* [dropRightWhile.js](https://github.com/JILL1231/readLodash/blob/master/Array/dropRightWhile.js
) : 从右边开始裁剪数组，起点从 predicate 返回假值开始。predicate 会传入3个参数：(value, index, array)

* [takeWhile.js](https://github.com/JILL1231/readLodash/blob/master/Array/takeWhile.js
) : 从数组的开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)

* [takeRightWhile.js](https://github.com/JILL1231/readLodash/blob/master/Array/takeRightWhile.js
) : 从数组的最右边开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)

* [findIndex.js](https://github.com/JILL1231/readLodash/blob/master/Array/findIndex.js
) : 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
    
* [findLastIndex.js](https://github.com/JILL1231/readLodash/blob/master/Array/findLastIndex.js
) : 这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素

### Lang

* [isNull.js](https://github.com/JILL1231/readLodash/blob/master/Lang/isNull.js
) : 检查 value 是否是 null

* [isUndefined.js](https://github.com/JILL1231/readLodash/blob/master/Lang/isUndefined.js
) : 检查 value 是否是 Undefined

* [isObject.js](https://github.com/JILL1231/readLodash/blob/master/Lang/isObject.js
) : 检查 value 是否是 Object

* [isObjectLike.js](https://github.com/JILL1231/readLodash/blob/master/Lang/isObjectLike.js
) : 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"