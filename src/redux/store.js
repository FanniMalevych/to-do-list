import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './todoSlice'
import { filterReducer } from './filterSlice'



const store = configureStore({
    reducer: {
      todos: reducer,
      todosFilter: filterReducer
    }
  })

export default store;