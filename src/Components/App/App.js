import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Addentry from '../Addentry/Addentry';
import Manage from '../Manage/Manage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <Router>
      <div>
        <nav>
          <ul>
            <p><Link to="/add">Add Entry</Link></p>
            <p><Link to="/manage">Manage Genres</Link></p>
          </ul>
        </nav>
        <Route path='/add' exact component={Addentry}/>
        <Route path='/manage' exact component={ Manage }/>
      </div>
    </Router>
    </div>
  );
}

export default App;
