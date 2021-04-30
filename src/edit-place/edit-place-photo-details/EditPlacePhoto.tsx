import React, { useState } from "react";
import { Card, Layout, Button, Icon } from "@ui-kitten/components";
import * as ImagePicker from 'expo-image-picker';
import { SectionHeader } from "../../common/section-header/SectionHeader";
import { EditPlacePhotoDetails } from "./edit-place-photo-details/EditPlacePhotoDetails";

export function EditPlacePhoto({ photos, setPhotos, localization }) {
    const [lastAddedPhoto, setLastAddedPhoto] = useState<any>(null);

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted')
            return;

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        addPhoto(result);
    }

    const browsePhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted')
            return;

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });
        addPhoto(result);
    }

    const addPhoto = (result) => {
        if (result.cancelled) return;

        const photo = {
            uri: result.uri,
            localization: localization,
            firstPoint: {
                latitude: localization.latitude + 0.0005,
                longitude: localization.longitude - 0.0005
            },
            secondPoint: {
                latitude: localization.latitude + 0.0005,
                longitude: localization.longitude + 0.0005
            }
        };

        setPhotos([...photos, photo]);
        setLastAddedPhoto(photo);
    }

    return (
        <>
            <SectionHeader title={'Zdjęcia'} />
            <Card disabled={true}>
                <Layout style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {photos.map(photo => (
                        <EditPlacePhotoDetails
                            key={photo.uri}
                            photo={photo}
                            photos={photos}
                            setPhotos={setPhotos}
                            lastAddedPhoto={lastAddedPhoto}
                        />
                    ))}
                </Layout>

                <Layout style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                    <Button
                        appearance={'outline'}
                        accessoryLeft={(props) => <Icon {...props} name='camera-outline' />}
                        status={'basic'}
                        style={{ flex: 1, margin: 5 }}
                        onPress={() => takePhoto()}>
                        Zrób zdjęcie
                    </Button>

                    <Button
                        appearance={'outline'}
                        accessoryLeft={(props) => <Icon {...props} name='folder-outline' />}
                        status={'basic'}
                        style={{ flex: 1, margin: 5 }}
                        onPress={() => browsePhoto()}>
                        Przeszukaj
                    </Button>
                </Layout>
            </Card>
        </>
    )
}