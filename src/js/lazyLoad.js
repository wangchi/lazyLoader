/**
* lazyLoad v0.1.0
* 图片延迟加载插件(配合jQuery或Zepto使用)
*
* @WalkerBe http://www.walkerbe.com/
* MIT
*/

(function ( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define(factory);
    } else {
        window.lazyLoad = factory();
    }
})(function () {

    var screenHeight = $(window).height();
    var scrollHeight = 0;
    var body = typeof window.chrome != 'undefined' ? $('body') : $('html');

    /**
     * 传入图片元素，执行加载
     * @param imgs
     */
    function doLoad ( imgs ) {
        for ( var i = 0, len = imgs.length; i < len; i++) {
            loadImg($(imgs[i]));
            scrollLoad($(imgs[i]));
        }
    }

    /**
     * 滚动时重新载入图片加载函数
     * @param img
     */
    function scrollLoad ( img ) {
        $(window).scroll(function () {
            loadImg(img);
        });
    }

    /**
     * 图片加载函数
     * @param img
     */
    function loadImg ( img ) {
        scrollHeight = body.scrollTop();
        if (scrollHeight + screenHeight > img.offset().top) {
            if ( img.attr('data-src') == 'loaded' ) return;
            img.attr('src', img.attr('data-src'));
            img.attr('data-src', 'loaded');
            console.log(img.attr('src') + ' -- Is Loaded');
        }
    }

    return {
      doLoad: doLoad
    };

});