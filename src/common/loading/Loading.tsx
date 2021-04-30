import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';

export function Loading({ loading }) {
    if (!loading)
        return <></>
    return (
        <Layout
            level={'1'}
            style={{
                padding: 60,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Spinner />
        </Layout>
    )
}