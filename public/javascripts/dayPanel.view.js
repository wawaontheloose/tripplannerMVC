var DayPanelView = Backbone.View.extend({
	buildHTML: _.template($('#day_panel_template').html()),
	render: function() {
		this.$el.html(this.buildHTML(this.model.attributes));
		return this;
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	}
});