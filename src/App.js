import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, NavLink  } from 'react-router-dom';
import './App.css';
import FingerHandpose from './components/fingerhandpose/FingerHandpose';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/speechrecognition">Speech Recognition</NavLink>
            </li>
            <li>
              <NavLink to="/handfingerpose">Hand Fingerpose</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/speechrecognition">
            <SpeechRecognition />
          </Route>

          <Route path="/handfingerpose">
            <FingerHandpose />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function SpeechRecognition() {
  return <h2>Speech Recognition</h2>;
}


export default App;
