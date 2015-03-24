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
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');


Blockly.Blocks.colour.HUE = 20;

Blockly.Blocks['colour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR');
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP);
  }
};

/**
 * @fileoverview Colour Setting blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
Blockly.Blocks['colour_colour'] = {
  /**
   * Block for color()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_COLOUR_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("COLOUR")
        .appendField(Blockly.Msg.COLOUR_COLOUR_TITLE);
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_COLOUR_TOOLTIP);
  }
};

Blockly.Blocks['colour_background'] = {
  /**
   * Block for background()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_BACKGROUND_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("COLOUR")
        .appendField(Blockly.Msg.COLOUR_BACKGROUND_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COLOUR_BACKGROUND_TOOLTIP);
  }
};

Blockly.Blocks['colour_fill'] = {
  /**
   * Block for fill()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_FILL_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("COLOUR")
        .appendField(Blockly.Msg.COLOUR_FILL_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COLOUR_FILL_TOOLTIP);
  }
};

Blockly.Blocks['colour_stroke'] = {
  /**
   * Block for stroke()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_STROKE_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("COLOUR")
        .appendField(Blockly.Msg.COLOUR_STROKE_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COLOUR_STROKE_TOOLTIP);
  }
};

Blockly.Blocks['colour_no_fill'] = {
  /**
   * Block for noFill()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_NOFILL_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COLOUR_NOFILL_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COLOUR_NOFILL_TOOLTIP);
  }
};

Blockly.Blocks['colour_no_stroke'] = {
  /**
   * Block for noStroke()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_NOSTROKE_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COLOUR_NOSTROKE_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COLOUR_NOSTROKE_TOOLTIP);
  }
};

Blockly.Blocks['colour_colour_mode'] = {
  /**
   * Block for colorMode(mode, max1, max2, max3, maxA)
   * @this Blockly.Block
   */
  init: function() {
    var MODES =
        [[Blockly.Msg.COLOUR_RGBHSB_COLOURMODE_RGB, 'RGB'],
         [Blockly.Msg.COLOUR_RGBHSB_COLOURMODE_HSB, 'HSB']];
    this.setHelpUrl(Blockly.Msg.COLOUR_COLOURMODE_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COLOUR_COLOURMODE_TITLE)
        .appendField(new Blockly.FieldDropdown(MODES), 'MODE');
    this.appendValueInput("MAX1")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_COLOURMODE_TITLE1);
    this.appendValueInput("MAX2")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_COLOURMODE_TITLE2);
    this.appendValueInput("MAX3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_COLOURMODE_TITLE3);
    this.appendValueInput("MAXA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_COLOURMODE_TITLE4);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COLOUR_COLOURMODE_TOOLTIP);
  }
};