const Welcome = ({ onClickWelcome }) => (
  <div className="popup-welcome ">
    <font size="6">Let's get popping!</font>
    <br />
    <br />
    <font size="4.5">
      Instructions: In this game, your goal is to catch as many pastries as
      possible before time runs out! <br />
      <br />
      Move the basket from left to right with your mousepad to collect
      <br />
      the bready goodness in your basket.
      <br />
      <br />
    </font>
    <button
      onClick={() => {
        onClickWelcome();
      }}
    >
      Let's Go!
    </button>
  </div>
);

export default Welcome;
