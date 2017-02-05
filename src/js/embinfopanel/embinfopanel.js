BBLog.handle("add.plugin", {
	/** @type 	{String} 		The extension's id. 		*/
	id: 'emb-info-panel',
	/** @type 	{String}		The extension's name.  		*/
	name: 'Emblemers Platoon Information Panel',
	/** @type 	{String} 		The version string.		*/
	version: '1.0.2.3',
	/** @type 	{Object} 		BBL Translation stuff.		*/
	translations: {
		"en": {
			"show.galleries": 'Show EMB Platoon Gallery',
			"show.gameservers": 'Show EMB Game Server Banner(s)',
			"show.voiceservers": 'Show EMB Voice Server Banner(s)',
			"hide.bfhadtile": 'Hide BFH advertise tile'
/*		},
		"jp": {
			"show.galleries": 'EMB小隊ギャラリーを表示する',
			"show.gameservers": 'EMB小隊ゲームサーバーを表示する',
			"show.voiceservers": 'EMB小隊ボイスサーバーを表示する' */
		}
	},
	/** @type 	{Object} 		Config flags from BBL.		*/
	configFlags: [
		["show.galleries", 1],
		["show.gameservers", 1],
		["show.voiceservers", 1],
		["hide.bfhadtile", 0]
	],
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
		if (this.instance.storage('hide.bfhadtile')) {
			var isGetbfhtile = $("html").find(".get-bfh-tile").length
			if (isGetbfhtile == 1) {
				$(".get-bfh-tile").remove()
			}
		}

		if (this.instance.storage('show.galleries') || this.instance.storage('show.gameservers') || this.instance.storage('show.voiceservers')) {
			var drawablePanels = $("html").find(".main-loggedin-middle").length
			if (drawablePanels == 1) {
				var code = ''

				if (this.instance.storage('show.galleries')) {
					var isGalViewer = $("html").find(".main-loggedin-embgalleryviewer").length
					if (isGalViewer == 0) {
						code += '<div id="main-loggedin-embgalleryviewer" class="main-loggedin-embgalleryviewer">'
						if (BBLog.cache('mode') === 'bf4') {
							code += '<iframe style="width: 320px; height: 370px;" allowTransparency="true" frameborder="0" scrolling="no" src="http://viewer.headsup.news/?channelId=5896ab8f49d926405bca7d47"></iframe>'
						} else if (BBLog.cache('mode') === 'bfh') {
							code += '<iframe style="width: 320px; height: 370px;" allowTransparency="true" frameborder="0" scrolling="no" src="http://viewer.headsup.news/?channelId=5896ab8f49d926405bca7d47"></iframe>'
						}
						code += '</div>'
					}
				}

				if (this.instance.storage('show.gameservers')) {
					var isGsvViewer = $("html").find(".main-loggedin-embgamesvrviewer").length
					if (isGsvViewer == 0) {
						code += '<div id="main-loggedin-embgamesvrviewer" class="main-loggedin-embgamesvrviewer">'
						if (BBLog.cache('mode') === 'bf4') {
//							code += '<iframe src="http://cache.www.gametracker.com/components/html0/?host=109.200.221.195:25500&bgColor=333333&fontColor=CCCCCC&titleBgColor=222222&titleColor=FF9900&borderColor=555555&linkColor=FFCC00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&showTopPlayers=0&showBlogs=0&width=320" frameborder="0" scrolling="no" width="320" height="412"></iframe>'
						} else if (BBLog.cache('mode') === 'bfh') {
//							code += '<iframe src="http://cache.www.gametracker.com/components/html0/?host=161.202.101.86:25300&bgColor=FFFFFF&fontColor=333333&titleBgColor=FFFFFF&titleColor=000000&borderColor=BBBBBB&linkColor=091858&borderLinkColor=5C5C5C&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&showTopPlayers=0&showBlogs=0&width=320" frameborder="0" scrolling="no" width="320" height="412"></iframe>'
						}
						code += '</div>'
					}
				}

				if (this.instance.storage('show.voiceservers')) {
					var exitVcsViewer = $("html").find(".main-loggedin-embvcsiewer").length
					if (exitVcsViewer == 0) {
						code += '<div id="main-loggedin-embvcsiewer" class="main-loggedin-embvcsiewer">'
						if (BBLog.cache('mode') === 'bf4') {
							code += '<iframe src="https://discordapp.com/widget?id=107831378061570048&theme=dark" width="320" height="400" allowtransparency="true" frameborder="0"></iframe>'
						} else if (BBLog.cache('mode') === 'bfh') {
							code += '<iframe src="https://discordapp.com/widget?id=107831378061570048&theme=light" width="320" height="400" allowtransparency="true" frameborder="0"></iframe>'
						}
						code += '</div>'
					}
				}

				$(".span4.main-side-column").prepend(code)
			}
		}
	}
});