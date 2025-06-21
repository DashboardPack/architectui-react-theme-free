import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// React 19 compatible tabs replacement for rc-tabs
export const Tabs = ({ 
  children, 
  defaultActiveKey = "1", 
  className = "", 
  renderTabBar = () => null,
  renderTabContent = () => null,
  ...props 
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  // Extract TabPane children
  const tabPanes = React.Children.toArray(children).filter(
    child => child.type === TabPane
  );

  const activePane = tabPanes.find(pane => pane.key === activeKey) || tabPanes[0];

  return (
    <div className={`react-tabs ${className}`} {...props}>
      {/* Tab Headers */}
      <div className="tabs-nav-wrapper">
        <div className="tabs-nav">
          {tabPanes.map((pane) => (
            <button
              key={pane.key}
              className={`tab-button ${activeKey === pane.key ? 'active' : ''}`}
              onClick={() => setActiveKey(pane.key)}
              type="button"
            >
              {pane.props.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activePane ? activePane.props.children : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .tabs-nav-wrapper {
            border-bottom: 1px solid #dee2e6;
            margin-bottom: 1rem;
          }
          .tabs-nav {
            display: flex;
            position: relative;
          }
          .tab-button {
            padding: 0.75rem 1rem;
            cursor: pointer;
            border: none;
            background: transparent;
            color: #6c757d;
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
          }
          .tab-button:hover {
            color: #007bff;
          }
          .tab-button.active {
            color: #007bff;
            border-bottom-color: #007bff;
            font-weight: 500;
          }
          .tab-content {
            position: relative;
          }
        `
      }} />
    </div>
  );
};

export const TabPane = ({ children, tab, ...props }) => {
  return <div {...props}>{children}</div>;
};

// Compatibility components for rc-tabs API
export const TabContent = ({ children }) => {
  return <div className="tab-content">{children}</div>;
};

export const ScrollableInkTabBar = () => {
  // This was just for rendering the tab bar, now handled internally
  return null;
};

export default Tabs; 