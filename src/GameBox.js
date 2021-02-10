function GameBox(cards, currentStep) {
  if (cards.cards) {
    return cards.cards.map((value, index) => {
      console.log(index, "index");
      console.log(currentStep, "currentStep");

      if (0 === index) {
        return (
          <div className="my-game" key={value.id}>
            <div className="card-text">
              Did &nbsp;
              <div style={{ color: "rgb(62 115 199)" }}>{value.name}</div>{" "}
              &nbsp;play in
              <div style={{ color: "rgb(62 115 199)" }}>
                {value.known_for[0].original_title}
              </div>
              ?
            </div>{" "}
            <div className="buttons">
              <button type="button" className="btn btn-success btn-lg">
                Yes
              </button>
              <button type="button" className="btn btn-danger btn-lg">
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
    return <div>Error!</div>;
  }
}

export default GameBox;
