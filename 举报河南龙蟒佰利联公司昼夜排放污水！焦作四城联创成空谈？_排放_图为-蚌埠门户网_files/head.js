$(document).ready(function () {
    //时间
    displaydate();
    //导航
    $('#menu').posfixed({
        distance: 0,
        pos: 'top',
        type: 'while',
        hide: false
    });
    //导航下拉菜单
    $('.mjt').hover(
		function () {
		    $('ul', this).show();
		},
		function () {
		    $('ul', this).hide();
		}
	);
    //右部漂浮菜单

   var kd = document.documentElement.clientWidth - 1200;
if(document.getElementById('tbox')&&kd)
{
    if (kd > 0) {
        document.getElementById('tbox').style.left = kd / 2 - 85 + 'px';
        document.getElementById('tbox').style.display = 'block';
    }
    else {
        document.getElementById('tbox').style.display = 'none';
    }
}

});
function displaydate() {
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var w = Week[now.getDay()];        //周

    var clock = year + "年";

    if (month < 10)
        clock += "0";

    clock += month + "月";

    if (day < 10)
        clock += "0";

    clock += day + "日 ";

    clock += "周" + w;
    $('#currentdate').text(clock);
}