import gameover from "./images/gameover.png";

const GameOver = ({ onClickRestart, points, highscore }) => (
  <div className="popup-end">
    <img src={gameover} width="350px" alt="Game Over" />
    <br />
    <br />
    <font size="6">
      <bold>{points}</bold> points scored!
    </font>
    <br />
    <font size="4">
      High Score: <bold>{highscore}</bold>{" "}
    </font>
    <font size="4">
      <br />
      <br />
      <button
        onClick={() => {
          onClickRestart();
        }}
        type="button"
        className="btn btn-info btn-lg"
      >
        Encore!
      </button>

      <br />
    </font>
  </div>
);

export default GameOver;
