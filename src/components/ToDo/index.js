import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todoSlice'
import { Filter } from '../Filter'
import {
  TextField,
  Button,
  Typography,
  List,
  Chip,
  Container,
} from '@mui/material'
import { CHARACTER_LIMIT, FILTERS } from '../../constants'
import './index.css'
import ToDoItem from '../ToDoItem'

const ToDo = () => {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)
  const [list, setList] = useState(todos)

  const completed = todos.filter((todo) => todo.completed).length
  const incompleted = todos.length - completed

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const filterBy = useSelector((state) => state.todosFilter.filter)

  useEffect(() => {
    const filteredList = todos.filter((todo) => {
      if (filterBy === FILTERS.COMPLETED) {
        return todo.completed
      }
      if (filterBy === FILTERS.CURRENT) {
        return todo.current
      }
      return todo
    })
    setList(filteredList)
  }, [filterBy, todos])

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div>
        <Container component="main" className='container'>
        <Typography variant="h5" >ToDo list</Typography>
            <div className="tasks-counter">
        <Chip label={`completed tasks : ${completed}`} variant="outlined" />
        <Chip label={`incompleted tasks : ${incompleted}`} variant="outlined" />
        </div>
        <TextField
          variant="outlined"
          onChange={handleInputChange}
          label="type your task"
          value={text}
          className='input'
          inputProps={{
            'maxLength': CHARACTER_LIMIT,
          }}
          helperText={`${text.length}/${CHARACTER_LIMIT}`}
        />

        <Button
          size="large"
          color="primary"
          variant="outlined"
          onClick={handleAddTodo}
          className='add-btn'
          disabled={!text}
          style={{ 'marginRight': '50px' }}
        >
           Add Task
        </Button>
        <Filter />
        <List>
          {list.map((todo) => <ToDoItem todo={todo}/>)}
        </List>
      </Container>
      </div>
  )
}

export default ToDo
