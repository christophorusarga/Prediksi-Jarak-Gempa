var map = L.map(
    "map",
    {
        center: [-2.2331, 117.2841],
        crs: L.CRS.EPSG3857,
        zoom: 4,
        zoomControl: true,
        preferCanvas: false,
    }
);

var tileLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {"attribution": "Data by \u0026copy; \u003ca target=\"_blank\" href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map);

var circle1 = L.circle(
    [-8.1849, 111.1162],
    {"bubblingMouseEvents": true, "color": "#3186cc", "fillColor": "#3186cc", "fillOpacity": 0.2, "radius": 1186529.0, "weight": 3}
).addTo(map);

var circle2 = L.circle(
    [-7.7249, 110.5068],
    {"bubblingMouseEvents": true, "color": "#FA8072", "fillColor": "#FA8072", "fillOpacity": 0.2, "radius": 1098472.0, "weight": 3}
).addTo(map);

var circle3 = L.circle(
    [-7.7249, 110.507],
    {"bubblingMouseEvents": true, "color": "#ADFF2F", "fillColor": "#ADFF2F", "fillOpacity": 0.2, "radius": 1095702.0, "weight": 3}
).addTo(map);

var circle4 = L.circle(
    [-7.7533, 110.424],
    {"bubblingMouseEvents": true, "color": "#800080", "fillColor": "#800080", "fillOpacity": 0.2, "radius": 1065579.0, "weight": 3}
).addTo(map);

var circle5 = L.circle(
    [-6.1295, 106.222],
    {"bubblingMouseEvents": true, "color": "#FFFF00", "fillColor": "#FFFF00", "fillOpacity": 0.2, "radius": 1834937.0, "weight": 3}
).addTo(map);

var circle6 = L.circle(
    [-8.4733, 115.1698],
    {"bubblingMouseEvents": true, "color": "#808080", "fillColor": "#808080", "fillOpacity": 0.2, "radius": 1739840.0, "weight": 3}
).addTo(map);

