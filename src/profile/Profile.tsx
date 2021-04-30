import React from 'react';
import { ProfileHeader } from './profile-header/ProfileHeader';
import { useSelector, useDispatch } from 'react-redux';
import { SELECT_ALL_PROFILES } from '../core/store/profile/profile.selector';
import { Divider, List, ListItem } from '@ui-kitten/components';
import { SELECT_PROFILE_ACTION } from '../core/store/profile/profile.action';
import { PlaceMarker } from '../common/place-marker/PlaceMarker';
import { SectionHeader } from '../common/section-header/SectionHeader';

export function Profile({ navigation }) {
    const profiles = useSelector(SELECT_ALL_PROFILES);

    const dispatch = useDispatch();

    return (
        <>
            <ProfileHeader navigation={navigation} />
            <Divider />


            <SectionHeader 
                title={'Twoje mapy'}
                rightAppear={true}
                rightText={'DODAJ NOWĄ MAPĘ'}
                rightStatus={'success'}
                rightAppearance={'ghost'}
                rightOnPress={() => navigation.push('ProfileAdd')}
            />
            <List
                data={profiles}
                ItemSeparatorComponent={Divider}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        description={item.description}
                        accessoryLeft={() => (
                            <PlaceMarker
                                color={item.color}
                                icon={item.icon}
                            />
                        )}
                        onPress={() => {
                            dispatch(SELECT_PROFILE_ACTION(item))
                            navigation.push('Map');
                        }}
                    />
                )}
            />
        </>
    )
}