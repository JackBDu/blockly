/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating p5dotjs for structure blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.structures');

goog.require('Blockly.p5dotjs');

Blockly.p5dotjs['structures_preload'] = function(block) {
  // preload()
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  var code = 'function preload(){\n' +
      branch + '}\n';
  return code;
};

Blockly.p5dotjs['structures_setup'] = function(block) {
  // setup()
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  var code = 'function setup(){\n' +
      branch + '}\n';
  return code;
};

Blockly.p5dotjs['structures_draw'] = function(block) {
  // draw()
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  var code = 'function draw(){\n' +
      branch + '}\n';
  return code;
};

Blockly.p5dotjs['structures_remove'] = function(block) {
  // remove()
    return 'remove();\n';
};

Blockly.p5dotjs['structures_loop'] = function(block) {
  // loop()/noLoop()
  var loop = block.getFieldValue('MODE') == 'ON';
  if (loop) {
    return 'loop();\n';
  } else {
    return 'noLoop();\n';
  }
};

Blockly.p5dotjs['structures_pushpop'] = function(block) {
  // push()/pop()
  var push = block.getFieldValue('MODE') == 'PUSH';
  if (push) {
    return 'push();\n';
  } else {
    return 'pop();\n';
  }
};

Blockly.p5dotjs['structures_redraw'] = function(block) {
  // redraw()
    return 'redraw();\n';
};
