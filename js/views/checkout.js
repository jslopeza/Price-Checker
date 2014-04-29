(function($){

	POS.Views.Checkout = Backbone.View.extend({
		el : '.checkout',

		//tagName : 'td',

		template : "checkoutView",

		events : {
			'click .checkout-td' : 'getProduct'
		},
		render : function(){
			return this;
		},

		showAlert : function(){
			alert('click working');
		},

		getProduct : function(){
			var id = $('.checkout-td').map(function(){
				return $(this).text();
			});
			console.log(id);
		}

	});
})(jQuery);