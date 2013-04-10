$(document).ready(function() {
  // dynamic progressbar
  $("#dynamic-progresses .bar").each(function() {
    var final = $(this).parent().css("width").replace("px", "");
    var current = $(this).css("width").replace("px", "");
    step_progress($(this), current, final);
  });

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    editable: true,
    events: [
      {
        title: 'All Day Event',
        start: new Date(y, m, 1)
      },
      {
        title: 'Long Event',
        start: new Date(y, m, d-5),
        end: new Date(y, m, d-2)
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d+4, 16, 0),
        allDay: false
      },
      {
        title: 'Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false
      },
      {
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        title: 'Birthday Party',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false
      },
      {
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/'
      }
    ]
  });

  $("a[data-toggle=tooltip]")
    .tooltip()
    .click(function(e) {
      e.preventDefault()
    })
  
  // popover demo
  $("a[data-toggle=popover]")
    .popover()
    .click(function(e) {
      e.preventDefault()
    })

  $('.colorpicker').colorpicker();
  $('.datepicker').datepicker();

  $('#t1').clockface();  
  $('#t2').clockface({
    format: 'HH:mm',
    trigger: 'manual'
  });
     
  $('#toggle-btn').click(function(e){
      e.stopPropagation();
      $('#t2').clockface('toggle');
  });

  $('#t3').clockface({
      format: 'H:mm'
    }).clockface('show', '14:30'); 

  $('#reservation').daterangepicker();   

  // qr
  jQuery('#qrcode').qrcode({
    text  : "http://wrapbootstrap.com",
    width: 150, 
    height: 150
  });
});

function step_progress(progress, current, final) {
  var timer = setInterval(function() {
    if(++current < final) {
      progress.css("width", current + "px");
      progress.parent().prev().html(Math.round(current * 100 / final) + "%");
    } else {
      // progress.css("width", final + "px");
      // progress.parent().prev().html("100%");
      // clearInterval(timer);
      current = 1;
    }
  }, 50);
}