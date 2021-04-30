import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Modal } from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MAP_DESIGN } from '../../../map/map-design.utils';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../common/dimensions/dimensions';
import { PhotoLocalization } from '../../../common/photo-localization/PhotoLocalization';


export function AddPlacePhotoDetails({ photo, photos, setPhotos, lastAddedPhoto }) {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        if (lastAddedPhoto?.uri === photo?.uri) {
            setVisible(true);
        }
    }, [lastAddedPhoto])


    const updatePhotos = (newPhoto) => {
        setPhotos(photos.map(el => {
            if (photo.uri != el.uri) {
                return el;
            }
            return newPhoto
        }))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Image
                    key={photo.uri}
                    style={{
                        width: 80,
                        height: 80,
                        margin: 5
                    }}
                    source={{ uri: photo.uri }}
                />
            </TouchableOpacity>

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
            >
                <Image
                    key={photo.uri}
                    style={{
                        width: DEVICE_WIDTH - 10,
                        height: DEVICE_HEIGHT * 0.2,
                    }}
                    source={{ uri: photo.uri }}
                />
                <MapView

                    provider={PROVIDER_GOOGLE}
                    style={{
                        width: DEVICE_WIDTH - 10,
                        height: DEVICE_HEIGHT * 0.6
                    }}
                    rotateEnabled={false}
                    pitchEnabled={false}
                    customMapStyle={MAP_DESIGN}
                    initialRegion={{
                        ...photo.localization,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    <PhotoLocalization 
                        photo={photo}
                        updatePhotos={updatePhotos}
                    />
                </MapView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 192,
        width: 350
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
});