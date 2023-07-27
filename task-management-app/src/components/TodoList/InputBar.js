// InputBar.js
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import { PlusCircle } from "react-bootstrap-icons";
import "./InputBar.css";

const InputBar = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState(false);

  const handleSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  const cancelSubmitHandler = (event) => {
    event.preventDefault();
    setText("");
  };

  const iconClickHandler = () => {
    setButtonDisplay((prevState) => !prevState);
  };
  
  return (
    <Container 
    className="todo-list-display my-3"
    >
      <Row className="mt-3 justify-content-center">
        <h1 className="mb-3 custom-heading">Todo List</h1>
        <Col md={8} xs={12}>
          <Form onSubmit={handleSubmitHandler}>
            <InputGroup className="flex-grow-1 align-items-center">
              <div className="icon-container">
                <PlusCircle
                  className="circle-icon align-self-center"
                  onClick={iconClickHandler}
                />
              </div>
              <FormControl
                className="mb-1 flex-grow-1 card"
                type="text"
                placeholder="Enter an item for To-do list"
                id="box"
                required
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              />
            </InputGroup>
            {buttonDisplay && (
              <div className="d-flex flex-grow-1 mt-2 justify-content-end align-items-stretch">
                <Button
                  variant="success"
                  className="submit-button ml-2 flex-grow-1"
                  type="submit"  
                >
                  Add
                </Button>
                <Button
                  variant="danger"
                  className="cancel-button ml-2 flex-grow-1"
                  onClick={cancelSubmitHandler}
                >
                  Cancel
                </Button>
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default InputBar;
