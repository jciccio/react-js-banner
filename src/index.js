import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "babel-polyfill";

import "./banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);
     this.state = {
      bannerMessage: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //if (nextProps.current !== prevState.currentItem) {
      if (nextProps.visibleTime !== undefined  && nextProps.visibleTime > 0){
        let newState = {
          bannerMessage:  nextProps.bannerMessage
        };
        return newState;
      }
      return null;
    //}
  }


  async hideBanner() {
    await this.setState({bannerMessage: this.props.title});
    await this.timeout(1000 + this.props.visibleTime);
    await this.setState({ bannerMessage: null });
  }

  renderBanner() {
    if (this.props.title) {

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
