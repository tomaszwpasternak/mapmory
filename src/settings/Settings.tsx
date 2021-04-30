import { Icon, Layout, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';
import { TopHeader } from '../common/top-header/TopHeader';
import { SettingsMapType } from './settings-map-type/SettingsMapType';
import { SettingsTags } from './settings-tags/SettingsTags';

export default function Settings({ navigation }) {
    return (
        <TopHeader
            title={'Ustawienia'}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.push('Profile')}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
        >
            <Layout
                level={'2'}
                style={{ padding: 20 }}
            >
                <SettingsMapType />
                <SettingsTags />
            </Layout>
        </TopHeader>
    )
}