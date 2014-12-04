var DropDownView = Backbone.View.extend({
	buildDrop : _.template($('#dropdown_template').html()),

	render: function(){


		this.setElement(this.buildDrop());

		return this; //for chaining
	}

})
