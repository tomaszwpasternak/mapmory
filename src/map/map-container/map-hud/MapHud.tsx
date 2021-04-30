import React from 'react';
import { View } from 'react-native';
import { AutocompleteGeocode } from './autocomplete-geocode/AutocompleteGeocode';
import { PlaceListButton } from './place-list-button/PlaceListButton';
import { DiscoverButton } from './discover-button/DiscoverButton';
import { AddPlaceButton } from './add-place-button/AddPlaceButton';
import { DEVICE_WIDTH } from '../../../common/dimensions/dimensions';
import { FilterButton } from './filter-button/FilterButton';

export function MapHud({
    region,
    isAddingPlace,
    filterTags,
    setFilterTags,

    onPlaceListPress,
    onAutocompleteSelected,
    onStartAddingPlace,
    onConfirmPlace,
    onDenyPlace,
    onDiscoverStarted,
    onDiscoverCompleted
}) {
    return (
        <View style={{ position: 'absolute', width: DEVICE_WIDTH, padding: 20 }} >
            <AutocompleteGeocode onAutocompleteSelected={onAutocompleteSelected}/>

            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <FilterButton 
                    filterTags={filterTags}
                    setFilterTags={setFilterTags}
                />
                <PlaceListButton
                    isAddingPlace={isAddingPlace}
                    onPlaceListPress={onPlaceListPress}
                />
                <DiscoverButton
                    region={region}
                    isAddingPlace={isAddingPlace}
                    onDiscoverStarted={onDiscoverStarted}
                    onDiscoverCompleted={onDiscoverCompleted}
                />
                <AddPlaceButton
                    isAddingPlace={isAddingPlace}
                    onStartAddingPlace={onStartAddingPlace}
                    onConfirmPlace={onConfirmPlace}
                    onDenyPlace={onDenyPlace}
                />
            </View>
        </View>
    )
}