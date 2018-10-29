import React from 'react';
import {DrumMachine} from "./DrumMachine";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <DrumMachine/>
      </div>
    );
  }
}

export default App;
