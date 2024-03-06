import {
    Button,
    Typography,
    ListItem,
  } from "@mui/material";
  import { useDispatch } from "react-redux";
  import { toggleComplete, deleteTodo, toggleCurrent } from "../../redux/todoSlice";

const ToDoItem = (todo) => {
    const dispatch = useDispatch();
    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
      };
    
      const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
      };
    
      const handleToggleCurrent = (id) => {
        dispatch(toggleCurrent(id))
      }

    return (
        <ListItem divider="bool" className='list'>
                  <Typography
                    className='text'
                    style={{ color: todo.completed ? "green" : "" }}
                    key={todo.id}
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    {todo.text}
                  </Typography>
                  <Button
                    onClick={() => handleDeleteTodo(todo.id)}
                    color="error"
                    variant="contained"
                    className='listButtons'
                  >
                    delete
                  </Button>
                  <Button
                    onClick={() => handleToggleCurrent(todo.id)}
                    color="info"
                    variant="contained"
                    className='listButtons'
                    // disabled={todo.current ? true : false}
                  >
                    {todo.current ? 'remove from current' : 'set as current'}
                  </Button>
                </ListItem>
    )
}

export default ToDoItem