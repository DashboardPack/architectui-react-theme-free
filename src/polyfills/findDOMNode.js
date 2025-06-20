/**
 * findDOMNode polyfill for React 19 compatibility
 * 
 * React 19 removed findDOMNode, but some legacy packages still depend on it.
 * This polyfill provides basic functionality for most use cases.
 * 
 * WARNING: This is a compatibility layer only. 
 * Ideally, packages should be updated to use refs instead.
 */

const findDOMNode = (component) => {
  // If it's already a DOM node, return it
  if (component && component.nodeType) {
    return component;
  }
  
  // If it's a React component instance with a ref
  if (component && component._reactInternalFiber) {
    // For older React internal structure
    return component._reactInternalFiber.stateNode;
  }
  
  // If it's a React element or component
  if (component && component._reactInternals) {
    // For newer React internal structure  
    return component._reactInternals.stateNode;
  }
  
  // Try to find the DOM node through React DevTools internals
  if (component && component._owner) {
    return component._owner.stateNode;
  }
  
  // For functional components or other cases, try to find the DOM element
  if (component && typeof component === 'object') {
    // Look for common DOM element properties
    if (component.current && component.current.nodeType) {
      // It's likely a ref object
      return component.current;
    }
    
    // If it has a querySelector method, it's probably a DOM element
    if (component.querySelector) {
      return component;
    }
  }
  
  // Last resort: return null (better than throwing an error)
  console.warn('findDOMNode polyfill: Could not find DOM node for component', component);
  return null;
};

export default findDOMNode; 