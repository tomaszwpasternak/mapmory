import { Icon, MenuItem, OverflowMenu, TopNavigationAction } from '@ui-kitten/components';
import React, { useState } from 'react';

export function MapMenu({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <OverflowMenu
            anchor={() => (
                <TopNavigationAction
                    icon={(props) => (
                        <Icon {...props} name='more-vertical' />
                    )}
                    onPress={() => setMenuVisible(!menuVisible)}
                />
            )}
            visible={menuVisible}
            onBackdropPress={() => setMenuVisible(!menuVisible)}
        >

            <MenuItem
                title='Udostępnij'
                disabled={true}
                accessoryLeft={(props) => <Icon {...props} name={'cloud-upload-outline'} />}
                onPress={() => { setMenuVisible(false); navigation.push('Profile') }}
            />

            <MenuItem
                title='Ustawienia'
                accessoryLeft={(props) => <Icon {...props} name={'settings-outline'} />}
                onPress={() => { setMenuVisible(false); navigation.push('MapSettings') }}
            />


        </OverflowMenu>
    )
}