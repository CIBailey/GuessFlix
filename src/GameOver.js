const GameOver = ({ onClickRestart, points }) => (
  <div className="popup-end">
    <font size="6">Game Over</font>
    <br />
    <br />
    <br />
    <font size="4">
      {points} points scored!
      <br />
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
    </font>
  </div>
);

export default GameOver;
