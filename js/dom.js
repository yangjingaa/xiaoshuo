// 点击改变男女样式和切换男女显示
function changeShow(clivkEml,changeEml) {
    var $li =$(clivkEml);
    var $leftli = $(changeEml)?$(changeEml):'';
    $li.click(function () {
        var classa = $(this).data('class');
        if($(this).hasClass('p-l-liclick')){
            return
        }else {
            $(this).addClass('p-l-liclick').siblings().removeClass('p-l-liclick');
            $('#'+classa).removeClass('jq_hide').siblings('.p-nei-all').addClass('jq_hide')
        }
    })
}

// 添加灰色背景给整体
function addBaseHeight() {
    var a = $(window).height();
    $('.jq_base').css({
        'height':a,
        'background':'#f3f3f3'
    })
}

// 切换选中筛选状态
function adaad(el,sel) {
    $(el).click(function () {
        if($(this).hasClass(sel)){
            return
        }
        $(this).addClass(sel).siblings().removeClass(sel)
    })
}

// 切换图象
function showFenLei(img,shaixuan) {
    var imgId = $(img);
    imgId.click(function () {
        var img= $(this).find('img');
        var src=$(img).attr('src');
        var strh;
        if(src.indexOf('xuana_')>=0){
            strh=src.replace(/xuana_/,"xuan_");
            if(shaixuan){
                $(shaixuan).toggleClass('jq_hide')
            }
        }else {
            strh=src.replace(/xuan_/,"xuana_");
            if(shaixuan){
                $(shaixuan).toggleClass('jq_hide')
            }
        }
        $(img).attr('src',strh)
    })

}

// 滑动
function silde() {
    var $body = $('.base');
    var $div = $('#rb-head')||false;
    var width = document.body.clientWidth;
    var widthBase = parseInt(width)-parseInt($body.width());
    $body.css('marginLeft', width + 'px');
    $body.animate({
        marginLeft:widthBase*0.5+'px'
    }, 300);
    if($div){
        $div.css('left', width*1.5 + 'px');
        $div.animate({
            left: '50%'
        }, 300);
    }
}

function head() {
    $('.p-h-caidan').click(function () {
        $('.xh-xiala').toggleClass('jq_hide')
    });
}