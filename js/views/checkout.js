(function($){

	POS.Views.Checkouts = Backbone.View.extend({
		tagName : 'tr',
 
 		render : function(checkoutModel){
 			var checkoutCollection = new POS.Collections.Checkout({model : checkoutModel});
 			console.log(checkoutCollection);
 		}
 	});

	POS.Views.Checkout = Backbone.View.extend({
 		
 		el : '.checkout tbody',
 
 		//tagName : 'td',
 		template : template('checkoutTemplate'),
 
 		initialize: function() {
			Backbone.Events.on("click", this.sendData, this);
		},
		sendData: function(id, name, price) {
			
			window.checkoutModel = new POS.Models.Checkout({id : id, name : name, price : price });
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