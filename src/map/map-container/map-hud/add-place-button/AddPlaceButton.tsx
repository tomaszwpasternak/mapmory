import { Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

export function AddPlaceButton({
    isAddingPlace,
    onStartAddingPlace,
    onConfirmPlace,
    onDenyPlace,
}) {

    return (
        <>
            {!isAddingPlace ? (
                <Button
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginTop: 10,
                        elevation: 5
                    }}
                    status={'success'}
                    onPress={() => onStartAddingPlace()}
                    accessoryLeft={(props) => <Icon {...props} name={'plus-outline'} />}
                />
            ) : (
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Button
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginTop: 10,
                            marginRight: 10,
                            elevation: 5
                        }}
                        status={'success'}
                        onPress={() => onConfirmPlace()}
                        accessoryLeft={(props) => <Icon {...props} name={'checkmark-outline'} />}
                    />
                    <Button
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginTop: 10,
                            elevation: 5
                        }}
                        status={'danger'}
                        onPress={() => onDenyPlace()}
                        accessoryLeft={(props) => <Icon {...props} name={'close-outline'} />}
                    />
                </View>
            )}

        </>
    )
}