import {
  Button,
  Typography,
  ListItem,
} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch } from 'react-redux'

import { toggleComplete, deleteTodo, toggleCurrent } from '../../redux/todoSlice'
import './index.css'

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleToggleCurrent = (id) => {
    dispatch(toggleCurrent(id))
  }
  return (
        <ListItem divider='bool' style={{ 'backgroundColor': todo.current && 'rgba(0, 100, 0, 0.1)' }}>
                  <Typography
                    className='text'
                    style={{ 'color': todo.completed && 'green' }}
                    key={todo.id}
                    onClick={() => handleToggleComplete(todo.id)}
                  >                    {todo.completed && <DoneIcon />}{todo.text}
                  </Typography>
                  <DeleteOutlineIcon
                    onClick={() => handleDeleteTodo(todo.id)}
                    style={{ 'marginRight': '15px', 'cursor': 'pointer' }}
                     />
                  <Button
                    onClick={() => handleToggleCurrent(todo.id)}
                    color="info"
                    variant="contained"
                  >
                    {todo.current ? 'remove from current' : 'set as current'}
                  </Button>
                </ListItem>
  )
}

export default ToDoItem
