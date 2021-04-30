import { Button, Icon, Spinner } from '@ui-kitten/components';
import React, { useState } from 'react';
import { generateOverpassQuery, mapOverpassResponseToPlace } from '../../../../core/services/overpass/overpass.service';

export function DiscoverButton({
    region,
    isAddingPlace,
    onDiscoverStarted,
    onDiscoverCompleted
}) {
    const [loading, setLoading] = useState(false);

    const startDiscovering = () => {
        if (loading === true) return; 
        setLoading(true);
        onDiscoverStarted();

        fetch('http://overpass-api.de/api/interpreter', {
                method: 'POST',
                body: generateOverpassQuery({
                    start: {
                        latitude: region.latitude - (region.latitudeDelta / 2),
                        longitude: region.longitude - (region.longitudeDelta / 2)
                    },
                    end: {
                        latitude: region.latitude + (region.latitudeDelta / 2),
                        longitude: region.longitude + (region.longitudeDelta / 2)
                    }
                })
            })
                .then(response => {
                    if (response.ok)
                        return response.json();

                    return { elements: [] };
                })
                .then((response: any) => {
                    onDiscoverCompleted(response.elements.map(el => mapOverpassResponseToPlace(el)))
                })
                .then(() => setLoading(false))
                .catch(() => setLoading(false))
    }

    return (
        <Button
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginTop: 10,
                elevation: 5
            }}
            status={'warning'}
            disabled={isAddingPlace}
            onPress={() => startDiscovering()}
            accessoryLeft={(props) => (
                <>
                    {loading ? <Spinner status={'basic'} /> : <Icon {...props} name={'search-outline'} />}
                </>
            )}
        />
    )
}
