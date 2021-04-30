import { Button, Icon, Layout, TopNavigationAction } from '@ui-kitten/components';
import React, { useState } from 'react';
import { ConfirmModal } from '../common/confirm-modal/ConfirmModal';
import { TopHeader } from '../common/top-header/TopHeader';
import { ADD_PLACE_ACTION, REMOVE_PLACE_ACTION } from '../core/store/place/place.action';
import { useDispatch, useSelector } from 'react-redux';
import { EditPlaceBasicData } from './edit-place-basic-data/EditPlaceBasicData';
import { EditPlaceTags } from './edit-place-tags/EditPlaceTags';
import { EditPlacePhoto } from './edit-place-photo-details/EditPlacePhoto';
import { SELECT_SELECTED_PROFILE } from '../core/store/profile/profile.selector';
import { SELECT_ALL_PLACES_BY_PROFILE } from '../core/store/place/place.selector';
import { useEffect } from 'react';

export function EditPlace({ navigation, route }) {
    const { place } = route.params;
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const dispatch = useDispatch();

    const [name, setName] = useState(place.name);
    const [description, setDescription] = useState(place.description);
    const [tags, setTags] = useState(place.tags);
    const [photos, setPhotos] = useState(place.photos);

    const selectedProfile = useSelector(SELECT_SELECTED_PROFILE);
    const allPlacesByProfile = useSelector(SELECT_ALL_PLACES_BY_PROFILE(selectedProfile.name));
    
    const [updateButtonLabel, setUpdateButtonLabel] = useState('');
    const [canUpdatePlace, setUpdateAddPlace] = useState(false);

    useEffect(() => {
        if (name) {
            setUpdateAddPlace(place.name == name || !allPlacesByProfile.map(el => el.name).includes(name))
            setUpdateButtonLabel(place.name != name && allPlacesByProfile.map(el => el.name).includes(name) ? 'Takie miejsce już istnieje' : 'Zaaktualizuj miejsce')
        } else {
            setUpdateAddPlace(false)
            setUpdateButtonLabel('Brak nazwy miejsca')
        }
    }, [name]);

    return (
        <TopHeader
            title={'Edycja miejsca'}
            subtitle={'Dostosuj to Miejsce'}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.goBack()}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
            accessoryRight={() => (
                <TopNavigationAction
                    onPress={() => { setConfirmModalVisible(true) }}
                    icon={(props) => (
                        <Icon
                            {...props}
                            fill={'#FF3D71'}
                            name='trash'
                        />
                    )}
                />
            )}
        >
            <Layout level={'2'}>
                <EditPlaceBasicData
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                />

                <EditPlaceTags
                    tags={tags}
                    setTags={setTags}
                />

                <EditPlacePhoto
                    photos={photos}
                    setPhotos={setPhotos}
                    localization={place.localization}
                />

                <Button
                    style={{ margin: 20 }}
                    status={'info'}
                    onPress={() => { 
                        dispatch(REMOVE_PLACE_ACTION(place.name))
                        dispatch(ADD_PLACE_ACTION({
                            name,
                            description,
                            tags,
                            localization: place.localization,
                            photos,
                            profile: selectedProfile.name
                        }))
                        navigation.push('Map');
                    }}
                    disabled={!canUpdatePlace}
                >
                    {updateButtonLabel}
                </Button>


                <ConfirmModal
                    visible={confirmModalVisible}
                    setVisible={setConfirmModalVisible}
                    title={'Czy na pewno chcesz usunąć to miejsce?'}
                    subtitle={'Ta operacja jest nieodwracalna'}
                    onCancel={() => { }}
                    onConfirm={() => {
                        dispatch(REMOVE_PLACE_ACTION(place.name))
                        navigation.push('Map');
                    }}
                />
            </Layout>
        </TopHeader>
    )
}