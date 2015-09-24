$(function() {
	var $btn = $('#create-btn')
	var $someNumber=3

	function generate($select, $someNumber, $content){
		var divTask = $('<div>', {
		class: 'task ' + $select
		})
		var newInput = $('<input>', {
	 		id: 'task-' + $someNumber, 
	 		type:"checkbox"
	 	})
	 	var newLabel = $('<label>', {
	 		for:'task-' + $someNumber, 
	 		class:"text",
	 		text: $content
	 	})
	 	divTask.append(newInput).append(newLabel)

 		return divTask
	}

	$btn.click(function(){
		var $select = $('select').val()
		var $content = $('#create-text').val()
		$someNumber++
		
		$('#tasks').append(generate($select, $someNumber, $content))
	})

	$('#show-completed').click(function(){
		if($('#show-completed').is(':checked')){
			$('div input:checked').parent().show()
		} else {
			$('div input:checked').parent().hide()
		}
	
	})

})





 // <div class="task Blank">
 // 	<input id="blank" type = "checkbox">
 // 	<label for = "blank" class = "text">blank</label>
 // </div>

 // return theHtml

// ('<div class="task ' + $select +'"><input id="task-' + $someNumber +'" type="checkbox"><label for="task-' + $someNumber +'" class="text">' + $content + '</label></div>')