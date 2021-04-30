import React from "react";
import { useSelector } from 'react-redux';
import MapView, { Marker } from "react-native-maps";
import { SELECT_MAP_TYPE } from "../../core/store/setting/setting.selector";
import { MAP_DESIGN } from "../../map/map-design.utils";
import { PlaceMarker } from "../../common/place-marker/PlaceMarker";
import { DEVICE_WIDTH } from "../../common/dimensions/dimensions";

export function DetailsLocalization({ place }) {
    const mapType = useSelector(SELECT_MAP_TYPE);

    return (
        <MapView
            style={{
                width: DEVICE_WIDTH,
                height: 200
            }}
            rotateEnabled={false}
            pitchEnabled={false}
            zoomEnabled={false}
            scrollEnabled={false}
            customMapStyle={MAP_DESIGN}
            initialRegion={{
                ...place.localization,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            }}
            showsUserLocation={true}
            mapType={mapType}
        >
            <Marker
                coordinate={{
                    ...place.localization,
                }}
            >
                <PlaceMarker
                    icon='eva:pin'
                    color='#0095FF'
                />
            </Marker>
        </MapView>
    )
}