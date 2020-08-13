import React, { Component } from "react";

import PropTypes from 'prop-types';
import "./banner.css";

/**
 * Banner component
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

  render() {
    let appearTime = this.props.transitionAppearTime ? this.props.transitionAppearTime: 1000;
    let transitionTime = this.props.transitionTime ? this.props.transitionTime: 1000;
    return (
      this.renderBanner()
    );
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
    let showBanner = this.props.showBanner !== undefined ? this.props.showBanner : true;
    if(showBanner){
      if (this.props.title && (this.state.show === undefined || this.state.show) ) {
        {this.hideBanner()}
        return (
          <div key="banner" className="banner" style={this.props.css}>
            {this.renderImage()}
            {this.renderTitle()}
          </div>
        );
      }
      else if (this.props.children){
        return(
          <div key="banner" className="banner" style={this.props.css}>
            {this.props.children}
          </div>
        )
      } 
      else {
        return null;
      }
    }
    return null;
  }

  renderTitle(){
    return <div>{this.props.title}</div>
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

Banner.propTypes = {
  title: PropTypes.node,
  css: PropTypes.object,
  visibleTime: PropTypes.number,
  image: PropTypes.string,
  imageClass: PropTypes.string,
  transitionAppearTime: PropTypes.number,
  transitionTime: PropTypes.number,
  showBanner: PropTypes.bool,
  children: PropTypes.node
};

export default Banner;
