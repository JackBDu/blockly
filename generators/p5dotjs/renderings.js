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

goog.provide('Blockly.p5dotjs.renderings');

goog.require('Blockly.p5dotjs');

Blockly.p5dotjs['renderings_create_canvas'] = function(block) {
  // createCanvas()
  var width = Blockly.p5dotjs.valueToCode(block, 'WIDTH', Blockly.p5dotjs.ORDER_ATOMIC);
  var height = Blockly.p5dotjs.valueToCode(block, 'HEIGHT', Blockly.p5dotjs.ORDER_ATOMIC);
  var code = 'createCanvas('+width+', '+height+');\n';
  return code;
};

Blockly.p5dotjs['renderings_resize_canvas'] = function(block) {
  // resizeCanvas()
  var width = Blockly.p5dotjs.valueToCode(block, 'WIDTH', Blockly.p5dotjs.ORDER_ATOMIC);
  var height = Blockly.p5dotjs.valueToCode(block, 'HEIGHT', Blockly.p5dotjs.ORDER_ATOMIC);
  var code = 'resizeCanvas('+width+', '+height+');\n';
  return code;
};

Blockly.p5dotjs['renderings_no_canvas'] = function(block) {
  // noCanvas()
    return 'noCanvas();\n';
};