##window.onload加载DOM的完美解决方案

<code>window.onload</code>的最大缺点就是要等页面中所有元素（图片和视频等）加载完毕后才会触发<code>load</code>事件,如果正好js控制了页面某个部分显示或隐藏，用户会看到一些莫名其妙的现象。