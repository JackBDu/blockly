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
 * @fileoverview rendering blocks for Blockly.
 * @author jackbdu@nyu.edu (Jack B. Du)
 */
'use strict';

goog.provide('Blockly.Blocks.renderings');

goog.require('Blockly.Blocks');


Blockly.Blocks.renderings.HUE = 60;

Blockly.Blocks['renderings_create_canvas'] = {
  /**
   * Block for creatCanvas()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.RENDERINGS_CREATECANVAS_HELPURL);
    this.setColour(Blockly.Blocks.renderings.HUE);
    this.appendValueInput("WIDTH")
        .appendField(Blockly.Msg.RENDERINGS_CREATECANVAS_TITLE)
        .setCheck("Number");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(Blockly.Msg.RENDERINGS_MULTIPLICATION_SYMBOL);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RENDERINGS_CREATECANVAS_TOOLTIP);
  }
};

Blockly.Blocks['renderings_resize_canvas'] = {
  /**
   * Block for resizeCanvas()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.RENDERINGS_RESIZECANVAS_HELPURL);
    this.setColour(Blockly.Blocks.renderings.HUE);
    this.appendValueInput("WIDTH")
        .appendField(Blockly.Msg.RENDERINGS_RESIZECANVAS_TITLE)
        .setCheck("Number");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(Blockly.Msg.RENDERINGS_MULTIPLICATION_SYMBOL);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RENDERINGS_RESIZECANVAS_TOOLTIP);
  }
};

Blockly.Blocks['renderings_no_canvas'] = {
  /**
   * Block for noCanvas()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.RENDERINGS_NOCANVAS_HELPURL);
    this.setColour(Blockly.Blocks.renderings.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RENDERINGS_NOCANVAS_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RENDERINGS_NOCANVAS_TOOLTIP);
  }
};