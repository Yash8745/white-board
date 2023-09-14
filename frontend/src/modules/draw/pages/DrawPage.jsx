import React from "react";
import WhiteBoard from "../components/WhiteBoard";
import Header from "../../../shared/components/Header";
import { Button } from "../../../shared/components/Button";
import Container from "react-bootstrap/esm/Container";
import Players from "../components/Players";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Colors from "../components/Colors";
import { useState } from "react";

// Function to be send to colors.jsx and its value to be send to whiteBoard
export const DrawPage = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const clickColor = (color) => {
    setSelectedColor(color);
    console.log(color);
    
  };

  return (
    <Container>
      <Header />
      <Row>
        <Col md={2} className="border-end">
          <Players />
        </Col>
        <Col>
          <WhiteBoard color={selectedColor}/>
          
          <Colors click={clickColor}/>
        </Col>
      </Row>

      <div>DrawPage</div>
      <Button />
    </Container>
  );
};
