import React from "react";

function Learn() {
  return (
    <div className="sciencePanel">
      <p>Czy pamiętasz to słówko?</p>
      <div className="sciencePanel--word">Kopalnia</div>
      <input type="text" placeholder="Wpisz słówko" />
      <div className="sciencePanel__result">
        <div className="sciencePanel__result--view">
          <div className="sciencePanel--wordMINI">7</div>
          <p>Do powtórzenia</p>
        </div>
        <div className="sciencePanel__result--view">
          <div className="sciencePanel--wordMINI">25</div>
          <p>Nowe słówka</p>
        </div>
      </div>
    </div>
  );
}

export default Learn;
