/**
 * 自己写的domready
 * Author: andorid
 * Date: 12-6-19 下午9:42
 * Return: domready(function(){});
 */

(function(){
    window['domready'] = function(fn){
        /**
         * 判断浏览器
         * firefox,webkit525以上版本和ie9支持DOMContentLoaded事件
         */
        function UA(){
            var _this = this;
            this.agent = navigator.userAgent.toLowerCase();
            this.ver = function(){
                return parseInt(((_this.agent).match( /.+?(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1]);
            };
            this.shell = function(){
                if(/firefox/ig.test(_this.agent)){
                    return 'firefox'
                }else if(/MSIE/ig.test(_this.agent)){
                    return  'ie'
                }else if(/WebKit/ig.test(_this.agent)){
                    return 'webkit'
                }
            }
        }
        //firefox 处理办法
        var ua = new UA();
        if(ua.shell() == 'firefox' || ua.shell() == 'webkit' || (ua.shell() == 'ie' && ua.ver() >=9)){
            document.addEventListener("DOMContentLoaded", fn, false);
        }
        //ie
        if(ua.shell() == 'ie' && ua.ver() < 9){
            /*@cc_on @*/
            /*@if (@_win32)
             document.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");
             script = document.getElementById("__ie_onload");
             script.onreadystatechange = function() {
             if (this.readyState == "complete")
             fn(); // call the onload handler
             };
             @end @*/
        }
    }
})();