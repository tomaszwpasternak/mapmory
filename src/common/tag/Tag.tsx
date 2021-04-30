import React from "react";
import { StyleSheet, View } from "react-native";
import { TextBoldHint } from "../text-bold-hint/TextBoldHint";
import { useSelector } from 'react-redux';
import { selectTagIcon, selectTagColor } from "../../core/store/tag/tag.selector";
import { Icon } from "../icon/Icon";

export function Tag({ active, onPress, children }) {
    const color = useSelector(selectTagColor(children))
    const icon = useSelector(selectTagIcon(children))

    return (
        <View
            style={{
                ...styles.tag,
                ...(active && color != '#C5CEE0' ? {
                    borderColor: color,
                    backgroundColor: color,
                    elevation: 5
                } : {})
            }}
            onTouchStart={onPress}
        >

            <Icon
                style={{
                    width: 16,
                    height: 16,
                    marginRight: 6
                }}
                fill={active && color != '#C5CEE0' ? 'white' : '#C5CEE0'}
                fullIconName={icon}
            />

            <TextBoldHint style={{
                ...(active && color != '#C5CEE0' ? {
                    borderColor: color,
                    backgroundColor: color,
                    color: 'white'
                } : {})
            }}
            >
                {children}
            </TextBoldHint>
        </View >
    );
}

const styles = StyleSheet.create({
    tag: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#C5CEE0',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
});