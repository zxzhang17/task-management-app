// BgColorChanger.js
import React from "react";
import { Row } from "react-bootstrap";
import "./BgColorChanger.css";

const BgColorChanger = ({ changeColor }) => {
  const colors = ['white', '#DFFAD5', '#ADE8F4', '#FFD1DC', '#FFFFD1'];
  const colorNames = ['white', 'light-green', 'light-blue', 'light-pink', 'light-yellow'];
  
  return (
    <Row className="justify-content-end">
      {colors.map((color, index) => (
        <div key={color} className={`circle ${colorNames[index]}`} onClick={() => changeColor(color)}></div>
      ))}
    </Row>
  );
};

export default BgColorChanger;
