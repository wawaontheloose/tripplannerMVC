var DayButtonView = Backbone.View.extend({
	buildHTML : _.template($("#button_template").html()),

	render: function() {

		this.setElement(this.buildHTML(this.model.attributes));

    return this; //for chaining
	},

	initialize: function() {
		this.render();
	},
	makeCurrent: function() {
		this.trigger('dayChange', this.model);
	},
	events: {
		'click': 'makeCurrent'
	}
});