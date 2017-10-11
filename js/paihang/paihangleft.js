$(document).ready(function () {
    addPaihangRightWidth();
    $(window).resize(function () {
        addPaihangRightWidth()
    });
    changeFenLei();//分类列表切换样式
    scrollDown();//监听滚动
});
var idName='all_content';
function addPaihangRightWidth() {
    var $clienWidth = $('.base').width();
    var widthleft = $('.p-nei-left').width();
    var width = parseInt($clienWidth)-widthleft-1;
    $('#p-nei-right').css('width',width+'px')
}

function changeFenLei() {
    var $li =$('.p-lh-li');
    var $leftli = $('.p-l-li');
    $li.click(function () {
        idName = $(this).data('class');
        if($(this).hasClass('p-l-liclick')){
            return
        }else {
            $(this).addClass('p-l-liclick').siblings().removeClass('p-l-liclick');
            $('#'+idName).removeClass('jq_hide').siblings('.p-nei-all').addClass('jq_hide');
        }
    });
    $leftli.click(function () {
        if($(this).hasClass('p-li-active')){
            return
        }else {
            $(this).addClass('p-li-active').siblings().removeClass('p-li-active');
        }
    })
}

function scrollDown() {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight === scrollHeight) {
            // 当数据没有加载好时执行
            $('#loding').removeClass('jq_hide');
            // 当数据加载好时
            $('#loding').addClass('jq_hide');
        }
    });
}
