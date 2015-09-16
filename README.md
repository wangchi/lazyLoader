# Lazyloader

图片延迟加载器，支持pc端移动端，依赖于jQuery或Zepto，或者是与jQuery同API的js库.

浏览器支持情况：

| Firefox | Chrome | Safari | IE | Android | iPhone |
|--------|-------|-------|-------|--------|-------|
| latest | latest | latest | IE7,8,9,10,11 | UC,WeChat | UC,WeChat |

**[在线演示](http://wangchi.github.io/Lazyloader/)**

## 使用方法：

首先需要引入jQuery或者Zepto

```
<script src="{yourURL}/zepto.min.js"></script>
```

引入lazyloader.js，(lazyloader.js在dist目录中，包括压缩版本lazyloader.min.js)

```
<script src="{yourURL}/lazyloader.min.js"></script>
```

在img标签中调整属性：src设置为占位图路径，data-src属性放置图片真实路径，如下：

```
<img class="pic lazy" data-src="images/001.jpg" src="images/loading.jpg" alt="This is a Picture">
```

在页面中执行函数

```
new Lazyloader({
    el: $('img.lazy')
});
```

## 参数配置

+ src: 存放图片真实路径的属性名，默认为data-src

+ el:  图片对象集合，如$('img.lazyLoad')、$('#list img')

+ offset: 图片加载调节值，默认为0，正数提前加载，负数延后加载

示例:

html:

```
<div id="list">
    <img class="pic lazy" data-src="images/001.jpg" src="images/loading.jpg" alt="This is a Picture">
</div>
```

js:
```
$(function () {
    new Lazyloader({
        src: 'data-src',
        el: $('#list .lazy'),
        offset: 100
    });
});
```

## 本地运行本项目

在本地运行本项目首先需要配置NodeJS环境，[NodeJS下载地址](https://nodejs.org/download/)


然后安装项目依赖，进入根目录，依次执行如下命令:

```
npm install

bower install
```

最后运行项目，在项目根目录执行下面命令即可:

```
node server
```

默认端口号为3000，可通过[http://127.0.0.1:3000](http://127.0.0.1:3000)访问


[History](History.md)


MIT
