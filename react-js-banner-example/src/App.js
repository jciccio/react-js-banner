import React, { Component } from 'react';
import Banner from 'react-js-banner';
import './App.css';
import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      banner1Css: { color: "#FFF", backgroundColor: "green" },
      banner2Css: { color: "#000", backgroundColor: "grey", fontFamily: "arial" },
      banner3Css: { color: "#FFF", backgroundColor: "red", fontSize: 20 }
    };

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-js-banner Component</h1>
        </header>

       <Banner title="This is an example banner" />
       <Banner title="This is an example banner with CSS" css={this.state.banner1Css}/>
       <Banner title="This is an example banner with CSS" css={this.state.banner2Css}/>
       <Banner title="This is an example banner with CSS" css={this.state.banner3Css} visibleTime={3000}/>

       <Banner title="This is an example banner with CSS and Image" image={logo} imageClass="App-logo" css={this.state.banner2Css}/>

      </div>
    );
  }
}

export default App;
