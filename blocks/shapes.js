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
 * @fileoverview shape blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.Blocks.shapes');

goog.require('Blockly.Blocks');


Blockly.Blocks.shapes.HUE = 40;

Blockly.Blocks['shapes_point'] = {
  /**
   * Block for point(x, y)
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.SHAPES_POINT_HELPURL);
    this.setColour(Blockly.Blocks.shapes.HUE);
    this.appendValueInput("X")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_POINT_TITLE)
        .appendField(Blockly.Msg.SHAPES_X_SYMBOL);
    this.appendValueInput("Y")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_Y_SYMBOL);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SHAPES_POINT_TOOLTIP);
  }
};

Blockly.Blocks['shapes_line'] = {
  /**
   * Block for line(x1, y1, x2, y2)
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.SHAPES_LINE_HELPURL);
    this.setColour(Blockly.Blocks.shapes.HUE);
    this.setInputsInline(true);
    this.appendValueInput("X1")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_LINE_TITLE1)
        .appendField(Blockly.Msg.SHAPES_X_SYMBOL);
    this.appendValueInput("Y1")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_Y_SYMBOL);
    this.appendValueInput("X2")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_LINE_TITLE2)
        .appendField(Blockly.Msg.SHAPES_X_SYMBOL);
    this.appendValueInput("Y2")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_Y_SYMBOL);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SHAPES_LINE_TOOLTIP);
  }
};

Blockly.Blocks['shapes_ellipse'] = {
  /**
   * Block for ellipse(a, b, c, d)
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.SHAPES_ELLIPSE_HELPURL);
    this.setColour(Blockly.Blocks.shapes.HUE);
    this.setInputsInline(true);
    this.appendValueInput("A")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.SHAPES_ELLIPSE_TITLE)
        // .appendField(Blockly.Msg.SHAPES_X_SYMBOL);
    this.appendValueInput("B")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        // .appendField(Blockly.Msg.SHAPES_Y_SYMBOL);
    this.appendValueInput("C")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        // .appendField(Blockly.Msg.SHAPES_X_SYMBOL);
    this.appendValueInput("D")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        // .appendField(Blockly.Msg.SHAPES_Y_SYMBOL);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SHAPES_ELLIPSE_TOOLTIP);
  }
};
