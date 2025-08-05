import L from 'leaflet';

export const leafIcon = new L.Icon({
    iconUrl: '/leaf-green.png',
    shadowUrl: '/leaf-shadow.png',
    iconSize: [28, 75], // size of the icon
    shadowSize: [40, 54], // size of the shadow
    iconAnchor: [14, 74], // point of the icon which will correspond to marker's location
    shadowAnchor: [3, 52],  // the same for the shadow
    popupAnchor: [-3, -70] // point from which the popup should open relative to the iconAnchor
});
