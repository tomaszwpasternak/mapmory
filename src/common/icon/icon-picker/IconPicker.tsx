import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ENABLE_ICONS } from '../enable-icons';
import { Icon } from '../Icon';
import { View } from 'react-native';

export function IconPicker({ icon, setIcon }) {
    return (
        <View style={{
            height: 150,
        }}>
            <FlatList
                data={ENABLE_ICONS}
                keyExtractor={(item) => item}
                contentContainerStyle={{
                    paddingBottom: 10,
                }}
                numColumns={7}
                initialNumToRender={1}
                renderItem={(item) => (
                    <TouchableOpacity
                        onPress={() => setIcon(item.item)}
                        style={{
                            padding: 5,
                        }}
                    >
                        <Icon
                            fullIconName={item.item}
                            fill={item.item === icon ? '#00E096' : '#C5CEE0'}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
