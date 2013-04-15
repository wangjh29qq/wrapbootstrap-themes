$(document).ready(function() {
  var lb = $(".leaderboard").jqleaderboard();
  var lb_object = lb.data("leaderboard");
  lb_object.leaderboard_select('CA');

  $('#demo_table').dataTable({
     "sPaginationType": "full_numbers"
  });
});