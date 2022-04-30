// initialize basemmap
mapboxgl.accessToken =
'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/light-v10', // style URL
zoom: 3, // starting zoom
center: [-100, 40], // starting center
projection: 'albers'
});


//load data to the map as new layers.
//map.on('load', function loadingData() {
map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function

// when loading a geojson, there are two steps
// add a source of the data and then add the layer out of the source
map.addSource('rates', {
    type: 'geojson',
    data: 'assets/rates.geojson'
});

map.addLayer({
        'id': 'rates-layer',
        'type': 'fill',
        'source': 'rates',
        'paint': {
            // increase the radii of the circle as the zoom level and dbh value increases
            'fill-color': [
                'step',
                ['get', 'rates'],

                '#feebe2', // stop_output_0
                21, // stop_input_0
                '#fcc5c0', // stop_output_1
                41, // stop_input_1
                '#fa9fb5', // stop_output_2
                61, // stop_input_2
                '#f768a1', // stop_output_3
                91, // stop_input_3
                '#dd3497', // stop_input_4
                131, // stop_input_4
                '#ae017e', // stop_output_5
                171, // stop_input_5
                "#7a0177", // stop_output_6
                201, // stop_input_6
                "#b10026", // stop_output_7

            ],
            'fill-outline-color': '#BBBBBB',
            'fill-opacity': 0.7,
        }


    },

);
const layers = [
    '0-20',
    '21-40',
    '41-60',
    '61-90',
    '91-130',
    '131-170',
    '171-200',
    '201 and more'
];
const colors = [
    '#feebe270',
    '#fcc5c070',
    '#fa9fb570',
    '#f768a170',
    '#dd349770',
    '#ae017e70',
    '#7a017770',
    '#b1002670'
];
// create legend
const legend = document.getElementById('legend');
legend.innerHTML = "<b>COVID-19 Rates" + source;

layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
});


// click on tree to view a popup
map.on('mousemove', ({
    point
}) => {
    const rates = map.queryRenderedFeatures(point, {
        layers: ['rates-layer']
    });
    document.getElementById('text-description').innerHTML = rates.length ?
        `<p><strong><em>${rates[0].properties.county}</strong></em></p><p><strong><em>${rates[0].properties.rates}</strong> COVID-19 rates</em></p>` :
        `<p>Hover over a county to view COVID-19 rates</p>`;
});


});
// add the data source
const source =

'<p style="text-align: left; font-size:10pt">Source: <a href="https://data.census.gov/cedsci/table?g=0100000US%24050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">2018 ACS 5 year estimates</a></p>';

// combine all the html codes.
legend.innerHTML = labels.join('') + source;