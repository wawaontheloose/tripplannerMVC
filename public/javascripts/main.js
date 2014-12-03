$(function() {
	$('#day-panel').html(_.template($('#day_panel_template').html())({dayNum: 1}));
	$('#day-btn-container').append(_.template($('#button_template').html())({dayNum: 1}));
	['hotels', 'restaurants', 'thingsToDo'].forEach(function(aType) {
		$('.choose.' + aType).append(_.template($('#dropdown_template').html())());
		$('.choose.' + aType + ' ul').append(_.template($('#option_template').html())({name: 'testing ' + aType}));
		$('.list-group.' + aType).append(_.template($('#activity_template').html())({name: 'other testing ' + aType}));
	});
});