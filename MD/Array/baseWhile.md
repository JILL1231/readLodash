# baseWhile函数。

baseWhile函数是`dropWhile`、`dropRightWhile` 和 `takeWhile` 、`takeRightWhile`这四个函数的基本实现方法。

这样吧，我们来看看这四个函数分别有什么作用，再思考思考若是你如何实现它们的基本方法

* `dropWhile(array, [predicate=_.identity])`：裁剪数组，起点从 predicate 返回假值开始。predicate 会传入3个参数：(value, index, array)

* `dropRightWhile(array, [predicate=_.identity])`：从右边开始裁剪数组，起点从 predicate 返回假值开始。predicate 会传入3个参数：(value, index, array)

* `takeWhile(array, [predicate=_.identity])`：从数组的开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)。
             
* `takeRightWhile(array, [predicate=_.identity])`：从数组的最右边开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)

来分析分析这四个函数的区别，思考思考这个基本方法需要哪些参数

* `dropWhile`和`dropRightWhile`的起始点都是从 predicate 返回假值开始，不同的是裁剪的方向

* `takeWhile` 、`takeRightWhile`的结束点都是直到 predicate 返回假值，不同的获取的方向



是的，baseWhile函数接收四个参数，分别是
``` 
 * @param array{Array}        需要处理的数组
 * @param predicate{Function} 这个函数用于判断条件且会在每一次迭代调用,接收三个参数：(value, index, array)
 * @param isDrop{boolean}     是移除还是获取指定元素
 * @param fromRight{boolean}  从开始还是末尾开始判断
 * @returns {Array} 返回裁剪后的数组
```
## 看着源码，好办事
```
function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array
  let index = fromRight ? length : -1

  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

  return isDrop
    ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}
```
## 学习的小亮点

![图解](https://static.oschina.net/uploads/img/201802/06191054_rmo0.jpg "图解")



## 源码解析

`baseWhile`函数
``` 
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
```
`dropWhile`函数
``` 
/**
 * 裁剪数组，起点从 predicate 返回假值开始
 * @param array 需要处理的数组
 * @param predicate 这个函数会在每一次迭代调用,传入3个参数：(value, index, array)
 * @returns {Array} 返回裁剪后的数组
 */
function dropWhile(array, predicate) {
  //array != null && array.length ＝>判断是否传入一个数组且传入的数组长度是否大于0，
  //若是，则调用baseWhile函数，且传入四个参数：要处理的数组array，判断函数predicate，移除指定函数true，默认从左到右判断false
  //否则返回空数组
  return (array != null && array.length)? baseWhile(array, predicate, true): []
}
```
`dropRightWhile`函数
 ``` 
 /**
  * 从右边开始裁剪数组，起点从 predicate 返回假值开始。predicate 会传入3个参数：(value, index, array)
  * @param array
  * @param predicate
  * @returns {Array}
  */
 function dropRightWhile(array, predicate) {
   //array != null && array.length ＝>判断是否传入一个数组且传入的数组长度是否大于0，
   //若是，则调用baseWhile函数，且传入四个参数：要处理的数组array，判断函数predicate，移除指定函数true，从右到左判断true
   //否则返回空数组
   return (array != null && array.length)
     ? baseWhile(array, predicate, true, true)
     : []
 }
 ```
 
`takeWhile` 函数
``` 
/**
 * 从数组的开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)
 * @param array
 * @param predicate
 * @returns {Array}
 */
function takeWhile(array, predicate) {
  //array != null && array.length ＝>判断是否传入一个数组且传入的数组长度是否大于0，
  //若是，则调用baseWhile函数，且传入四个参数：要处理的数组array，判断函数predicate，获取指定元素false，从左到右判断false
  //否则返回空数组
  return (array != null && array.length)
    ? baseWhile(array, predicate)
    : []
}
```

`takeRightWhile`函数
``` 
/**
 * 从数组的最右边开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array)
 * @param array
 * @param predicate
 * @returns {Array}
 */
function takeRightWhile(array, predicate) {
  //array != null && array.length ＝>判断是否传入一个数组且传入的数组长度是否大于0，
  //若是，则调用baseWhile函数，且传入四个参数：要处理的数组array，判断函数predicate，获取指定元素false，从右到左判断true
  //否则返回空数组
  return (array != null && array.length)
    ? baseWhile(array, predicate, false, true)
    : []
}
```
