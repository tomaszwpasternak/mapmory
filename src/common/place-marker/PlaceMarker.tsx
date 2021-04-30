import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { selectTagColor, selectTagIcon } from '../../core/store/tag/tag.selector';
import { Icon } from '../icon/Icon';

export function PlaceMarker({
    tag = null,
    icon = '',
    color = '',
    discover = false
}) {
    const tagIconName = useSelector(selectTagIcon(tag));
    const tagIconColor = useSelector(selectTagColor(tag));

    const iconName = useMemo<any>(() => icon ? icon : tagIconName, [icon]);
    const iconColor = useMemo<any>(() => color ? color : tagIconColor, [color]);

    return (
        <View style={{
            width: 35,
            height: 35,
            backgroundColor: iconColor === '#C5CEE0' ? '#3366ff' : iconColor,
            borderRadius: discover ? 5 : 20,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible',
            elevation: 5
        }}>
            {discover && (
                <View style={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'white',
                    overflow: 'visible',
                    zIndex: 9999,
                    right: -3,
                    top: 0,
                    backgroundColor: '#FF3D71'
                }} />
            )}

            <Icon
                fullIconName={iconName}
                style={{
                    width: 25,
                    height: 25
                }}
                fill={'white'}
            />
        </View>
    )
}
