import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PLACE_ACTION } from '../core/store/place/place.action';
import { TopHeader } from '../common/top-header/TopHeader';
import { Button, Icon, Layout, TopNavigationAction } from '@ui-kitten/components';
import { AddPlaceBasicData } from './add-place-basic-data/AddPlaceBasicData';
import { AddPlaceTags } from './add-place-tags/AddPlaceTags';
import { AddPlacePhoto } from './add-place-photo/AddPlacePhoto';
import { SELECT_SELECTED_PROFILE } from '../core/store/profile/profile.selector';
import { SELECT_ALL_PLACES_BY_PROFILE } from '../core/store/place/place.selector';

export default function AddPlace({ navigation, route }) {
    const { localization, initName, initDescription } = route.params;

    const selectedProfile = useSelector(SELECT_SELECTED_PROFILE);
    const allPlacesByProfile = useSelector(SELECT_ALL_PLACES_BY_PROFILE(selectedProfile.name));

    const [name, setName] = useState(initName || '');
    const [description, setDescription] = useState(initDescription || '');
    const [tags, setTags] = useState([]);
    const [photos, setPhotos] = useState([]);

    const [addButtonLabel, setAddButtonLabel] = useState('');
    const [canAddPlace, setCanAddPlace] = useState(false);

    const dispatch = useDispatch();

    const onAddPlace = () => {
        dispatch(ADD_PLACE_ACTION({
            name,
            description,
            tags,
            localization,
            photos,
            profile: selectedProfile.name
        }))
        navigation.push('Map');
    }

    useEffect(() => {
        if (name) {
            setCanAddPlace(!allPlacesByProfile.map(el => el.name).includes(name))
            setAddButtonLabel(allPlacesByProfile.map(el => el.name).includes(name) ? 'Takie miejsce już istnieje' : 'Dodaj nowe miejsce')
        } else {
            setCanAddPlace(false)
            setAddButtonLabel('Brak nazwy miejsca')
        }
    }, [name]);

    return (
        <TopHeader
            title={'Twoje nowe miejsce'}
            subtitle={'Uzupełnij podstawowe informacje'}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.goBack()}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
        >
            <AddPlaceBasicData
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
            />
            <AddPlaceTags
                tags={tags}
                setTags={setTags}
            />

            <AddPlacePhoto
                photos={photos}
                setPhotos={setPhotos}
                localization={localization}
            />
            <Button
                style={{ marginTop: 30 }}
                status='success'
                disabled={!canAddPlace}
                onPress={() => onAddPlace()}
            >
                {addButtonLabel}
            </Button>
        </TopHeader>
    )
}
