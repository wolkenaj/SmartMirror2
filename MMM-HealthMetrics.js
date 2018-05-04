/* global Module */

/* Magic Mirror
 * Module: HealthMetrics
 *
 * By Amanda Wolken
 * MIT Licensed.
 */

Module.register("MMM-HealthMetrics",{
		// Default module config.
		defaults: {
			username: "wolkenaj",
			password: "password",
			updateInterval: 60*1000
		},

        start: function () {
                var self = this;
                var count = 0;
               
		//Uncomment if want to run shell on interval
                //      setInterval( function () { 
                //         self.updateDom();
                 //        }, this.config.updateInterval);
                
	},
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
resume: function() {
   console.log("Resuming");
   return this.getDom();
},

        // Override dom generator.
	getDom: function() {
		
                console.log("Health Metrics in Dom");
		this.sendSocketNotification("TAKE_PIC", {});
                
	}

});
