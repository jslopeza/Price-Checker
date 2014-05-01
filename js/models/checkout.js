(function(){

	POS.Models.Checkout = Backbone.Model.extend({
		defaults : {
			id :  0,
			name : "",
			price : "",
			qty : 1
			
		}
	});
})();