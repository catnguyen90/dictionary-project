import icon from "./dictionary-icon.png";
import floral from "./floral.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header img-fluid">
          <img src={floral} className="App-floral" alt="floral" />
          <img src={icon} className="App-logo" alt="logo" />
          <img src={floral} className="App-floral" alt="floral" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center mb-4">
          This project was coded by{" "}
          <a
            href="https://vibrant-goldberg-47672a.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Cathy Nguyen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/catnguyen90/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://loving-meitner-547ef9.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
