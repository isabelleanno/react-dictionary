import "./App.css";
import Dictionary from "./dictionary.js";
function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center">
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-6 col-xl-6 m-4 d-flex flex-column align-items-start">
          <header className="App-header mt-4">
            <h1 className="display-4 mb-4">Isabelle's Dictionary</h1>
            <h5 className="lightgray mb-4">
              What would you like to learn today?
            </h5>
          </header>
          <main>
            <Dictionary />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
