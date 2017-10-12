$(document).ready(function () {
    // 设置热门小说的宽度
    getHotStroWidth();
    $(window).resize(function () {
        getHotStroWidth();
    })
    nrarrRead();
    silde();
});

function getHotStroWidth() {
    var $hotStro = $('#i-hot-nov');
    var marginLeft;
    var screenWidth = parseInt($('#i-content').width());
    var $stroList = $hotStro.children('.i-c-stroe');
    var width = $($stroList[0]).width() + 6;
    console.log(width)
    var widthAll = width * $stroList.length;
    var x, movespacing;
    $hotStro.css('width', widthAll + 'px');
    $hotStro.on('touchstart', function (e) {
        x = e.originalEvent.targetTouches[0].pageX;
        marginLeft = $hotStro.css('marginLeft');
    });
    $hotStro.on('touchmove', function (e) {
        var touch = e.originalEvent.targetTouches[0]
        var xa = touch.pageX;
        movespacing = parseInt(xa) - parseInt(x);
        var left = movespacing + parseInt(marginLeft);
        if (left > 0 || (-left + screenWidth - 8) > widthAll) {
            return
        }
        $hotStro.css('marginLeft', left)
    })
}

function nrarrRead() {
    var $read = $('#r_near_read');
    var $noLogin = $('.r-no-login');
    var $reads = $('.r-zuijin-readw');
    var num = 0;
    $read.click(function () {
        $('#r_content').toggleClass('jq_hide')
        if (num === 0){
            $noLogin.toggleClass('jq_hide')
        }else {
            $reads.toggleClass('jq_hide')
        }
    })
}