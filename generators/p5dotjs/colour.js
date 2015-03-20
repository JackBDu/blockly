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
 * @fileoverview Generating p5dotjs for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.p5dotjs.colour');

goog.require('Blockly.p5dotjs');


Blockly.p5dotjs['colour_picker'] = function(block) {
  // Colour picker.
  function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
  function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
  function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
  function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
  var hex = block.getFieldValue('COLOUR')
  hex = cutHex(hex)
  var red = hexToR(hex);
  var green = hexToG(hex);
  var blue = hexToB(hex);
  var color = '(' + red + ', ' + green + ', ' + blue + ')';
  return [color, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};

/**
 * @fileoverview Generating p5dotjs for colour setting blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
Blockly.p5dotjs['colour_colour'] = function(block) {
  // background()
  var colour = Blockly.p5dotjs.valueToCode(block, 'COLOUR',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var code = 'color('+ colour +');\n';
  return code;
};

Blockly.p5dotjs['colour_background'] = function(block) {
  // background()
  var colour = Blockly.p5dotjs.valueToCode(block, 'COLOUR',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var code = 'background('+ colour +');\n';
  return code;
};

Blockly.p5dotjs['colour_fill'] = function(block) {
  // fill()
  var colour = Blockly.p5dotjs.valueToCode(block, 'COLOUR',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var code = 'fill('+ colour +');\n';
  return code;
};

Blockly.p5dotjs['colour_stroke'] = function(block) {
  // stroke()
  var colour = Blockly.p5dotjs.valueToCode(block, 'COLOUR',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var code = 'stroke('+ colour +');\n';
  return code;
};

Blockly.p5dotjs['colour_no_fill'] = function(block) {
  // redraw()
    return 'noFill();\n';
};

Blockly.p5dotjs['colour_no_stroke'] = function(block) {
  // redraw()
    return 'noStroke();\n';
};