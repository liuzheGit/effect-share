
$(function () {
        $('#main').css({
            "margin-top":window.innerHeight/2+"px",
            "margin-left":window.innerWidth/2+"px",
            "top":"-"+$("#main").height()/2+"px",
            "left":"-"+$("#main").width()/2+"px"
        });
        $(window).resize(function () {
            $('#main').css({
                "margin-top":window.innerHeight/2+"px",
                "margin-left":window.innerWidth/2+"px",
                "top":"-"+$("#main").height()/2+"px",
                "left":"-"+$("#main").width()/2+"px"
            });
        })
});


