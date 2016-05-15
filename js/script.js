$(document).ready(function() {
	clearSearchField();
	scrollTop();
	validateSearchField();
});

function clearSearchField() {
	var textField = $("#search-field");

	textField.on("blur", function() {
		if ( $(this).val() === "" ) {
			$(this).val("search");
		}
	});

	textField.on("focus", function() {
		if ( $(this).val() === "search" ) {
			$(this).val("");
		}
	});
}

function validateSearchField() {
	var textField = $("#search-field");
	
	$("form").on("submit", function(e) {
		if ( $(textField).val() === "search" || $(textField).val() === "") {
			e.preventDefault();
		}
	});
}

function scrollTop() {
	var scrollBtn = $("#up");

	scrollBtn.on("click", function(e) {
		e.preventDefault();
		var curPos = $(document).scrollTop();
		console.log(curPos);
		var scrollTime = curPos / 1;
		$("body, html").animate({"scrollTop": 0}, scrollTime);
	});
}