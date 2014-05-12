(function($){

	POS.Views.Products = Backbone.View.extend({

		tagName: 'tr',

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},

		addOne: function(product) {
			var productView = new POS.Views.Product({ model: product });
			this.$el.append(productView.render().el);
		}
	});

	POS.Views.Product = Backbone.View.extend({

		tagName: 'td',

		className : "btn btn-primary",

		template: template('productTemplate'),

		events : {
			'tap a' : 'passData'
		},

		initialize: function() {

		},

		passData : function(){
			var id = this.model.get('id'),
				name = this.model.get('name'),
				subtotal = this.model.get('subtotal'),
				tax = this.model.get('tax'),
				total = this.model.get('total');
			Backbone.Events.trigger('tap', id,name,subtotal,tax,total);
		},

		render: function() {
			var template = this.template(this.model.toJSON() );
			this.setElement(this.$el.html(template));
			return this;
		}
	});

	window.productsView = new POS.Views.Products({ collection: products });
	//$('.products').html(productsView.render().el);

})(jQuery);