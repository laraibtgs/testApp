import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App1() {
  return <h1>App !</h1>;
}

function ResumeComponent() {
  return (
    <h1>Resume ResumeComponent</h1>
  );
}


function App() {
  return (
    <div className="App1">
      <header className="App-header1">
      </header>
      <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<App1 />}
        />
        <Route
          exact
          path="/:userId"
          element={<ResumeComponent />}
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
