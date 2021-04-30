import { Button, Icon } from '@ui-kitten/components';
import React from 'react';

export function PlaceListButton({
    isAddingPlace,
    onPlaceListPress
}) {
    return (
        <Button
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginTop: 10,
                elevation: 5
            }}
            status={'info'}
            disabled={isAddingPlace}
            onPress={() => onPlaceListPress()}
            accessoryLeft={(props) => <Icon {...props} name={'list-outline'} />}
        />
    )
}