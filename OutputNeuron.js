/** * 	Author: 		Lasse Lund Sten Jensen *		Modified: 	2013-02-19 */function OutputNeuron(id) {	this.id = id;	this.activatedLinks = 0;	this.value = 0;	this.inLinks = new Array();}OutputNeuron.prototype.activate = function() {	if (this.activatedLinks == this.inLinks.length) {		var activationSum = 0.0;		var activation = 0.0;				for (var i = 0; i < this.inLinks.length; i++) {			activationSum += this.inLinks[i].getActivationValue();		}		activation = 1 / ( 1 + Math.exp( -activationSum ) );		this.storeValue(activation);				this.deactivateLinks();	}}OutputNeuron.prototype.getInLinks = function() {	return this.inLinks;}OutputNeuron.prototype.addInLink = function(inLink) {	this.inLinks[this.inLinks.length] = inLink;}OutputNeuron.prototype.setInput = function(input) {	this.input = input;}OutputNeuron.prototype.getId = function() {	return this.id;}OutputNeuron.prototype.storeValue = function(value) {	this.value = value;}OutputNeuron.prototype.getValue = function() {	return this.value;}OutputNeuron.prototype.activateLink = function() {	this.activatedLinks++;}OutputNeuron.prototype.deactivateLinks = function() {	this.activatedLinks = 0;}