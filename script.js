$(document).ready(function(){
  // початок випадаючого списку
    $(".dropdown").click(function(){
      $(".menu").toggleClass("showMenu");
        $(".menu > li").click(function(){
          $(".dropdown > p").html($(this).html());
            $(".menu").removeClass("showMenu");
        });
    });
    // початок форми
    $('input').change(function() {
      if($(this).val())
          $(this).addClass('has_value');
        else
          $(this).removeClass('has_value');
    });
  

  $('textarea').change(function() {
    if($(this).val())
        $(this).addClass('area');
      else
        $(this).removeClass('area');
  });
});