import Search from "./Search";

import dictionary from "./dictionary.svg"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} className="headerLogo" alt="logo" />
        </header>
        <main>
          <Search />
        </main>
        <footer>
          Coded by Rachel Schofield and open sourced on GitHub
        </footer>
      </div>
    </div>
  );
}
