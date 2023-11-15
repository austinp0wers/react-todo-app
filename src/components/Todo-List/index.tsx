import { List, ListItem, Checkbox, Typography } from "@mui/material";
import { TodoListWrapper } from "./styled";
import { useState } from "react";
import NewTaskButton from "../Buttons/NewTask/NewTask";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "LEARN React", completed: false },
    { id: 2, text: "TEST React", completed: false },
    { id: 3, text: "DEPLOY React", completed: false },
  ]);

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <TodoListWrapper>
      <List>
        {todos.map((todo) => (
          <ListItem
            sx={{
              backgroundColor: "#212121",
              padding: "10px",
              border: "1px solid #212121", // Set your desired border style and color
              borderRadius: "3px",
              boxShadow: "0 3px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "15px",
            }}
            key={todo.id}
          >
            <Checkbox
              style={{ color: "#ccc" }}
              checked={todo.completed || false}
              onChange={() => handleToggle(todo.id)}
            />
            <Typography
              variant="body1"
              style={{
                color: "#ccc",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </TodoListWrapper>
  );
};

export default TodoList;
