import { Button, Icon } from '@ui-kitten/components';
import React, { useState } from 'react';
import { FilterModal } from './filter-modal/FilterModal';

export function FilterButton({
    filterTags,
    setFilterTags
}) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginTop: 10,
                    elevation: 5
                }}
                status={'danger'}
                onPress={() => setVisible(true)}
                accessoryLeft={(props) => (
                    <>
                        <Icon {...props} name={'funnel-outline'} />
                    </>
                )}
            />
            <FilterModal
                visible={visible}
                setVisible={setVisible}
                filterTags={filterTags}
                setFilterTags={setFilterTags}
            />
        </>
    )
}