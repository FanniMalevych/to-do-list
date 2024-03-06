import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  'name': 'todos',
  'initialState': [],
  'reducers': {
    'addTodo': (state, action) => {
      const newTodo = {
        'id': Date.now(),
        'text': action.payload,
        'completed': false,
        'current': false,
      }
      state.push(newTodo)
    },
    'toggleComplete': (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    'deleteTodo': (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    'toggleCurrent': (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.current = !todo.current
      }
    },
  },
})
export const { addTodo, toggleComplete, deleteTodo, toggleCurrent } = todoSlice.actions
export const reducer = todoSlice.reducer
