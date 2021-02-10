import "./App.css";
import GameBox from "./GameBox.js";

function App() {
  return (
    <div className="App">
      <body>
        <header>GuessFlix</header>
        <section>
          <GameBox class="my-game"></GameBox>
          <div class="scoreboard">
            <div>
              Time Left:&nbsp; <item id="countdown">30</item>
            </div>
            <div>
              Points :&nbsp; <item id="catch">0</item>
            </div>
          </div>
        </section>

        {/* <div class="popup-welcome">
          <font size="6">Who's Hungry?</font>
          <br />
          <br />
          <font size="4.5">
            Instructions: In this game, your goal is to catch as many pastries
            as possible before time runs out! <br />
            <br />
            Move the basket from left to right with your mousepad to collect
            <br />
            the bready goodness in your basket.
            <br />
            <br />
          </font>
          <div class="treats">
            <img src="./images/pie icon.png" />
            &nbsp;&nbsp;
            <img src="./images/painauchocolate icon.png" />
            &nbsp;&nbsp;
            <img src="./images/tarte icon.png" />
            &nbsp;&nbsp;
            <img src="./images/croissant icon.png" />
            <br />
            <font size="4">Click to begin.</font>
          </div>
        </div>

        <div class="popup-end">
          <img src="./images/painauchocolate icon.png" />
          &nbsp;&nbsp;
          <font size="8">Game Over</font>&nbsp;&nbsp;
          <img src="./images/croissant icon.png" />
          <br />
          <font size="6">
            <item class="finalscore">0</item> pastries were caught!
            <br />
          </font>
          <font size="6">
            <button type="button" class="btn btn-light">
              Encore!
            </button>
          </font>
        </div> */}

        <footer>
          Created By Christina Bailey &nbsp;&nbsp;
          <a href="https://www.github.com/CIBailey/">Github</a>
        </footer>
        <script src="./javascript/script.js"></script>
      </body>
    </div>
  );
}

export default App;
