import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MaterialCommunityIconsPack = {
    name: 'materialCommunityIcons',
    icons: createIconsMap(),
};

function createIconsMap() {
    return new Proxy({}, { get(target, name, fill) { return IconProvider(name, fill); }, });
}

const IconProvider = (name, fill) => ({ toReactElement: (props) => MaterialCommunityIcons({ name, fill, ...props }), });

function MaterialCommunityIcons({ name, fill, style }) {
    const { height, ...iconStyle } = StyleSheet.flatten(style);
    return (
        <Icon name={name} size={height} color={fill} style={iconStyle} />
    )
}