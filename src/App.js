import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              React<b>Calendar</b>
              <br />
              <Clock />
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
      </div>
    );
  }
}

export default App;
