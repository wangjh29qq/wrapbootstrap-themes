$(document).ready(function() {
  // dynamic progressbar
  $("#dynamic-progresses .bar").each(function() {
    var final = $(this).parent().css("width").replace("px", "");
    var current = $(this).css("width").replace("px", "");
    step_progress($(this), current, final);
  });

  // growl messages
  $("#btn-show-growl-default").click(function() { show_growl_default(); });
  $("#btn-show-growl-success").click(function() { show_growl_success(); });
  $("#btn-show-growl-error").click(function() { show_growl_error(); });
  $("#btn-show-growl-info").click(function() { show_growl_info(); });

  $("#btn-show-growl-left").click(function() { show_growl_left(); });
  $("#btn-show-growl-center").click(function() { show_growl_center(); });
  $("#btn-show-growl-right").click(function() { show_growl_right(); });

  $("#btn-show-growl-1").click(function() { show_growl_1(); });
  $("#btn-show-growl-2").click(function() { show_growl_2(); });
  $("#btn-show-growl-3").click(function() { show_growl_3(); });

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

  // smart tab
  $('#tabs1').smartTab({autoProgress: false,stopOnFocus:true,transitionEffect:'vSlide'});

  // smart wizard
  $('#wizard').smartWizard();

  // jquery ui
  $("#default-slider").slider();

  $("#eq-slider > span").each(function() {
    var value = parseInt( $( this ).text(), 10 );
    $( this ).empty().slider({
      value: value,
      range: "min",
      animate: true,
      orientation: "vertical"
    });
  });

  $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
  });
  $("#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );

  $("#slider-increase").slider({
    value:100,
    min: 0,
    max: 500,
    step: 50,
    slide: function( event, ui ) {
      $("#inc-amount").val( "$" + ui.value );
    }
  });
  $("#inc-amount").val( "$" + $( "#slider-increase" ).slider( "value" ) );

});

// growl notifications
function show_growl_default() {
  $.bootstrapGrowl("<img src='img/icons/lightbulb.png' alt='' /> Hey, This is a default message.");
};

function show_growl_success() {
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/lock.png' alt='' /> This is success message.", { type: 'success' });
  }, 1000);
}

function show_growl_error() {
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/heart.png' alt='' /> Error message, danger, no dismiss!", {
          type: 'error',
          allow_dismiss: false
      });
  }, 1000);
}

function show_growl_info() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, align right!", {
          type: 'info'
      });
  }, 1000);
}

function show_growl_left() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, align left!", {
          type: 'info',
          align: 'left'
      });
  }, 1000);
}

function show_growl_center() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, align center!", {
          type: 'info',
          align: 'center'
      });
  }, 1000);
}

function show_growl_right() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, align right!", {
          type: 'info',
          align: 'right'
      });
  }, 1000);
}

function show_growl_1() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, timeout = 1!", {
          type: 'info',
          align: 'right'
      });
  }, 1000);
}

function show_growl_2() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, timeout = 2!", {
          type: 'info',
          align: 'right'
      });
  }, 2000);
}

function show_growl_3() {  
  setTimeout(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Info message, timeout = 3!", {
          type: 'info',
          align: 'right'
      });
  }, 3000);
}

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