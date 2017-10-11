$(document).ready(function () {
    addSearchBorder()
});
function addSearchBorder() {
    var $span=$('.s-scontent').children();
    var color=['#1299e6','#f22f69','#159b15','#ff7b1a'];
    for(var i= 0; i<$span.length;i++){
        var n =Math.floor(Math.random()*4);
        $($span[i]).css({
            'color':color[n],
            'border-color':color[n]
        })
    }
}