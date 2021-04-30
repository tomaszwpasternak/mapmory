import { Divider, Icon, Input, List, ListItem, TopNavigationAction } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { PlaceMarker } from '../common/place-marker/PlaceMarker';
import { TopHeader } from '../common/top-header/TopHeader';

export function PlaceList({ navigation, route }) {
    const { placeList } = route.params;

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(placeList);

    useEffect(() => { 
        setFilteredData(placeList.filter(el => el.name.includes(search) || el?.description.includes(search)));
    }, [search]);

    return (
        <TopHeader
            title={'Twoje nowe miejsce'}
            subtitle={`Lista zawiera ${placeList.length} miejsc`}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.push('Map')}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
        >
            <Input
                placeholder='Wyszukaj...'
                accessoryLeft={(props) => (<Icon {...props} name='search-outline' />)}
                value={search}
                onChangeText={nextValue => setSearch(nextValue)}
                style={{marginBottom: -3}}
            />
            <List
                data={filteredData}
                ItemSeparatorComponent={Divider}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        description={item.description}
                        accessoryLeft={() => (
                            <PlaceMarker
                                tag={item.tags[0]}
                                color={item.color}
                                icon={item.icon}
                                discover={item.discover}
                            />
                        )}
                        onPress={() => {
                            navigation.push('Details', { place: item });
                        }}
                    />
                )}
            />
        </TopHeader>
    )
}