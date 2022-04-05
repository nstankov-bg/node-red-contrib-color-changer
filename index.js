module.exports = function (RED) {
	function colorPicker(config){
		let context = this.context();
		let node = this;
		RED.nodes.createNode(this, config);
	}
	RED.nodes.registerType("color-picker", colorPicker);
}