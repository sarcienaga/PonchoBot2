Blockly.Blocks["f_avanza"] = {
init: function() {
this.appendDummyInput()
   .appendField("mover");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_xira"] = {
init: function() {
this.appendDummyInput()
   .appendField("Girar")
   .appendField(new Blockly.FieldDropdown([["Izquierda","E"], ["Derecha","D"]]), "direccion");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
