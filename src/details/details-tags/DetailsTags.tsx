import { Card, Layout } from '@ui-kitten/components';
import React from 'react';
import { Tag } from '../../common/tag/Tag';

export function DetailsTags({ place }) {
    return (
        <Layout
            level={'1'}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            }}>
            {place.tags?.map(el => (
                <Tag
                    key={el}
                    active={true}
                    onPress={() => { }}
                >
                    {el}
                </Tag>
            ))}
        </Layout>
    )
}