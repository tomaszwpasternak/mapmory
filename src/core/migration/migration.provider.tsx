import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '../../common/loading/Loading';
import { selectAllMigrations } from '../store/migrations/migration.selector';
import { M001 } from './scripts/M001';
import { M002 } from './scripts/M002';

let migrationsToExecute = [
    'M001',
    'M002'
]

export function MigrationProvider({ children }) {
    const migrations = useSelector(selectAllMigrations);
    const [finish, setFinish] = useState(false);

    const executed = (key) => {
        migrationsToExecute = migrationsToExecute.filter(m => m != key);
        if (migrationsToExecute.length === 0) {
            setFinish(true);
        }
    }

    if (finish == false) {
        return (
            <>
                <Loading loading={!finish} />
                <M001 execute={!migrations.includes('M001')} onExecuted={executed} />
                <M002 execute={!migrations.includes('M002')} onExecuted={executed} />
            </>
        )
    }

    return (
        <>
            {children}
        </>
    )
}