function fadeIn(){
    var text = $('.content').text().replace(/^\s+|\s+$/g,'');
    var length = text.length;

    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for(;i<length;i+=sp) {
        txt = text.substring(i,i+sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for(i = 0,length = html.length;i<length;i++) {
        !function(i){
            setTimeout(function(){
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            },i*400);
        }(i);
    }

    setTimeout(function() {
        $('.content').append('<img src="./public/anh.jpg" class="inserted-image">');
    }, length * 400); 
};



document.querySelector(".btn").onclick=()=>{
    if (window.innerWidth > 768) {
        document.querySelector(".btn-wrapper").style.display="none"
        document.querySelector("#myAudio").play()
        document.querySelector("#heart").hidden=false
        document.querySelector("body").style.backgroundColor="#542246"
        document.querySelector("#heart").hidden=false
        fadeIn()
    } else {
        document.querySelector(".btn-wrapper span").classList.remove("d-none")
    }
}
