$( document ).ready(function() {
	
	/*------------------------------ WOW Script ----------------------*/

	new WOW().init();

	/*------------------------------ Voice Control -----------------*/
	
	if (annyang) {
	  var commands = {
		
		'Home': function() {
			window.location = "http://www.themeforest.com"
		}											
			
	  };
	  
	  annyang.addCommands(commands);
	  annyang.start();
	}
		
	/*------------------------------ Waves  -----------------*/	
		
	$('#wave1').pan({fps: 30, speed: 2.5, dir: 'left', depth: 30});
	$('#wave2').pan({fps: 30, speed: 2.0, dir: 'right', depth: 70});	
	$('#wave3').pan({fps: 30, speed: 1.5, dir: 'left', depth: 30});
	$('#wave4').pan({fps: 30, speed: 1.0, dir: 'right', depth: 70});
	$('#wave5').pan({fps: 30, speed: 0.5, dir: 'left', depth: 70});	
	
});

/*------------------------------ Preloader ----------------------*/

$(window).load(function() { 
	$('.spinner').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
});

/*------------------------------ Countdown ----------------------*/

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date("Sep, 4 2017 12:00:00"));
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);