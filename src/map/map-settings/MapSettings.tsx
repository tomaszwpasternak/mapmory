import { Icon, Layout, TopNavigationAction } from '@ui-kitten/components';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConfirmModal } from '../../common/confirm-modal/ConfirmModal';
import { TopHeader } from '../../common/top-header/TopHeader';
import { REMOVE_ALL_PLACES_BY_PROFILE_ACTION } from '../../core/store/place/place.action';
import { REMOVE_PROFILE_ACTION } from '../../core/store/profile/profile.action';
import { SELECT_SELECTED_PROFILE } from '../../core/store/profile/profile.selector';
import { SettingsMapType } from '../../settings/settings-map-type/SettingsMapType';

export function MapSettings({ navigation }) {
    const selectedProfile = useSelector(SELECT_SELECTED_PROFILE);
    const dispatch = useDispatch();


    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    return (
        <TopHeader
            title={'Ustawienia mapy'}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.goBack()}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
            accessoryRight={() => (
                <TopNavigationAction
                    onPress={() => { setConfirmModalVisible(true) }}
                    icon={(props) => (
                        <Icon
                            {...props}
                            fill={'#FF3D71'}
                            name='trash'
                        />
                    )}
                />
            )}
        >
            <Layout
                level={'2'}
                style={{ padding: 20 }}
            >
                <SettingsMapType />
            </Layout>


            <ConfirmModal
                visible={confirmModalVisible}
                setVisible={setConfirmModalVisible}
                title={'Czy na pewno chcesz usunąć mapę?'}
                subtitle={'Ta operacja jest nieodwracalna'}
                onCancel={() => { }}
                onConfirm={() => {
                    dispatch(REMOVE_PROFILE_ACTION(selectedProfile.name));
                    dispatch(REMOVE_ALL_PLACES_BY_PROFILE_ACTION(selectedProfile.name));
                    navigation.push('Profile');
                }}
            />
        </TopHeader>
    )
}