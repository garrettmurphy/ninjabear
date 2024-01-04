import React from "react";
import { Button, Container } from "react-bootstrap";

import Nav from "./components/nav";

import "./scss/index.scss";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Container>
          <div>This is the main section</div>
          <div>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="success">success</Button>
            <Button variant="info">info</Button>
            <Button variant="warning">warning</Button>
            <Button variant="danger">danger</Button>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
