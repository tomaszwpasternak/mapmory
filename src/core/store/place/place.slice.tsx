import { createSlice } from '@reduxjs/toolkit';
import { PlaceInterface } from './place.interface';

const places: PlaceInterface[] = [];

export const placeSlice = createSlice({
  name: 'place',
  initialState: {
    all: places
  },
  reducers: {
    addPlace: (state, action) => {
      return {
        ...state,
        all: [
          ...state.all,
          action.payload
        ]
      }
    },
    removePlace: (state, action) => {
      return {
        ...state,
        all: state.all.filter(el => el.name !== action.payload)
      }
    },
    removeAllPlacesByProfile: (state, action) => {
      return {
        ...state,
        all: state.all.filter(el => el.profile !== action.payload)
      }
    }
  }
})
