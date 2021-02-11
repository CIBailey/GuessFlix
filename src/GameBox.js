function GameBox(props) {
  if (props.cards) {
    return props.cards.map((value, index) => {
      if (props.currentStep === index) {
        return (
          <div className="my-game" key={value.id}>
            <div className="card-text">
              Did &nbsp;
              <div style={{ color: "rgb(62 115 199)" }}>{value.name}</div>{" "}
              &nbsp;play in&nbsp;
              <div style={{ color: "rgb(62 115 199)" }}>
                {value.known_for[0].original_title}
              </div>
              ?
            </div>{" "}
            <div className="buttons">
              <button
                onClick={() => {
                  props.onClickNext();
                }}
                type="button"
                className="btn btn-success btn-lg"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  props.onClickNext();
                }}
                type="button"
                className="btn btn-danger btn-lg"
              >
                No
              </button>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  } else {
    return <div>Error! (API)</div>;
  }
}

export default GameBox;
