jQuery(document).ready(function(){
	chrome.storage.sync.get(["grade","semester"], function(result){
		const grade = parseInt(result.grade);
		const semester = parseInt(result.semester);
		const parameter_early = '#g'+(grade).toString()+'-f';
		const parameter_late = '#g'+(grade+parseInt(4)).toString()+'-f';
		const btn_parameter = 'btn-g'+(grade).toString()+'-f';
		$('#g1-f').hide();$('#g2-f').hide();$('#g3-f').hide();$('#g4-f').hide();$('#g5-f').hide();$('#g6-f').hide();$('#g7-f').hide();$('#g8-f').hide();
		$(parameter_late).show();
		$(parameter_early).show();
		document.getElementById(btn_parameter).checked=true;
	});
});
