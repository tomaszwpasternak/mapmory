import { Button, Card, Icon, Input, Layout, TopNavigationAction } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ColorPicker } from '../../common/color/color-picker/ColorPicker';
import { IconPicker } from '../../common/icon/icon-picker/IconPicker';
import { SectionHeader } from '../../common/section-header/SectionHeader';
import { TopHeader } from '../../common/top-header/TopHeader';
import { ADD_PROFILE_ACTION } from '../../core/store/profile/profile.action';
import { SELECT_ALL_PROFILES } from '../../core/store/profile/profile.selector';

export function ProfileAdd({ navigation }) {
    const allProfiles = useSelector(SELECT_ALL_PROFILES);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [color, setColor] = useState('');

    const [addButtonLabel, setAddButtonLabel] = useState('');
    const [canCreateProfile, setCanCreateProfile] = useState(true);

    useEffect(() => {
        if (!name) {
            setAddButtonLabel('Wprowadź nazwę');
            setCanCreateProfile(false);
        } else if (allProfiles.map(el => el.name).includes(name)) {
            setAddButtonLabel('Istnieje już profil o takiej nazwie');
            setCanCreateProfile(false);
        } else {
            setAddButtonLabel('Dodaj');
            setCanCreateProfile(true);
        }
    }, [name]);


    const onAddProfile = () => {
        dispatch(ADD_PROFILE_ACTION({
            name: name,
            description: description,
            icon: icon,
            color: color
        }));
        navigation.push('Profile');
    }

    return (
        <TopHeader
            title={'Dodaj nową mapę'}
            subtitle={'Twoja nowa mapa z miejscami'}
            accessoryLeft={() => (
                <TopNavigationAction
                    onPress={() => navigation.push('Profile')}
                    icon={(props) => (
                        <Icon {...props} name='arrow-back' />
                    )}
                />
            )}
        >
            <Layout
                level={'2'}
                style={{ padding: 20 }}
            >
                <SectionHeader title={'Dane podstawowe'} />
                <Card>
                    <Input
                        value={name}
                        placeholder={'Nazwa'}
                        onChangeText={nextValue => setName(nextValue)}
                    />

                    <Input
                        multiline={true}
                        placeholder={'Opis'}
                        textStyle={{ minHeight: 96 }}
                        style={{ marginTop: 10 }}
                        value={description}
                        onChangeText={nextValue => setDescription(nextValue)}
                    />
                </Card>

                <SectionHeader title={'Ikona'} />
                <Card>
                    <IconPicker
                        icon={icon}
                        setIcon={setIcon}
                    />
                </Card>

                <SectionHeader title={'Kolor'} />
                <Card>
                    <ColorPicker
                        color={color}
                        setColor={setColor}
                    />
                </Card>

                <Button
                    style={{ marginTop: 30 }}
                    status='success'
                    disabled={!canCreateProfile}
                    onPress={() => onAddProfile()}
                >
                    {addButtonLabel}
                </Button>
            </Layout>
        </TopHeader>
    )
}