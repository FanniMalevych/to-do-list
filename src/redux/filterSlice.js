import { createSlice } from '@reduxjs/toolkit'
import { FILTERS } from '../constants'

const initialState = {
  'filter': FILTERS.ALL,
}

export const filterSlice = createSlice({
  'name': 'todosFilter',
  initialState,
  'reducers': {
    'setFilter': (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
