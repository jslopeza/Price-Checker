function showProducts(){
	$('.products').html(productsView.render().el);
	$('#productBtn').css('visibility','hidden');

	window.checkout = new POS.Views.Checkout({collection : products});
}

document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        // Empty
    }


// Phonegap vibrate 
function endSale() {
	navigator.notification.vibrate(2500);
	alert("working");
}
