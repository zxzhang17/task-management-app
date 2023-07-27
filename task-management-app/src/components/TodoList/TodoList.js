import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          updateTodo={updateTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
