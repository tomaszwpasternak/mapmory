import { Card, Modal, Text, Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../../../../common/dimensions/dimensions';
import { useSelector } from 'react-redux';
import { TagInterface } from '../../../../../core/store/tag/tag.interface';
import { selectAllTags } from '../../../../../core/store/tag/tag.selector';
import { Tag } from '../../../../../common/tag/Tag';

export function FilterModal({
    visible,
    setVisible,
    filterTags,
    setFilterTags
}) {
    const allTags = useSelector<TagInterface[]>(selectAllTags);

    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <Card
                disabled={true}
                style={{
                    width: DEVICE_WIDTH - 20
                }}
                header={() => <Text style={{
                    padding: 20
                }}
                >Filtracja mapy</Text>}
            >
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
                            active={filterTags.includes(el.name)}
                            onPress={() => {
                                if (filterTags.includes(el.name)) {
                                    setFilterTags(filterTags.filter(e => e != el.name));
                                } else {
                                    setFilterTags([...filterTags, el.name]);
                                }
                            }}
                        >
                            {el.name}
                        </Tag>
                    ))}
                </Layout>

                <Button
                    status={'success'}
                    onPress={() => {
                        setVisible(false);
                    }}
                >
                    Zamknij
                </Button>
            </Card>
        </Modal >
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});