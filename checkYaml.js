// checkYaml.js
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function checkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkDir(fullPath);
    } else if (file.endsWith('.yml') || file.endsWith('.yaml')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');

        if (content.includes('\0')) {
          console.error(`❌ Null byte found in: ${fullPath}`);
        }

        yaml.load(content);
        console.log(`✅ Valid YAML: ${fullPath}`);
      } catch (e) {
        console.error(`❌ YAML error in: ${fullPath}\n   → ${e.message}`);
      }
    }
  });
}

checkDir('./storage');

