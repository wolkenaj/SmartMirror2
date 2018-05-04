/* Magic Mirror
 * Node Helper: Newsfeed
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
const exec = require("child_process").exec;

module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
		console.log("Starting module: " + this.name);
	},

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		console.log("Health Metrics got a socket notification");
		if (notification === "TAKE_PIC") {
			console.log("Trying to activate shell");
			this.activateShell();
		}
	},
	notificationReceived: function(notification, payload, sender) {
		console.log("Health Metrics got a notification");		
		if (notification === "TAKE_PIC") {
			this.activateShell();
		}
	},

	activateShell: function(){
		console.log("Activating shell");
		exec('./RunCameras.sh');
	}
});
