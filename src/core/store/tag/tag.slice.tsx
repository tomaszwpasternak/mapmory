import { createSlice } from '@reduxjs/toolkit';
import { TagInterface } from './tag.interface';

const tags: TagInterface[] = [
  {
    name: 'Opuszczone',
    color: '#FFAA00',
    icon: 'loader-outline'
  },
  {
    name: 'Sakralne',
    color: '#FF3D71',
    icon: 'bell-outline'
  },
  {
    name: 'Sztuka',
    color: '#0095FF',
    icon: 'color-palette-outline'
  },
  {
    name: 'Natura',
    color: '#00E096',
    icon: 'droplet-outline'
  },
  {
    name: 'Zamki',
    color: '#0095FF',
    icon: 'shield-outline'
  },
  {
    name: 'Przemysłowe',
    color: '#FF3D71',
    icon: 'shake-outline'
  },
  {
    name: 'Inne',
    color: '#3366ff',
    icon: 'keypad-outline'
  }
];

export const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    all: tags
  },
  reducers: {
    addTag: (state, action) => {
      state.all.push(action.payload)
    },
    removeTag: (state, action) => {
      state.all = state.all.filter(el => el.name !== action.payload.name);
    }
  }
})
