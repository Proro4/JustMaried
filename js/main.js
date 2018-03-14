(function () {
'use strict';

// background

if ($('.bck-url').length > 0) {
	$('.bck-url').each(function () {
		var bckUrl = $(this).attr('bck');
		console.log(bckUrl);
		$(this).css({ 'background': 'url("' + bckUrl + '")center' });
	});
}

// header height;
var bodyHeight = $(window).height();
var headerHeight = 118;
var headerTop = bodyHeight - headerHeight;
if (bodyHeight >= 670) {
	$('.title').css('height', headerTop);
} else {
	$('.title').css('height', '650px');
}$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: ''
	});
	$('.menu-but.menu_m').on('click', function () {
		$('.menu.menu_m').addClass("active");
	});

	$(document).mouseup(function (e) {
		var div = $('.menu.menu_m');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.menu.menu_m').removeClass('active');
		}
	});
	new WOW().init();
});

}());
//# sourceMappingURL=main.js.map
