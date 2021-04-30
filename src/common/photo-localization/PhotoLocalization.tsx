import { Icon } from '@ui-kitten/components';
import React from 'react';
import { Marker, Polyline } from 'react-native-maps';

export function PhotoLocalization({
    photo,
    updatePhotos
}) {

    return (
        <>
            <Marker
                coordinate={{
                    ...photo.localization
                }}
                onDragEnd={(event) => updatePhotos({ ...photo, localization: event.nativeEvent.coordinate })}
                draggable
            >
                <Icon
                    style={{
                        width: '35',
                        height: '35',
                    }}
                    fill={'#00E096'}
                    name='arrow-down'
                />
            </Marker>

            <Marker
                coordinate={{
                    ...photo.firstPoint
                }}
                onDragEnd={(event) => updatePhotos({ ...photo, firstPoint: event.nativeEvent.coordinate })}
                draggable
            >
                <Icon
                    style={{
                        width: '35',
                        height: '35'
                    }}
                    fill={'#00E096'}
                    name='arrow-down'
                />
            </Marker>


            <Marker
                coordinate={{
                    ...photo.secondPoint
                }}
                onDragEnd={(event) => updatePhotos({ ...photo, secondPoint: event.nativeEvent.coordinate })}
                draggable
            >
                <Icon
                    style={{
                        width: '35',
                        height: '35'
                    }}
                    fill={'#00E096'}
                    name='arrow-down'
                />
            </Marker>

            <Polyline
                coordinates={[photo.firstPoint, photo.localization, photo.secondPoint]}
                strokeColor={'#00E096'}
                strokeWidth={3}
            />
        </>
    )
}