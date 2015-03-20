<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="google" value="notranslate">
  <title>Blockly Demo:</title>
  <link rel="stylesheet" href="style.css">
  <script src="../../appengine/storage.js"></script>
  <script src="../../blockly_compressed.js"></script>
  <script src="../../blocks/colour.js"></script>
  <script src="../../blocks/constants.js"></script>
  <script src="../../blocks/environment.js"></script>
  <script src="../../blocks/inputs.js"></script>
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
  <script src="../../generators/p5dotjs/constants.js"></script>
  <script src="../../generators/p5dotjs/environment.js"></script>
  <script src="../../generators/p5dotjs/inputs.js"></script>
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
  <script src="msg/en.js"></script>
  <script src="code.js"></script>
</head>
<body>
  <table id="blockly_area">
    <div id="iframeDiv">
          <iframe id="iframeResult" class="result_output" frameborder="0" name="view" src="p5.htm"></iframe>
    </div>
    <tr>
      <td>
        <h1><a href="https://developers.google.com/blockly/">Blockly</a> &gt;
          <a href="../index.html">Demos</a> &gt;
          <span id="title">...</span>
        </h1>
      </td>
    </tr>
    <tr>
      <td colspan=2>
        <table width="100%">
          <tr id="tabRow" height="1em">
            <td id="tab_blocks" class="tabon">...</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_p5dotjs" class="taboff">p5.js</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_xml" class="taboff">XML</td>
            <td class="tabmax">
              <button id="trashButton" class="notext" title="...">
                <img src='../../media/1x1.gif' class="trash icon21">
              </button>
              <button id="linkButton" class="notext" title="...">
                <img src='../../media/1x1.gif' class="link icon21">
              </button>
              <button id="runButton" class="notext primary" title="...">
                <img src='../../media/1x1.gif' class="run icon21">
              </button>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td height="99%" colspan=2 id="content_area">
      </td>
    </tr>
  </table>
  <div id="content_blocks" class="content"></div>
  <pre id="content_p5dotjs" class="content"></pre>
  <textarea id="content_xml" class="content" wrap="off"></textarea>

  <xml id="toolbox" style="display: none">
    <category name="Colour" id="catColour">
      <block type="colour_picker"></block>
      <block type="colour_colour"></block>
      <block type="colour_background"></block>
      <block type="colour_fill"></block>
      <block type="colour_no_fill"></block>
      <block type="colour_stroke"></block>
      <block type="colour_no_stroke"></block>
    </category>
    <category name="Constants" id="catConstants">
      <block type="constants_pi"></block>
    </category>
    <category name="Environment" id="catEnvironment">
      <block type="environment_display"></block>
      <block type="environment_window"></block>
      <block type="environment_canvas"></block>
      <block type="environment_frame_count"></block>
      <block type="environment_focused"></block>
    </category>
    <category name="Shapes" id="catShapes">
      <block type="shapes_point"></block>
      <block type="shapes_line"></block>
      <block type="shapes_ellipse"></block>
      <block type="shapes_rect"></block>
      <block type="shapes_arc"></block>
      <block type="shapes_quad"></block>
      <block type="shapes_triangle"></block>
    </category>
    <category name="Structures" id="catStructures">
      <block type="structures_preload"></block>
      <block type="structures_setup"></block>
      <block type="structures_draw"></block>
      <block type="structures_remove"></block>
      <block type="structures_loop"></block>
      <block type="structures_pushpop"></block>
      <block type="structures_redraw"></block>
    </category>
    <category name="Renderings" id="catRenderings">
      <block type="renderings_create_canvas"></block>
      <block type="renderings_resize_canvas"></block>
      <block type="renderings_no_canvas"></block>
    </category>
    <category name="Logic" id="catLogic">
      <block type="controls_if"></block>
      <block type="controls_if_if"></block>
      <block type="controls_if_elseif"></block>
      <block type="controls_if_else"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
      <block type="logic_ternary"></block>
    </category>
    <category name="Loops" id="catLoops">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
    </category>
    <category name="Math" id="catMath">
      <block type="math_number"></block>
      <block type="math_three_number"></block>
      <block type="math_arithmetic"></block>
      <block type="math_single"></block>
    </category>
    <category name="Text" id="catText">
      <block type="text"></block>
      <block type="text_length"></block>
      <block type="text_print"></block>
    </category>
    <category name="Variables" id="catVariables">
      <block type="variables_get"></block>
      <block type="variables_set"></block>
    </category>
    <category name="Inputs" id="catInputs">
      <block type="inputs_touch_mouse"></block>
    </category>
  </xml>
  </xml>

  <form id="runCode" method="post">
    <input name="code" id="code" type="hidden" value="">
  </form>
  <script type="text/javascript">
  /**
   * Execute the user's code.
   * Just a quick and dirty eval.  Catch infinite loops.
   */
  Code.runP5 = function() {
    var code = Blockly.p5dotjs.workspaceToCode();
    code = '<!DOCTYPE html><html><head><meta charset="utf-8"><script src="../p5generator/p5/p5.min.js"><\/script><\/head><body><script>'+code+'<\/script><\/body><\/html>';
    document.getElementById("code").value = code;
    document.getElementById('runCode').submit();
    <?php
    $file = 'p5.htm';
    // Append a new person to the file
    $current = $_REQUEST['code'];
    // Write the contents back to the file
    file_put_contents($file, $current);
    ?>
  };
  </script>

</body>
</html>
