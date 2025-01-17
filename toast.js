// JQUERY IS REQUIRED FOR THIS TO WORK

function toast(message, bgColor, secondToDisappear){
	$('.toastBox').css('background-color', bgColor);
	$('.toastBox').text(message);
	$('.toastBox').fadeIn();

	$('.toastBox').delay(secondToDisappear * 1000).fadeOut();
}

$('.toastBox').on('click', function(){
	$(this).stop(true, true).fadeOut().slideUp();
})
