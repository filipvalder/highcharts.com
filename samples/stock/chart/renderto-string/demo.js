$(function() {
	var chart = new Highcharts.StockChart({

		chart: {
			renderTo: 'container'
		},

	    rangeSelector: {
	    	selected: 1
	    },

	    series: [{
	        name: 'USD to EUR',
	        data: usdeur
	    }]
	});
});