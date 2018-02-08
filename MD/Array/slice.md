slice函数的作用就是创建一个裁剪后的数组，从 start 到 end 的位置，但不包括 end 本身的位置。这时，不知道大家有没有和我一样有疑问，为什么不直接使用原生数组的slice方法而非要自己重新写一个呢？作者是这么回答
![输入图片说明](https://static.oschina.net/uploads/img/201801/31110244_wncR.jpg "在这里输入图片标题")
大概意思是，他觉得性能没有太大的差别，Array#slice和baseSlice性能强弱取决于数组的大小。这里采用baseSlice是因为他们要视所有为密集数据，而Array#slice会处理稀疏数组。


## 看着源码，好办事
```
function slice(array, start, end) {
  #1
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  #2
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  #3
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0
  #4
  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}
```
## 学习的小亮点
这里，我想要你和我一起思考每个小疑问，一起琢磨
### 1、null 和 undefined 有什么区别？
JavaScript的最初版本是这样区分的：null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。
``` 
Number(null);//0
Number(undefined);//NaN
```
但是，上面这样的区分，在实践中很快就被证明不可行。目前，null和undefined基本是同义的，只有一些细微的差别。

null表示“没有对象”，即此处不应该有值
* 1）作为函数的参数，表示该函数的参数不是对象
* 2）作为对象原型链的终点

undefined表示“缺少值”，即此处应该有一个值，但是还没定义
* 1）变量被声明了，但是没有赋值时，就等于undefined
* 2）调用函数时，应该提供的参数没有提供，该参数就等于undefined
* 3）对象没有赋值的属性，该属性的值为undefined
* 4）函数没有返回值时，默认返回undefined

### 2、num >>> 0的作用是什么？
首先我们要了解  >>> 的作用就是把一个数字[任意类型的值]，变成一个无符号的32位的整数；

num >>> 0的作用，就是把num变成一个无符号的32位的整数，不论num是负数还是小数。而且我们还需要知道，JavaScript的数组的最大长度是2^32-1，所以这样做也避免了数组的索引超出界限。

## 源码解析

首先，该函数接收三个参数，第一个参数是需要裁剪的数组，第二个及第三个为非必填参数，分别是开始位置和结束位置。返回裁剪后的数组

下面分步骤来讲解［讲解对应源码标记的位置］

```#1```通过三目运算符判断是否传入一个数组，若不是，则将数组长度设置为0，否则设置为数组长度，再判断数组长度是否为0，若为0，返回空数组；接着，这两个可选参数也通过三目运算符判断是否传入值，传入则取传入值，否则取默认值。这里抛个问题：start 和 end 同样性质的参数，为什么判断时分别用null和undefined呢？

```#2```判断参数start是否是负数，如果start是负数的话，比较一下start的相反数与数组长度的大小，如果大于数组的长度，那么就赋值为0；反之，就把start赋值为length + start，即开始位置；同样判断参数end是否大于数组的长度，如果大于数组的长度，那么就赋值为数组的长度，再判断一下end是否小于0，如果小于0的话，就赋值为end + length，即结束位置

```#3```由```#2```可确定了开始位置及结束位置，判断start是否大于end，如果大于end就把length的值设为0，否则就把end减去start然后向右无符号移动零位［关于>>>0的作用不明白的可以到上面看看］然后把start向右无符号移动零位

```#4```新创建了一个数组，使用循环索引的方式，将我们要获取的数组的值，从原数组中拷贝过来；最后裁剪后的数组。

