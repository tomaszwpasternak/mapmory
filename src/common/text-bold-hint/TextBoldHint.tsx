import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

export function TextBoldHint({ children, style = {} }) {
    return (
        <Text
            category={'label'}
            appearance={'hint'}
            style={{
                ...styles.text,
                ...style,
            }}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 5,
        marginTop: 5,
        textTransform: 'uppercase',
        color: '#C5CEE0'
    }
});