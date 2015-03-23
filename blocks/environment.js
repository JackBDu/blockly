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

goog.provide('Blockly.Blocks.environment');

goog.require('Blockly.Blocks');


Blockly.Blocks.environment.HUE = 20;

Blockly.Blocks['environment_display'] = {
  /**
   * Block for displayWidth/displayHeight.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.ENVIRONMENT_DISPLAY_OPERATOR_WIDTH, 'WIDTH'],
         [Blockly.Msg.ENVIRONMENT_DISPLAY_OPERATOR_HEIGHT, 'HEIGHT']];
    this.setHelpUrl(Blockly.Msg.ENVIRONMENT_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.environment.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENVIRONMENT_DISPLAY_TITLE)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WIDTH': Blockly.Msg.ENVIRONMENT_DISPLAY_OPERATOR_TOOLTIP_WIDTH,
        'HEIGHT': Blockly.Msg.ENVIRONMENT_DISPLAY_OPERATOR_TOOLTIP_HEIGHT
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['environment_window'] = {
  /**
   * Block for windowWidth/windowHeight.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.ENVIRONMENT_WINDOW_OPERATOR_WIDTH, 'WIDTH'],
         [Blockly.Msg.ENVIRONMENT_WINDOW_OPERATOR_HEIGHT, 'HEIGHT']];
    this.setHelpUrl(Blockly.Msg.ENVIRONMENT_WINDOW_HELPURL);
    this.setColour(Blockly.Blocks.environment.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENVIRONMENT_WINDOW_TITLE)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WIDTH': Blockly.Msg.ENVIRONMENT_WINDOW_OPERATOR_TOOLTIP_WIDTH,
        'HEIGHT': Blockly.Msg.ENVIRONMENT_WINDOW_OPERATOR_TOOLTIP_HEIGHT
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['environment_canvas'] = {
  /**
   * Block for canvasWidth/canvasHeight.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.ENVIRONMENT_CANVAS_OPERATOR_WIDTH, 'WIDTH'],
         [Blockly.Msg.ENVIRONMENT_CANVAS_OPERATOR_HEIGHT, 'HEIGHT']];
    this.setHelpUrl(Blockly.Msg.ENVIRONMENT_CANVAS_HELPURL);
    this.setColour(Blockly.Blocks.environment.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENVIRONMENT_CANVAS_TITLE)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WIDTH': Blockly.Msg.ENVIRONMENT_CANVAS_OPERATOR_TOOLTIP_WIDTH,
        'HEIGHT': Blockly.Msg.ENVIRONMENT_CANVAS_OPERATOR_TOOLTIP_HEIGHT
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['environment_frame_count'] = {
  /**
   * Block for frameCount.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.ENVIRONMENT_FRAMECOUNT_HELPURL);
    this.setColour(Blockly.Blocks.environment.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENVIRONMENT_FRAMECOUNT_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip = Blockly.Msg.ENVIRONMENT_FRAMECOUNT_TOOLTIP;
  }
};

Blockly.Blocks['environment_focused'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.ENVIRONMENT_FOCUSED_HELPURL);
    this.setColour(Blockly.Blocks.environment.HUE);
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENVIRONMENT_FOCUSED_TITLE);
    this.setTooltip(Blockly.Msg.ENVIRONMENT_FOCUSED_TOOLTIP);
  }
};

Blockly.Blocks['environment_no_cursor'] = {
  /**
   * Block for noCursor()
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.ENVIRONMENT_NOCURSOR_HELPURL);
    this.setColour(Blockly.Blocks.environment.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENVIRONMENT_NOCURSOR_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ENVIRONMENT_NOCURSOR_TOOLTIP);
  }
};