import logo from './logo.svg';
import './App.css';


function App() {
  const m = "santhiya";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          musraf sandy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{m}</p> 
        {/* //object or bollean return pannathu */}
      </header>
    </div>
  );
}

export default App;
