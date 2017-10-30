$(document).ready(function(){
    var height = $(window).outerHeight();
    $(window).resize(function(){
        height = $(this).outerHeight();
    })
   $("p1, #aboutImage").on('click',function(event){
       $("html, body").animate({ scrollTop: height }, "slow");  
   })
   $("p2, #portfolioImage").on('click',function(event){
       $("html, body").animate({ scrollTop: height*2 }, "slow");  
   })
   $("p3, #blogImage").on('click',function(event){
       $("html, body").animate({ scrollTop: height*3 }, "slow");  
   })
   $("p4, #contactImage").on('click',function(event){
       $("html, body").animate({ scrollTop: height*4 }, "slow");  
   })

function selected(el) {
    el = $(el);
    el.addClass("selected");
    el.siblings().addClass("corner");
}
