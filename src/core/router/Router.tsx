import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddPlace from '../../add-place/AddPlace';
import Settings from '../../settings/Settings';
import { Profile } from '../../profile/Profile';
import { Map } from '../../map/Map';
import { ProfileAdd } from '../../profile/profile-add/ProfileAdd';
import { Details } from '../../details/Details';
import { PlaceList } from '../../place-list/PlaceList';
import { MapSettings } from '../../map/map-settings/MapSettings';
import { EditPlace } from '../../edit-place/EditPlace';

const { Navigator, Screen } = createStackNavigator();

export function Router() {
    return (
        <NavigationContainer>
            <Navigator headerMode='none'>
                <Screen name='Profile' component={Profile} />
                <Screen name='ProfileAdd' component={ProfileAdd} />
                <Screen name='Map' component={Map} />
                <Screen name='MapSettings' component={MapSettings} />
                <Screen name='Details' component={Details} />
                <Screen name='PlaceList' component={PlaceList} />
                <Screen name='Settings' component={Settings} />
                <Screen name='AddPlace' component={AddPlace} />
                <Screen name='EditPlace' component={EditPlace} />
            </Navigator>
        </NavigationContainer >
    )
}
