import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  renderBanner() {
    if (this.props.title) {

      if (this.props.visibleTime && this.props.visibleTime > 0){
        hideBanner();
      }

      return (
        <div key="banner" className="banner" style={this.props.css}>
          <label>{this.props.title}</label>
        </div>
      );
    } else {
      return null;
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async hideBanner() {
    await this.timeout(1000 + this.props.visibleTime);
    await this.setState({ bannerMessage: null });
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="banner-transition"
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        {this.renderBanner()}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Banner;
