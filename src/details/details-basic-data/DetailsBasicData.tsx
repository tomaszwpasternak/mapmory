import React from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { Linking, View } from 'react-native';
import { DetailsTags } from '../details-tags/DetailsTags';
import { DEVICE_WIDTH } from '../../common/dimensions/dimensions';

export function DetailsBasicData({ place }) {
    return (
        <>
            <Layout level={'1'}
                style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                    paddingTop: 10
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        category={'h5'}
                        style={{
                            fontWeight: 'bold',
                            maxWidth: DEVICE_WIDTH * 0.7
                        }}>
                        {place.name}
                    </Text>

                    <Button
                        appearance={'ghost'}
                        status={'danger'}
                        onPress={() => { Linking.openURL('https://google.com/search?q=' + place.name) }}
                        accessoryRight={(props) => <Icon {...props} name={'google-outline'} />}
                    />
                </View>
                <DetailsTags place={place} />
            </Layout>
        </>
    )
}
