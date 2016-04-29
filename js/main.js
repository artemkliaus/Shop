var currentPosition = 0;
var slideWidth = 1170;
var slides = $('.slide');
var numberOfSlides = slides.length;
$('#slidesContainer').css('overflow', 'hidden');
slides
.wrapAll('<div id="slideInner"></div>')
.css({
	'float' : 'left',
	'width' : slideWidth
});
$('#slideInner').css('width', slideWidth * numberOfSlides);
$('.controls')
.bind('click', function(){
	currentPosition = ($(this).attr('id') =='rightCtrl')
	? currentPosition+1 : currentPosition-1;
	if (currentPosition > 2) currentPosition = 0;
	if (currentPosition < 0) currentPosition = 2;
	$('#slideInner').animate({
		'marginLeft' : slideWidth*(-currentPosition)
	});
});