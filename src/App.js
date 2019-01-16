import React from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Box from "./components/Box"
import hangul from "./hangul.json";

class App extends React.Component {
  state = {
    hangul,
    score: 0,
    topScore: 0
  };

  checkBox = (id) => {
    console.log(`Checked ID: ${id}`);
    let index = 0;

    // find the index of the id
    for(let i = 0; i < this.state.hangul.length; i++) {
      // console.log(this.state.hangul[i]);
      for(let key in this.state.hangul[i]) {
        if (this.state.hangul[i].id === id) {
          index = i;
        }
      }
    }
    
    console.log(`Index in array: ${index}`);

    // change the 'clicked' state of the found letter
    
  };

  render() {
    return (
      <div>
        <Navbar
          title="Clicky Game"
          rules="Click an image to begin"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
          <Header>Do you know Korean?</Header>
          {this.state.hangul.map(letter =>
            <Box 
              id={letter.id}
              key={letter.id}
              name={letter.name}
              image={letter.image}
              clicked={letter.clicked}
              checkBox={this.checkBox}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default App;