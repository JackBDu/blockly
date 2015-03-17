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
  var color = red + ', ' + green + ', ' + blue;
  return [color, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};

Blockly.p5dotjs['colour_random'] = function(block) {
  // Generate a random colour.
  var functionName = Blockly.p5dotjs.provideFunction_(
      'colour_random',
      [ 'function ' + Blockly.p5dotjs.FUNCTION_NAME_PLACEHOLDER_ + '() {',
        '  var num = Math.floor(Math.random() * Math.pow(2, 24));',
        '  return \'#\' + (\'00000\' + num.toString(16)).substr(-6);',
        '}']);
  var code = functionName + '()';
  return [code, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};

Blockly.p5dotjs['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var red = Blockly.p5dotjs.valueToCode(block, 'RED',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var green = Blockly.p5dotjs.valueToCode(block, 'GREEN',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var blue = Blockly.p5dotjs.valueToCode(block, 'BLUE',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var color = red + ', ' + green + ', ' + blue;
  return [color, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};

Blockly.p5dotjs['colour_blend'] = function(block) {
  // Blend two colours together.
  var c1 = Blockly.p5dotjs.valueToCode(block, 'COLOUR1',
      Blockly.p5dotjs.ORDER_COMMA) || '\'#000000\'';
  var c2 = Blockly.p5dotjs.valueToCode(block, 'COLOUR2',
      Blockly.p5dotjs.ORDER_COMMA) || '\'#000000\'';
  var ratio = Blockly.p5dotjs.valueToCode(block, 'RATIO',
      Blockly.p5dotjs.ORDER_COMMA) || 0.5;
  var functionName = Blockly.p5dotjs.provideFunction_(
      'colour_blend',
      [ 'function ' + Blockly.p5dotjs.FUNCTION_NAME_PLACEHOLDER_ +
          '(c1, c2, ratio) {',
        '  ratio = Math.max(Math.min(Number(ratio), 1), 0);',
        '  var r1 = parseInt(c1.substring(1, 3), 16);',
        '  var g1 = parseInt(c1.substring(3, 5), 16);',
        '  var b1 = parseInt(c1.substring(5, 7), 16);',
        '  var r2 = parseInt(c2.substring(1, 3), 16);',
        '  var g2 = parseInt(c2.substring(3, 5), 16);',
        '  var b2 = parseInt(c2.substring(5, 7), 16);',
        '  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);',
        '  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);',
        '  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);',
        '  r = (\'0\' + (r || 0).toString(16)).slice(-2);',
        '  g = (\'0\' + (g || 0).toString(16)).slice(-2);',
        '  b = (\'0\' + (b || 0).toString(16)).slice(-2);',
        '  return \'#\' + r + g + b;',
        '}']);
  var code = functionName + '(' + c1 + ', ' + c2 + ', ' + ratio + ')';
  return [code, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};
/**
 * @fileoverview Generating p5dotjs for colour setting blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
 Blockly.p5dotjs['colour_background'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var colour = Blockly.p5dotjs.valueToCode(block, 'COLOUR',
      Blockly.p5dotjs.ORDER_COMMA) || 0;
  var code = 'background('+ colour +');\n';
  return code;
};