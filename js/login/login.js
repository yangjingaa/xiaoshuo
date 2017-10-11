var timer;
$(document).ready(function () {
    selctXieyi();
    yanZhengWidth();
    $(window).resize(function () {
        yanZhengWidth();
    });
    daojishi();
    next();
});
function selctXieyi() {
    $('#select').click(function () {
        $(this).toggleClass('select')
    })
}

function yanZhengWidth() {
    var widths =$('.base').width();
    var yanWidth = parseInt(widths)*0.79-91;
    $('.l-co-yanzheng').css('width',yanWidth)

}

function daojishi() {
    var yanzheng = $('.l-con-spans');
    var num =60;
    yanzheng.click(function () {
        yanzheng.text(num+'s后再次发送')
        if(timer){
            return
        }
        timer =setInterval(dijianTime,1000)
    });
    function dijianTime() {
        if (num===0){
            yanzheng.text('获取验证码');
            clearInterval(timer);
            return
        }
        num--;
        yanzheng.text(num+'s后再次发送')
    }
}

function next() {
    var next = $('.l-next')
    next.click(function () {
        if(timer){
            return
        }
        $('.l-r-1').addClass('jq_hide');
        $('.l-r-2').removeClass('jq_hide')
    })
}