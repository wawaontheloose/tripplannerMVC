var Trip = Backbone.Model.extend({
	initialize: function() {
		this.set('days', new DayCollection());
		this.set('currentDay', null);
	}
});