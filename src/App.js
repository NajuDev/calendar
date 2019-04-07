import React, { Component } from 'react';
import './App.css';

import { MonthViewComponent } from './components/month-view.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO: Connect to redux store */}
        <MonthViewComponent
          month={11}
        />
      </div>
    );
  }
}

export default App;
