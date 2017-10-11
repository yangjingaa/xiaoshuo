$(document).ready(function () {
    addBaseHeight();
    clickStartPing();
    pl_pinglun();
    submitPingLun();//提交评论
    getFontLength();//监听评论输入
});
var score;
// 点击星星评分
function clickStartPing() {
    $('.pls-star').click(function () {
        var star = $(this).find('span');
        for(var i= 0 ; i<star.length;i++){
            $(star[i]).removeClass('xingxing')
        }
    });
    $('.pls-star span').click(function (e) {
        e.stopPropagation();
        score = $(this).index()+1;
        for(var i=0;i<score;i++){
            var spanx =$('.pls-star span').eq(i);
            $(spanx).addClass('xingxing')
        }
        var num = 5-score;
        for(var i=0;i<num;i++){
            var nums =score+i;
            var spanx =$('.pls-star span').eq(nums);
            $(spanx).removeClass('xingxing')
        }
    });
}
var xuanzhong=false;
// 选中评论，隐藏提示
function pl_pinglun() {
    $('.pl-pinglun').click(function () {
        $('p').remove();
        xuanzhong=true;
    })
}
//提交评论

function submitPingLun() {
    $('.pl-submit').click(function () {
        if(!xuanzhong){
            alert('请填写评论')
            return;
        }
        var pc=$(".pl-pinglun").text();
        var length=pc.length ||0;
        if (length < 6){
            alert('输入内容不少于6个字')
            return;
        }
    })
};

// 获取输入字符长度

function getFontLength() {
    var $font = $('.pl-pinglun');
    $font.bind('input propertychange',function () {
        var nums = $('.pl-pinglun').text().length;
        $('.plz-one').text(nums)
    })
}