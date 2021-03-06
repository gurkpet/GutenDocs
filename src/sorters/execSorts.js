const fs = require('fs');
const { findRC } = require('../utils.js');
const { sortBySection } = require('./sortBySection.js');

/**
 * @description Execute various sorting functions
 * @param ast {[]} The AST with parsed information
 */

const execSorts = (ast) => {
  // extract an array of files to be sorted
  // const sortFiles = gutenrc.skeleton.sortByOrder;
  // console.log(ast);
  // execute a piping function sequence here
  const pathData = findRC();
  const gutenRC = JSON.parse(fs.readFileSync(pathData.absPath.concat('.gutenrc.json')));
  const sectionName = gutenRC.skeleton.sortBySections.sections;
  const priority = 1;
  return sortBySection(ast, sectionName, priority);
};

module.exports.execSorts = execSorts;

/* eslint-disable */
/*

Current Notes:
  The latest custom tag will overwrite earlier custom tags (like CSS rules),
  this allows the user to easily reassign


*/