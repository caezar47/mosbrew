if($(document).width() < 575) {
	$("#img").sticky({
		topSpacing:0,
		bottomSpacing:500,
		className: 'is--sticky'
	});
	$('#img').on('sticky-bottom-unreached', function() { console.log("Bottom unreached"); });
} 