#compact函数。

compact函数创建一个移除了所有假值的数组。例如：false、null、 0、""、undefined， 以及NaN 都是 “假值”.
         
## 看着源码，好办事
```
function compact(array){
  let resIndex = 0
  const result = []
  if(array == null){
    return result
  }
  
  for(const value of array){
    if(value){
      result[resIndex++] = value
    }
  }
  return result;
}
```
## 学习的小亮点
这里，我想要你和我一起思考每个小疑问，一起琢磨
### 1、[for..of 循环](http://es6.ruanyifeng.com/#docs/iterator#Set-%E5%92%8C-Map-%E7%BB%93%E6%9E%84)
for...of循环内部调用的是数据结构的Symbol.iterator方法。使用范围：数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、 Generator 对象，以及字符串。

#### 数组
``` 
//JavaScript 原有的for...in循环，只能获得对象的键名，不能直接获取键值
let arr = ['a', 'b', 'c', 'd'];

for(let a in arr){
  console.log(a); //0 1 2 3
}

//ES6 提供for...of循环，允许遍历获得键值。
for(let a of arr){
  console.log(a); //'a'  'b'  'c'  'd'
}

//用for...of循环进行遍历，借助数组实例的keys()方法对键名遍历、values()方法对键值遍历，entries()方法对键值对的遍历。
for(let a of arr.keys()){
  console.log(a); //0 1 2 3
}

for(let a of arr.entries()){
  console.log(a); //[0, "a"] [1, "b"] [2, "c"] [3, "d"]
}
```
#### Set 和 Map 结构
``` 
//遍历的顺序是按照各个成员被添加进数据结构的顺序

//Set 结构遍历时，返回的是一个值
let set = new Set(['a', 'b', 'c', 'd']);
for(let s of set){console.log(s)} //'a'  'b'  'c'  'd'

//Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值
let map = new Map().set(['a', 'b', 'c', 'd']);
for(let m of map){console.log(m)} /[0, "a"] [1, "b"] [2, "c"] [3, "d"]
```


## 源码解析

详情看 [compact函数](https://github.com/JILL1231/lodash/blob/master/compact.js)
