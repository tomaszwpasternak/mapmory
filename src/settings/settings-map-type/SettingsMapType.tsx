import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { MAP_TYPES } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { SectionHeader } from '../../common/section-header/SectionHeader';
import { SET_MAP_TYPE_ACTION } from '../../core/store/setting/setting.action';
import { SELECT_MAP_TYPE } from '../../core/store/setting/setting.selector';

export function SettingsMapType() {
    const mapType = useSelector(SELECT_MAP_TYPE);
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (mapType === MAP_TYPES.STANDARD) {
            setSelectedIndex(new IndexPath(0))
            setTitle('Standard');
        }
        if (mapType === MAP_TYPES.SATELLITE) {
            setSelectedIndex(new IndexPath(1))
            setTitle('Satelita');
        }
        if (mapType === MAP_TYPES.TERRAIN) {
            setSelectedIndex(new IndexPath(2))
            setTitle('Teren');
        }
    }, []);

    useEffect(() => {
        if (selectedIndex.equals(new IndexPath(0))) {
            dispatch(SET_MAP_TYPE_ACTION(MAP_TYPES.STANDARD));
            setTitle('Standard');
        }
        if (selectedIndex.equals(new IndexPath(1))) {
            dispatch(SET_MAP_TYPE_ACTION(MAP_TYPES.SATELLITE));
            setTitle('Satelita');
        }
        if (selectedIndex.equals(new IndexPath(2))) {
            dispatch(SET_MAP_TYPE_ACTION(MAP_TYPES.TERRAIN));
            setTitle('Teren');
        }
    }, [selectedIndex]);

    return (
        <>
            <SectionHeader
                title={'Typ mapy'}
            />
            <Select
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index as IndexPath)}
                value={title}
            >
                <SelectItem title='Standard' />
                <SelectItem title='Satelita' />
                <SelectItem title='Teren' />
            </Select>
        </>
    )
}
