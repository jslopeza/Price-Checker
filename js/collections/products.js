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
		{
			name: 'Product05',
			price: '$ ' + 7.50,
		},
		{
			name: 'Product05',
			price: '$ ' + 1.50,
		},
		{
			name: 'Product08',
			price: '$ ' + 9.50,
		},
		{
			name: 'Product09',
			price: '$ ' + 3.25,
		}


	]);
})();
