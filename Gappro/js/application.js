// ATTENTION: 
// DON'T INCLUDE THIS FILE IN YOUR PROJECT
// THIS FILE IS ONFY FOR GAPPRO PAGES
// NOT THE CORE UTILITY

function load_css(path) {
	var element = document.createElement("link");  
    element.setAttribute('rel', 'stylesheet');  
    element.setAttribute('type', 'text/css');  
    element.setAttribute('href', path);  
    document.getElementsByTagName('head')[0].appendChild(element);  
}

function load_widget_bg(el, color_name) {
	var node = $(el);

	class_array = ['pink', 'green', 'grey', 'white', 'orange', 'blue', 'brown'];
	for(idx in class_array) {
		node.parent().parent().removeClass(class_array[idx] + '-bg-linear');
	}

	node.parent().parent().addClass(color_name + '-bg-linear');
}

$(document).ready(function() {
	// load menu style
	var menu_css_file = $.jStorage.get("menu_css_file");
	if(menu_css_file && menu_css_file.length > 0) {
		load_css(menu_css_file);
	}

	$("#menu_colors li a").each(function() { 
		$(this).click(function() {
			var css_file = "css/menu_styles/" + $(this).attr("color") + ".css";
			load_css(css_file);
			$.jStorage.set("menu_css_file", css_file);
		});
	});

	$("#tour").css('display', 'none');
	$("#btn-tour, #btn-tour-take").bind("click", function(e) {
		$("#tour").joyride({
			'tipLocation': 'top'
		});
		e.preventDefault();
	});
});