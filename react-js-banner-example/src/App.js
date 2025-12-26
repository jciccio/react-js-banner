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
          <h1 className="App-title">react-js-banner Functional Component</h1>
        </header>

        <p>New Features Support (2026)</p>

        {/* Top Fixed Banner */}
        <Banner
          title="This is a fixed TOP banner (error variant)"
          position="top"
          variant="error"
          dismissible={true}
        />

        {/* Bottom Fixed Banner */}
        <Banner
          title="This is a fixed BOTTOM banner (info variant)"
          position="bottom"
          variant="info"
          dismissible={true}
        />

        <div style={{ marginTop: 60 }}>
          <p>Standard Banners</p>
          <Banner title="Default Banner (Success color by default if we changed defaults, but here is standard)" />

          <Banner
            title="Success Variant Banner"
            variant="success"
            dismissible
          />
          <Banner
            title="Warning Variant Banner"
            variant="warning"
          />
        </div>

        <p>Legacy Usage Compatibility</p>
        <Banner id="banner1" title="Legacy: Custom CSS" css={this.state.banner1Css} />
        <Banner
          id="banner4"
          title="Legacy: Auto-hide in 3s"
          css={this.state.banner3Css}
          visibleTime={3000}
          onHideCallback={() => console.log('Hidden')}
        />

        <Banner id="banner7">
          <div>
            <h3>Children functionality works</h3>
          </div>
        </Banner>
      </div>
    );
  }
}

export default App;
