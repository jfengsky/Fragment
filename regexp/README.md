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

#####String提供的方法
* <code>match(arg)</code> 返回arg中的子串或者null
* <code>replace(arg1, arg2)</code> 用arg2替换arg1
* <code>search(arg)</code> 返回字符串中arg的位置
* <code>split(arg)</code> 返回字符串按置顶arg拆分的数组

#####获取控制
* .		匹配除换行符之外的任何字符
* [a-zA-Z0-9]	匹配括号中字符集中的任意字符
* [^a-zA-Z0-9]  匹配任意不在括号中字符集的任意字符
* x*		匹配0个、1个或者多个x
* x+		匹配至少1个x
* x?		匹配0个或者1个x
* x{m,n}	匹配m到n个x包含m和n
* ^ 		匹配行首
* $			匹配行尾
* \s		匹配空格、空白字符、制表符和换行符
* \b		表示匹配到了边界
* abc|def	或模式匹配
* () 		分组匹配 RegExp.$1,$2,$3 获取模式中第1,2,3对应的字符串
* ?			贪婪和惰性