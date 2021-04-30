
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EXECUTE_MIGRATION_ACTION } from '../../store/migrations/migration.action';
import { ADD_PLACE_ACTION, REMOVE_PLACE_ACTION } from '../../store/place/place.action';
import { selectAddedPlaces } from '../../store/place/place.selector';

export function M002({ execute, onExecuted }) {
    const dispatch = useDispatch();
    const allPlaces = useSelector(selectAddedPlaces);

    useEffect(() => {
        if (execute) {
            allPlaces.forEach(place => {
                dispatch(REMOVE_PLACE_ACTION(place.name))
                dispatch(ADD_PLACE_ACTION({
                    ...place,
                    profile: 'Twoja wspaniała mapa'
                }))
            })

            dispatch(EXECUTE_MIGRATION_ACTION('M002'))
            onExecuted('M002');
        } else {
            onExecuted('M002');
        }
    }, [])

    return <></>;
}
