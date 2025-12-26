
![npm](https://img.shields.io/npm/dt/react-js-banner.svg)
![npm](https://img.shields.io/npm/v/react-js-banner.svg)
![npm](https://img.shields.io/npm/l/react-js-banner.svg)


# react-js-banner

Simple React JS text banner component with fade in / out animation and customizable options.

# Description

It is a simple customizable text banner component (like warning, error, success). 
Styles (font and background) can be customized or you can use the built-in variants. 
By default the banner has a fade in and fade out animation of 1s (customizable). 
This can be used in two ways: 
1. Shown for a specific amount of time using `visibleTime` prop.
2. Handled manually with manual dismissal.

# How it looks

![alt text](images/banner.png "React JS Banner example")

**How to thank me?**
Just click on ⭐️ button or buy me a tea using the donation button below :)

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

``` console
npm i react-js-banner
```

# Usage

Import `Banner` in your react component.

``` javascript
import Banner from 'react-js-banner';
```

## Basic Example:

```javascript
<Banner 
  id="banner1"
  title="This is an example Banner Title" 
  css={{ color: "#000", backgroundColor: "grey", fontFamily: "arial" }} 
/>
```

## New Features (v0.8.0)

### Variants
You can now use `variant` prop for predefined styles: `success`, `error`, `warning`, `info`.

```javascript
<Banner 
  title="Success!" 
  variant="success" 
/>
<Banner 
  title="Error Occurred" 
  variant="error" 
/>
```

### Positioning
Fix the banner to the top or bottom of the screen using the `position` prop: `top`, `bottom`.

```javascript
<Banner 
  title="Fixed Top Banner" 
  variant="info"
  position="top"
/>
```

### Dismissible
Add a close button with the `dismissible` prop.

```javascript
<Banner 
  title="Closable Banner" 
  variant="warning"
  dismissible={true}
/>
```

## Advanced Examples

### Timed Visibility
If you want the banner to be available for a specific amount of time, `visibleTime` prop can be passed:

```javascript
<Banner 
  title="This banner disappears in 3 seconds" 
  visibleTime={3000}
/>
```

### Image Support
Example of banner with image:
```javascript
import logo from './logo.svg';
```
``` html
<Banner 
  title="This is an example banner with Image" 
  image={logo} 
  imageClass="App-logo"
  css={{ color: "white", backgroundColor: "#333" }}
/>
```

### Children Support
The banner accepts a list of children to display complex content.
``` html
<Banner>
  <div>
    <h1>h1</h1>
    <h2>h2</h2>
  </div>
</Banner>
```

# Props

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|:-----|
| id      | String | N | Banner Id (optional unless using callback) |
| title      | String | N | Adding some text will make the banner appear |
| css | object     | N|  CSS customizations |
| variant | String | N | Predefined style: 'success', 'error', 'warning', 'info' |
| position | String | N | fixed position: 'top', 'bottom' |
| dismissible | bool | N | shows a close button |
| visibleTime | number     | N|  Time in milliseconds you want the banner to be visible |
| image | String     | N|  image to appear at the left of text |
| imageClass | String     | N|  image css class e.g "image-customized-class" |
| transitionAppearTime | number| N|  time for the banner to appear |
| transitionTime | number | N|  time for the transition to take |
| onHideCallback | function | N|  callback when the popup hides (to be used with visible time prop or dismissible) |

# Donations

If you think that any information you obtained here is useful and worth of some money and are willing to pay for it, feel free to send any amount through Paypal :)

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2MSMEVFF9P33N)

You can also follow me on Patreon:
https://patreon.com/Jacware


# Changelog

### v0.8.0
* **Major Update**: Component refactored to Functional Component (Hooks).
* **New Feature**: `variant` prop added (success, error, warning, info).
* **New Feature**: `position` prop added (top, bottom).
* **New Feature**: `dismissible` prop added.
* **Update**: Dependencies updated to specific React 18/19 support and Webpack 5.

### v0.7.2
* Package size further optimized from ~118kb+ to <11kb packed / 31kb unpacked :) 

### v0.7.1
* Package size optimized from ~600kb+ to <100kb 

### v0.7.0
* New function callback when the popup hides.
* Enhanced fade in / out animations.
* Code optimizations.

### v0.6.0
* Bug Fixes
* Dependencies updated

### v0.5.0
* Added ability to accept children.

### v0.3.0
* Added ability to show / hide banner whenever is required via new showBanner prop
* Banner can render HTML snippets

### v0.2.0
* Visible time feature added

### v0.1.0
* Initial release


# License 

Licensed under the MIT License © [jciccio](https://www.npmjs.com/~jciccio)
