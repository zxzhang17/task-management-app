import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import InputBar from "./components/TodoList/InputBar";
import BgColorChanger from "./components/TodoList/BgColorChanger";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [bgColor, setBgColor] = useState("white");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text: text, completed: false }]);
  };

  const updateTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeColor = (color) => {
    setBgColor(color);
    document.documentElement.style.setProperty('--main-bg-color', color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.documentElement.style.setProperty('--main-bg-color', bgColor);
  }, [bgColor]);
  

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <BgColorChanger changeColor={changeColor} />
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <InputBar addTodo={addTodo} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <TodoList todos={todos} updateTodo={updateTodo} />
      </Row>
    </Container>
  );
};

export default App;
