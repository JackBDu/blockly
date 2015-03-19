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
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.constants');

goog.require('Blockly.Blocks');


Blockly.Blocks.constants.HUE = 40;

Blockly.Blocks['constants_pi'] = {
  /**
   * Block for displayWidth/displayHeight.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONSTANTS_PI_OPERATOR_QUARTERPI, 'QUARTER'],
         [Blockly.Msg.CONSTANTS_PI_OPERATOR_HALFPI, 'HALF'],
         [Blockly.Msg.CONSTANTS_PI_OPERATOR_ONEPI, 'ONE'],
         [Blockly.Msg.CONSTANTS_PI_OPERATOR_TWOPI, 'TWO']];
    this.setHelpUrl(Blockly.Msg.CONSTANTS_PI_HELPURL);
    this.setColour(Blockly.Blocks.constants.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'VALUE');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('VALUE');
      var TOOLTIPS = {
        'QUARTER': Blockly.Msg.CONSTANTS_PI_OPERATOR_TOOLTIP_QUARTERPI,
        'HALF': Blockly.Msg.CONSTANTS_PI_OPERATOR_TOOLTIP_HALFPI,
        'ONE': Blockly.Msg.CONSTANTS_PI_OPERATOR_TOOLTIP_ONEPI,
        'TWO': Blockly.Msg.CONSTANTS_PI_OPERATOR_TOOLTIP_TWOPI
      };
      return TOOLTIPS[op];
    });
  }
};