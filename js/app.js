function showProducts(){
	$('.products').html(productsView.render().el);
	$('#productBtn').css('visibility','hidden');

	window.checkout = new POS.Views.Checkout;
}
