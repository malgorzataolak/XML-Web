
$(document).ready(function(){
	$('.generuj').click(function(){

		var root='https://nijikokun-random-cats.p.mashape.com/random/kitten'
		$.ajax({
		    url: root, // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		    data: {}, // Additional parameters here
		    404:function(data){console.log("Blad")},
		    dataType: 'json',
		    success: function(data) { console.dir((data));
		    		if(data.type!="application/octet-stream") {
		    		$('#slodkikotek').replaceWith('<div id="slodkikotek"> <img src='+data.source+' alt="Brak kotka" </img> </div>');
		    } else {
		    	$('#slodkikotek').replaceWith('<div id="slodkikotek"> <p> Brak kotka!</p> </div>');
		    }
		}, 
		    error: function(err) { $('#slodkikotek').replaceWith('<div id="slodkikotek"> <p>Brak kotka!</p> </div>'); },
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "3n6AAdLHCJmshsNu5ObT4rlHFCUsp118KgZjsnjYQCuU20o39p"); // Enter here your Mashape key
		    }
		});
	});

	$.ajax({
			url: 'https://simple-weather.p.mashape.com/weatherdata?lat=50.064650&lng=19.944980', // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		    data: {}, // Additional parameters here
		    dataType: 'json',

		    success: function(data) { console.dir((data)); 
		    		var part=data.query.results.channel;
		    		$('#pogoda').append('<p>' +part.description+ ' </p> <p> Last update: ' + data.query.results.channel.lastBuildDate + ' </p>'
		    			+ '<p>Sunrise: ' + data.query.results.channel.astronomy.sunrise + ' </p>'
		    			+ '<p>Sunset: ' + data.query.results.channel.astronomy.sunset + ' </p>'
		    			+ '<p> Temperature: ' +part.item.condition.temp + ' C </p>' 
		    			+ '<p> Wind speed: ' + part.wind.speed + ' km/h </p>'
		    		 + part.item.description.substr(9).slice(0, -3));
		    },
		    error: function(err) {  },
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "3n6AAdLHCJmshsNu5ObT4rlHFCUsp118KgZjsnjYQCuU20o39p"); // Enter here your Mashape key
		    }
	});


});

