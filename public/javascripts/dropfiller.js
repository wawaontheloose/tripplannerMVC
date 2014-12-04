var DropFill = Backbone.View.extend({

	buildHTML : _.template($('#option_template').html()),

	render: function(filler){

		var that = this;


		$.get('/' + filler, function(fills){

						
			
			// }
		})

		console.log(that.$el);
		that.$el.append('<li> "hello" </li>');	

		return that; //for chaining


	
	}

})


// var DayButtonView = Backbone.View.extend({
// 	buildHTML : _.template($("#button_template").html()),

// 	render: function() {

//     this.setElement(this.buildHTML({dayNum: temp_days.length}));

//     return this; //for chaining
//   }
// });