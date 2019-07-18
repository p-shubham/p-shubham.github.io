$(window).on('load',function(){
     $(".loader").css('display','none');
});

$(document).ready(function(){
    $(window).bind('scroll',function(e){
      var numSections = $('section').length;
        
        $('#menu li').removeClass('active');     
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
          }
          else {
            thisTop = 0;
          }
          
          var docTop = $(document).scrollTop();
          
          if(docTop >= thisTop && (docTop < nextTop)){
            $('#menu li').eq(i).addClass('active');
            $('#menu li').eq(i-1).removeClass('active');
          }
        });

    });
    $('#menu li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });
});
