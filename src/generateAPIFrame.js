const fs = require('fs');
const updateConfig = require('./updateConfig.js');
const { generateFilesaveArray } = require('./utils.js');

const generateAPIFrame = (relPath, dirName) => {
  const absPath = fs.realpathSync(relPath).concat('/');
  generateFilesaveArray(absPath, dirName);
  fs.writeFileSync(absPath.concat('.gutenrc.json'), `{ "apiDir": "${dirName}" }`);
  updateConfig(absPath.concat(dirName));
};

module.exports = generateAPIFrame;