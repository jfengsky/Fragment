##window.onload加载DOM的完美解决方案

<code>window.onload</code>的最大缺点就是要等页面中所有元素（图片和视频等）加载完毕后才会触发<code>load</code>事件,如果正好js控制了页面某个部分显示或隐藏，用户会看到一些莫名其妙的现象。
这时，最完美的解决方案是当DOM加载完毕后就触发<code>load</code>事件。

###一、直接用window.onload方式，不推荐。
示例：window_onload.html
<pre>
function loadFn(){
    alert('页面所有元素加载完毕');
}
window.onload = function(){
    loadFn()
}
</pre>
可以看到，要等图片慢慢加载完之后才触发<code>alert</code>,这显然是不能忍受的！

###二、完美的解决方案，推荐

<a href="http://www.thefutureoftheweb.com/blog/adddomloadevent" target="_blank">参考文章</a>

####1. firefox的解决办法,另外，webkit525版本以上也引入了这个方法，所以这个可以通用。
forefox下有独有的DOMContentLoaded事件，当所有DOM解析完以后会触发这个事件。

示例：DOMContentLoaded.html

<pre>
function ff_test(){
    alert('a');
}
document.addEventListener("DOMContentLoaded", ff_test, false);
</pre>
可以看到，当页面打开立即触发<code>alert</code>，图片也在加载中...

####2. ie的解决办法
对于IE则使用条件注释，并使用script标签的<code>defer</code>属性，IE中可以给script标签添加一个defer(延迟)属性，这样，标签中的脚本只有当DOM加载完毕后才执行

示例：defer.html
<pre>
<script>
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");
    script = document.getElementById("__ie_onload");
    script.onreadystatechange = function() {
        if (this.readyState == "complete")
        init(); // call the onload handler
    };
@end @*/
</script>
</pre>
这里利用了浏览器的条件编译<code>@cc_on</code>，测试看到，当页面打开后立即触发<code>alert</code>，图片也在加载中...

这个方法有个缺陷，就是当页面中存在iframe时要等iframe下载完毕后才触发，这与onload没多大区别。

jQuery对于IE的解决方案，使用了一种新的方法，该方法源自http://javascript.nwbox.com/IEContentLoaded/。 它的原理是，在IE下，DOM的某些方法只有在DOM解析完成后才可以调用，doScroll就是这样一个方法，反过来当能调用doScroll的时候即 是DOM解析完成之时，与prototype中的document.write相比，该方案可以解决页面有iframe时失效的问题。此外，jQuery 似乎担心当页面处于iframe中时，该方法会失效，因此实现代码中做了判断，如果是在iframe中则通过document的 onreadystatechange来实现，否则通过doScroll来实现。不过经测试，即使是在iframe中，doScroll依然有效。

综上，自己写的<a href="">domready</a>

###参考文章

1.<a href="http://wyz.67ge.com/javascript-domready/" target="_blank">主流JS框架中DOMReady事件的实现</a>

2.<a href="http://www.cnblogs.com/zhangziqiu/archive/2011/06/27/DOMReady.html" target="_blank">DOM Ready 概述 </a>