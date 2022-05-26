
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
map.on('load', function add_BusStops() {

	const bus_stops = [];
	MTBA_Stations.features.forEach((bus_stop, i) => {

	bus_stops.push({
		"type": "Feature",
		"properties": {
			"name": bus_stop.properties.stop_name
			},
		"geometry": {
			"type": "Point",
			"coordinates":[bus_stop.geometry.coordinates[0], bus_stop.geometry.coordinates[1]]
			}
		})
	});

	const geojson_bus_stops = {
			"type": "FeatureCollection", 
			"features": bus_stops
	};
		
	map.addSource('bus_stops', {
		'type': 'geojson',
		'data': geojson_bus_stops
	});

	map.addLayer({
		'id': 'bus_stops',
		'type': 'symbol',
		'source': 'bus_stops',
		'layout': {
			'icon-image': 'boston-t',
			'icon-size': 1,
			'text-field': '{name}',
			'text-font': ['Open Sans Regular','Arial Unicode MS Regular'],
			'text-size': 8,
			'text-offset': [0, -1.5],
			'text-anchor': 'bottom'
			}
	});
})

// Add and Update Buses
var counter = 0;
var map_markers = [];

async function run(){

    // get bus data    
	const locations = await getBusLocations();
	// console.log(new Date());
	// console.log(locations);


	// Build layer consisting bus locations
	const bus_locations = [];

	locations.forEach((location, i) => {
		let bus_status = location.attributes.occupancy_status;
		if (bus_status !== null ) {
			bus_status = bus_status.replace(/_/g, " ").toLowerCase();
		};

        bus_locations.push({
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates':[location['attributes']['longitude'], location['attributes']['latitude']]				
            },
			'properties': {
				'description': ('<h3>Bus No: ' + location.attributes.label + '</h3>' + '<hr>' + 'Route: ' + location.relationships.route.data.id + '<br>' + 'Occupancy: ' + bus_status),
				'iconSize': [40, 40],
				'busID': location.id
			}
        })
    });

	const bus_locations_geojson = {
        "type": "FeatureCollection", 
        "features": bus_locations
    }

	if (counter === 0) {
		//Create a new source
		map.addSource('bus_locations', {
			'type': 'geojson',
			'data': bus_locations_geojson
		});

	} else {
		// Update bus location
		let geojsonSource = map.getSource('bus_locations');
		geojsonSource.setData(bus_locations_geojson);
	
	}

	//Set Markers
	if ( map_markers.length > 0 ) {

	// Remove existing markers
		for (const marker of map_markers) {
			marker.remove()
		}
		
	}

	let map_marker = '';

	// Add markers to the map.
	for (const marker of bus_locations ) {

	// Create a DOM element for each marker.
		const el = document.createElement('div');
		const width = marker.properties.iconSize[0];
		const height = marker.properties.iconSize[1];

		el.className = 'marker';
		el.id = marker.properties.busID;
		el.style.backgroundImage = 'url(./assets/red_bus.png)';
		el.style.width = `${width}px`;
		el.style.height = `${height}px`;
		el.style.backgroundSize = '100%';
		
		// el.addEventListener('click', () => {
		// 	window.alert(marker.properties.message);
		// });

		// create the popup
		const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(marker.properties.description);

			
		// Add markers to the map.
		map_marker = new mapboxgl.Marker(el)
			.setLngLat(marker.geometry.coordinates)
			.setPopup(popup) 
			.addTo(map);

		map_markers.push(map_marker)
	}		

	// map.setCenter ([lng, lat])
	counter ++;

	// timer
	setTimeout(run, 15000);
}


// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();







