##正则表达式

####声明一个正则表达式
<pre>
var reg = new RegExp('模式字符串', '模式修饰符');

var reg = /模式字符串/模式修饰符;		//自变量表示法
</pre>
######模式修饰符:
* <code>i</code>: 忽略大小写
* <code>g</code>: 全局匹配
* <code>m</code>: 多行匹配

#####RegExp包含2个方法
* <code>test()</code>: 匹配后返回true或false
* <code>exec()</code>: 匹配后返回数组