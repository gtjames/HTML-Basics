function checkWeather() {
  var xhr = new XMLHttpRequest();
  xhr.open( "GET", "http://w1.weather.gov/xml/current_obs/KSLC.xml", true );
  xhr.setRequestHeader( 'Content-Type', 'text/plain' );
  xhr.send( null );

  xhr.onload = function () {
    var xmlDoc = xhr.responseXML;
    var weather = xmlDoc.getElementsByTagName( "weather" );
    document.getElementById( "divWeather" ).innerHTML = "At DFW we have " + weather[ 0 ].textContent;
  }
}

function checkWeatherJQ() {
  var xhr = $.get( "http://w1.weather.gov/xml/current_obs/KPVU.xml", function ( data ) {
    var weather = data.getElementsByTagName( "weather" );
    document.getElementById( "divWeatherJQ" ).innerHTML = "At DFW we have " + weather[ 0 ].textContent;
  } );
}


function checkWeather2() {
  var xhr = new XMLHttpRequest();
  xhr.open( "GET", "http://w1.weather.gov/data/obhistory/KSLC.html", true );
  xhr.setRequestHeader( 'Content-Type', 'text/plain' );
  xhr.send( null );

  xhr.onload = function () {
    document.write( xhr.response );
  }
}

function checkWeatherWU() {
  var xhr = $.get( "http://api.wunderground.com/api/6ce9379031cd2bf1/conditions/q/UT/Orem.json", function ( data ) {
      var weather = data.current_observation;
      var table = "<table><tbody>";
      for ( var key in weather ) {
        if ( weather.hasOwnProperty( key ) ) {
          table += "<tr><td>" + key + "</td><td>" + weather[ key ] + "</td></tr>";
      }
      document.getElementById( "divWeatherWU" ).innerHTML += table + "/tbody></table>";
    }
  } );
}
