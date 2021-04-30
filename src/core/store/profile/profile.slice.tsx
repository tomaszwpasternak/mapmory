import { createSlice } from '@reduxjs/toolkit';
import { ProfileInterface } from './profile.interface';

const profiles: ProfileInterface[] = [
  {
    name: 'Twoja wspaniała mapa',
    description: 'Lista wszystkich Twoich miejsc',
    icon: 'eva:globe-2-outline',
    color: '#3366ff'
  },
];

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profiles: profiles,
    selectedProfile: null
  },
  reducers: {
    selectProfile: (state, action) => {
        state.selectedProfile = action.payload;
    },
    addProfile: (state, action) => {
      state.profiles.push(action.payload)
    },
    removeProfile: (state, action) => {
      state.profiles = state.profiles.filter(el => el.name !== action.payload)
    }
  }
})
