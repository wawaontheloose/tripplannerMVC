var ActivitySelectView = Backbone.View.extend({
	el: '.col-xs-9',

	events: {
		// 'click #add-day': 'addDay'
	},


	initialize: function(){
		// this.listenTo(temp_days, 'add', this.createDrop);
		// this.model = new Trip();

		var dropDown = new DropDownView().render();
		var hotelFill = new DropFill().render('hotels');
		console.log(this.$el.find('.choose.hotels'));
		this.$el.find('.choose').append(dropDown.$el);
		this.$el.find('.dropdown-menu').append(hotelFill.$el);

	},

	addDay: function() {
		// temp_days.add({});

		// $.post('/days', {day_number: temp_days.length} , function(newDay){
		// 	console.log(newDay);	
		// });
	},

	createDrop: function(dayModel){

		// var hotelSelector = new HotelSelectorView().render();
		// this.$el.find('.hotels .choose').append('<h1>"yo"</h1');
	}
})
