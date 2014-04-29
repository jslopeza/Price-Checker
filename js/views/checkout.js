(function($){

	POS.Views.Checkout = Backbone.View.extend({
		el : 'td',
 		
 		template : template('checkoutTemplate'),

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
			var name = item.get('name');
			alert(name);
			return name;
		},

		render : function(){

		}

	});
})(jQuery);