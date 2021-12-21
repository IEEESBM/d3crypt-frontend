import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar"></div>

      <div className="competition-main-outer">
        <div className="temp">
          <div className="competition-title">
            Competition
            <div className="competition-line"></div>
          </div>

          <div className="competition-content-outer">
            <div className="competition-question-outer">
              <div className="competition-question-content">
                <div className="question-counter">
                  Question <span>4</span> of 8
                </div>

                <div className="question-title">
                  Who is the cutest pug in the world?
                </div>

                <div className="boxes-outer">
                  <div className="boxes">
                    <div class="grid-item">Callie</div>
                    <div class="grid-item">Marve</div>
                    <div class="grid-item">Puggy</div>
                    <div class="grid-item">Huggy</div>
                  </div>
                </div>
                <div className="submit-outer">
                  <button className="btn btn-primary answer">Answer</button>
                  <button className="btn btn-primary submit">Submit</button>
                </div>
              </div>
            </div>
            <div className="competition-score">
              <div className="score-upper">
                <div className="timer1">02</div>
              </div>

              <div className="score-middle">
                <div className="timer2">
                  20064
                  <div className="score">Score</div>
                </div>
              </div>

              <div className="score-lower">
                <div className="">
                  <span>Medium</span>
                  <div className="level-outer">
                    <div className="div1"></div>
                    <div className="line"></div>
                    <div className="div2"></div>
                    <div className="line"></div>
                    <div className="div3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
