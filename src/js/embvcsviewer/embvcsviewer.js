BBLog.handle("add.plugin", {
	/** @type 	{String} 		The extension's id. 		*/
	id: 'emb-vcs-viewer',
	/** @type 	{String}		The extension's name.  		*/
	name: 'Emblemers VC Server Viewer',
	/** @type 	{String} 		The version string.		*/
	version: '1.0.0.2',
	/** @type 	{Object} 		BBL Translation stuff.		*/
	translations: {},
	/** @type 	{Object} 		Config flags from BBL.		*/
	configFlags: [],
	/** @type 	{Object} 		BBLogs main instance. 		*/
	instance: {},
	/** @type 	{Array} 		Dropdown element.		*/
	dropdown: [null],
	/** @type 	{Array} 		@see getMatches 		*/
	matches: [null, null, null],
	/** @type 	{Bool} 		Whether the user has a soldier or not.	*/
	hasSoldier: false,
	
	init : function(instance) {
		this.instance = instance
		if ((BBLog.cache('mode') === 'bf4') || (BBLog.cache('mode') === 'bfh')) {
			this.setContainer()
		}
	},
	
	domchange: function () {
		if ((BBLog.cache('mode') === 'bf4') || (BBLog.cache('mode') === 'bfh'))
			this.setContainer()
	},
	
	setContainer: function() {
		var count = $("html").find(".main-loggedin-middle").length
		if (count == 1) {
			var count2 = $("html").find(".main-loggedin-embvcsiewer").length
			if (count2 == 0) {
				var code = '<div id="main-loggedin-embvcsiewer" class="main-loggedin-embvcsiewer">'
					code += '<iframe src="http://cache.www.gametracker.com/components/html0/?host=173.199.82.240:9308&bgColor=333333&fontColor=CCCCCC&titleBgColor=222222&titleColor=FF9900&borderColor=555555&linkColor=FFCC00&borderLinkColor=222222&showMap=0&currentPlayersHeight=160&showCurrPlayers=1&showTopPlayers=0&showBlogs=0&width=320" frameborder="0" scrolling="no" width="320" height="348"></iframe>'
					code += '</div>'
				$(".span4.main-side-column").prepend(code)
			}
		}
	}
});