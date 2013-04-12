$(document).ready(function() {
	$(".leaderboard ul").each(function() {
      $(this).find("li").not(".title, .rank").tsort({attr: 'data-value', order: 'desc'});
  });

  $(".leaderboard ul li").not(".title, .rank").each(function() {
    $(this).append('<span class="value">$' + $(this).attr('data-value') + '</span>');
  });


  $(".leaderboard ul li").not(".title, .rank").bind('mouseover', function() {
    var code = $(this).attr("data-rel");

    $(".leaderboard ul li").not(".title, .rank").each(function() {
        if($(this).attr('data-rel') == code.toUpperCase()) {
            $(this).toggleClass("hover");
        } else {
            $(this).removeClass("hover");
        }
    });
  });  

  $(".leaderboard ul li").not(".title, .rank").bind('click', function() {
    var total = 0;
    var code = $(this).attr("data-rel");

    $(".leaderboard ul li").not(".title, .rank").each(function() {
        if($(this).attr('data-rel') == code.toUpperCase()) {
            $(this).toggleClass("selected");
            total += $(this).attr('data-value') * 1;
            $(this).parent().children(".rank").first().css('display', 'block').html($(this).prevAll().length - 1);
        } else {
            $(this).removeClass("selected");
        }
    });

    $(".leaderboard .total").html("Total: $" +  total);
  });

  $(".leaderboard ul li").not(".title, .rank").first().trigger('click');

  $('#demo_table').dataTable({
     "sPaginationType": "full_numbers"
  });
});