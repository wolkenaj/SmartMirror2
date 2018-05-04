/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		//{
		//	module: "updatenotification",
		//	position: "top_bar"
		//},
		{
			module: "clock",
			position: "top_left",
			timezone: "Etc/GMT-5"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
		anytime: [
			"Welcome to ECEN 403!",
			"This is the World renowned Smart Mirror!"

		],
		morning: [
			"Good morning!",
			"Enjoy your day!",
			"How was your sleep?"
		],
		afternoon: [
			"Hello!",
			"Looking good today!"
		],
		evening: [
			"Enjoy your evening!",
			"You look nice!"
		]
	}
}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "College Station,US",
			locationID: "4682464", //Location ID from http://openweathermap.org/help/city_list.txt
			appid: "7cae7b6c11957c74ea15250264f68423", //openweathermap.org API 
			units: "imperial"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "College Station,US",
			locationID: "4682464", //Location ID from http://openweathermap.org/help/city_list.txt
			appid: "7cae7b6c11957c74ea15250264f68423", //openweathermap.org API 
			units: "imperial"
			}
		},

		//{
		//	module: "newsfeed",
		//	position: "bottom_bar",
		//	config: {
		//		feeds: [
		//			{
		//				title: "New York Times",
		//				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		//			}
		//		],
		//		showSourceTitle: true,
		//		showPublishDate: true
		//	}
		//},
		{
			module: "MMM-HealthMetrics",
			position: "top_bar",
			config: {
				username: "wolkenaj",
				password: "password", 
				updateInterval: 60*1000
			}
		},
		{
			module: "MMM-iFrame",
			position: "lower_third",
			config:{
				//url:["https://smartmirror-seniordesign.com"],
				updateInterval: 0.5 * 6 * 1000,
				width: "100%",
				height: "200%"
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
