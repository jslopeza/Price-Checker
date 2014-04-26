(function(){
	
	POS.Collections.Products = Backbone.Collection.extend({
		model: POS.Models.Product,
		url : 'js/product.json'
	});
	
	window.products = new POS.Collections.Products;
	products.fetch();
	/*window.products = new POS.Collections.Products ([
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
		{
			name: 'Product05',
			price: '$ ' + 7.50,
		},
		{
			name: 'Product05',
			price: '$ ' + 1.50,
		}

	]);*/
})();
