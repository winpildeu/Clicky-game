import React from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Thumbmail

function App(props) {
  return (
    <div>
      <Navbar
        title="Clicky Game"
        rules="Click an image to begin"
        score="0"
        topScore="0"
      />
      <Container>
        <Header>Do you know Korean?</Header>
        {/* <Thumbnail></Thumbnail> */}
      </Container>
    </div>
  );
}

export default App;