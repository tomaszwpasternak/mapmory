import React from 'react';
import { Text, Layout, Icon, Button } from '@ui-kitten/components';

export function ProfileHeader({ navigation }) {
    return (
        <Layout style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 20 }}>
            <Layout>
                <Text category={'h1'} style={{ fontWeight: 'bold' }}>Twoje Mapy</Text>
                <Text category={'c1'} appearance={'hint'}>Wybierz, którą mapę chcesz wyświetlić</Text>
            </Layout>
            <Layout>
                <Button
                    appearance='ghost'
                    status='basic'
                    size={'giant'}
                    onPress={() => navigation.push('Settings')}
                    accessoryLeft={((props) => <Icon {...props} name='settings' />)}
                />
            </Layout>
        </Layout>
    )
}