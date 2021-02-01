(function (){
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("你好，旅行者！ ","(๑‾ ꇴ ‾๑)","快乐的时光总是过得飞快。 ","欢迎拜访方方土的小窝！ ","祝你平安幸福！ ","[]~(~▽~)~*","留言往来送甘霖,点点滴滴润我心。 ","言语不多情谊重,至真至圣贵如金。 ","φ(≧ω≦*)♪","感恩遇见！ ","有阳光的地方，就有我灿烂的祝福 ");
			var getRandomColor = function(){
  			return  '#' + 
			(function(color){
    		return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
      		&& (color.length == 6) ?  color : arguments.callee(color);
  			})('');
			}
            var $i = $("<span />").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999999999999 ,
                "top": y - 5,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": getRandomColor
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 588,
                    "opacity": 0
                },
                4000,
                function() {
                    $i.remove();
                });
        });
    });
})();

