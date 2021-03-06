import React from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Box from "./components/Box"
import hangul from "./hangul.json";

const backup = hangul;
const win = 10;

// Functions ===========================================

function findIndex(id, array) {
  let index;
  // Loops through the hangul array to find the ID
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      index = i;
    }
  }
  // console.log(`Index in array: ${index}`);
  return index;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// React App =============================================

class App extends React.Component {
  state = {
    hangul,
    score: 0,
    topScore: 0,
    backup: hangul
  };

  checkBox = (id) => {
    // console.log(`Checked ID: ${id}`);
    let hangulCopy = [...this.state.hangul];
    let scoreCopy = this.state.score;
    let topScoreCopy = this.state.topScore;

    // find the index of the id
    let index = findIndex(id, this.state.hangul);
    
    console.log(`Chosen card is: ${hangulCopy[index].clicked}`);

    // check if the picture has already been clicked.
    // reset if it has
    if (hangulCopy[index].clicked === "true") {
      alert("You lost... Resetting game");
      // reset score, cards and shuffle cards
      scoreCopy = 0;
      hangulCopy = [...backup];
    } else {
      // if not, change the 'clicked' state of the found letter
      hangulCopy[index].clicked = "true";

      // increment the score and check top score
      scoreCopy++;
      if (scoreCopy >= topScoreCopy) {
        topScoreCopy = scoreCopy;
      }
    }

    // check to see if the player won
    if (scoreCopy === win) {
      alert(`You won! Resetting game...`);
      scoreCopy = 0;
      hangulCopy = [...backup];
    }

    // mix the cards in the array
    hangulCopy = shuffle(hangulCopy);

    // update the state
    this.setState({ hangul: hangulCopy });
    this.setState({
      score: scoreCopy,
      topScore: topScoreCopy
    });

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