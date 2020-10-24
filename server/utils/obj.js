var phrases = require('./ru');
var db = require('./db')
db.connect();

function NewObj(arg) {
	this.field = arg;
}

NewObj.prototype.method = function(obj) {
	console.log(phrases.Objmsg + obj.field)
}
NewObj.prototype.method1 = function(obj) {
	console.log(db.getPhrase("Hello") + ", " + obj.field)
}

console.log("obj.js is required!");

exports.NewObj = NewObj;

// If use this solition:
// module.exports.NewObj = NewObj;

// var firstObj = new NewObj('firstObj');