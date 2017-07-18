$$(document).on('deviceready', function() {
db = window.openDatabase("ecogetsiDB", "1.0", "ecogetsi", 1000000);
db.transaction(function(tx) {tx.executeSql('CREATE TABLE IF NOT EXISTS metreNumbers (metreNumber INTEGER PRIMARY KEY, metreName TEXT)');}, function(err) {alert ('failed'+err.code+ 'because'+ err.message);}, function(){});
loadOptions();
});
function loadOptions(){
	db.transaction(function(tx){tx.executeSql('SELECT * FROM metreNumbers GROUP BY metreName', [],
		function (tx, results){
			optionsHtml = "";
			if (results.rows.length < 1)
				$$('#regFab').click();
			for (i=0; i<results.rows.length; i++){
				item = results.rows.item(i);
				optionsHtml += "<option value="+item.metreNumber+">"+item.metreName+"</option>";
			}
			$$('#select-metre').html(optionsHtml);
		});});
}

function loadSavedTables(){
	db.transaction(function(tx){tx.executeSql('SELECT * FROM metreNumbers GROUP BY metreName', [],
		function (tx, results){
			tableHtml = "<thead><tr><th>Metre Name</th><th>Number</th><th>edit</th><th>remove</th></thead></tr><tbody>";
			
			for (i=0; i<results.rows.length; i++){
				item = results.rows.item(i);
				tableHtml += "<tr><td>"+item.metreName+"</td><td class='right'>"+item.metreNumber+"</td><td>"+
				'<a href="#" class="edit-btn button button-right button-fill button-raised color-aqua" id='+item.metreNumber+' name='+item.metreName+'>Edit</a></td>'+
				'<td><a href="#" class="del-btn button button-right button-fill button-raised color-red" id='+item.metreNumber+' name='+item.metreName+'>Delete</a>'+
				"</td></tr>";
			}
			if (results.rows.length > 0){
			tableHtml += "</tbody>";
			$$(".tableh1").removeClass("regdisappear");
			$$('#savedMetres').html(tableHtml);
			}
			else{
				$$("#metre").val('').trigger('change');
				$$("#metreName").val('').trigger('change');
				$$(".tableh1").addClass("regdisappear");
				$$('#savedMetres').html('');
			}
			$$('.del-btn').on('click', function(){
				id = this.id;
				delMetre(id);
				});
			
			$$('.edit-btn').on('click', function(){
				id = this.id;
				$$('#savebutton').hide();
				$$('#editbutton').show();
				$$(".page-content").scrollTop(0);
				$$("#metre").val(parseInt(this.id)).trigger('change');
				$$("#metreName").val(this.name).trigger('change');
				});
		});});
}

function delMetre(id){
	var delitem = confirm('Are sure you want to delete metre number '+id+' ?');
	if (delitem == true)
		db.transaction(function(tx){tx.executeSql('DELETE FROM metreNumbers WHERE metreNumber ='+id)});
	loadSavedTables();
}