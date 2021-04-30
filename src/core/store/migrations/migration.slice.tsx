import { createSlice } from '@reduxjs/toolkit';

const migrations: string[] = [];

export const migrationSlice = createSlice({
  name: 'migration',
  initialState: {
    migrations: migrations
  },
  reducers: {
    executeMigration: (state, action) => {
      state.migrations.push(action.payload)
    },
  }
})
