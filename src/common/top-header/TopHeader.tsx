import React from 'react';
import { TopNavigation, Divider } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';

export function TopHeader({
    title = '',
    subtitle = '',
    accessoryLeft = () => { return (<></>) },
    accessoryRight = () => { return (<></>) },
    children
}) {
    return (
        <>
            <TopNavigation
                alignment='center'
                title={title}
                subtitle={subtitle}
                accessoryLeft={accessoryLeft}
                accessoryRight={accessoryRight}
            />
            <Divider />

            <ScrollView>
                {children}
            </ScrollView>
        </>
    )
}