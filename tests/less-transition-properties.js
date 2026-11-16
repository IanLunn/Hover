// Run with `node tests/less-transition-properties.js` after installing less.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const less = require('less');

const filename = path.resolve(__dirname, '../less/hover.less');
less.render(fs.readFileSync(filename, 'utf8'), { filename: filename })
  .then(function(result) {
    const declarations = result.css.match(/(?:-webkit-)?transition-property:\s*[^;]+;/g);
    assert(declarations && declarations.length, 'Expected transition properties');
    declarations.forEach(function(declaration) {
      assert(!/["']/.test(declaration), 'Invalid quoted CSS value: ' + declaration);
    });
    [
      ['back-pulse', '', 'color, background-color'],
      ['outline-in', ':before', 'top, right, bottom, left'],
      ['outline-out', ':before', 'top, right, bottom, left'],
      ['underline-from-left', ':before', 'right'],
      ['underline-from-center', ':before', 'left, right'],
      ['underline-from-right', ':before', 'left'],
      ['overline-from-left', ':before', 'right'],
      ['overline-from-center', ':before', 'left, right'],
      ['overline-from-right', ':before', 'left'],
      ['grow-shadow', '', 'box-shadow, transform'],
      ['float-shadow', ':before', 'transform, opacity']
    ].forEach(function(effect) {
      const selector = '.hvr-' + effect[0] + effect[1];
      const rule = result.css.split(selector + ' {')[1];
      assert(rule, 'Missing rule: ' + selector);
      const body = rule.split('}')[0];
      assert(body.includes('transition-property: ' + effect[2] + ';'), selector);
      assert(body.includes('-webkit-transition-property: ' + effect[2] + ';'), selector + ' WebKit');
    });
    console.log('PASS: all 11 affected effects emit valid transition properties');
  }).catch(function(error) {
    console.error(error);
    process.exitCode = 1;
  });
