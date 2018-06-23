
![npm](https://img.shields.io/npm/dt/react-js-banner.svg)
![npm](https://img.shields.io/npm/v/react-js-banner.svg)
![npm](https://img.shields.io/npm/l/react-js-banner.svg)


# react-js-banner

React JS Banner Component with fade in and fade out animation.

# Description

Banner text component, style (font and background) can be customized using common css rules. By default the banner has a fade in and fade out animation of 1s. This can be used in two ways, banner can be shown for a specific amount of time using visibleTime prop, or can be handled manually by making the title text null or changing the string.

# How it looks

![alt text](banner.png "React JS Banner example")

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i react-js-banner
```

# Usage

Import `Banner` in your react component.

```
import Banner from 'react-js-banner';
```

Example:

```javascript
<Banner 
	title={this.state.bannerMessage} 
	css={this.state.bannerCss} 
/>
```

If you want the banner to be available for a specific amount of time, visibleTime prop can be passed:

```javascript
<Banner 
  title="This is an example banner with CSS" 
  css={this.state.banner3Css} 
  visibleTime={3000}
/>
```

For instance, you can define the background color, font color, font family, size, etc.

```java
{
  banner1Css: { color: "#FFF", backgroundColor: "green" },
  banner2Css: { color: "#000", backgroundColor: "grey", fontFamily: "arial" },
  banner3Css: { color: "#FFF", backgroundColor: "red", fontSize: 20 }
}
```

Props available:
* title (banner title/message)
* css (style for the banner)
* visibleTime (time in ms that the banner will be shown)


# Props

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|:-----|
| title      | String | Y | Adding some text will make the banner appear |
| css | object     | N|  CSS customizations |
| visibleTime | int     | N|  time in ms you want the banner to be visible |


# Changelog

### v0.1.0
* Initial release

### v0.2.0
* Visible time feature added

# License 

Licensed under the MIT License.
