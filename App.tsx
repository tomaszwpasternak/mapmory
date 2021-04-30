import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import * as eva from '@eva-design/eva/';
import { Router } from './src/core/router/Router';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/core/store/store';
import * as Permissions from 'expo-permissions';
import { LogBox } from 'react-native';
import { FontAwesomeIconsPack } from './src/common/icon/packs/font-awesome/font-awesome.pack';
import { MaterialCommunityIconsPack } from './src/common/icon/packs/material-community-icons/material-community-icons.pack';
import { MigrationProvider } from './src/core/migration/migration.provider';

export default function App() {
  const [hasPermissions, setHasPermissions] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.LOCATION
      );
      if (status === 'granted') {
        setHasPermissions(true);
      }
    })();
  }, []);

  if (!hasPermissions) {
    return <></>;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={[EvaIconsPack, FontAwesomeIconsPack, MaterialCommunityIconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light} >
          <MigrationProvider>
            <Router />
          </MigrationProvider>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}
