import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const FontAwesomeIconsPack = {
    name: 'fontAwesome',
    icons: createIconsMap(),
};

function createIconsMap() {
    return new Proxy({}, { get(target, name, fill) { return IconProvider(name, fill); }, });
}

const IconProvider = (name, fill) => ({ toReactElement: (props) => FontAwesome({ name, fill, ...props }), });

function FontAwesome({ name, fill, style }) {
    const { height, ...iconStyle } = StyleSheet.flatten(style);
    return (
        <Icon name={name} size={height} color={fill} style={iconStyle} />
    )
}