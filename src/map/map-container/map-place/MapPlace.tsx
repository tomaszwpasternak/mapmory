import React from 'react';
import { Marker } from 'react-native-maps';
import { PlaceMarker } from '../../../common/place-marker/PlaceMarker';

export function MapPlace({
    navigation,
    displayedPlaces
}) {
    return (
        <>
            {displayedPlaces?.map(el => (
                <Marker
                    key={el.localization.latitude + ', ' + el.localization.longitude}
                    coordinate={{
                        latitude: el.localization.latitude,
                        longitude: el.localization.longitude,
                    }}
                    style={{
                        width: 43,
                        height: 40,
                    }}
                    tracksViewChanges={false}
                    onPress={() => { navigation.push('Details', { place: el }) }}
                >
                    <PlaceMarker
                        tag={el?.tags[0]}
                        color={el.color}
                        icon={el.icon}
                        discover={el.discover}
                    />
                </Marker>
            ))}
        </>
    )
};
