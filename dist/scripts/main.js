$(document).ready(function () {
	
	$(window).load(function() {
	        $('main').hide();
	        $('nav').hide();
	        $('#loading').delay(4000).fadeOut('fast');
	        $('main').delay(4500).fadeIn('fast');
	        $('nav').delay(4500).fadeIn('fast');
	    });



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