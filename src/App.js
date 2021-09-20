import icon from "./dictionary-icon.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header img-fluid">
          <img src={icon} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center mb-4">Coded by Cathy Nguyen</footer>
      </div>
    </div>
  );
}

export default App;
