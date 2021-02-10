const Welcome = ({ onClickWelcome }) => (
  <div className="popup-welcome ">
    <font size="6">Let's get popping!</font>
    <br />
    <br />
    <font size="4.5">
      Instructions: Get as many points before the timer runs out.
      <br />
      <br />
      Respond to the question by choosing "YES" or "NO". <br />
      <br />
      If you guess correctly, you score! <br />
      <br />
    </font>

    <button
      onClick={() => {
        onClickWelcome();
      }}
      type="button"
      className="btn btn-info btn-lg"
    >
      Let's Go!
    </button>
  </div>
);

export default Welcome;
