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

$(function () {
    var auto_updating_chart;

    $(".dau_line").peity("line", {width: 120, height: 45, colour: 'green'});
    $(".dnu_line").peity("line", {width: 120, height: 45, colour: 'orange'});

    // clouds
    $("#chat_words").jQCloud(word_list);

    // dynamic progressbars
    var progress = $("#dynamic-progresses .bar");
    var final = progress.parent().css("width").replace("px", "");
    var current = progress.css("width").replace("px", "");
    var timer = setInterval(function() { 
        if(++current < final) {
            progress.css("width", current + "px");
            progress.parent().prev().html(Math.round(current * 100 / final) + "%");
        } else {
            current = 1;
            // progress.css("width", final + "px");
            // progress.parent().prev().html("100%");
            // clearInterval(timer);
        }
    }, 100);

    // sparklines
    $("#visitors").sparkline([300,600,700,500,500,800,300,500,800,300,800,400], {type: 'line'});
    $("#sales").sparkline([700,600,700,600,800,500,900,300,600,800,500], {type: 'bar'});
    $("#register").sparkline([600,700,700,600,500,700,300,300,900,600,300,500], {type: 'line'});
    $("#orders").sparkline([800,600,700,800,600,400,600,400,800,600,400], {type: 'bar'});

    // updating
    var updatingChart = $(".updating-chart").peity("line", { width: 120, height: 45, colour: 'red' });
    setInterval(function() {
      var random = Math.round(Math.random() * 10)
      var values = updatingChart.text().split(",")
      values.shift()
      values.push(random)

      updatingChart
        .text(values.join(","))
        .change()
    }, 1000);

    $('#cpu').easyPieChart({
       animate: 2000,
       lineWidth: 10,
       barColor: 'orange'
    });

    $('#mem').easyPieChart({
       animate: 2000,
       lineWidth: 10,
       barColor: 'red'
    });

    var g1 = new JustGage({
        id: "gauge_visited",
        value: getRandomInt(60, 100),
        min: 0,
        max: 100,
        title: "Visitors",
        shadowOpacity: 1,
        shadowSize: 0,
        labelFontColor: '#999',
        valueFontColor: '#999',
        shadowVerticalOffset: 10,
        gaugeWidthScale: 0.5,
        levelColors: [
          "#00fff6",
          "#ff00fc",
          "#1200ff"
        ]  
    }); 

    var g2 = new JustGage({
        id: "gauge_request",
        value: getRandomInt(60, 100),
        min: 0,
        max: 100,
        title: "Request",
        shadowOpacity: 1,
        shadowSize: 0,
        labelFontColor: '#999',
        valueFontColor: '#999',
        shadowVerticalOffset: 10,
        gaugeWidthScale: 0.5,
        levelColors: [
          "#1200ff",
          "#00fff6",
          "#ff00fc"
        ]  
    });

    var g3 = new JustGage({
        id: "gauge_orders",
        value: getRandomInt(60, 100),
        min: 0,
        max: 100,
        title: "Orders",
        shadowOpacity: 1,
        shadowSize: 0,
        labelFontColor: '#999',
        valueFontColor: '#999',
        shadowVerticalOffset: 10,
        levelColors: [
          "#ff00fc",
          "#00fff6",
          "#1200ff"
        ]     
    }); 

    var g4 = new JustGage({
        id: "gauge_task",
        value: getRandomInt(60, 100),
        min: 0,
        max: 100,
        title: "Tasks",
        shadowOpacity: 1,
        shadowSize: 0,
        labelFontColor: '#999',
        valueFontColor: '#999',
        shadowVerticalOffset: 10,
        levelColors: [
          "#00fff6",
          "#1200ff",
          "#ff00fc",
        ]     
    }); 

    setInterval(function() {
      g1.refresh(getRandomInt(60, 100));
      g2.refresh(getRandomInt(60, 100));
      g3.refresh(getRandomInt(60, 100));
      g4.refresh(getRandomInt(60, 100));
    }, 2000);

    // server flot
    var data = [], totalPoints = 300;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function () {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1)
                updateInterval = 1;
            if (updateInterval > 2000)
                updateInterval = 2000;
            $(this).val("" + updateInterval);
        }
    });

    // setup plot
    var options = {
        series: { shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { show: false },
        xaxis: { show: false }
    };
    var plot = $.plot($("#server_request"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();

    // morris
    Morris.Donut({
      element: 'mobile_device',
      data: [
        {value: 40, label: 'Android'},
        {value: 45, label: 'iOS'},
        {value: 10, label: 'Window Phone'},
        {value: 5, label: 'Palm'}
      ],
      labelColor: '#999',
      backgroundColor: '#202020',
      formatter: function (x) { return x + "%"},
       colors: [
        '#0BA462',
        '#202020',
        '#801dae',
        '#383838']
    }); 

    Morris.Donut({
      element: 'area_orders',
      data: [
        {value: 45, label: 'New York'},
        {value: 35, label: 'Seattle'},
        {value: 10, label: 'Los Angeles'},
        {value: 5, label: 'San Francisco'}
      ],
      labelColor: '#999',
      backgroundColor: '#202020',
      formatter: function (x) { return x + "%"},
      colors: [
        '#1b1b1b',
        '#383838',
        '#2a2a2a',
        '#b0a4e3',]
    });  

    $("div.msg-items-container, #messages-box").mCustomScrollbar({scrollButtons:{enable:true } });
    
    $("#btn-send").click(function() {
      $.bootstrapGrowl("<img src='img/icons/exclamation.png' alt='' /> Message sent!", {
          type: 'info',
          align: 'center',
          stackup_spacing: 30
      });
      $(this).html('<i class="icon-flag"></i> Completely');
      setTimeout(function() { $("#btn-send").html('<i class="icon-flag"></i> Send Messages'); }, 3000);
    });

    $(".todo .check").each(function() {
        $(this).bind('click', function(){
            $(this).toggleClass("checked");
            $(this).next().toggleClass("done");
            $(this).next().next().toggleClass("done");
        });
    });

    $(".todo .level").each(function() {
        $(this).bind('click', function(){
            if($(this).html().trim() == '<i class="icon-star-empty"></i>')
                $(this).html('<i class="icon-star"></i>');
            else
                $(this).html('<i class="icon-star-empty"></i>');
        });
    });

    // jqvmap
    jQuery('#sales_vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#272727',
        color: '#999',
        hoverOpacity: 0.7,
        selectedColor: '#fff',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'linear',
        onRegionOver: function(event, code, region)
        {
            $(".leaderboard ul li").not(".title").each(function() {
                if($(this).attr('data-rel') == code.toUpperCase()) 
                    $(this).toggleClass("hover");
                else 
                    $(this).removeClass("hover");
            });
        },
        onRegionClick: function(element, code, region) {
            var total = 0;

            $(".leaderboard ul li").not(".title").each(function() {
                if($(this).attr('data-rel') == code.toUpperCase()) {
                    $(this).toggleClass("selected");
                    total += $(this).attr('data-value') * 1;
                } else {
                    $(this).removeClass("selected");
                }
            });

            $("$.leaderboard .total").html("Total: $" +  total);
        }
    });

    // leaderboard
    $(".leaderboard ul").each(function() {
        $(this).find("li").not(".title").tsort({attr: 'data-value', order: 'desc'});
    });
});