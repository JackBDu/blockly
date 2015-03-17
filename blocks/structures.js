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
 * @fileoverview structure blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.Blocks.structures');

goog.require('Blockly.Blocks');


Blockly.Blocks.structures.HUE = 100;

Blockly.Blocks['structures_loop'] = {
  /**
   * Block for loop() and noLoop()
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.STRUCTURES_LOOP_OPERATOR_ON, 'YES'],
         [Blockly.Msg.STRUCTURES_LOOP_OPERATOR_OFF, 'NO']];
    this.setHelpUrl(Blockly.Msg.STRUCTURES_LOOP_HELPURL);
    this.setColour(Blockly.Blocks.structures.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STRUCTURES_LOOP_TITLE)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'YES': Blockly.Msg.STRUCTURES_LOOP_TOOLTIP_ON,
        'NO': Blockly.Msg.STRUCTURES_LOOP_TOOLTIP_OFF
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['structures_remove'] = {
  /**
   * Block for remove()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.STRUCTURES_REMOVE_HELPURL);
    this.setColour(Blockly.Blocks.structures.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STRUCTURES_REMOVE_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.STRUCTURES_REMOVE_TOOLTIP);
  }
};

Blockly.Blocks['structures_setup'] = {
  /**
   * Block for setup()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.STRUCTURES_SETUP_HELPURL);
    this.setColour(Blockly.Blocks.structures.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STRUCTURES_SETUP_TITLE);
    this.appendStatementInput();
    this.setTooltip(Blockly.Msg.STRUCTURES_SETUP_TOOLTIP);
  }
};