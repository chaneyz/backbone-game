$(document).ready(function () {
	
	$(window).load(function() {
	        $('main').hide();
	        $('nav').hide();
	        $('#play').hide();
	        $('#loading').delay(4000).fadeOut('fast');
	        $('main').delay(4500).fadeIn('fast');
	        $('nav').delay(4500).fadeIn('fast');
	    });

	$('#playBtn').click(function () {
		window.location.href = "#play";
		$('.loadingContainer').css("height", "0").css("width", "0");
		});

	$('#leaderBtn').click(function () {
		window.location.href = "#leader";
		$('.loadingContainer').css("height", "0").css("width", "0");
		});

	$('#settingsBtn').click(function () {
		window.location.href = "#settings";
		$('.loadingContainer').css("height", "0").css("width", "0");
		});

	var routerConfig = {
		routes: {
			'': 'menu',
			'menu': 'menu',
			'play': 'play',
			'leader': 'leaderBoard',
			'settings': 'settings',
		},

		menu: function() {
			console.log('menu test');
			$('.page').hide();
			$('#menu').show();
		},

		play: function() {
			console.log('test 2');
			$('.page').hide();
			$('#menu').show();
			$('#play').show();
		},

		leaderBoard: function() {
			console.log('test 3');
			$('.page').hide();
			$('#menu').show();
			$('#leader').show();
		},

		settings: function() {
			console.log('test 4');
			$('.page').hide();
			$('#menu').show();
			$('#settings').show();
		},
	}
	
	var app = Backbone.Router.extend(routerConfig);

	var myRouter = new app();
	Backbone.history.start();

//below is my stolen video game code. because world wide webz.

var counter = 0;
var seconds = 0;
$('#counter span').html(counter);
$('#timer span').html(seconds);

$('#start').hide();
$('#win').hide();
$('#endScreen').hide();

$('#startGame').on( "mouseover", function() {
  $(this).hide();
  
  var randWidth = random = Math.ceil(Math.random() * 350);
  var randHeight = random = Math.ceil(Math.random() * 350);
  
  $('#win').show('fast');
  $('#win').css('top', randHeight);
  $('#win').css('left', randWidth);
  
   window.setInterval(function(){
      seconds = seconds + 1;
      $('#timer span').html(seconds);
    }, 1000); 
});

$('#start').on( "mouseover", function() {
  
  var randWidth = random = Math.ceil(Math.random() * 350);
  var randHeight = random = Math.ceil(Math.random() * 350);
  
  $('#win').show('fast');
  $('#win').css('top', randHeight);
  $('#win').css('left', randWidth);
  $(this).hide('fast');
});

$('#win').on( "mouseover", function() {
  counter = counter + 1;
  $('#counter span').html(counter);
  
  if(counter == 10){
  $('#endScreen').show('medium');
    $('#endCount').html(counter);
    $('#endSeconds').html(seconds);
  }
  
  $(this).hide('fast');
  $('#start').show('fast');
  
});





});