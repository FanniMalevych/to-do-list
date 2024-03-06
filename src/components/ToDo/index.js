import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { Filter } from "../Filter";
import {
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    Container,
  } from "@mui/material";
import { CHARACTER_LIMIT, FILTERS } from '../../constants'
import './index.css'

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const [list, setList] = useState(todos)

  const completed = todos.filter(todo => todo.completed).length
  const incompleted = todos.length - completed
  
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const filterBy = useSelector((state) => state.todosFilter.filter)

  useEffect(() => {
    const filteredList = todos.filter((todo) => {
        if(filterBy === FILTERS.COMPLETED) {
            return todo.completed
        } else if( filterBy === FILTERS.CURRENT) {
            return todo.current
        } else {
            return todo
        }
      })
      setList(filteredList)
  }, [filterBy, todos])

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };


  return (
    <div>
        
        completed tasks : {completed}
        incompleted tasks : {incompleted}
        <Container component="main" className='container'>
        <TextField
          variant="outlined"
          onChange={handleInputChange}
          label="type your task"
          value={text}
          className='input'
          inputProps={{
            maxLength: CHARACTER_LIMIT
          }}
          helperText={`${text.length}/${CHARACTER_LIMIT}`}
        />
        
        <Button
          size="large"
          color="primary"
          variant="outlined"
          onClick={handleAddTodo}
          className='addButton'
          disabled={text ? false : true}
        >
           Add Task
        </Button>
        <Filter />
        <List>
          {list.map((todo) => {
            return (
                <ListItem todo={todo} />
            );
          })}
        </List>
      </Container>
      </div>
  );
};

export default Todo;