# lazyLoad
延迟加载插件，可结合jQuery或Zepto使用

使用方法：

首先需要引入jQuery或者Zepto

```
<script src="{yourURL}/zepto.min.js"></script>
```

引入lazyLoad.js

```
<script src="{yourURL}/lazyLoad.js"></script>
```

在页面中执行函数

```
$(function () {
    lazyLoad.doLoad($('img.lazyLoad'));
});
```



MIT