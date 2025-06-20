/**
 * Simple findDOMNode stub for React 19 compatibility
 * This is used when packages try to import findDOMNode from react-dom
 */

const findDOMNode = (component) => {
  // If it's already a DOM node, return it
  if (component && component.nodeType) {
    return component;
  }
  
  // If it's a ref object, return the current value
  if (component && component.current) {
    return component.current;
  }
  
  // For other cases, try to find the first DOM element
  if (component && typeof component === 'object') {
    // Check if it has DOM-like properties
    if (component.querySelector || component.tagName) {
      return component;
    }
  }
  
  // Return null for unsupported cases (safer than throwing)
  return null;
};

export { findDOMNode };
export default findDOMNode; 