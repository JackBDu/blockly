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
 * @fileoverview Generating p5dotjs for data blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.data');

goog.require('Blockly.p5dotjs');

Blockly.p5dotjs['data_primitive_convert'] = function(block) {
  // float(), int(), str(), boolean(), byte()
  var type = block.getFieldValue('TYPE');
  var value = Blockly.p5dotjs.valueToCode(block, 'VALUE', Blockly.p5dotjs.ORDER_COMMA);
  var code = type.toLowerCase()+"("+value+")";
  return [code, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};

Blockly.p5dotjs['data_char_convert'] = function(block) {
  // char(), unchar()
  var type = block.getFieldValue('TYPE');
  var value = Blockly.p5dotjs.valueToCode(block, 'VALUE', Blockly.p5dotjs.ORDER_COMMA);
  var code = type.toLowerCase()+"("+value+")";
  return [code, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};

Blockly.p5dotjs['data_hex_convert'] = function(block) {
  // hex(), unhex()
  var type = block.getFieldValue('TYPE');
  var value = Blockly.p5dotjs.valueToCode(block, 'VALUE', Blockly.p5dotjs.ORDER_COMMA);
  var code = type.toLowerCase()+"("+value+")";
  return [code, Blockly.p5dotjs.ORDER_FUNCTION_CALL];
};