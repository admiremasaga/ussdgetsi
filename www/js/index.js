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
			
			window.plugins.sim.getSimInfo(successCallback, errorCallback);
});

				function successCallback(result) {
				 
				 console.log(result);
				simcardjson = JSON.stringify(result);
				alert('saga :' + simcardjson);
				 simcardjson = "";
				simcardjson += JSON.parse(result);
				 alert('admire :' + simcardjson.carrierName);
				}

				function errorCallback(error) {
					alert('something screwed up');
				  console.log(error);
				}

				function hasReadPermission() {
				  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
				}
				
				function requestReadPermission() {
				  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
				}
