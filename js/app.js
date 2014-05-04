function showProducts(){
	$('.products').html(productsView.render().el);
	$('#productBtn').css('visibility','hidden');

	var checkout = new POS.Views.Checkout;
	var total = new POS.Views.Total;
}