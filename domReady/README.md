##window.onload加载DOM的完美解决方案

<code>window.onload</code>的最大缺点就是要等页面中所有元素（图片和视频等）加载完毕后才会触发<code>load</code>事件,如果正好js控制了页面某个部分显示或隐藏，用户会看到一些莫名其妙的现象。
这时，最完美的解决方案是当DOM加载完毕后就触发<code>load</code>事件。

<a href="http://www.thefutureoftheweb.com/blog/adddomloadevent" target="_blank">参考文章</a>

###一、直接用window.onload方式，不推荐。
示例：1.html
<pre>
function loadFn(){
    alert('页面所有元素加载完毕');
}
window.onload = function(){
    loadFn()
}
</pre>