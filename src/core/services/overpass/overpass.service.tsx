import OverpassData from './overpass.data';
import { LatLng } from "react-native-maps";

// @deprecated

export function mapOverpassResponseToPlace(overpassResponse): any {
    const type = getType(overpassResponse);

    return {
        id: overpassResponse?.id,
        name: overpassResponse?.tags?.name || OverpassData[type]?.name || type,
        description: overpassResponse?.tags?.name && OverpassData[type]?.name || '',
        localization: {
            latitude: overpassResponse?.center?.lat || overpassResponse?.lat,
            longitude: overpassResponse?.center?.lon || overpassResponse?.lon
        },
        photos: [],
        tags: [],
        color: OverpassData[type]?.color || '#3366ff',
        icon: OverpassData[type]?.icon || 'eva:question-mark-outline',
        discover: true
    }
}

export interface OverpassQuery {
    start: LatLng,
    end: LatLng
}

export function generateOverpassQuery(overpassQuery: OverpassQuery) {
    let query = `[out:json][bbox: ${generateBoxQuery(overpassQuery)}];
    `;

    query += '(';

    Object.keys(OverpassData).filter(key => key != 'other').forEach(key => {
        query +=
            `
            node [${OverpassData[key].field}=${key}];
            way [${OverpassData[key].field}=${key}];
            relation [${OverpassData[key].field}=${key}];
        `
    })

    query += ');out center;'
    return query;
}

function generateBoxQuery(OverpassQuery: OverpassQuery) {
    return `${OverpassQuery.start.latitude},${OverpassQuery.start.longitude},${OverpassQuery.end.latitude},${OverpassQuery.end.longitude}`
}

function getType(overpassResponse) {
    return overpassResponse?.tags?.natural || overpassResponse?.tags?.leisure || overpassResponse?.tags?.building || overpassResponse?.tags?.amenity || overpassResponse?.tags?.highway || overpassResponse?.tags?.historic || overpassResponse?.tags?.waterway || overpassResponse?.tags?.railway || overpassResponse?.tags?.tourism || overpassResponse?.tags?.landuse || 'other';
}
