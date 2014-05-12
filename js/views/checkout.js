(function($){
	POS.Views.Checkout = Backbone.View.extend({
 		
 		el : '.checkout table',

 		template : template('checkoutTemplate'),
 
 		initialize: function() {
			Backbone.Events.on("tap", this.sendData, this);
		},

		sendData: function(id, name, subtotal, tax, total) {
			
			window.checkoutModel = new POS.Models.Checkout({name : name, subtotal : subtotal, tax : tax, total : total});
			console.log(checkoutModel.toJSON());
			this.render();
		},
		
		render : function(){
			var template = this.template(checkoutModel.toJSON());
 			this.setElement(this.$el.html(template));
			return this;
		}

	});
})(jQuery);