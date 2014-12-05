var DropModel = Backbone.View.extend({
	
	initialize: function() {
		this.set('name', null);
	},
	addActivity: function() {
		this.trigger('pickActivity', this.model);
	},
	events: {
		'click': 'addActivity'
	}
});
