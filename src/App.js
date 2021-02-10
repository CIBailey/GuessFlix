import "./App.css";
import GameBox from "./GameBox.js";
import Welcome from "./Welcome.js";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      welcomeIsShowing: true,
      closeIsShowing: false,
      seconds: 30,
      points: 0,
    };

    this.onClickWelcome = this.onClickWelcome.bind(this);
  }

  onClickWelcome() {
    this.setState({ welcomeIsShowing: false });
    console.log(this.state, "bing");
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=7cd25a19b40590d8e32448a45fcfc70f"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cards: data.results });
      })
      .catch(console.log);
  }

  render() {
    return (
      <body className="App">
        <header>GuessFlix</header>
        {this.state.welcomeIsShowing ? (
          <Welcome onClickWelcome={this.onClickWelcome} />
        ) : null}

        <section>
          <GameBox cards={this.state.cards}></GameBox>
          <div className="scoreboard">
            <div>Time Left:&nbsp; {this.state.seconds}</div>
            <div>Points :&nbsp; {this.state.points}</div>
          </div>
        </section>

        <footer>
          Created By Christina Bailey &nbsp;&nbsp;
          <a href="https://www.github.com/CIBailey/">Github</a>
        </footer>
        <script src="./javascript/script.js"></script>
      </body>
    );
  }
}

export default App;
