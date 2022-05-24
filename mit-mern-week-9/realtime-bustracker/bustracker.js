
import MAPBOX_API_Key from './keys.js';
import MTBA_Stations from './data/MBTA_Bus_Stops.geojson' assert {type: 'json'};

mapboxgl.accessToken = MAPBOX_API_Key;


// Contruct Map
const map = new mapboxgl.Map({
    container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-71.104081,42.365554],
    zoom: 14
});

// Add Map Icons 
function add_MapIcons() {
	map.loadImage(
		'./assets/red_bus.png',
		(error, image) => {
			if (error) throw error;

		// Add the image to the map style.
		map.addImage('bus_red', image);
	});

	map.loadImage(
		'./assets/bus_stop.png',
		(error, image) => {
			if (error) throw error;

		// Add the image to the map style.
		map.addImage('bus_stop', image);
	});
}

window.onload = add_MapIcons()

//add bus stops
// map.on('load', function add_BusStops() {

// 	// build GeoJSON Data
// 	const bus_stops = [];
// 	MTBA_Stations.features.forEach((bus_stop, i) => {

// 		bus_stops.push({
// 		"type": "Feature",
// 		"properties": {
// 			"name": bus_stop.properties.stop_name
// 		},
// 		"geometry": {
// 			"type": "Point",
// 			"coordinates":[bus_stop.geometry.coordinates[0], bus_stop.geometry.coordinates[1]]
// 		}
// 		})
// 	});

// 	const geojson_bus_stops = {
// 			"type": "FeatureCollection", 
// 			"features": bus_stops
// 	};
	
// 	map.addSource('bus_stops', {
// 		'type': 'geojson',
// 		'data': geojson_bus_stops
// 	});

// 	map.addLayer({
// 		'id': 'bus_stops',
// 		'type': 'symbol',
// 		'source': 'bus_stops',
// 		'layout': {
// 			'icon-image': 'bus_stop',
// 			'icon-size': 0.5,
// 			'text-field': '{name}',
// 			'text-font': ['Open Sans Regular','Arial Unicode MS Regular'],
// 			'text-size': 10,
// 			'text-offset': [0, -1.6],
// 			'text-anchor': 'top'
// 			}
// 	});
// }
// )

// Add and Update Buses
var counter = 0;
async function run(){

    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	locations.forEach((bus) => {

		let lat = bus['attributes']['latitude'];
		let lng = bus['attributes']['longitude'];
		let bus_status = bus.attributes.occupancy_status;
		if (bus_status !== null ) {
			bus_status = bus_status.replace(/_/g, " ").toLowerCase();
		}

		if ( counter === 0 ) {

			// Add the bus marker	
			map.addSource( bus.id, {
						'type': 'geojson',
						'data': {
							'type': 'FeatureCollection',
							'features': [
								{
								'type': 'Feature',
								'geometry': {
									'type': 'Point',
									'coordinates':  [lng, lat]
								}
								}
							]
						}
			});

			map.addLayer({
				'id': bus.id,
				'type': 'symbol',
				'source': bus.id,
				'layout': {
					'icon-image': 'bus_red',
					'icon-size': 1,
					'text-field': 'Bus ' + bus.attributes.label,
					'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
					'text-offset': [0, -1.6],
					'text-anchor': 'top'
					}
			});

			// When a click event occurs on a feature in the places layer, open a popup at the
			// location of the feature, with description HTML from its properties.
			map.on('click', bus.id , (e) => {
				// Copy coordinates array.
				const coordinates = [lng, lat];
				const description = ('<h3>Bus No: ' + bus.attributes.label + '</h3>' + '<hr>' + 'Route: ' + bus.relationships.route.data.id + '<br>' + 'Occupancy: ' + bus_status );
				
				// Ensure that if the map is zoomed out such that multiple
				// copies of the feature are visible, the popup appears
				// over the copy being pointed to.
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
				coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}
				
				new mapboxgl.Popup()
				.setLngLat(coordinates)
				.setHTML(description)
				.addTo(map);
				});
				
				// Change the cursor to a pointer when the mouse is over the places layer.
				map.on('mouseenter', bus.id, () => {
				map.getCanvas().style.cursor = 'pointer';
				});
				
				// Change it back to a pointer when it leaves.
				map.on('mouseleave', bus.id, () => {
				map.getCanvas().style.cursor = '';
				});

			} else {

			// Update bus location
			let geojsonSource = map.getSource(bus.id);

			geojsonSource.setData({
				"type": "FeatureCollection",
				"features": [{
				"geometry": {
					"type": "Point",
					"coordinates":  [lng, lat]
				}
				}]
			});

		}

	});
		

	// map.setCenter ([lng, lat])
	counter ++;

	// timer
	setTimeout(run, 15000);
}

//PopUps
map.on('click', 'places', (e) => {
	// Copy coordinates array.
	const coordinates = e.features[0].geometry.coordinates.slice();
	const description = e.features[0].properties.description;
	 
	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}
	 
	new mapboxgl.Popup()
	.setLngLat(coordinates)
	.setHTML(description)
	.addTo(map);
	});
	 
	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'places', () => {
	map.getCanvas().style.cursor = 'pointer';
	});
	 
	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', () => {
	map.getCanvas().style.cursor = '';
	});



// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();







