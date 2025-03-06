Blockly.JavaScript['reurl_shorten_url'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'reurl_shorten_url('+url+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};