import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions/dimensions';

export function DetailsLogo({ place }) {
    const [photo, setPhoto] = useState(place.photos[0]);

    useEffect(() => {
        setPhoto(place.photos[0]);
    }, [place])

    return (
        <Layout level={'1'}>
            {photo && (
                <Image
                    key={photo.uri}
                    style={{
                        width: DEVICE_WIDTH,
                        height: DEVICE_HEIGHT * 0.3,
                    }}
                    source={{ uri: photo.uri }}
                />
            )}
        </Layout>
    )
}