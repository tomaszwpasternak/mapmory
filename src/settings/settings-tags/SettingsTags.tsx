import React, { useState } from 'react';
import { Card, Layout } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTags } from '../../core/store/tag/tag.selector';
import { TagInterface } from '../../core/store/tag/tag.interface';
import { Tag } from '../../common/tag/Tag';
import { ADD_TAG_ACTION, REMOVE_TAG_ACTION } from '../../core/store/tag/tag.action';
import { AddUpdateSettingsTag } from './add-update-settings-tag/AddUpdateSettingsTag';
import { SectionHeader } from '../../common/section-header/SectionHeader';

export function SettingsTags() {
    const allTags = useSelector<TagInterface[]>(selectAllTags);

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState('');
    const [editName, setEditName] = useState('');

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const onOpenAddNewTag = () => {
        setName('');
        setColor('#3366ff');
        setIcon('eva:keypad-outline');
        setType('ADD');

        setVisible(true);
    }

    const onOpenEditNewTag = (tag) => {
        setName(tag.name);
        setColor(tag.color || '#3366ff');
        setIcon(tag.icon || 'keypad-outline');
        setType('EDIT');
        setEditName(tag.name);
        setVisible(true);
    }

    return (
        <>
            <SectionHeader
                title={'Tagi'}
                rightAppear={true}
                rightStatus={'success'}
                rightSize={'tiny'}
                rightText={'DODAJ'}
                rightOnPress={() => onOpenAddNewTag()}
            />

            <Card disabled={true}>
                <Layout
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                    }}>
                    {allTags?.map(el => (
                        <Tag
                            key={el.name}
                            active={true}
                            onPress={() => onOpenEditNewTag(el)}
                        >
                            {el.name}
                        </Tag>
                    ))}
                </Layout>
            </Card>

            <AddUpdateSettingsTag
                visible={visible}
                setVisible={setVisible}
                type={type}
                name={name}
                setName={setName}
                color={color}
                setColor={setColor}
                icon={icon}
                setIcon={setIcon}
                onRemove={() => {
                    dispatch(REMOVE_TAG_ACTION({ name: editName }))
                }}
                onSuccess={({ name, color }) => {
                    if (type === 'ADD') {
                        if (allTags.filter(el => el.name === name).length === 0) {
                            dispatch(ADD_TAG_ACTION({ name, color, icon }))
                        }
                    }
                    if (type === 'EDIT') {
                        dispatch(REMOVE_TAG_ACTION({ name: editName }))
                        dispatch(ADD_TAG_ACTION({ name, color, icon }))
                    }
                }}
            />
        </>
    )
}