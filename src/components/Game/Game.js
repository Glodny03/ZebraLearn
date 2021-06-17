import React from "react";

function Game() {
  return (
    <>
      <div className="gamePanel">
        <div className="gamePanel--word">Kot</div>
        <div className="gamePanel__option">
          <button>Dog</button>
          <button>Elephant</button>
          <button>Ant</button>
        </div>
        <div className="gamePanel__option">
          <button>Cat</button>
          <button>Turtle</button>
          <button>Bird</button>
        </div>
        <div className="gamePanel__result">
          <div className="gamePanel__result--view">
            <div className="gamePanel--wordMINI">7</div>
            <p>Dobrze</p>
          </div>
          <h1>10</h1>
          <div className="gamePanel__result--view">
            <div className="gamePanel--wordMINI">25</div>
            <p>Źle</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
