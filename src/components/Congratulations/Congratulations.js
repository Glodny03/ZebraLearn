import React from "react";

function Congratulations() {
  return (
    <div className="gratulationPanel">
          <p>Gratulacje</p>
          <div className="gratulationPanel__result">
            <div className="gratulationPanel__result--view">
              <div className="gratulationPanel--wordMINI">150</div>
              <p>Liczba nauczonych słówek</p>
            </div>
            <div className="gratulationPanel__result--view">
              <div className="gratulationPanel--wordMINI">5 dni</div>
              <p>Uczysz się już</p>
            </div>
          </div>
        </div>
  );
}

export default Congratulations;
