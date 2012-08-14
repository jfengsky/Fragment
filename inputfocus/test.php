<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>输入框文字消失</title>
	<style>
	body{
		font-size:12px;

	}
	.demo{
		border:1px solid #ccc;
		height: 50px;
		width:200px;
		padding:20px;
		position:relative;
	}
	.demo label{
		position:absolute;
		left:26px;
		top:27px;
		cursor:text;
	}
	.demo label.on{
		color:#ccc;
	}
	</style>
	<script type="text/javascript" src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>
</head>
<body>
<div class="demo" id="demo">
	<label for="J_test" id="J_test_lab">请输入文字</label>
	<input type="text" name="" id="J_test">
</div>
<script type="text/javascript" src="tiphide.js"></script>
</body>
</html>