import React from 'react';
import { Card, Input } from '@ui-kitten/components';
import { TextBoldHint } from '../../common/text-bold-hint/TextBoldHint';
import { SectionHeader } from '../../common/section-header/SectionHeader';

export function AddPlaceBasicData({
    name,
    setName,
    description,
    setDescription,
}) {
    return (
        <>
            <SectionHeader title={'Dane podstawowe'} />
            <Card disabled={true}>
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
        </>
    )
}