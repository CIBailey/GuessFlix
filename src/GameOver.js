const GameOver = ({ isShowing, hide }) =>
  isShowing ? (
    <div className="popup-welcome ">
      <div className="popup-end">
        <img src="./images/painauchocolate icon.png" />
        &nbsp;&nbsp;
        <font size="8">Game Over</font>&nbsp;&nbsp;
        <img src="./images/croissant icon.png" />
        <br />
        <font size="6">
          {this.state.points} pastries were caught!
          <br />
        </font>
        <font size="6">
          <button type="button" className="btn btn-info btn-lg">
            Encore!
          </button>
        </font>
      </div>{" "}
    </div>
  ) : null;

export default GameOver;
