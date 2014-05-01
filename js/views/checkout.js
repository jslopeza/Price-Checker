(function($){

	POS.Views.Checkout = Backbone.View.extend({
 		
 		tagName : 'li',
 		template : template('checkoutTemplate'),
 
 		showAlert : function(){
 			alert('Working from a different View');
 		},
 		initialize: function() {
			Backbone.Events.on("click", this.sendData);
		},
		sendData: function(id, name, price) {
			
			window.checkoutModel = new POS.Collections.Checkout({id : id, name : name, price : price });
			console.log(checkoutModel.toJSON());
			return checkoutModel;
		},
		/*getProduct : function(e){
			e.preventDefault();
			var location = $(e.currentTarget).data('id');
			var item = this.collection.at(location);
			var id = item.get('id');
			var name = item.get('name');
			var price = item.get('price');

			console.log(location, id, name, price);
			window.checkoutModel = new POS.Collections.Checkout({id : id, name : name, price : price });
			console.log(checkoutModel.toJSON());
			return checkoutModel;
			this.render();
		},*/

		render : function(){
			window.template = this.template(checkoutModel.toJSON());
			console.log(template);
			//this.$el.html(template));
			return this;
		}

	});
})(jQuery);