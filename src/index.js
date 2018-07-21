import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "babel-polyfill";

import "./banner.css";

/**
 * Banner component
 *
 * @version 0.1.1
 * @author [Jose Antonio Ciccio](https://github.com/jciccio)
 */
class Banner extends Component {
  constructor(props) {
    super(props);
     this.state = {
      visibleTime: 0,
      show: undefined
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.visibleTime !== undefined  && nextProps.visibleTime > 0){
      let newState = {
        bannerMessage: nextProps.bannerMessage,
        visibleTime: nextProps.visibleTime
      };
      return newState;
    }
    return null;
  }

  renderImage(){
    if (this.props.image && this.props.imageClass){
      return(
        <img 
          src={this.props.image} 
          className={this.props.imageClass}
        />
      )
    }
    else if(this.props.image){
      return (
        <img 
          src={this.props.image} 
        />
      )
    }
    else{
      return null;
    }
  }


  async hideBanner() {
    if(this.props.visibleTime !== undefined && this.props.visibleTime > 0)
    {
      await this.timeout(1000 + this.props.visibleTime);
      await this.setState({ show: false });
    }
  }

  renderBanner() {
    console.log("show: "+ this.state.show);
    if (this.props.title && (this.state.show === undefined || this.state.show)) {
      {this.hideBanner()}
      return (
        <div key="banner" className="banner" style={this.props.css}>
          {this.renderImage()}
          <label>{this.props.title}</label>
        </div>
      );
    } 
    else {
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
        transitionAppearTimeout={1000}
      >
        {this.renderBanner()}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Banner;
