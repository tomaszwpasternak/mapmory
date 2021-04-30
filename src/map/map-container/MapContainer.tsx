import React, { createRef, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { useSelector } from 'react-redux';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../common/dimensions/dimensions";
import { Loading } from "../../common/loading/Loading";
import { useUserLocation } from "../../core/custom-hooks/use-user-location/useUserLocation";
import { SELECT_ALL_PLACES_BY_PROFILE } from "../../core/store/place/place.selector";
import { SELECT_SELECTED_PROFILE } from "../../core/store/profile/profile.selector";
import { SELECT_MAP_TYPE } from "../../core/store/setting/setting.selector";
import { MAP_DESIGN } from "../map-design.utils";
import { MapAddPlace } from "./map-add-place/MapAddPlace";
import { MapHud } from "./map-hud/MapHud";
import { MapPlace } from "./map-place/MapPlace";

export function MapContainer({
    navigation
}) {
    const selectedProfile = useSelector(SELECT_SELECTED_PROFILE);
    const profilePlaces = useSelector(SELECT_ALL_PLACES_BY_PROFILE(selectedProfile.name));
    const mapType = useSelector(SELECT_MAP_TYPE);

    const userLocation = useUserLocation();

    const [region, setRegion] = useState<any>(null);
    const [displayedPlaces, setDisplayedPlaces] = useState<any>(profilePlaces);
    const [isAddingPlace, setIsAddingPlace] = useState(false);
    const [addPlaceLocalization, setAddPlaceLocalization] = useState<any>(null);

    const [filterTags, setFilterTags] = useState<string[]>([]);

    const [discoverPlacesCache, setDiscoverPlacesCache] = useState<any>([]);

    const mapRef = createRef<MapView>();

    useEffect(() => {
        if (filterTags.length) {
            setDisplayedPlaces([
                ...profilePlaces.filter(el => el.tags.some(r => filterTags.includes(r))),
                ...discoverPlacesCache
            ])
        } else {
            setDisplayedPlaces([
                ...profilePlaces,
                ...discoverPlacesCache
            ])
        }
    }, [filterTags, discoverPlacesCache]);

    if (!userLocation) {
        return <Loading loading={!userLocation} />
    }

    const appendDiscoverPlaces = (discoverPlaces) => {
        discoverPlaces = discoverPlaces.filter(el => !profilePlaces.map(e => '' + e.localization.latitude + ',' + e.localization.longitude).includes(el.localization.latitude + ',' + el.localization.longitude));
        setDiscoverPlacesCache(discoverPlaces);
    }

    return (
        <>
            <MapView
                ref={mapRef}
                style={{
                    width: DEVICE_WIDTH,
                    height: DEVICE_HEIGHT - 57
                }}
                rotateEnabled={false}
                pitchEnabled={false}
                customMapStyle={MAP_DESIGN}
                initialRegion={{
                    ...userLocation,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation={true}
                mapType={mapType}
                onRegionChangeComplete={(region) => {
                    setRegion(region);
                }}
            >
                {!isAddingPlace && (
                    <MapPlace
                        navigation={navigation}
                        displayedPlaces={displayedPlaces}
                    />
                )}
                {isAddingPlace && (
                    <MapAddPlace
                        region={region}
                        addPlaceLocalization={addPlaceLocalization}
                        setAddPlaceLocalization={setAddPlaceLocalization}
                    />
                )}
            </MapView>

            <MapHud
                region={region}
                isAddingPlace={isAddingPlace}
                filterTags={filterTags}
                setFilterTags={setFilterTags}
                onAutocompleteSelected={({ lat, lon }) => {
                    mapRef?.current?.animateCamera({
                        center: {
                            latitude: parseFloat(lat),
                            longitude: parseFloat(lon)
                        },
                        zoom: 14
                    })
                }}
                onPlaceListPress={() => navigation.push('PlaceList', { placeList: displayedPlaces })}
                onStartAddingPlace={() => setIsAddingPlace(true)}
                onConfirmPlace={() => navigation.push('AddPlace', { localization: addPlaceLocalization })}
                onDenyPlace={() => { setIsAddingPlace(false) }}
                onDiscoverStarted={() => setDiscoverPlacesCache([])}
                onDiscoverCompleted={(data) => appendDiscoverPlaces(data)}
            />
        </>
    )
}