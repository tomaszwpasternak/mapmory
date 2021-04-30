import {PlaceInterface} from "../../store/place/place.interface";

// @deprecated

interface DistanceInterface {
  distance: string;
}

export function extendPlaceWithDistance(place: PlaceInterface, userLocation): PlaceInterface & DistanceInterface {
  return {
    ...place,
    distance: distanceBetweenLatLon(userLocation?.latitude || 0, userLocation?.longitude || 0, place.localization?.latitude, place.localization?.longitude)
  }
}

function distanceBetweenLatLon(lat1, lon1, lat2, lon2){
  var R = 6378.137;
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return (d * 1000).toFixed(0);
}


