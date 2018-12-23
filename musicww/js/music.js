
/**
 * 
 * 用来控制播放器暂停和播放的
 * play 存储播放暂停状态的(0 1)
 * 
 */
$(function(){
    var play=1;
    $(".MusicPicButton").click(function(){
        if(play==0){
            $(".MusicPicButton").attr("src","image/music/pause.png");
            $(".MusicPlayProcess").removeClass("pause");
            $(".MusicPicName").removeClass("pause");
            $("audio").get(0).play();
            play=1;
        }else{
            $(".MusicPicButton").attr("src","image/music/play.png");
            $(".MusicPlayProcess").addClass("pause");
            $(".MusicPicName").addClass("pause");
            play=0;
            $("audio").get(0).pause();
        }
    });
    var aud = document.getElementById('Audio');
    aud.addEventListener('timeupdate',function () {
       if(aud.ended) {
           // aud.currentTime = 0;
           $(".MusicPicButton").attr("src","image/music/play.png");
           $(".MusicPlayProcess").addClass("pause");
           $(".MusicPicName").addClass("pause");
           play=0;
           $("audio").get(0).pause();
       }
    });
    
    //上一首
    //可以用多维数组来存放歌曲的各项信息
    var a = [['music/Alan Walker - Fade.mp3','Aline Walker-Fade'],['music/张宇 - 给你们.mp3','张宇-给你们']]; //用来存粗路径的
    $('#next').on('click',function () {
     //   $("audio").get(0).pause();
       setTimeout(function () {
           show();
       },1000);

        for(var i= 0; i<a.length;i++){
            if(a[i][0]==$('#Audio').attr('src')&&(i+1)<a.length){
                $('#Audio').attr('src',a[i+1][0]);
                $('#p').html(a[i+1][1]);
            }
        }
    });
    //上一首
    $('#font').on('click', function () {
        setTimeout(function () {
            show();
        },1000);
        for(var i= 0; i<a.length;i++){
            if(a[i][0]==$('#Audio').attr('src')&&(i-1)>=0){
                $('#Audio').attr('src',a[i-1][0]);
                $('#p').html(a[i-1][1]);
            }
        }
    });
    
    function show() {
        $(".MusicPicButton").attr("src","image/music/pause.png");
        $(".MusicPlayProcess").removeClass("pause");
        $(".MusicPicName").removeClass("pause");
        $("audio").get(0).play();
        play=1;
    }
});