const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('--- Starting findDOMNode Patcher ---');

try {
    const projectRoot = path.resolve(__dirname, '..');
    const nodeModulesPath = path.join(projectRoot, 'node_modules');

    console.log(`> Searching for files in: ${nodeModulesPath}`);

    const files = glob.sync(`${nodeModulesPath}/**/*.js`);

    console.log(`> Found ${files.length} files to scan.`);

    // A robust regex that finds all forms of findDOMNode and captures the argument.
    const findDOMNodeRegex = /[\w\$._]+\.findDOMNode\(([^)]*)\)/g;

    let totalPatched = 0;

    files.forEach(file => {
        try {
            let originalContent = fs.readFileSync(file, 'utf8');

            if (originalContent.includes('.findDOMNode')) {
                // Replace the entire expression with just the component it was passed.
                // This is a safer transformation that avoids syntax errors.
                const modifiedContent = originalContent.replace(findDOMNodeRegex, (match, component) => {
                    return `(${component})`;
                });

                if (originalContent !== modifiedContent) {
                    console.log(`  [Patched] ${path.relative(projectRoot, file)}`);
                    fs.writeFileSync(file, modifiedContent, 'utf8');
                    totalPatched++;
                }
            }
        } catch (err) {
            // ignore files that we can't read/write
        }
    });

    if (totalPatched > 0) {
        console.log(`\n> SUCCESS: Patched ${totalPatched} files.`);
    } else {
        console.log('\n> WARNING: Patcher did not modify any files.');
    }

} catch (e) {
    console.error('\n> FATAL: An error occurred during the patching process:');
    console.error(e);
    process.exit(1);
}

console.log('--- Patcher Finished ---'); 