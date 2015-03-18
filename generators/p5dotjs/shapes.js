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
 * @fileoverview Generating p5dotjs for rendering blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.shapes');

goog.require('Blockly.p5dotjs');

Blockly.p5dotjs['shapes_point'] = function(block) {
  // point()
  var x = Blockly.p5dotjs.valueToCode(block, 'X', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var y = Blockly.p5dotjs.valueToCode(block, 'Y', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var code = 'point('+x+', '+y+');\n';
  return code;
};

Blockly.p5dotjs['shapes_line'] = function(block) {
  // point()
  var x1 = Blockly.p5dotjs.valueToCode(block, 'X1', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var y1 = Blockly.p5dotjs.valueToCode(block, 'Y1', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var x2 = Blockly.p5dotjs.valueToCode(block, 'X2', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var y2 = Blockly.p5dotjs.valueToCode(block, 'Y2', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var code = 'line('+x1+', '+y1+', '+y2+', '+y2+');\n';
  return code;
};