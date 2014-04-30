(function(){

	POS.Models.Checkout = Backbone.Model.extend({
		defaults : {
			id : "",
			name : "",
			qty : "1",
			price : ""
		}
	});
})();