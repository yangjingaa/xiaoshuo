$(document).ready(function () {
    showHideContent();
    showHideContentPing();
    addStart()
});

function showHideContent() {
    var p = parseInt($('#bs-contentp').height());
    var num = 108;
    var a = 0;
    if (p <= num) {
        return
    } else {
        var $impP = $('.br-xialass');
        $impP.removeClass('jq_hide').click(function () {
            a = changePinglun(a, p, num, '.bd-jianjie')
        })
    }
}

function showHideContentPing() {

    var p = parseInt($('#jq_wid_p').height());
    var num = 279;
    var a = 0;
    if (p <= num) {
        $('#b_ping').text('没有更多评论了')
    } else {
        var $impP = $('#b_ping');
        $impP.click(function () {
            a = changePinglun(a, p, num, '.bd-edmax', '#b_ping')
        })
    }
};

function changePinglun(a, p, num, em1, em2) {
    if (a === 0) {
        $(em1).css('maxHeight', p);
        if (em2) {
            $(em2).text('收起评论');
        }
        a++;
    } else {
        $(em1).css('maxHeight', num);
        if (em2) {
            $(em2).text('更多评论');
        }
        a = 0;
    }
    return a;
}
// 添加评论星星，参数位评分
function addStart() {
    var num = 5;
    var $list = $('.bp-star');
    for (var m=0;m<$list.length;m++){
        var str='';
        var starName=[];
        var score = $($list[m]).data('score')||0;
        for(var i=0;i<score;i++){
            starName.push('liang-star')
        }
        while (starName.length<num){
            starName.push('nliang-star')
        }
        for(var l=0;l<num;l++){
            str+='<span class='+ starName[l] +'></span>'
        }
        $($list[m]).append(str)
    }


}
