import { Icon as UiKittenIcon } from '@ui-kitten/components';
import React, { useMemo } from 'react';
import { ENABLE_ICONS } from './enable-icons';

export function Icon({
    fullIconName,
    ...props
}) {
    const pack = useMemo(() => fullIconName.split(':')[1] ? fullIconName.split(':')[0] : 'eva', [fullIconName]);
    const name = useMemo(() => {
        let iconName = fullIconName.split(':')[1] ? fullIconName.split(':')[1] : fullIconName.split(':')[0]

        if (ENABLE_ICONS.includes(pack + ':' + iconName)) {
            return iconName;
        }
        return 'keypad-outline';
    }, [fullIconName]);

    return <UiKittenIcon pack={pack} name={name} {...props} />;
}