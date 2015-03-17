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
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.p5dotjs.structures');

goog.require('Blockly.p5dotjs');


Blockly.p5dotjs['structures_loop'] = function(block) {
  // loop()/noLoop()
  var no = block.getFieldValue('MODE') == 'NO';
  if (no) {
    return 'noLoop();\n';
  } else {
    return 'loop();\n';
  }
};

Blockly.p5dotjs['structures_remove'] = function(block) {
  // remove()
    return 'remove();\n';
};

Blockly.p5dotjs['structures_setup'] = function(block) {
  // setup()
    return 'function setup(){\n'+'}\n';
};
