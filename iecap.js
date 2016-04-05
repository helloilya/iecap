/**
 *	JavaScript library to detect the version of Internet Explorer and display a warning screen
 *
 *	@version: 1.0.1
 *	@author Ilya Fedotov
 *	@link: github.com/helloilya/iecap
 *	@license: MIT
 */

(function(root, undefined) {

	var lib = {};

	// Languages

	lib.languages = {
		en: {
			title: 'Your browser is out of date',
			description: 'If you want to appreciate the beauty and functionality of this site you need to update your current browser to the latest version or install one of the browsers below.'
		},
		ru: {
			title: 'Вы используете устаревший браузер',
			description: 'Чтобы оценить всю красоту и функционал сайта Вам необходимо обновить текущий браузер до последней версии или установить один из предложенных ниже.'
		}
	};

	// Template

	lib.template = '<div class="iecap"><h5 class="iecap-title">{title}</h5><p class="iecap-description">{description}</p><ul class="iecap-list"><li class="explorer"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" title="Internet Explorer">Internet Explorer</a></li><li class="chrome"><a href="http://www.google.com/chrome/browser/" title="Google Chrome">Google Chrome</a></li><li class="firefox"><a href="http://www.mozilla.org/firefox/desktop/" title="Mozilla Firefox">Mozilla Firefox</a></li><li class="safari"><a href="http://www.apple.com/safari/" title="Apple Safari">Apple Safari</a></li></ul></div>';

	// Defaults options

	lib.options = {
		language: 'en',
		availability: 9
	};

	/**
	 *	Add class to container
	 *	@param {string} className
	 *	@param {string} container
	 */

	function addClass(className, container) {

		if(container.className) {
			container.className += ' ' + className;
		} else {
			container.className = className;
		}

	}

	/**
	 *	Get current IE version
	 *	@returns {number} version
	 */

	var getVersion = lib.getVersion = function() {

		var agent = window.navigator.userAgent,
			type = null;

		if(agent.indexOf('MSIE') > 0) {
			type = agent.indexOf('MSIE');
			return parseInt(agent.substring(type+5, agent.indexOf('.', type)));
		}

		if(agent.indexOf('Trident') > 0) {
			type = agent.indexOf('rv:');
			return parseInt(agent.substring(type+3, agent.indexOf('.', type)));
		}

		return false;

	};

	/**
	 *	Display IE version on `body` container
	 *	@param {number} availability
	 *	@returns {number} version
	 */

	var displayVersion = lib.displayVersion = function(availability) {

		availability = Number(availability) || lib.options.availability;

		var version = getVersion(),
				body = document.getElementsByTagName('body')[0];

		if(version) { addClass('ie-' + version, body); }
		if(version && version <= availability) { addClass('ie-old', body); }

		return version;

	};

	/**
	 *	Show warning screen if the IE version is outdated
	 *	@param {string} language
	 *	@param {number} availability
	 */

	var showScreen = lib.showScreen = function(language, availability) {

		language = language || lib.options.language;
		availability = Number(availability) || lib.options.availability;

		var version = displayVersion(),
			body = document.getElementsByTagName('body')[0];

		if(version && version <= availability) {
			body.innerHTML += lib.template.replace('{title}', lib.languages[language].title).replace('{description}', lib.languages[language].description);
		}

	};

	// Definition

	if(typeof exports !== 'undefined') {
		if(typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.iecap = lib;
	} else if(typeof define === 'function' && define.amd) {
		define([], function() {
			return lib;
		});
	} else {
		root['iecap'] = lib;
	}

}(this));