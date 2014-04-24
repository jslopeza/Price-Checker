(function(){
	
	POS.Collections.Products = Backbone.Collection.extend({
		model: POS.Models.Product
	});
	
	window.products = new POS.Collections.Products ([
		{
			name: 'Product01',
			price: '$ ' + 2.50,
		},
			{
			name: 'Product02',
			price: '$ ' + 3.50,
		},
			{
			name: 'Product03',
			price: '$ ' + 4.50,
		},
			{
			name: 'Product04',
			price: '$ ' + 5.50,
		},
	]);
})();
