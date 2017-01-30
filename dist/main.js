"use strict";

;(function () {

	var sticky = false;
	var currentPosition = 0;

	var imageCounter = $("[data-name='image-counter']").attr("content");

	console.log(imageCounter);

	$("#sticky-navigation").removeClass("hidden");
	$("#sticky-navigation").slideUp(0);

	setInterval(function () {
		console.log("intervalo");
		if (currentPosition < imageCounter) {
			currentPosition++;
		} else {
			currentPosition = 0;
		}
		//		currentPosition++
		$("#gallery .inner").css({
			left: "-" + currentPosition * 100 + "%"
		});
	}, 2000);

	$(window).scroll(function () {

		console.log(isInBottom());
		var inBottom = isInBottom();

		if (inBottom && !sticky) {
			//mostrar navegación
			sticky = true;
			stickNavigation();
		} else if (!inBottom && sticky) {
			//ocultar navegación
			sticky = false;
			unstickNavigation();
		}
	});

	function stickNavigation() {
		$("#description").addClass("fixed").removeClass("absolute");
		$("#navigation").slideUp();
		$("#sticky-navigation").slideDown();
	}

	function unstickNavigation() {
		$("#description").removeClass("fixed").addClass("absolute");
		$("#navigation").slideDown();
		$("#sticky-navigation").slideUp();
	}

	function isInBottom() {
		var $description = $("#description");
		var descriptionHeight = $description.height();
		return $(window).scrollTop() > $(window).height() - descriptionHeight * 2;
	}
})();