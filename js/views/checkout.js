(function($){

	POS.Views.Checkout = Backbone.View.extend({
		el : 'td',

		events : {
			'click a' : 'showAlert'
		},

		showAlert : function(){
			alert('Working from a different View');
		}
	});
})(jQuery);