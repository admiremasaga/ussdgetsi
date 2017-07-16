var myApp = new Framework7({
	pushState: true,
	material: true,
	
	
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
});
