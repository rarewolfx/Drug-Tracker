const fs = require('fs');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Extract only production dependencies
const dependencies = packageJson.dependencies || {};

// Format as `package@version`
const requirements = Object.entries(dependencies)
    .map(([pkg, version]) => `${pkg}@${version}`)
    .join('\n');

// Write to requirements.txt
fs.writeFileSync('./requirements.txt', requirements);
console.log('requirements.txt has been generated with production dependencies!');
