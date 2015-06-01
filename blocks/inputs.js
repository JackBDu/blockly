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
 * @fileoverview Input blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.Blocks.inputs');

goog.require('Blockly.Blocks');


Blockly.Blocks.inputs.HUE = 110;

Blockly.Blocks['inputs_touch_mouse'] = {
  /**
   * Block for mouseX/mouseY/pmouseX/pmouseY/touchX/touchY/ptouchX/ptouchY.
   * @this Blockly.Block
   */
  init: function() {
    var STATES =
        [[Blockly.Msg.INPUTS_MOUSETOUCH_STATES_CURRENT, 'CURRENT'],
         [Blockly.Msg.INPUTS_MOUSETOUCH_STATES_PREVIOUS, 'PREVIOUS']];
    var INPUTS =
        [[Blockly.Msg.INPUTS_MOUSETOUCH_INPUTS_MOUSE, 'MOUSE'],
         [Blockly.Msg.INPUTS_MOUSETOUCH_INPUTS_TOUCH, 'TOUCH']];
    var AXIS =
        [[Blockly.Msg.INPUTS_MOUSETOUCH_AXIS_X, 'X'],
         [Blockly.Msg.INPUTS_MOUSETOUCH_AXIS_Y, 'Y']];
    this.setColour(Blockly.Blocks.inputs.HUE);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STATES), 'STATE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(INPUTS), 'INPUT');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(AXIS), 'AXIS');
    this.setOutput(true, 'Number');
    this.setHelpUrl(Blockly.Msg.INPUTS_MOUSETOUCH_HELPURL);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('STATE')+thisBlock.getFieldValue('INPUT')+thisBlock.getFieldValue('AXIS');

      var TOOLTIPS = {
        'CURRENTMOUSEX': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_CURRENTMOUSEX,
        'CURRENTMOUSEY': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_CURRENTMOUSEY,
        'CURRENTTOUCHX': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_CURRENTTOUCHX,
        'CURRENTTOUCHY': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_CURRENTTOUCHY,
        'PREVIOUSMOUSEX': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_PREVIOUSMOUSEX,
        'PREVIOUSMOUSEY': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_PREVIOUSMOUSEY,
        'PREVIOUSTOUCHX': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_PREVIOUSTOUCHX,
        'PREVIOUSTOUCHY': Blockly.Msg.INPUTS_MOUSETOUCH_TOOLTIP_PREVIOUSTOUCHY
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['inputs_date'] = {
  /**
   * Block for mouseX/mouseY/pmouseX/pmouseY/touchX/touchY/ptouchX/ptouchY.
   * @this Blockly.Block
   */
  init: function() {
    var DATE =
        [[Blockly.Msg.INPUTS_DATE_YEAR, 'YEAR'],
         [Blockly.Msg.INPUTS_DATE_MONTH, 'MONTH'],
         [Blockly.Msg.INPUTS_DATE_DAY, 'DAY'],
         [Blockly.Msg.INPUTS_DATE_HOUR, 'HOUR'],
         [Blockly.Msg.INPUTS_DATE_MINUTE, 'MINUTE'],
         [Blockly.Msg.INPUTS_DATE_SECOND, 'SECOND']];
    this.setColour(Blockly.Blocks.inputs.HUE);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DATE), 'DATE');
    this.setOutput(true, 'Number');
    this.setHelpUrl(Blockly.Msg.INPUTS_DATE_HELPURL);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('DATE');

      var TOOLTIPS = {
        'YEAR': Blockly.Msg.INPUTS_DATE_TOOLTIP_YEAR,
        'MONTH': Blockly.Msg.INPUTS_DATE_TOOLTIP_MONTH,
        'DAY': Blockly.Msg.INPUTS_DATE_TOOLTIP_DAY,
        'HOUR': Blockly.Msg.INPUTS_DATE_TOOLTIP_HOUR,
        'MINUTE': Blockly.Msg.INPUTS_DATE_TOOLTIP_MINUTE,
        'SECOND': Blockly.Msg.INPUTS_DATE_TOOLTIP_SECOND
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['inputs_millis'] = {
  /**
   * Block for mouseX/mouseY/pmouseX/pmouseY/touchX/touchY/ptouchX/ptouchY.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.inputs.HUE);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField('millis');
    this.setOutput(true, 'Number');
    this.setHelpUrl(Blockly.Msg.INPUTS_MILLIS_HELPURL);
    // Assign 'this' to a variable for use in the tooltip closure below.
    this.setTooltip(Blockly.Msg.INPUTS_MILLIS_TOOLTIP);
  }
};