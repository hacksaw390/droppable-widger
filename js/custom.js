
$(document).ready(function(){

	$('#techlist li').draggable({
		helper: 'clone',
		revert: 'invalid'
	});

	$('#phpFramewwrk').droppable({
		accept: 'li[data-value="php"]',
		drop: function(event, ui){
			$('#php').append(ui.draggable);
		}
	});

	$('#javaFramework').droppable({
		accept: 'li[data-value="java"]',
		drop: function(event, ui){
			$('#java').append(ui.draggable);
		}
	});

	

});













