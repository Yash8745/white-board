import React from "react";
import WhiteBoard from "../components/WhiteBoard";
import Header from "../../../shared/components/Header";
import { Button } from "../../../shared/components/Button";
import Container from "react-bootstrap/esm/Container";
import Players from "../components/Players";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export const DrawPage = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col md={2} className="border-end">
          <Players />
        </Col>
        <Col>
          <WhiteBoard />
        </Col>
      </Row>

      <div>DrawPage</div>
      <Button />
    </Container>
  );
};
