BBLog.handle("add.plugin", {
	/** @type 	{String} 		The extension's id. 		*/
	id: 'emb-platoongallery-viewer',
	/** @type 	{String}		The extension's name.  		*/
	name: 'Emblemers Platoon Gallery Viewer',
	/** @type 	{String} 		The version string.		*/
	version: '1.0.0.0',
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
		if (BBLog.cache('mode') === 'bf4') {
			this.setContainer()
		}
	},
	
	domchange: function () {
		if (BBLog.cache('mode') === 'bf4')
			this.setContainer()
	},
	
	setContainer: function() {
		var count = $("html").find(".main-loggedin-middle").length
		if (count == 1) {
			var count2 = $("html").find(".main-loggedin-embgalleryviewer").length
			if (count2 == 0) {
				var code = '<div id="main-loggedin-embgalleryviewer" class="main-loggedin-embgalleryviewer">'
					code += '<iframe style="width: 320px; height: 370px;" allowTransparency="true" frameborder="0" scrolling="no" src="http://www.gmodules.com/gadgets/ifr?url=http%3a%2f%2fprac%2dgadget%2egooglecode%2ecom%2ffiles%2fpinterest%2dslideshow%2exml&up_USER=magni1200s&up_BOARD=bf4-emblems-by-the-emblemers&up_PWH=300&up_PHT=300&up_LNK=http%3a%2f%2fwww%2epinterest%2ecom%2fmagni1200s%2fbf4%2demblems%2dby%2dthe%2demblemers%2f&up_TIT=Emblemers%20Gallery&up_DTime=&up_TTime=&up_RND=&up_CLP=Yes&up_NAB=Yes&up_TCOL=%23ffffff&up_LCOL=%23ffffff&up_SCOL=%23444444&up_BCOL=%23444444&up_CCOL=%23444444"></iframe>'
					code += '</div>'
				if ($("html").find(".lengthmain-loggedin-embvcsiewer").length) {
					$(".lengthmain-loggedin-embvcsiewer").before(code)
				} else {
					$(".advirticement.battlelog-bf4-homepage").before(code)
				}
			}
		}
	}
});
