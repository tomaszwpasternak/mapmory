import React from 'react';
import { Card, Layout } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { selectAllTags } from '../../core/store/tag/tag.selector';
import { Tag } from '../../common/tag/Tag';
import { SectionHeader } from '../../common/section-header/SectionHeader';

export function EditPlaceTags({ tags, setTags }) {
    const allTags = useSelector(selectAllTags);

    return (
        <>
            <SectionHeader title={'Tagi'} />
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
                            active={tags.includes(el.name)}
                            onPress={() => {
                                if (!tags.includes(el.name)) {
                                    setTags([...tags, el.name])
                                } else {
                                    setTags(tags.filter(item => item != el.name))
                                }
                            }}
                        >
                            {el.name}
                        </Tag>
                    ))}
                </Layout>
            </Card>
        </>
    )
}
