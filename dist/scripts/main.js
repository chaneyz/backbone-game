$(document).ready(function () {
	var routerConfig = {
		routes: {
			'': 'test',
			'home': 'test',
			'about': 'test2'
		},

		test: function() {
			console.log('test');
			$('.page').hide();
			$('#a').show();

		},

		test2: function() {
			console.log('test 2');
			$('.page').hide();
			$('#b').show();

		}
	}
var app = Backbone.Router.extend(routerConfig);

var myRouter = new app();
Backbone.history.start();


$('profile-button').click(function(e) {
	myRouter.navigate('console log profile button');
})

});