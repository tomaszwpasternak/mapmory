import React, { useState, useEffect, createRef } from 'react';
import { Autocomplete, AutocompleteItem, Icon, Spinner } from '@ui-kitten/components/ui';
import { useDebounceEffect } from '../../../../core/custom-hooks/use-debounce-effect/useDebounceEffect';
import { TouchableWithoutFeedback, View } from 'react-native';

export function AutocompleteGeocode({ onAutocompleteSelected }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>([]);

    const autocompleteRef = createRef<any>();

    useDebounceEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
            .then(response => response.json())
            .then(response => setResponse(response))
            .then(() => setLoading(false))
            .catch(() => setLoading(false))
    }, 1001, [query]);

    useEffect(() => {
        const shouldBecomeVisible = (autocompleteRef.current?.isFocused() || false) && (response?.length || 0) > 0;
        if (autocompleteRef.current?.state.listVisible !== shouldBecomeVisible) {
            autocompleteRef.current?.setState({ listVisible: shouldBecomeVisible });
        }
    }, [response?.length]);

    const clearInput = () => {
        setQuery('');
        setResponse([]);
    }

    return (
        <Autocomplete
            ref={autocompleteRef}
            size={'large'}
            placeholder='Czego szukasz?'
            value={query}
            style={{
                elevation: 20
            }}
            onChangeText={(nextQuery) => {
                setLoading(true);
                setQuery(nextQuery)
            }}
            onSelect={(index) => {
                setQuery(response[index].display_name);
                onAutocompleteSelected(response[index]);
            }}
            accessoryLeft={(props) => (
                <>
                    {loading ? <View style={{ paddingLeft: 12, paddingRight: 12 }}><Spinner size={'tiny'} /></View> : (
                        <Icon {...props} name='search-outline' />
                    )}
                </>
            )}
            accessoryRight={(props) => (
                <TouchableWithoutFeedback onPress={clearInput}>
                    <Icon {...props} name='close' />
                </TouchableWithoutFeedback>
            )}
        >
            {response.map((item, index) => (
                <AutocompleteItem
                    key={index}
                    title={item.display_name}
                />
            ))}
        </Autocomplete>
    );
};