(function($){

	POS.Views.Checkout = Backbone.View.extend({
		el : 'td',
 
 		events : {
			'click a' : 'getProduct'
 		},
 
 		showAlert : function(){
 			alert('Working from a different View');
 		},
		getProduct : function(e){
			e.preventDefault();
			var id = $(e.currentTarget).data('id');
			var item = this.collection.at(id);
			var product = item.get('name')
			console.log(product);
		}

	});
})(jQuery);