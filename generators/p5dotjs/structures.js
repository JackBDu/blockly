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
 * @fileoverview Generating p5dotjs for structure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.p5dotjs.structures');

goog.require('Blockly.p5dotjs');


Blockly.p5dotjs['structures_loop'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.p5dotjs.valueToCode(block, 'BOOL',
      until ? Blockly.p5dotjs.ORDER_LOGICAL_NOT :
      Blockly.p5dotjs.ORDER_NONE) || 'false';
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  branch = Blockly.p5dotjs.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.p5dotjs['controls_repeat_ext'] = function(block) {
  // Repeat n times (external number).
  var repeats = Blockly.p5dotjs.valueToCode(block, 'TIMES',
      Blockly.p5dotjs.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  branch = Blockly.p5dotjs.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.p5dotjs.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.p5dotjs.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.p5dotjs['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.p5dotjs.valueToCode(block, 'BOOL',
      until ? Blockly.p5dotjs.ORDER_LOGICAL_NOT :
      Blockly.p5dotjs.ORDER_NONE) || 'false';
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  branch = Blockly.p5dotjs.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.p5dotjs['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.p5dotjs.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.p5dotjs.valueToCode(block, 'FROM',
      Blockly.p5dotjs.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.p5dotjs.valueToCode(block, 'TO',
      Blockly.p5dotjs.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.p5dotjs.valueToCode(block, 'BY',
      Blockly.p5dotjs.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  branch = Blockly.p5dotjs.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      var startVar = Blockly.p5dotjs.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.p5dotjs.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.p5dotjs.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
    code += 'var ' + incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += 'Math.abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += Blockly.p5dotjs.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '     ' + incVar + ' >= 0 ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '     ' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};

Blockly.p5dotjs['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.p5dotjs.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.p5dotjs.valueToCode(block, 'LIST',
      Blockly.p5dotjs.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.p5dotjs.statementToCode(block, 'DO');
  branch = Blockly.p5dotjs.addLoopTrap(branch, block.id);
  var indexVar = Blockly.p5dotjs.variableDB_.getDistinctName(
      variable0 + '_index', Blockly.Variables.NAME_TYPE);
  branch = Blockly.p5dotjs.INDENT + variable0 + ' = ' +
      argument0 + '[' + indexVar + '];\n' + branch;
  var code = 'for (var ' + indexVar + ' in ' + argument0 + ') {\n' +
      branch + '}\n';
  return code;
};

Blockly.p5dotjs['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break;\n';
    case 'CONTINUE':
      return 'continue;\n';
  }
  throw 'Unknown flow statement.';
};
