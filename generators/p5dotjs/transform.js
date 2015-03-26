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
 * @fileoverview Generating p5dotjs for transform blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.transform');

goog.require('Blockly.p5dotjs');

Blockly.p5dotjs['transform_translate'] = function(block) {
  // translate(x, y)
  var x = Blockly.p5dotjs.valueToCode(block, 'X', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var y = Blockly.p5dotjs.valueToCode(block, 'T', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var code = 'translate('+x+', '+y+');\n';
  return code;
};

Blockly.p5dotjs['transform_rotate'] = function(block) {
  // rotate(angle)
  var angle = Blockly.p5dotjs.valueToCode(block, 'ANGLE', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var code = 'rotate('+angle+');\n';
  return code;
};

Blockly.p5dotjs['transform_shear'] = function(block) {
  // shearX(angle)/shearY(angle)
  var axis = block.getFieldValue('AXIS');
  var angle = Blockly.p5dotjs.valueToCode(block, 'ANGLE', Blockly.p5dotjs.ORDER_ATOMIC) || 0;
  var code = 'shear'+axis+'('+angle+');\n';
  return code;
};