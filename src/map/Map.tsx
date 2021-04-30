import { Icon, MenuItem, OverflowMenu, TopNavigationAction } from '@ui-kitten/components';
import React, { createRef, useState } from 'react';
import MapView from 'react-native-maps';
import { TopHeader } from '../common/top-header/TopHeader';
import { MapHud } from './map-container/map-hud/MapHud';
import { useSelector } from 'react-redux';
import { SELECT_SELECTED_PROFILE } from '../core/store/profile/profile.selector';
import { MapMenu } from './map-menu/MapMenu';
import { MapContainer } from './map-container/MapContainer';

export function Map({ navigation }) {
    const selectedProfile = useSelector(SELECT_SELECTED_PROFILE);

    return (
        <TopHeader
            title={selectedProfile.name}
            subtitle={selectedProfile.description}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.push('Profile')}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
            accessoryRight={() => <MapMenu navigation={navigation} />}
        >
            <MapContainer navigation={navigation} />
        </TopHeader>
    )
}





