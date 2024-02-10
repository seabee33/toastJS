// JQUERY IS REQUIRED FOR THIS TO WORK

function toast(message, bgColor, secondToDissapear){
	$('.toastBox').css('background-color', bgColor);
	$('.toastBox').text(message);
	$('.toastBox').fadeToggle();
	$('.toastBox').css('display', 'flex');

	$('.toastBox').delay(secondToDissapear * 1000).fadeToggle();
}
