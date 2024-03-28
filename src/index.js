import React, { Component } from "react";
import {useState} from 'react';
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
      showBanner: undefined
    };
   
  }

  componentDidMount() {
    this.hideBanner();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.visibleTime !== undefined  && nextProps.visibleTime > 0){
      let newState = {
        bannerMessage: nextProps.bannerMessage,
        showBanner: true
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
      this.timeout(this.props.visibleTime);
    }
  }
  
  renderBanner() {
    
    const showBanner = this.state.showBanner !== undefined ? this.state.showBanner : true;
    
    const visibleTimeAnim = (this.props.visibleTime > 0) ? `opacityOn ${this.props.visibleTime/1000}s` : `noFadeOut 3s`;
    const animation = {"animation": `${visibleTimeAnim} normal forwards`}
    if(showBanner){
      if (this.props.title && (this.state.show === undefined || this.state.showBanner) ) {
        
        return (
          <div key="banner" className="banner" style={{...this.props.css, ...animation}}>
            {this.renderImage()}
            {this.renderTitle()}
          </div>
        );
      }
      else if (this.props.children){
        return(
          <div key="banner" className="banner" style={{...this.props.css, ...animation}}>
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
    return <div key={`BannerId-${this.props.id}`}>{this.props.title}</div>
  }

  timeout(ms) {
    setTimeout(() => {
      if(this.props.onHideCallback != null){
        this.props.onHideCallback(this.props.id);  
      }
    }, ms);
  }

}

Banner.propTypes = {
  title: PropTypes.node,
  css: PropTypes.object,
  visibleTime: PropTypes.number,
  image: PropTypes.string,
  imageClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  transitionAppearTime: PropTypes.number,
  transitionTime: PropTypes.number,
  showBanner: PropTypes.bool,
  children: PropTypes.node,
  onHideCallback: PropTypes.func
};

Banner.defaultProps = {
  onHideCallback: null,
}

export default Banner;
