var TripView = Backbone.View.extend({
	el: '#trip',
	events: {
		'click #add-day': 'addDay'
	},
	initialize: function(){
		this.listenTo(temp_days, 'add', this.createDayBtn);
		this.model = new Trip();

	},

	addDay: function() {
		temp_days.add({});

		$.post('/days', {day_number: temp_days.length} , function(newDay){
			console.log(newDay);	
		});
	},

	createDayBtn: function(dayModel){

		//yuck
		var view = new DayButtonView({model: dayModel}).render();
		this.$el.find('#day-btn-container').append(view.$el);
		//yuck yuck
	}
})
