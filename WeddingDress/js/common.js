// webshims
$.webshims.polyfill();

// mobile menu
$(document).ready(function() {
  $(".nav-custom").mobileMenu({
    switchWidth: 768,
    topOptionText: 'Select a Page',
    indentString: '&nbsp;&nbsp;'
  }); 
});

// toggle icon
function swap_select(ele) {
	// console.debug(ele.children[0].className);
	class_name = ele.children[0].className;
	ele.children[0].className = (class_name == "icon-ok" ? "icon-remove" : "icon-ok");
	// ajax refresh
	return false;
}