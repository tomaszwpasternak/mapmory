import { Button, Layout } from '@ui-kitten/components/ui';
import React from 'react';
import { TextBoldHint } from '../text-bold-hint/TextBoldHint';

export function SectionHeader({
    title,
    level= '2',
    rightAppear = false,
    rightText = '',
    rightAppearance = 'filled',
    rightStatus = 'basic',
    rightSize = 'tiny',
    rightAccessory = ((props) => <></>),
    rightOnPress = () => { }
}) {
    return (
        <Layout level={level} style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <TextBoldHint>
                {title}
            </TextBoldHint>

            {rightAppear && (
                <Button
                    status={rightStatus}
                    appearance={rightAppearance}
                    size={rightSize}
                    onPress={rightOnPress}
                    accessoryLeft={rightAccessory}
                >
                    {rightText}
                </Button>
            )}
        </Layout>
    )
}