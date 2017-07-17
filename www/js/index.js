var myApp = new Framework7({
	pushState: true,
	material: true,
	swipePanel: 'left'
	
	
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
});
$$(document).on('deviceready', function() {
	$$('.panel-links').on('click', function(e){
				myApp.closePanel();
			});
});