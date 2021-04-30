import { Button, Icon, Layout, Tab, TabView, Text, TopNavigationAction } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { PhotoGallery } from '../common/photo-gallery/PhotoGallery';
import { TopHeader } from '../common/top-header/TopHeader';
import { DetailsBasicData } from './details-basic-data/DetailsBasicData';
import { DetailsLocalization } from './details-localization/DetailsLocalization';
import { DetailsLogo } from './details-logo/DetailsLogo';

export function Details({ navigation, route }) {
    const { place } = route.params;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [tabs, setTabs] = useState([]);

    return (
        <TopHeader
            title={!place.discover ? 'Twoje miejsce' : 'Odkryj miejsce'}
            subtitle={!place.discover ? 'Szczegóły Twojego miejsca' : 'Szczegóły nowego miejsca'}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.goBack()}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
            accessoryRight={() => (
                <>
                    {!place.discover && (
                        <TopNavigationAction
                            onPress={() => navigation.push('EditPlace', { place: place })}
                            icon={(props) => (
                                <Icon {...props} name='edit-outline'
                                    fill={'#0095FF'} />
                            )}
                        />
                    )}
                </>
            )}
        >
            <DetailsLogo place={place} />
            <DetailsBasicData place={place} />
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title='Lokalizacja'>
                    <DetailsLocalization place={place} />
                </Tab>
                <Tab title='Informacje'>
                    <Layout
                        level={'2'}
                        style={{ padding: 20, flex: 1 }}
                    >
                        <Text
                            category={'c2'}
                            appearance={'hint'}
                        >
                            {place.description}
                        </Text>
                    </Layout>
                </Tab>

                <Tab title='Zdjęcia'>
                    <PhotoGallery photos={place.photos} />
                </Tab>
            </TabView>
            {place.discover && (
                <Button
                    status={'success'}
                    accessoryLeft={(props) => <Icon {...props} name={'plus-outline'} />}
                    style={{ margin: 20 }}
                    onPress={() => navigation.push('AddPlace', {
                        localization: place.localization,
                        initName: place.name,
                        initDescription: place.description
                    })}
                >
                    DODAJ TO MIEJSCE
                </Button>
            )}
        </TopHeader>
    )
}
