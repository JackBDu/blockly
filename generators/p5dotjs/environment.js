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
 * @fileoverview Generating p5dotjs for environment blocks.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.p5dotjs.environment');

goog.require('Blockly.p5dotjs');


Blockly.p5dotjs['environment_display'] = function(block) {
  // displayWidth/displayHeight
  var width = block.getFieldValue('MODE') == 'WIDTH';
  if (width) {
    return ['displayWidth', Blockly.p5dotjs.ORDER_ATOMIC];
  } else {
    return ['displayHeight', Blockly.p5dotjs.ORDER_ATOMIC];
  }
};

Blockly.p5dotjs['environment_window'] = function(block) {
  // windowWidth/windowHeight
  var width = block.getFieldValue('MODE') == 'WIDTH';
  if (width) {
    return ['windowWidth', Blockly.p5dotjs.ORDER_ATOMIC];
  } else {
    return ['windowHeight', Blockly.p5dotjs.ORDER_ATOMIC];
  }
};

Blockly.p5dotjs['environment_canvas'] = function(block) {
  // canvasWidth/canvasHeight
  var width = block.getFieldValue('MODE') == 'WIDTH';
  if (width) {
    return ['width', Blockly.p5dotjs.ORDER_ATOMIC];
  } else {
    return ['height', Blockly.p5dotjs.ORDER_ATOMIC];
  }
};

Blockly.p5dotjs['environment_frame_count'] = function(block) {
  // frameCount
  return ['frameCount', Blockly.p5dotjs.ORDER_ATOMIC];
};

Blockly.p5dotjs['environment_focused'] = function(block) {
  // focused
  return ['focused', Blockly.p5dotjs.ORDER_ATOMIC];
};

Blockly.p5dotjs['environment_no_cursor'] = function(block) {
  // noCursor()
    return 'noCursor();\n';
};