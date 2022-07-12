const attributionStr =
  '&copy; <a href="https://openstreetmap.org/copyright">' +
  'OpenStreetMap contributors</a> | ' +
  '<a href="https://www.wikidata.org" >Wikidata</a> | ' +
  '<a href="https://github.com/xbgbtx/ArtistMap" >Source Code</a>';

function initLeaflet() {
  const homeCoords = [0, 0];
  const homeZoom = 2;

  const mapDiv = document.getElementById("map");
  const map = L.map(mapDiv).setView(homeCoords, homeZoom);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: attributionStr,
    noWrap: false,
  }).addTo(map);

  /* L.easyButton('<img class="button_icon" src="assets/globe.svg">', () => { */
  /*   map.flyTo(homeCoords, homeZoom); */
  /* }).addTo(map); */
}

