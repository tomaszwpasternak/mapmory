import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList, View} from 'react-native';
import { ENABLE_COLORS } from '../enable-colors';

export function ColorPicker({color, setColor}) {

    return (
        <FlatList
            data={ENABLE_COLORS}
            keyExtractor={(item) => item}
            numColumns={6}
            renderItem={(item) => (
                <TouchableOpacity
                    style={{
                        padding: 5,
                        borderWidth: 1,
                        borderColor: color === item.item ? '#C5CEE0' : 'white',
                        borderRadius: 10,
                    }}
                    onPress={() => setColor(item.item)}
                >
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 25,
                        backgroundColor: item.item
                    }}
                    />
                </TouchableOpacity>
            )}
        />
    )
}
