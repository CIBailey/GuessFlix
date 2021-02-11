import "./App.css";
import GameBox from "./GameBox.js";
import Welcome from "./Welcome.js";
import GameOver from "./GameOver.js";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      welcomeIsShowing: true,
      closeIsShowing: false,
      seconds: 1,
      points: 0,
      highscore: 0,
    };

    this.onClickWelcome = this.onClickWelcome.bind(this);
    this.onClickRestart = this.onClickRestart.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickWelcome() {
    this.setState({ welcomeIsShowing: false, closeIsShowing: false });
    this.timer = setInterval(() => {
      if (this.state.seconds <= 0) {
        //END GAME
        clearInterval(this.timer);
        this.setState({
          closeIsShowing: true,
          seconds: 30,
        });
        if (this.state.highscore < this.state.points) {
          this.setState((previousState) => {
            return {
              highscore: previousState.points,
            };
          });
        }
      } else {
        this.setState((previousState) => {
          return {
            seconds: previousState.seconds - 1,
          };
        });
      }
    }, 1000);
  }

  onClickRestart() {
    this.setState({
      welcomeIsShowing: true,
      closeIsShowing: false,
      points: 0,
    });
  }

  onClickNext() {
    this.setState((previousState) => {
      return {
        currentStep: previousState.currentStep + 1,
      };
    });

    //iff is correct

    this.setState((previousState) => {
      return {
        points: previousState.points + 1,
      };
    });
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

    fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=7cd25a19b40590d8e32448a45fcfc70f"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
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

        {this.state.closeIsShowing ? (
          <GameOver
            onClickRestart={this.onClickRestart}
            points={this.state.points}
            highscore={this.state.highscore}
          />
        ) : null}

        <section>
          <GameBox
            cards={this.state.cards}
            currentStep={this.state.currentStep}
            onClickNext={this.onClickNext}
          ></GameBox>
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
