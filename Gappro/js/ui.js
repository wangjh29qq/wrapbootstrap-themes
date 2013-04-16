var word_list = [
    {text: "Gold", weight: 15, link: "http://wrapbootstrap.com/"},
    {text: "Gems", weight: 14, html: {title: "Gems Link", "class": "custom-class"}, link: {href: "http://wrapbootstrap.com/", target: "_blank"}},
    {text: "Lorem", weight: 13},
    {text: "Ipsum", weight: 10.5},
    {text: "Dolor", weight: 9.4},
    {text: "Sit", weight: 8},
    {text: "Amet", weight: 6.2},
    {text: "Consectetur", weight: 5},
    {text: "Adipiscing", weight: 5},
    {text: "Elit", weight: 5},
    {text: "Nam et", weight: 5},
    {text: "Leo", weight: 4},
    {text: "Sapien", weight: 4},
    {text: "Pellentesque", weight: 3},
    {text: "habitant", weight: 3},
    {text: "morbi", weight: 3},
    {text: "tristisque", weight: 3},
    {text: "senectus", weight: 3},
    {text: "et netus", weight: 3},
    {text: "et malesuada", weight: 3},
    {text: "fames", weight: 2},
    {text: "ac turpis", weight: 2},
    {text: "egestas", weight: 2},
    {text: "Aenean", weight: 2},
    {text: "vestibulum", weight: 2},
    {text: "elit", weight: 2},
    {text: "sit amet", weight: 2},
    {text: "metus", weight: 2},
    {text: "adipiscing", weight: 2},
    {text: "ut ultrices", weight: 2},
    {text: "justo", weight: 1},
    {text: "dictum", weight: 1},
    {text: "Ut et leo", weight: 1},
    {text: "metus", weight: 1},
    {text: "at molestie", weight: 1},
    {text: "purus", weight: 1},
    {text: "Curabitur", weight: 1},
    {text: "diam", weight: 1},
    {text: "dui", weight: 1},
    {text: "ullamcorper", weight: 1},
    {text: "id vuluptate ut", weight: 1},
    {text: "mattis", weight: 1},
    {text: "et nulla", weight: 1},
    {text: "Sed", weight: 1}
];

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

  // clouds
  $("#chat_words").jQCloud(word_list);
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