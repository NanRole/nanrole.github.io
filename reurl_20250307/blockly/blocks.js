Blockly.Blocks['reurl_shorten_url'] = {
  init: function () {     
  this.appendDummyInput()   
      .appendField(Blockly.Msg.REURL_LONGTOSHORT);
  this.appendValueInput("url")
      .setCheck("String");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(180);
  }
};
