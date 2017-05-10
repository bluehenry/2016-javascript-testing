exports.config = {
	
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['./spec.js'],

	capabilities: {
  		//'browserName': 'internet explorer'
  		'browserName': 'chrome'
	},


	onPrepare: function(){
		browser.driver.manage().window().setPosition(0,0);
		browser.driver.manage().window().setSize(1920,1080);
	}
}