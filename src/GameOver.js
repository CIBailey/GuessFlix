const GameOver = ({ onClickRestart, points }) => (
  <div className="popup-end">
    <font size="8">Game Over</font>&nbsp;&nbsp;
    <br />
    <font size="6">
      {/* {points} pastries were caught! */}
      <br />
    </font>
    <font size="6">
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
