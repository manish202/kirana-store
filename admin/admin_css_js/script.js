$(function(){
    //dropdown toggle
    $(".dropdown h3").on("click",function(){
        $(".dropdown ul").toggle();
    });

    //sidebar toggling
    $("#toggle-side,#close-side").on("click",function(){
        $(".sidebar").toggleClass("active");
    });
});