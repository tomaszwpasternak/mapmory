import { tagSlice } from './tag/tag.slice';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { placeSlice } from './place/place.slice';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { migrationSlice } from './migrations/migration.slice';
import { settingSlice } from './setting/setting.slice';
import { profileSlice } from './profile/profile.slice';

const reducer = combineReducers({
    place: persistReducer({ key: 'place', storage: AsyncStorage}, placeSlice.reducer),
    tag: persistReducer({ key: 'tag', storage: AsyncStorage}, tagSlice.reducer),
    migration: persistReducer({ key: 'migration', storage: AsyncStorage}, migrationSlice.reducer),
    profile: persistReducer({key: 'profile', storage: AsyncStorage}, profileSlice.reducer),
    setting: persistReducer({key: 'setting', storage: AsyncStorage}, settingSlice.reducer)
})

export const store = createStore(reducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
