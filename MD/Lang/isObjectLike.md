# isObjectLike函数 与 isObject函数

相似度这么高，先上代码，来比对比对


#### isObjectLike
``` 
function isObjectLike(value) {
  return typeof value == 'object' && value !== null
}
```

#### isObject
``` 
function isObject(value) {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}
```

#### 判断规则
* typeof 操作符对于引用类型的处理，除 function 以外，一律只返回处于其原型链最顶端的 object 类型

* 对于null，返回object类型

很明显，isObject函数一字不漏的完成需求，但isObjectLike函数则偷工减料了，这是为什么？

其实，isObjectLike对象应该翻译为判断是否为类实例化对象，则更好理解了，来看个例子

``` 
function aa(){}

//typeof 操作符对于未实例化的函数，返回"function"
typeof aa;  //function

//typeof 操作符对于实例化的函数，返回"object"
let bb = new aa()
typeof bb; //object 

```

#### 适用
* `isObjectLike`函数用户判断 value 是否为对象[`function`必须实例化]

* `isObject`函数用户判断 value 是否为对象[`function`可不实例化]

因此，这里边还是有小小的区别的，根据需要调用啦