var DropFill = Backbone.View.extend({

	buildHTML : _.template($('#option_template').html()),

	render: function(filler){

		var that = this;


		$.get('/' + filler, function(fills){
			var singleFiller;
			for(var i=0; i< fills.length; i++){
				singleFiller = new DropModel({name: fills[i].name});
				console.log(singleFiller);
				that.$el.append(singleFiller.el);
			}
		})

		this.setElement(this.buildHTML(this.model.attributes));
			
		return that; //for chaining

	},
	initialize: function(){


	},

})


// var DayButtonView = Backbone.View.extend({
// 	buildHTML : _.template($("#button_template").html()),

// 	render: function() {

//     this.setElement(this.buildHTML({dayNum: temp_days.length}));

//     return this; //for chaining
//   }
// });