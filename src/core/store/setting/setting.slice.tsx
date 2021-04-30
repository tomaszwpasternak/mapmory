import { createSlice } from '@reduxjs/toolkit';


export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    mapType: 'standard'
  },
  reducers: {
    setMapType: (state, action) => {
      return {
          ...state,
          mapType: action.payload
      }
    },
  }
})
