$(function(){
    function DarkMode(){
        $("#day-night").children("i").toggleClass("fa-sun");
        $("#day-night").children("i").toggleClass("fa-moon");
        $(".bg-white").toggleClass("bg-dark");
        $(".text-dark").toggleClass("text-white");
        $(".hover-day").toggleClass("hover-night");
        $("#white-space").toggleClass("white-space-day");
        $("#white-space").toggleClass("white-space-night");
        $(".shadow-dark").toggleClass("shadow-white");
    }

    //darkmode localstorage setup..
    if(typeof Storage !== undefined){
        let darkval = localStorage.getItem('darkmode');
        if(darkval === null){
            localStorage.setItem("darkmode",0);
        }
        if(darkval == 1){
            DarkMode();
        }
    }

    //darkmode toggling..
    $("#day-night").on("click",function(e){
        e.preventDefault();
        if(typeof Storage !== undefined){
            let darkval2 = localStorage.getItem('darkmode');
            if(darkval2 == 0){
                localStorage.setItem("darkmode",1);
            }else{
                localStorage.setItem("darkmode",0);
            }
        }
        DarkMode();
    });

    //sidebar toggling..
    $("#toggle-side").on("click",function(e){
        e.preventDefault();
        $(".sidebar").addClass("active");
    });
    $(".sidebar-close,#white-space").click(function(e){
        e.preventDefault();
        $(".sidebar").removeClass("active");
    });

    //hide notification popup
    $(".hide-notification").on("click",function(e){
        e.preventDefault();
        $(this).parent('.notification').slideUp();
    });

    //image preview
    $(".set-image").on("click",function(){
        $(this).parent().prev('img').attr("src",$(this).attr('src'));
    });

});