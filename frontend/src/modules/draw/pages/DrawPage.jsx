import React from "react";
import WhiteBoard from "../components/WhiteBoard";
import Header from "../../../shared/components/Header";
import { Button } from "../../../shared/components/Button";
import Container from "react-bootstrap/esm/Container";
import Players from "../components/Players";
import Row from "react-bootstrap/esm/Row";

export const DrawPage = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Players/>

      </Row>

      <WhiteBoard />
      <div>DrawPage</div>
      <Button />
    </Container>
  );
};
