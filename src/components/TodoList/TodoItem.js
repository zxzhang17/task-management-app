import React from 'react';
import { Card, Form } from "react-bootstrap";
import './TodoItem.css';
import '../../index.css';

const TodoItem = ({ todo, updateTodo }) => {
  return (
    <Card 
    className="mb-3 todo-card card"
    >
      <Card.Body>
        <Form.Check 
          type="checkbox" 
          label={todo.text} 
          checked={todo.completed} 
          onChange={() => updateTodo(todo.id)} 
        />
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
