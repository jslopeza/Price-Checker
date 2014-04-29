function showProducts(){
	$('.products').html(productsView.render().el);
	$('#productBtn').css('visibility','hidden');

	window.checkout = new POS.Views.Checkout;
}

function endSale() {
	navigator.notification.vibrate(2500);
}
