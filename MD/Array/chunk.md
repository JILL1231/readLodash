#chunk函数。

chunk函数将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。


## 看着源码，好办事
```
function chunk(array,size){
  size = Math.max(size,0)
  let length = array == null ? 0 : array.length
  if(!length || size < 1){
    return []
  }
  
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length/size))
  while(index < length){
    result[resIndex++] = slice(array,index,(index += size))
  }
  return result;
}
```
## 学习的小亮点
这里，我想要你和我一起思考每个小疑问，一起琢磨
### 1、一行代码判断参数是否大于0，并设置默认值为0
一般我们会用三目运算符
```
size = size < 0 ? 0 : size
```
但作者巧用 ```Math.max()``` ，通过传进来的参数与0比对谁大，若传入的参数小于0，自然就设置默认值为0了
``` 
size = Math.max(size,0)
```


### 2、处理不能整除的剩余的元素
若是 数组的长度 与 每个块的长度 能够整除的话，那么事情超级简单，拆分好的新数组的长度为
``` 
let len = length / size
```
但若是不能整除呢？那我们只要整数，小数通通不要,即向下处理
``` 
 let len = Math.floor(length / size)
```
小数保留，四舍五入，即取四舍五入后的整数
```
 let len = Math.round(length / size)
```
那如果舍去的值都要呢？那么向上取整后的值
``` 
let len = Math.ceil(length / size)
```


## 源码解析

详情看 [chunk函数](https://github.com/JILL1231/lodash/blob/master/chunk.js)
