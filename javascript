
var text = window.cpAPIInterface.getVariableValue("Wordcount");
var content = text.replace(/\s+/, ' ').split(' ');
var numWords = content !== null ? content.length : 0;
window.cpAPIInterface.setVariableValue("texts1",numWords);
