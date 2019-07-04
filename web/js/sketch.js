var earthquakes;

function preload(){
	earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
	//earthquakes = loadStrings('all_day.csv');
}

function setup(){	
	var tengah = new google.maps.LatLng(-1.957250, 121.094205);
	var element = document.getElementById("peta");
	var opsi = {center: tengah, zoom:5};
	var peta = new google.maps.Map(element, opsi);
	for (var i = 1; i < earthquakes.length; i++) {
		var data = earthquakes[i].split(/,/);
		var lat = data[1];
		var lon = data[2];
		//if(lat >= -11 && lat <= 6 && lon >= 95 && lon <= 141){
			var posisi = new google.maps.LatLng(lat, lon);
			var marker = new google.maps.Marker({
				position:posisi
				//animation:google.maps.Animation.BOUNCE
			});
			marker.setMap(peta);
		//}
	}
}