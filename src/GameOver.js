const GameOver = ({ onClickRestart, points }) => (
  <div className="popup-end">
    <font size="8">Game Over</font>&nbsp;&nbsp;
    <br />
    <font size="6">
      {points} points scored!
      <br />
    </font>
    <font size="6">
      <br />

      <button
        onClick={() => {
          onClickRestart();
        }}
        type="button"
        className="btn btn-info btn-lg"
      >
        {" "}
        Encore!
      </button>
    </font>
  </div>
);

export default GameOver;
