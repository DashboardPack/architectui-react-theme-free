import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// React 19 compatible LoadingOverlay replacement
const LoadingOverlay = ({
  active = false,
  spinner = null,
  loader = null, // alias for spinner
  children,
  tag: Tag = 'div',
  className = '',
  styles = {},
  ...props
}) => {
  const spinnerElement = spinner || loader;

  // Get custom overlay styles if provided
  const getOverlayStyle = () => {
    const baseStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.7)',
    };

    if (styles.overlay && typeof styles.overlay === 'function') {
      return styles.overlay(baseStyle);
    }

    return baseStyle;
  };

  return (
    <Tag
      className={className}
      style={{ position: 'relative', ...props.style }}
      {...props}
    >
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={getOverlayStyle()}
          >
            {spinnerElement}
          </motion.div>
        )}
      </AnimatePresence>
    </Tag>
  );
};

export default LoadingOverlay;
