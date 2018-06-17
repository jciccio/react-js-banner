import React, { Component } from 'react';
import LoadingProgress from 'react-js-banner';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      banner1Css: { color: "#FFF", backgroundColor: "green" },
      banner2Css: { color: "#FFF", backgroundColor: "orange" },
      banner3Css: { color: "#FFF", backgroundColor: "red" }
    };

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-js-banner Component</h1>
        </header>

       

      </div>
    );
  }
}

export default App;
