(function($){
	
	POS.Views.Total = Backbone.View.extend({
		el : '.end',

		template : template('checkoutTemplate'),

		events : {
			'click a' : 'showTotal'
		},

		showTotal : function(){
			var total = checkoutModel.get('total');
			//alert(total);
			navigator.notification.alert(
				'The Final price is ' + total,
				alertDismissed,
				'Final Price',
				'Done'
			);
			navigator.notification.vibrate(2000);
		},
	});

})(jQuery);