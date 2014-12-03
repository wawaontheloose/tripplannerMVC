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
		console.log('adding day!')},

	createDayBtn: function(dayModel){

		//yuck
		var view = new DayButtonView({model: dayModel}).render();
		this.$el.find('#day-btn-container').append(view.$el);
		//yuck yuck
	}
})
