$(document).ready(function () {
    centerHead();
    $(window).resize(function () {
        centerHead();
    });
    silde();
    head();
    showHiden();
    changeFontSize();
    changeBackground();//点击选中，换书籍背景及颜色
    changeXuanXiang();//底部按钮点击，切换显示
    showFenLei('.rb-bianhua');
});


function centerHead() {
    var clienWidth = $('.base').width();
    var clienHeight = document.body.clientHeight;
    $('.rb-width').each(function () {
        $(this).css('width', clienWidth + 'px')
    })
    $('.rb-content,.rb-wenzhang').css('minHeight', clienHeight - 40 + 'px')
}

function showHiden() {
    var $kuang = $('#rb-ckuang');
    var $shuqian = $('.rb-shuqian');
    $kuang.click(function () {
        $('.jq_read').each(function () {
            if ($(this).hasClass('jq_hide')) {
                $(this).removeClass('jq_hide').animate({opacity: '1'}, 'slow')
            } else {
                $(this).animate({opacity: '0'}, 'slow', function () {
                    $(this).addClass('jq_hide')
                })
            }
        })
    });
    $shuqian.click(function () {
        $(this).toggleClass('jq_ff7e22');
    })
}

// 改变字体大小,num为字体大小。
function changeFontSize(num) {
    var $qiu = $('#jq_qiu');
    var x, movex, fontx, qiux;
    var n = [0, 33, 66, 99, 132, 165];
    var f = [12, 14, 15, 16, 18];
    $qiu.on('touchstart', function (e) {
        x = e.originalEvent.targetTouches[0].pageX;
        qiux = parseInt($qiu.css('left'));
    });
    $qiu.on('touchmove', function (e) {
        movex = e.originalEvent.targetTouches[0].pageX;
        var cx = movex - x;
        var mx = qiux + parseInt(cx);
        if (mx > 165) {
            mx = 165
        }
        if (mx < 0) {
            mx = 0
        }
        $qiu.css('left', mx + 'px');
        $('.rb-btiao').css('width', mx + 'px');
        for (var i = 0; i < n.length; i++) {
            var n1 = n[i];
            var n2 = n[i + 1];
            if (n1 < mx && mx <= n2) {
                fontx = f[i];
                var $p = $('.rb-reirong p');
                $p.css('fontSize', fontx + 'px')
            }
        }

    });
    if (num) {
        var nums = f.indexOf(num);
        var leftss = n[nums];
        $qiu.css('left', leftss + 'px');
        $('.rb-btiao').css('width', leftss + 'px');
    }
}

function changeBackground() {
    var $span = $('.rb-color span');
    var $font = $('.rb-wenzhang');
    var $title = $('.rb-head');
    var imgStr = "<img src=\"../../image/read/read_duigou_icon.png\" width=\"12\" height=\"9\" alt=\"\">";
    $span.click(function () {
        var lengths = parseInt($(this).has('img').length);
        var color = $(this).css('background');
        if (lengths === 0) {
            $(this).append(imgStr).siblings().find('img').remove();
        }
        var index = parseInt($(this).index());
        if (index < 4) {
            $title.css('background', '#000');
            $font.css({'background': color, 'color': '#333'})
        } else if (index === 4) {
            $title.css('background', '#26051d');
            $font.css({'background': color, 'color': '#6d0c4a'});
        } else if (index > 4 && index <= 6) {
            $title.css('background', '#fefefe');
            $font.css({'background': color, 'color': '#fff'})
        } else {
            $title.css('background', '#000');
            $font.css({'background': color, 'color': '#3b210a'})
        }

    })
}


function changeXuanXiang() {
    var $xuanxiang = $('.rb-bianhua');
    var sids = ['rb-zhangjie', 'rb_font', 'rb_color'];
    var rbHeight = document.body.clientHeight + 2;
    $xuanxiang.click(function () {
        var keyId = $(this).data('key');
        if (keyId === 'rb_yejian') {
            $('.rb-wenzhang').toggleClass('rb-sback');
            return;
        }
        if (keyId === 'rb_mulu') {
            $('#rb_mulu').toggleClass('jq_hide');
            if (!$('#rb_mulu').hasClass('jq_hide')) {
                $('#rb_mulu').css('height', rbHeight + 'px');
                $('#rb_mulu .rb-mulu').css('minHeight', rbHeight + 'px');
                $('body').css('overflow', 'hidden');
                hideMuLu();
            }
            return;
        }
        if (!$('#' + keyId).hasClass('jq_hide')) {
            $('#' + keyId).addClass('jq_hide');
            $('#rb-zhangjie').removeClass('jq_hide');
            return;
        }
        $('#' + keyId).removeClass('jq_hide');
        for (var i = 0; i < sids.length; i++) {
            if (sids[i] === keyId) {
                continue;
            }
            $('#' + sids[i]).addClass('jq_hide');
        }
    })
}

function hideMuLu() {
    $('.rb-yinying').click(function () {
        $(this).parent('div').addClass('jq_hide')
        $('body').css('overflow', 'auto');
    })
}