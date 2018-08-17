const fs = require('fs');
const extract = require('../src/parser/extract.js');

fs.writeFileSync = jest.fn();
// const generateAPIFrame = require('./../src/generateAPIFrame.js');

// const TestFolderName = 'JestTestApi/';
// let OriginalRCFileContent;
// if (fs.existsSync('./gutenrc.json')) {
//   OriginalRCFileContent = fs.readFileSync('./gutenrc.json');
// }
// generateAPIFrame('./'.concat('/'), TestFolderName);
// jest.mock('fs');
// jest.mock('../src/utils.js');

// const findRC = jest.fn();

// const { findRC } = require('../src/utils.js');

// findRC.absPath = jest.fn();

// findRC.mockReturnValue({ absPath: './' });
// const a = new findRC();
// const b = {};
// const bound = myMock.bind(b);
// bound();

test('Single comment test', () => {
  const address = ['./mockData/singleComment.js'];
  const expected = [{
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/singleComment.js',
  }];
  expect.assertions(1);
  return extract(address).then((received) => {
    expect(received).toEqual(expected);
  });
});

test('Multiple comments test', () => {
  const address = ['./mockData/subFolder/multipleComments.js'];
  const expected = [{
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }, {
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  Numerator\n * @param {number} b  Denominator\n * @return\n ',
      name: 'div',
    }],
    name: 'mockData/subFolder/multipleComments.js',
  }];
  expect.assertions(1);
  return extract(address).then((received) => {
    expect(received).toEqual(expected);
  });
});

test('Declare function as a const', () => {
  const address = ['./mockData/constFunction.js'];
  const expected = [{
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/constFunction.js',
  }];
  expect.assertions(1);
  return extract(address).then((received) => {
    expect(received).toEqual(expected);
  });
});

test('Arrow Function test', () => {
  const address = ['./mockData/subFolder/moreFolder/arrowExpression.js'];
  const expected = [{
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/subFolder/moreFolder/arrowExpression.js',
  }];
  expect.assertions(1);
  return extract(address).then((received) => {
    expect(received).toEqual(expected);
  });
});

xtest('should work for a folder and only process js and jsx file', () => {
  const address = ['./mockData/subFolder'];
  const expected = [{
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }, {
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  Numerator\n * @param {number} b  Denominator\n * @return\n ',
      name: 'div',
    }],
    name: 'mockData/subFolder/multipleComments.js',
  }, {
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/subFolder/moreFolder/arrowExpression.js',
  }];
  expect.assertions(1);
  return extract(address).then((received) => {
    expect(received).toEqual(expected);
  });
});

xtest('should work for glob pattern', () => {
  const address = ['./mockData/**/*.js'];
  const expected = [{
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/constFunction.js',
  }, {
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/singleComment.js',
  }, {
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }],
    name: 'mockData/subFolder/moreFolder/arrowExpression.js',
  }, {
    content: [{
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  First multiplier\n * @param {number} b  Second multiplier\n * @return\n ',
      name: 'mul',
    }, {
      comment: '*\n * Sample function\n * @constructor\n * @param {number} a  Numerator\n * @param {number} b  Denominator\n * @return\n ',
      name: 'div',
    }],
    name: 'mockData/subFolder/multipleComments.js',
  }];
  expect.assertions(1);
  return extract(address).then((received) => {
    expect(received).toEqual(expected);
  });
});

// fs.unlinkSync('./'.concat(TestFolderName));

// if (OriginalRCFileContent) fs.writeFileSync('.gutenrc.json', OriginalRCFileContent);