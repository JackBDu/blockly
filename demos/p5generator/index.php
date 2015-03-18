<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Blockly Demo: Generating p5dotjs</title>
  <script src="../../blockly_compressed.js"></script>
  <script src="p5/p5.min.js"></script>
<!--   
  <script src="../../blocks_compressed.js"></script>
  <script src="../../p5dotjs_compressed.js"></script>
   -->
  <script src="../../blocks/colour.js"></script>
  <script src="../../blocks/environment.js"></script>
  <script src="../../blocks/lists.js"></script>
  <script src="../../blocks/logic.js"></script>
  <script src="../../blocks/loops.js"></script>
  <script src="../../blocks/math.js"></script>
  <script src="../../blocks/procedures.js"></script>
  <script src="../../blocks/renderings.js"></script>
  <script src="../../blocks/shapes.js"></script>
  <script src="../../blocks/structures.js"></script>
  <script src="../../blocks/text.js"></script>
  <script src="../../blocks/variables.js"></script>
  <script src="../../generators/p5dotjs.js"></script>
  <script src="../../generators/p5dotjs/colour.js"></script>
  <script src="../../generators/p5dotjs/environment.js"></script>
  <script src="../../generators/p5dotjs/lists.js"></script>
  <script src="../../generators/p5dotjs/logic.js"></script>
  <script src="../../generators/p5dotjs/loops.js"></script>
  <script src="../../generators/p5dotjs/math.js"></script>
  <script src="../../generators/p5dotjs/procedures.js"></script>
  <script src="../../generators/p5dotjs/renderings.js"></script>
  <script src="../../generators/p5dotjs/shapes.js"></script>
  <script src="../../generators/p5dotjs/structures.js"></script>
  <script src="../../generators/p5dotjs/text.js"></script>
  <script src="../../generators/p5dotjs/variables.js"></script>

  <script src="../../msg/js/en_p5.js"></script>
  <style>
    body {
      background-color: #fff;
      font-family: sans-serif;
    }
    h1 {
      font-weight: normal;
      font-size: 140%;
    }
  </style>
</head>
<body>
  <h1><a href="https://developers.google.com/blockly/">Blockly</a> &gt;
    <a href="../index.html">Demos</a> &gt; Generating p5dotjs</h1>

  <p>This is a simple demo of generating code from blocks.</p>

  <p>&rarr; More info on <a href="https://developers.google.com/blockly/installation/code-generators">Code Generators</a>...</p>

  <p>
      <button onclick="showCode()">Show p5dotjs</button>
      <button onclick="runCode()">Run p5dotjs</button>
  </p>

  <div id="blocklyDiv" style="height: 480px; width: 49%; float: left;"></div>
  <div id="iframeDiv" style="width: 49%; height: 480px; border:1px solid lightgray; float: left;margin-left:1%;">
        <iframe id="iframeResult" width="600" height="480" class="result_output" frameborder="0" name="view" src="try.html"></iframe>
  </div>

  <xml id="toolbox" style="display: none">
    <category name="Colour">
      <block type="colour_picker"></block>
      <block type="colour_rgb"></block>
      <block type="colour_background"></block>
      <block type="colour_fill"></block>
      <block type="colour_no_fill"></block>
      <block type="colour_stroke"></block>
      <block type="colour_no_stroke"></block>
    </category>
    <category name="Environment">
      <block type="environment_display"></block>
      <block type="environment_window"></block>
      <block type="environment_canvas"></block>
    </category>
    <category name="Shapes">
      <block type="shapes_point"></block>
      <block type="shapes_line"></block>
    </category>
    <category name="Structures">
      <block type="structures_preload"></block>
      <block type="structures_setup"></block>
      <block type="structures_draw"></block>
      <block type="structures_remove"></block>
      <block type="structures_loop"></block>
      <block type="structures_pushpop"></block>
      <block type="structures_redraw"></block>
    </category>
    <category name="Renderings">
      <block type="renderings_create_canvas"></block>
      <block type="renderings_resize_canvas"></block>
      <block type="renderings_no_canvas"></block>
    </category>
    <category name="Logic">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
    </category>
    <category name="Loops">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
    </category>
    <category name="Math">
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="math_single"></block>
    </category>
    <category name="Text">
      <block type="text"></block>
      <block type="text_length"></block>
      <block type="text_print"></block>
    </category>
    <category name="Variables">
      <block type="variables_get"></block>
      <block type="variables_set"></block>
    </category>
  </xml>

  <xml id="startBlocks" style="display: none">
    <block type="structures_setup" x="20" y="20">
      <statement name="DO">
        <block type="renderings_create_canvas" inline="true">
          <value name="WIDTH">
            <block type="math_number">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="HEIGHT">
            <block type="math_number">
              <field name="NUM">100</field>
            </block>
          </value>
        </block>
      </statement>
    </block>
    <block type="structures_draw" x="20" y="120">
      <statement name="DO">
        <block type="colour_background" inline="false">
          <value name="COLOUR">
            <block type="colour_picker">
              <field name="COLOUR">#000000</field>
            </block>
          </value>
        </block>
      </statement>
    </block>
  </xml>

  <form id="runCode">
    <input name="code" id="code" type="hidden" value="">
  </form>

  <script>
    Blockly.inject(document.getElementById('blocklyDiv'),
        {toolbox: document.getElementById('toolbox')});
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,
        document.getElementById('startBlocks'));

    function showCode() {
      // Generate p5dotjs code and display it.
      Blockly.p5dotjs.INFINITE_LOOP_TRAP = null;
      var code = Blockly.p5dotjs.workspaceToCode();
      alert(code);
    }

    function runCode() {
      // Generate p5dotjs code and run it.
      var code = Blockly.p5dotjs.workspaceToCode();
      code = '<!DOCTYPE html><html><head><meta charset="utf-8"><script src="p5/p5.min.js"><\/script><\/head><body><script>'+code+'<\/script><\/body><\/html>';
      document.getElementById("code").value = code;
      document.getElementById('runCode').submit();
      <?php
      $file = 'try.html';
      // Append a new person to the file
      $current = $_REQUEST['code'];
      echo $current;
      // Write the contents back to the file
      file_put_contents($file, $current);
      ?>
    }
  </script>

</body>
</html>
