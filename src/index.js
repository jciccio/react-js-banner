import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./banner.css";

/**
 * Banner component
 * @author [Jose Antonio Ciccio](https://github.com/jciccio)
 */
const Banner = ({
  title,
  css = {},
  visibleTime = 0,
  image,
  imageClass,
  id,
  children,
  onHideCallback,
  variant,
  position,
  dismissible
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show banner on mount
    setShowBanner(true);

    if (visibleTime > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, visibleTime);
      return () => clearTimeout(timer);
    }
  }, [visibleTime, title, children]); // Re-run if content or timing changes

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setIsClosing(false);
      if (onHideCallback) {
        onHideCallback(id);
      }
    }, 500); // Wait for animation if we add one, or simply unmount
  };

  if (!showBanner) return null;

  const getVariantClass = () => {
    switch (variant) {
      case 'success': return 'banner-success';
      case 'error': return 'banner-error';
      case 'warning': return 'banner-warning';
      case 'info': return 'banner-info';
      default: return '';
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case 'top': return 'banner-top';
      case 'bottom': return 'banner-bottom';
      default: return '';
    }
  };

  // Construct styles and classes
  const bannerClasses = `banner ${getVariantClass()} ${getPositionClass()}`;
  const animationStyle = visibleTime > 0
    ? { animation: `opacityOn ${visibleTime / 1000}s normal forwards` }
    : { animation: `noFadeOut 3s normal forwards` };

  return (
    <div
      key="banner"
      className={bannerClasses}
      style={{ ...css, ...animationStyle }}
    >
      <div className="banner-content">
        {image && (
          <img
            src={image}
            className={imageClass}
            alt="banner icon"
            style={{ marginRight: 10 }}
          />
        )}
        {title && <div key={`BannerId-${id}`}>{title}</div>}
        {children}
      </div>

      {dismissible && (
        <button className="banner-close-btn" onClick={handleClose}>
          &times;
        </button>
      )}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.node,
  css: PropTypes.object,
  visibleTime: PropTypes.number,
  image: PropTypes.string,
  imageClass: PropTypes.string,
  id: PropTypes.string, // Made optional as it's not strictly needed for internal logic anymore unless for callback
  transitionAppearTime: PropTypes.number,
  transitionTime: PropTypes.number,
  children: PropTypes.node,
  onHideCallback: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  position: PropTypes.oneOf(['top', 'bottom']),
  dismissible: PropTypes.bool
};

export default Banner;
