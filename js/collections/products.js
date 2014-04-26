(function(){
	
	POS.Collections.Products = Backbone.Collection.extend({
		model: POS.Models.Product,
		url : 'js/product.json'
	});
	
	window.products = new POS.Collections.Products;
	products.fetch();
})();
