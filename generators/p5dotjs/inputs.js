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
 * @fileoverview Generating p5dotjs for inputs blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.inputs');

goog.require('Blockly.p5dotjs');


Blockly.p5dotjs['inputs_touch_mouse'] = function(block) {
  // mouseX/mouseY/pmouseX/pmouseY/touchX/touchY/ptouchX/ptouchY.
  var state = block.getFieldValue('STATE');
  var input = block.getFieldValue('INPUT');
  var axis = block.getFieldValue('AXIS');
  if (state=='PREVIOUS') {
    var code = 'p';
  } else {
    var code = '';
  }
  if (input=='TOUCH') {
    code += 'touch';
  } else {
    code += 'mouse';
  }
  if (axis=='X') {
    code += 'X';
  } else {
    code += 'Y';
  }
  return [code, Blockly.p5dotjs.ORDER_ATOMIC];
};