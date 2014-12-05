var TripView = Backbone.View.extend({
	el: '#trip',
	events: {
		'click #add-day': 'addDay'
	},
	initialize: function(){
		this.model = new Trip();
		this.dayPanels = {};
		this.$dayBtnContainer = this.$('#day-btn-container');
		this.listenTo(this.model.get('days'), 'add', this.createDayBtn);
		this.listenTo(this.model.get('days'), 'add', this.createDayPanel);


	},

	addDay: function() {
		var dayCollection = this.model.get('days');
		dayCollection.add({
			dayNum: dayCollection.length + 1
		});

		$.post('/days', {day_number: dayCollection.length} , function(newDay){	
		});
	},

	createDayPanel: function(newDay) {
		var dayPanelView = new DayPanelView({model: newDay});
		this.dayPanels[newDay.get('dayNum')] = dayPanelView;
	},

	createDayBtn: function(newDay){
		var dayButtonView = new DayButtonView({model: newDay});
		dayButtonView
			.$el
			.appendTo(this.$dayBtnContainer);

		this.listenTo(dayButtonView, 'dayChange', this.switchToDay);
	},
	switchToDay: function(day) {
		this.model.set('current', day);
		var dayButtons = this.$dayBtnContainer.children();
		dayButtons
			.removeClass('btn-primary')
			.eq(day.get('dayNum') - 1)
			.addClass('btn-primary');
		
		var dayPanel = this.dayPanels[day.get('dayNum')];
		$('#day-panel').html(dayPanel.el);
	},
})
