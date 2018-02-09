# Lodash源码解析记录

最近工作之余学习了[Lodash](https://github.com/lodash/lodash)的源码，准备写成一个专题和大家一起分享分享，若有错误的地方，可以给我Issues,大家一起学习，希望对你有帮助

##目录
Array

* [slice.js](https://github.com/JILL1231/readLodash/blob/master/Array/slice.js
) : 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置

* [chunk.js](https://github.com/JILL1231/readLodash/blob/master/Array/chunk.js
) : 将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。