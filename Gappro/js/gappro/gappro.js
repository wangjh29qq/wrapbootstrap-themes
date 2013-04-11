/*-----------------------------------------------------

[Javascript Functoins]

    Project: Gappro Theme
    Version: 1.0 
    Last Change: 03/18/2013
    Assign to: Bob Wang

    attention here please:
   		you should inlucde this file for using gappro uitilities.

	0. polyfill
    1. widget drag-drop
    2. menuitem drag-drop
    3. widget actions
    4. menu collapse & expand
    5. menu filters
    6. functions

-----------------------------------------------------*/

// webshims
$.webshims.polyfill();

// widget drag features
/*
$(".widget .widget-header").each(function() { 
	var widget = $(this);

	widget.draggable({
		cursor: "move",
		revert: "invalid",
		snap: "#workspace",

		start: function() {
			// collapse when moving 
			$(this).parent().find(".widget-content").slideUp();
			$(this).css("z-index", 10000);
		},
		stop: function () {
			// expand when over, but it were be fadeIn
			$(this).parent().find(".widget-content").slideDown();	
		}
	});
});

$("#workspace").droppable({
	accept: ".widget-header",
	activeClass: "sidebar-active",
	hoverClass: "sidebar-hover",
	tolerance: 'touch',

	drop: function(event, ui) {
		var widget = ui.draggable.parent();
		add_to_sidebar(widget, widget.find(".widget-header h3").html());
		ui.draggable.draggable('option', 'revert', true);
	}
});
*/

$("#btn-restore-all").bind('click', function() {
	$("#workspace .btn").not("#btn-restore-all").each(function() { $(this).trigger('click'); });
});

// menu drag features
$(".icon-menu > ul > li > a > i").each(function() {
	var menuitem = $(this).parent();

	menuitem.draggable({
		cursor: "move", 
		revert: "invalid",
		snap: ".navbar-inner form.form-search"
	});
});

$(".navbar-inner form.form-search").droppable({
	accept: ".icon-menu > ul > li > a",
	activeClass: "menuitem-active",
	hoverClass: "menuitem-hover",
	tolerance: 'touch',

	drop: function(event, ui) {
		var menuitem = ui.draggable;
		add_to_favlinks(menuitem.clone());
		ui.draggable.draggable('option', 'revert', true);
	}
});

// widget action controller
$(".widget .widget-header > a[rel='control']").each(function() {
	var action_name = $(this).attr("action");//.trim().toLowerCase();

	switch(action_name) {
		case 'close':
			$(this).html("<i class='icon-remove'></i>");
			$(this).bind('click', function() {
				$(this).parent().parent().slideUp();
			});
	        break;

		case 'hide':
	        $(this).html("<i class='icon-minus'></i>");
	        $(this).bind('click', function() {
				$(this).parent().next("div").slideToggle();
				if($(this).html().trim().toLowerCase() == '<i class="icon-minus"></i>')
					$(this).html('<i class="icon-plus"></i>');
				else
					$(this).html('<i class="icon-minus"></i>');
			});
			break;

		case 'code':
			$(this).html("<i class='icon-legal'></i>");
			$(this).bind('click', function() {
				var html = $(this).parent().parent().parent().html().trim();
				html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				var id = new Date().getTime().toString();
				$('<div id="' + id + '" class="modal hide fade" tabindex="-1" role="dialog"><div class="modal-body"><pre class="prettyprint lang-html linenums"></pre></div></div>').appendTo("body");
				html = style_html(html, 2, " ",  80);
				$("#" + id + " pre.prettyprint").html(html);
				prettyPrint();
				$("#" + id).modal();
				$("#" + id).on('hidden', function () {
					// remove from tree
					$(this).remove();
				});
			});
			break;

		case 'config':
			$(this).html('<i class="icon-cog"></i>');
			$(this).bind('click', function() {
				$("#" + $(this).attr("target-box")).modal();
			});
	        break;

		case 'help':
			$(this).html('<i class="icon-question-sign"></i>');
			$(this).bind('click', function() {
				$("#" + $(this).attr("target-box")).modal();
			});
	        break;
	        
	    case 'thumb':
			$(this).html('<i class="icon-arrow-left"></i>');
			$(this).bind('click', function() {
				add_to_sidebar($(this).parent().parent(), $(this).parent().find("h3").html());
			});
	        break;
	    case 'full':
			$(this).html('<i class="icon-fullscreen"></i>');
			$(this).bind('click', function() {
				// safari bug when your using 2 monitors 
				// it get the master but your safari browser is on salve
				// var width = screen.width - 20;
				// var height = screen.height;
				var width = $(window).width();
				var height = $(window).height();

				if(!$(this).data('full')) {
					// save to restrore
					$(this).data('position', $(this).parent().parent().css('position'));
					$(this).data('left', $(this).parent().parent().css('left'));
					$(this).data('top', $(this).parent().parent().css('top'));
					$(this).data('width', $(this).parent().parent().css('width'));
					$(this).data('height', $(this).parent().parent().css('height'));
					$(this).data('background-color', $(this).parent().parent().css('background-color'));
					$(this).data('z-index', $(this).parent().parent().css('z-index'));

					// set fullscreen
					$(this).parent().parent().fadeIn().css({
						'position': 'absolute', 
						'left' : '0px', 'top': '0px', 
						'width': width, 'height': height,
						'background-color': '#272727',
						'z-index': 9999
					});

					// flag it
					$(this).data('full', true);
				} else {
					$(this).parent().parent().css({
						'position': $(this).data('position'), 
						'left' : $(this).data('left'), 'top': $(this).data('top'), 
						'width': $(this).data('width'), 'height': $(this).data('height'),
						'background-color': $(this).data('background-color'),
						'z-index': $(this).data('z-index')
					});

					// unflag it
					$(this).data('full', false);
				}
			});
	        break;        
	}
});

