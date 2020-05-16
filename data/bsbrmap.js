// Ініціалізаія джерел тайлів
var EsriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    });

// Ініціалізаія мапи
var map = L.map('mapid', {
    center: [46.35, 32.0],
    zoom: 10,
    layers: [EsriWorldImagery]
});

var baseMaps = {
    "Esri.WorldImagery": EsriWorldImagery,
    "OpenStreetMap": OpenStreetMap
};

// Додавання меню перемикання шарів
L.control.layers(baseMaps).addTo(map);

// Додавання масштабної лінійки
L.control.scale().addTo(map);

// Маркер місцезнаходження адміністрації заповідника та еколого-освітнього центру
L.marker({
    lon: 32.5397,
    lat: 46.5372
}).bindPopup('Адміністрація Чорноморського біосферного заповідника НАН України. Еколого-освітній центр').addTo(map);

// Завантаження контуру охоронної зони
$.getJSON("data/bsbroh.geojson", function(data) {
    L.geoJson(data, {
        color: "#d4822a9e"
    }).addTo(map);
});

// Завантаження контуру буферної зони
$.getJSON("data/bsbrbuf.geojson", function(data) {
    L.geoJson(data, {
        color: "#8e72ceff"
    }).addTo(map);
});

// Завантаження контуру зони антропогенних ландшафтів
$.getJSON("data/bsbrantr.geojson", function(data) {
    L.geoJson(data, {
        color: "#72ce90ff"
    }).addTo(map);
});

// Завантаження контуру заповідної зони
$.getJSON("data/bsbr.geojson", function(data) {
    L.geoJson(data).addTo(map);
});
