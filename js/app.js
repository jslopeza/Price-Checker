function showProducts(){
	$('.products').html(productsView.render().el);
	$('#productBtn').css('visibility','hidden');

	window.checkout = new POS.Views.Checkout;
}

// Phonegap vibrate 
function endSale() {
	navigator.notification.vibrate(2500);
}
