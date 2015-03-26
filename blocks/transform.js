/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview transform blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.Blocks.transform');

goog.require('Blockly.Blocks');


Blockly.Blocks.transform.HUE = 50;

Blockly.Blocks['transform_translate'] = {
  /**
   * Block for translate(x, y)
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TRANSFORM_TRANSLATE_HELPURL);
    this.setColour(Blockly.Blocks.transform.HUE);
    this.appendValueInput("X")
        .appendField(Blockly.Msg.TRANSFORM_TRANSLATE_TITLE)
        .setCheck("Number")
        .appendField(Blockly.Msg.TRANSFORM_AXIS_X);
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField(Blockly.Msg.TRANSFORM_AXIS_Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TRANSFORM_TRANSLATE_TOOLTIP);
  }
};

Blockly.Blocks['transform_rotate'] = {
  /**
   * Block for rotate(angle)
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TRANSFORM_ROTATE_HELPURL);
    this.setColour(Blockly.Blocks.transform.HUE);
    this.appendValueInput("ANGLE")
        .appendField(Blockly.Msg.TRANSFORM_ROTATE_TITLE)
        .setCheck("Number")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TRANSFORM_ROTATE_TOOLTIP);
  }
};

Blockly.Blocks['transform_shear'] = {
  /**
   * Block for shearX(angle)/shearY(angle)
   * @this Blockly.Block
   */
  init: function() {
    var AXES =
        [[Blockly.Msg.TRANSFORM_AXIS_X, 'X'],
         [Blockly.Msg.TRANSFORM_AXIS_Y, 'Y']];
    this.setHelpUrl(Blockly.Msg.TRANSFORM_SHEAR_HELPURL);
    this.setColour(Blockly.Blocks.transform.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRANSFORM_SHEAR_TITLE1)
        .appendField(new Blockly.FieldDropdown(AXES), 'AXIS');
    this.appendValueInput("ANGLE")
        .appendField(Blockly.Msg.TRANSFORM_SHEAR_TITLE2)
        .setCheck("Number")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('AXIS');
      var TOOLTIPS = {
        'X': Blockly.Msg.TRANSFORM_SHEAR_TOOLTIP_X,
        'Y': Blockly.Msg.TRANSFORM_SHEAR_TOOLTIP_Y
      };
      return TOOLTIPS[op];
    });
  }
};