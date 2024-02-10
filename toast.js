// JQUERY IS REQUIRED FOR THIS TO WORK

function toast(message, bgColor, secondToDisappear){
	$('.toastBox').css('background-color', bgColor);
	$('.toastBox').text(message);
	$('.toastBox').fadeToggle();
	$('.toastBox').css('display', 'flex');

	$('.toastBox').delay(secondToDisappear * 1000).fadeToggle();
}
