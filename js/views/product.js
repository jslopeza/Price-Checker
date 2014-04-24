(function(){
	
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
		
		template: template('product_view_template'),
		
		initialize: function() {
			
		},
		
		events: {
			'click a' : 'showAlert'
		},
				
		render: function() {
			var template = this.template(this.model.toJSON() );
			this.$el.html(template);
			return this;
		},
		
		showAlert: function() {
			alert("events working on td tags");
		}
		
	});
	
	var productsView = new POS.Views.Products({ collection: products });
	 $('.products').html(productsView.render().el);
	
});
