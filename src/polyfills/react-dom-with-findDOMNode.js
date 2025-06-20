/**
 * React DOM compatibility module with findDOMNode
 * This module re-exports everything from react-dom and adds findDOMNode
 */

// Re-export everything from react-dom
export * from 'react-dom';

// Import and export our findDOMNode stub
import findDOMNodeStub from './findDOMNode-stub.js';

// Export findDOMNode for compatibility
export const findDOMNode = findDOMNodeStub;

// Also provide a default export for compatibility
import * as ReactDOM from 'react-dom';

const ReactDOMWithFindDOMNode = {
  ...ReactDOM,
  findDOMNode: findDOMNodeStub
};

export default ReactDOMWithFindDOMNode; 