// menu collapse & expand
$("#btn-menu-controller").bind('click', function() {
	var display;

	if($(this).html().trim() == '<span><i class="icon-angle-up"></i></span>') {
		$(this).html('<span><i class="icon-angle-down"></i></span>');
		$(this).css({"border-bottom-left-radius": "4px", "border-bottom-right-radius": "4px"});
		display = "none";
	} else {
		$(this).html('<span><i class="icon-angle-up"></i></span>');
		display = "block";
	}

	$(".icon-menu > ul > li:nth-child(n+4)").each(function() {
		$(this).css("display", display);
	});
});

// menu filter
$("#menuitem-filter").bind('keyup', function(e) {
	var input = $("#menuitem-filter").val().trim().toLowerCase();

	if(e.keyCode == 27) {
		$("#menuitem-filter").val("");
		input = "";
	}

	$(".icon-menu > ul > li:nth-child(n+4)").each(function() {
		// console.debug(($(this).find("a > span").html() || "").toLowerCase().indexOf(input));
		
		if(
			input.length > 0 &&
		  	(($(this).attr("keywords") || "").toLowerCase().indexOf(input) == -1) &&
		  	(($(this).find("a > span").html() || "").toLowerCase().indexOf(input) == -1)
		  ) 
			display = "none";
	 	else 
	 		display = "block";

		$(this).css('display', display);
	});
});

// fix position for quick widget and sub-menus
$(".icon-menu > ul > li > a").each(function(){
	$(this).bind('mouseover', function() {
		var sidebar_margin = $("#main_wrapper").css("margin-left");
		var sidebar_padding = $("#main_wrapper").css("padding-left");
		var width = $(this).parent().width() * 1 + 
					sidebar_margin.replace("px","") * 1 + 
					sidebar_padding.replace("px", "") * 1;

		if($("#main_wrapper").width() <= 640) {
			width = 50;
		} else if($("#main_wrapper").width() <= 800) { 
			width -= 4;
		}

		$(this).next(".quick-widget, .sub-menus").each(function(){
			$(this).css("left", width);
		});
	});
});

// load fav menus
load_fav_menus();

// tooltip
$("a[data-toggle=tooltip]").tooltip().click(function(e) {
	e.preventDefault();
});
  
// popover 
$("a[data-toggle=popover]").popover().click(function(e) {
  	e.preventDefault();
});

// place widget to workspace
function add_to_sidebar(widget, title, pos) {
	var id = widget.attr("id");
	if($("#workspace").css("display") == "none") return;
	if(!title) title = "Untitled Widget";

	if(!id || id.length == 0) {
		id = new Date().getTime().toString();
		widget.attr("id", id);
	}

	widget.fadeOut();
	$.bootstrapGrowl("<img src='img/icons/heart.png' alt='' /> You can restore it from sidebar.", {align: 'center'});
	
	$("#workspace").append("<a rel='widget-thumb' class='btn' id='thumb" + id + "' target-id='" + id + "' href='javascript:void(0)'><i class='icon-arrow-right'></i> " + title + "</a>");
	$("#thumb" + id).bind('click', function() {
		$("#" + $(this).attr("target-id")).fadeIn();
		// scroll to the widget's position
		$("html,body").animate({scrollTop: $("#" + $(this).attr("target-id")).offset().top}, 1000);
		$(this).remove();
	});
}

// clone menuitems and place to topbar
function add_to_favlinks(menuitem) {
	// change id
	menuitem.attr('id', new Date().getTime().toString());

	menuitem.addClass("btn").css({'left': 0, 'top': 0, 'margin-right': '4px'});
	menuitem.draggable({
		start: function(){$(this).remove();save_fav_menus();}
	});

	$.bootstrapGrowl("<img src='img/icons/heart.png' alt='' /> I'm persistent, you can drag again to remove me.", {align: 'center'});
	$(".navbar-inner form.form-search").append(menuitem);

	var outer_html = $('<div></div>').append(menuitem.clone()).html();

	// cross pages persist
	var fav_menus_str = $.jStorage.get("fav_menus_str");
	if(!fav_menus_str || fav_menus_str.length == 0)
		$.jStorage.set("fav_menus_str", outer_html);
	else 
		$.jStorage.set("fav_menus_str", fav_menus_str + "@" + outer_html);
}

// load fav menus
function load_fav_menus() {
	var fav_menus_str = $.jStorage.get("fav_menus_str");
	if(fav_menus_str && fav_menus_str.length > 0) {
		var array = $.jStorage.get("fav_menus_str").split("@");
		for(idx in array) {
			// console.debug(menuitem);
			var menuitem = $(array[idx]);
			menuitem.appendTo(".navbar-inner form.form-search");
			menuitem.draggable({
				start: function(){$(this).remove();save_fav_menus();}
			});
		}
	}
}

// reset fav menus str
function save_fav_menus() {
	var array = [];

	$(".navbar-inner form.form-search .ui-draggable").each(function() {
		var outer_html = $('<div></div>').append($(this).clone()).html();
		array.push(outer_html);
	});

	if(array.length > 0)
		$.jStorage.set("fav_menus_str", array.join("@"));
	else
		$.jStorage.deleteKey("fav_menus_str");
}