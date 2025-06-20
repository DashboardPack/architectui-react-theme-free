#!/usr/bin/env node

/**
 * React 19 findDOMNode Patcher
 * 
 * This script patches node_modules files that use the deprecated findDOMNode
 * to make them compatible with React 19.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Patching findDOMNode usage for React 19 compatibility...');

// Find all JS files in node_modules that might use findDOMNode
const patterns = [
  'node_modules/react-onclickoutside/**/*.js',
  'node_modules/react-widgets/**/*.js'
];

const findDOMNodeReplacement = `
// React 19 compatibility: findDOMNode has been removed
const findDOMNode = (component) => {
  if (!component) return null;
  if (component.nodeType) return component;
  if (component.current) return component.current;
  return null;
};
`;

patterns.forEach(pattern => {
  const files = glob.sync(pattern);
  
  files.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if this file imports or uses findDOMNode
      if (content.includes('findDOMNode')) {
        console.log(`📝 Patching: ${filePath}`);
        
        // Replace the import of findDOMNode
        content = content.replace(
          /import\s*{\s*([^}]*?)findDOMNode([^}]*?)\s*}\s*from\s*['"]react-dom['"]/g,
          (match, before, after) => {
            const otherImports = (before + after).replace(/,\s*,/g, ',').replace(/^,|,$/g, '').trim();
            if (otherImports) {
              return `import { ${otherImports} } from 'react-dom';\n${findDOMNodeReplacement}`;
            } else {
              return findDOMNodeReplacement;
            }
          }
        );
        
        // Also handle export pattern
        content = content.replace(
          /export\s*{\s*([^}]*?)findDOMNode([^}]*?)\s*}\s*from\s*['"]react-dom['"]/g,
          (match, before, after) => {
            const otherExports = (before + after).replace(/,\s*,/g, ',').replace(/^,|,$/g, '').trim();
            if (otherExports) {
              return `export { ${otherExports} } from 'react-dom';\n${findDOMNodeReplacement}\nexport { findDOMNode };`;
            } else {
              return `${findDOMNodeReplacement}\nexport { findDOMNode };`;
            }
          }
        );
        
        // Write the patched content back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Successfully patched: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error patching ${filePath}:`, error.message);
    }
  });
});

console.log('🎉 Patching complete! Try running npm start again.'); 