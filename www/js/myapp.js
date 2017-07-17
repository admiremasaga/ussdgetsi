var app = angular.module('myApp', []);
app.controller('formHide', function($scope){
	$scope.buy = true;
	var storedData = myApp.formGetData('buyform');
	if (storedData){
	$scope.metreName = storedData.metreName;
	$scope.metre = storedData.metre;}
	$scope.switcher = true;
	$scope.regswitcher = true;
	$scope.changebtn = function(){
		if (($$("#select-metre").val() !== "") &&($$("#amt").val() !== "")){
		$scope.switcher = false;
		}
		else {
		$scope.switcher = true;
		}
	}
	
	$scope.regchangebtn = function(){
		if (($$("#metre").val() !== "") && ($$("#metreName").val() !== "")){
		$scope.regswitcher = false;
		}
		else {
		$scope.regswitcher = true;
		}
	}
	
	$scope.cancelbtn = function(){
		$$("#metre").val(parseInt('')).trigger('change');
		$$("#metreName").val('').trigger('change');
		$scope.reg = false;
		$scope.buy = true;
		loadOptions();
		$$('#regFab').html('&nbsp New<i class="icon icon-plus"></i>');
	}
	
	$scope.savebtn = function(){
		metreNumber = $$("#metre").val();
		metreName = $$("#metreName").val();
		db.transaction(function(tx) {tx.executeSql('INSERT INTO metreNumbers values(' + metreNumber +',"'+ metreName + '")');}, function(err) {alert ('failed'+err.code+ 'because'+ err.message);}, function(){});
		$scope.reg = false;
		$scope.buy = true;
		myApp.formDeleteData('buyform');
		loadOptions();
		$scope.metreName = '';
		$scope.metre = '';
		$$('#regFab').html('&nbsp New<i class="icon icon-plus"></i>');
	}
	
	$scope.openForm = function(){
		if ($scope.buy == true){
		$$('#regFab').html('buy');
		$scope.buy = false;
		$scope.reg = true;
		$$(".reg").removeClass("regdisappear");
		$scope.regchangebtn();
		loadSavedTables();
		}
		else{
		$$('#regFab').html('&nbsp New<i class="icon icon-plus"></i>');
		$scope.reg = false;
		$scope.buy = true;
		loadOptions();
		}
	}
	
		$scope.editbtn = function(){
		metreNumber = $$("#metre").val();
		metreName = $$("#metreName").val();
		db.transaction(function(tx) {tx.executeSql('UPDATE metreNumbers SET metreNumber =' + metreNumber +', metreName = "'+ metreName + '" where metreNumber ='+id);}, function(err) {alert ('failed'+err.code+ 'because'+ err.message);}, function(){});
		myApp.formDeleteData('buyform');
		$$("#metre").val(parseInt('')).trigger('change');
		$$("#metreName").val('').trigger('change');
		loadSavedTables();
		$$('#editbutton').hide();
		$$('#savebutton').show();
		
		
	}
	$scope.dialNum = function(){
	window.plugins.CallNumber.callNumber(onSuccess, onError, "0777155777", false);
function onSuccess(result){
  alert ('calling');
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
  alert ('failed '+result);
}
	}
});
