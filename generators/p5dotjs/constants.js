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
 * @fileoverview Generating p5dotjs for constants blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.constants');

goog.require('Blockly.p5dotjs');


Blockly.p5dotjs['constants_pi'] = function(block) {
  // Numeric value.
  var value = block.getFieldValue('VALUE');
  if (value=='π/4') {
    return ['QUARTER_PI', Blockly.p5dotjs.ORDER_ATOMIC];
  } else if ('π/2') {
    return ['HALF_PI', Blockly.p5dotjs.ORDER_ATOMIC];
  } else if ('π') {
    return ['PI', Blockly.p5dotjs.ORDER_ATOMIC];
  } else if ('2π') {
    return ['TWO_PI', Blockly.p5dotjs.ORDER_ATOMIC];
  }
};