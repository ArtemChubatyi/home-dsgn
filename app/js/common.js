$(function() {

	// Custom JS
	$("#hamburger").click(function(e) {
		$(this).toggleClass("is-active");
		$(".menu__navigation").toggleClass("invisible");
	  })
});
