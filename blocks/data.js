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
 * @fileoverview Data blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.Blocks.data');

goog.require('Blockly.Blocks');


Blockly.Blocks.colour.HUE = 20;

Blockly.Blocks['data_primitive_convert'] = {
  /**
   * Block for float(), int(), str(), boolean(), byte()
   * @this Blockly.Block
   */
  init: function() {
    var TYPES =
        [[Blockly.Msg.DATA_PRIMITIVE_FLOAT, 'FLOAT'],
         [Blockly.Msg.DATA_PRIMITIVE_INT, 'INT'],
         [Blockly.Msg.DATA_PRIMITIVE_STR, 'STR'],
         [Blockly.Msg.DATA_PRIMITIVE_BOOLEAN, 'BOOLEAN'],
         [Blockly.Msg.DATA_PRIMITIVE_BYTE, 'BYTE']];
    this.setHelpUrl(Blockly.Msg.DATA_PRIMITIVE_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("VALUE")
        .appendField(Blockly.Msg.DATA_PRIMITIVE_TITLE1)
    this.appendDummyInput()
        .appendField(Blockly.Msg.DATA_PRIMITIVE_TITLE2)
        .appendField(new Blockly.FieldDropdown(TYPES), 'TYPE')
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('TYPE');
      var TOOLTIPS = {
        'FLOAT': Blockly.Msg.DATA_PRIMITIVE_TOOLTIP_FLOAT,
        'INT': Blockly.Msg.DATA_PRIMITIVE_TOOLTIP_INT,
        'STR': Blockly.Msg.DATA_PRIMITIVE_TOOLTIP_STR,
        'BOOLEAN': Blockly.Msg.DATA_PRIMITIVE_TOOLTIP_BOOLEAN,
        'BYTE': Blockly.Msg.DATA_PRIMITIVE_TOOLTIP_BYTE
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['data_char_convert'] = {
  /**
   * Block for char(), unchar()
   * @this Blockly.Block
   */
  init: function() {
    var TYPES =
        [[Blockly.Msg.DATA_CHARUNCHAR_CHAR, 'CHAR'],
         [Blockly.Msg.DATA_CHARUNCHAR_UNCHAR, 'UNCHAR']];
    this.setHelpUrl(Blockly.Msg.DATA_CHARUNCHAR_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("VALUE")
        .appendField(Blockly.Msg.DATA_PRIMITIVE_TITLE1)
    this.appendDummyInput()
        .appendField(Blockly.Msg.DATA_PRIMITIVE_TITLE2)
        .appendField(new Blockly.FieldDropdown(TYPES), 'TYPE')
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('TYPE');
      var TOOLTIPS = {
        'CHAR': Blockly.Msg.DATA_CHARUNCHAR_TOOLTIP_CHAR,
        'UNCHAR': Blockly.Msg.DATA_CHARUNCHAR_TOOLTIP_UNCHAR
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['data_hex_convert'] = {
  /**
   * Block for hex(), unhex()
   * @this Blockly.Block
   */
  init: function() {
    var TYPES =
        [[Blockly.Msg.DATA_HEXUNHEX_HEX, 'HEX'],
         [Blockly.Msg.DATA_HEXUNHEX_UNHEX, 'UNHEX']];
    this.setHelpUrl(Blockly.Msg.DATA_CHARUNCHAR_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("VALUE")
        .appendField(Blockly.Msg.DATA_PRIMITIVE_TITLE1)
    this.appendDummyInput()
        .appendField(Blockly.Msg.DATA_PRIMITIVE_TITLE2)
        .appendField(new Blockly.FieldDropdown(TYPES), 'TYPE')
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('TYPE');
      var TOOLTIPS = {
        'HEX': Blockly.Msg.DATA_HEXUNHEX_TOOLTIP_HEX,
        'UNHEX': Blockly.Msg.DATA_HEXUNHEX_TOOLTIP_UNHEX
      };
      return TOOLTIPS[op];
    });
  }
};