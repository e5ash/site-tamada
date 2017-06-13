var mainMenu = $('#main .nav');

$('.caret > li').has('ul').click(function() {
	var ul = $(this).find('ul');
	var a = $(this).find('a');
	a.removeAttr('href');
	ul.slideToggle(400);
});

$('.btn-menu').click(function() {
	$(this).toggleClass('white close');
	mainMenu.slideToggle(300);
});

$('.slider .this').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// fade: true,
	asNavFor: '.slider .nav',
	adaptiveHeight: true,
	autoplay: true,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>'
});
$('.slider .nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider .this',
	// dots: true,
	arrows: false,
	centerMode: true,
	focusOnSelect: true
});
new WOW().init();
$("[name=phone]").mask("+7 (999) 999-9999");
$("[name=data]").mask("99.99.99",{placeholder:"00.00.00"});


 
$(document).ready(function(){
	$(".nav, .types").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$("form").submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    $(this).find("input").val("");
	    alert('Ваша заявка успешно отправлена!');
	});
	return false;
});