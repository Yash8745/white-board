import React from "react";
import WhiteBoard from "../components/WhiteBoard";
import Header from "../../../shared/components/Header";
import { Button } from "../../../shared/components/Button";
import Container from "react-bootstrap/esm/Container";

export const DrawPage = () => {
  return (
    <Container>
        <Header/>
      <WhiteBoard />
      <div>DrawPage</div>
      <Button/>
    </Container>
  );
};
