(function($){

	POS.Views.Checkout = Backbone.View.extend({
		el : 'td',

		//tagName : 'td',

		//template : "checkoutView",

		events : {
			'click p' : 'showAlert'
		},
		render : function(){
			window.template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		},

		showAlert : function(){
			alert('click working');
		}

	});
})(jQuery);