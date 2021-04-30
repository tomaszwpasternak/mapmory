import React, { useEffect } from 'react';
import { Marker } from 'react-native-maps';
import { Loading } from '../../../common/loading/Loading';
import { PlaceMarker } from '../../../common/place-marker/PlaceMarker';

export function MapAddPlace({
    region,
    addPlaceLocalization,
    setAddPlaceLocalization
}) {

    useEffect(() => {
        setAddPlaceLocalization({
            latitude: region.latitude,
            longitude: region.longitude
        })
    }, []);

    if (!addPlaceLocalization){
        return <></>
    }

    return (
        <Marker
            coordinate={{
                ...addPlaceLocalization
            }}
            onDragEnd={(event) => setAddPlaceLocalization(event.nativeEvent.coordinate)}
            draggable
        >
            <PlaceMarker
                icon='eva:pin'
                color='#0095FF'
            />
        </Marker>
    )
}