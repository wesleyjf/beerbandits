import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 1000 });
  };
  
  if (mapElement) {
    const center = JSON.parse(mapElement.dataset.center);
    center[0] = [center[1], center[1] = center[0]][0];
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      center: center,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 15
    });
    const markers = JSON.parse(mapElement.dataset.markers);
      if (markers.length != 0) {
        markers.forEach((marker) => {
          const element = document.createElement('div');
            element.className = 'marker';
            element.style.backgroundImage = `url('${marker.image_url}')`;
            element.style.backgroundSize = 'contain';
            element.style.width = '25px';
            element.style.height = '25px';

          new mapboxgl.Marker(element)
            .setLngLat([ marker.lng, marker.lat ])
            .addTo(map);
          });
        }
    if (markers != 0) {fitMapToMarkers(map, markers)};
  }
};

export { initMapbox };