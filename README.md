
![npm](https://img.shields.io/npm/dt/file-uploader-js.svg)
![npm](https://img.shields.io/npm/v/file-uploader-js.svg)
![npm](https://img.shields.io/npm/l/file-uploader-js.svg)


# react-js-banner
React JS Banner Component

# Description

Banner text component, style can be customized. And banner can be visible for a specific amount of time

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

Props available:
* title (banner title/message)
* css (style for the banner)
* visibleTime (time that the banner will be visible on screen)

# Props

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|:-----|
| title      | String | Y | Adding some text will make the banner appear |
| css | object     | N|  CSS customizations |
| visibleTime | int     | N|  Time in ms that the banner will be visible |


# Changelog

### v0.0.1
* Initial release


# License 

Licensed under the MIT License.
