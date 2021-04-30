
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EXECUTE_MIGRATION_ACTION } from '../../store/migrations/migration.action';
import { ADD_TAG_ACTION, REMOVE_TAG_ACTION } from '../../store/tag/tag.action';
import { selectAllTags } from '../../store/tag/tag.selector';

export function M001({execute, onExecuted}) {
    const dispatch = useDispatch();
    const allTags = useSelector(selectAllTags);

    useEffect(() => {
        if (execute) {
            allTags.forEach(tag => {
                if (tag.status === 'primary') {
                    dispatch(REMOVE_TAG_ACTION({ name: tag.name }))
                    dispatch(ADD_TAG_ACTION({
                        name: tag.name,
                        color: '#3366ff',
                        icon: tag.icon
                    }))
                }

                if (tag.status === 'success') {
                    dispatch(REMOVE_TAG_ACTION({ name: tag.name }))
                    dispatch(ADD_TAG_ACTION({
                        name: tag.name,
                        color: '#00E096',
                        icon: tag.icon
                    }))
                }

                if (tag.status === 'info') {
                    dispatch(REMOVE_TAG_ACTION({ name: tag.name }))
                    dispatch(ADD_TAG_ACTION({
                        name: tag.name,
                        color: '#0095FF',
                        icon: tag.icon
                    }))
                }

                if (tag.status === 'danger') {
                    dispatch(REMOVE_TAG_ACTION({ name: tag.name }))
                    dispatch(ADD_TAG_ACTION({
                        name: tag.name,
                        color: '#FFAA00',
                        icon: tag.icon
                    }))
                }

                if (tag.status === 'warning') {
                    dispatch(REMOVE_TAG_ACTION({ name: tag.name }))
                    dispatch(ADD_TAG_ACTION({
                        name: tag.name,
                        color: '#FF3D71',
                        icon: tag.icon
                    }))
                }
            })

            dispatch(EXECUTE_MIGRATION_ACTION('M001'))
            onExecuted('M001');
        } else {
            onExecuted('M001');
        }
    }, [])

    return <></>;
}
