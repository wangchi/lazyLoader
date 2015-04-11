# lazyLoad

图片延迟加载插件，依赖于jQuery或Zepto

## 使用方法：

首先需要引入jQuery或者Zepto

```
<script src="{yourURL}/zepto.min.js"></script>
```

引入lazyload.js，(lazyload.js在dist目录中)

```
<script src="{yourURL}/lazyload.js"></script>
```

在img标签中调整属性：src设置为占位图路径，data-src属性放置图片真实路径，如下：

```
<img class="pic lazyLoad" data-src="images/001.jpg" src="images/loading.jpg" alt="This is a Picture">
```

在页面中执行函数

```
new lazyLoad({
    el: $('img.lazyLoad')
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
new lazyLoad({
    src: 'data-src',
    el: $('#list .lazy'),
    offset: 100
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


MIT