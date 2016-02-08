(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gritcode-components"] = factory();
	else
		root["gritcode-components"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT EACH COMPONENT
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toast = __webpack_require__(1);

	var _toast2 = _interopRequireDefault(_toast);

	var _buttonToggle = __webpack_require__(7);

	var _buttonToggle2 = _interopRequireDefault(_buttonToggle);

	var _dropdownMultiselect = __webpack_require__(11);

	var _dropdownMultiselect2 = _interopRequireDefault(_dropdownMultiselect);

	var _offcanvasDrawer = __webpack_require__(20);

	var _spinner = __webpack_require__(24);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _truncate = __webpack_require__(28);

	var _truncate2 = _interopRequireDefault(_truncate);

	var _fileUpload = __webpack_require__(32);

	var _fileUpload2 = _interopRequireDefault(_fileUpload);

	var _wizard = __webpack_require__(37);

	var gritcode = {
		toast: _toast2['default'],
		buttonToggle: _buttonToggle2['default'],
		dropdownMultiselect: _dropdownMultiselect2['default'],
		offcanvasWrapper: _offcanvasDrawer.offcanvasWrapper,
		offcanvasDrawer: _offcanvasDrawer.offcanvasDrawer,
		spinner: _spinner2['default'],
		truncate: _truncate2['default'],
		fileUpload: _fileUpload2['default'],
		wizard: _wizard.wizard,
		wizardStep: _wizard.wizardStep
	};

	// export all components under global variable
	exports['default'] = gritcode;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	// import template

	var _toastHtml = __webpack_require__(6);

	var _toastHtml2 = _interopRequireDefault(_toastHtml);

	// this delays trigger of the first toast (queue)
	var DEBOUNCE = 300; // in ms

	// hide toast after default duration
	var DURATION = 6000; // in ms

	// this transition time is set in scss and defines how long it takes to animate in/out the toast element
	var TOAST_ANIMATION = 300; // in ms

	exports['default'] = {
	  template: _toastHtml2['default'],
	  replace: true,
	  computed: {
	    toastContext: function toastContext() {
	      return !this.context ? '' : 'toast-' + this.context;
	    }
	  },
	  data: function data() {
	    return {
	      activeToast: false,
	      activeProgressBar: false,
	      animation: null,
	      animationInProgress: false,
	      queue: [],
	      style: {
	        transition: 'width 0s'
	      }
	    };
	  },
	  props: {
	    context: {
	      type: String,
	      'default': ''
	    },
	    duration: {
	      type: Number,
	      'default': DURATION
	    },
	    message: {
	      type: String,
	      'default': 'Done!'
	    },
	    onAjaxErrors: {
	      type: Boolean,
	      'default': false
	    },
	    position: {
	      type: String,
	      'default': 'bottom left'
	    },
	    hideProgress: {
	      type: Boolean,
	      'default': false
	    },
	    debounce: {
	      type: Number,
	      'default': DEBOUNCE
	    }
	  },
	  methods: {
	    pause: function pause() {
	      this.activeProgressBar = false;
	      clearTimeout(this.animation);
	      this.style.transition = 'width 0.1s';
	    },
	    clear: function clear() {
	      var _this = this;

	      this._toastAnimation = setTimeout(function () {
	        _this.activeProgressBar = false;
	        _this.animationInProgress = false;
	        _this.style.transition = 'width 0s';
	        _this.activeToast = false;
	        clearTimeout(_this.animation);
	        // show next toast from the queue
	        if (_this.queue.length > 0) {
	          _this._toastAnimation = setTimeout(function () {
	            var toast = _this.queue.shift();
	            _this.show(toast);
	          }, 0); // this set to 0 instead of TOAST_ANIMATION in purpose, so queued messages pop a little bit quicker, so user can close them off quickly
	        }
	      }, TOAST_ANIMATION); // we need to wait till toast is gone off the screen to clear it and then call next toast
	    },
	    animate: function animate() {
	      this.style.transition = 'width ' + this.duration / 1000 + 's';
	      this.activeProgressBar = true;
	      this.animation = setTimeout(this.clear, this.duration);
	    },
	    show: function show(options) {
	      var _this2 = this;

	      this.context = 'default';
	      this.animationInProgress = true;
	      this.message = options.message || 'Done!';
	      this.context = options.context || '';
	      this.debounce = options.debounce || DEBOUNCE;
	      this.duration = options.duration || DURATION;
	      this.hideProgress = options.hideProgress || false;
	      this.position = options.position || 'bottom left';
	      if (options.success) {
	        this.context = 'success';
	        this.message = options.success;
	      }
	      if (options.info) {
	        this.context = 'info';
	        this.message = options.info;
	      }
	      if (options.warning) {
	        this.context = 'warning';
	        this.message = options.warning;
	      }
	      if (options.error) {
	        this.context = 'danger';
	        this.message = options.error;
	      }
	      // wait for dom element (so that position class can take effect when triggered via event)
	      setTimeout(function () {
	        _this2.activeToast = true;
	        _this2.animate();
	      }, 100);
	    },
	    addToQueue: function addToQueue(options) {
	      var _this3 = this;

	      if (this.animationInProgress || this.queue.length > 0) {
	        // if some other toast is currently animating, add it to the queue
	        this.queue.push(options);
	      } else {
	        // if first toast, show it
	        setTimeout(function () {
	          _this3.show(options);
	        }, this.debounce);
	      }
	    }
	  },
	  events: {
	    'end::ajax': function endAjax(options) {
	      if (this.onAjaxErrors && options && options.error) {
	        this.addToQueue(options);
	      }
	    },
	    'show::toast': function showToast(options) {
	      this.addToQueue(options);
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._animation);
	    clearTimeout(this._toastAnimation);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./toast.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./toast.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".toast-gritcode {\n  display: table;\n  position: fixed;\n  min-height: 48px;\n  min-width: 288px;\n  max-width: 600px;\n  padding: 16px 24px 16px 24px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 2px;\n  left: 0;\n  bottom: 0;\n  margin: 12px;\n  font-size: 14px;\n  cursor: default;\n  -webkit-transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: visibility 0.3s, transform 0.3s, opacity 0.3s;\n  transition: visibility 0.3s, transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: translateY(100px);\n          transform: translateY(100px);\n  -ms-transform: translateY(100px);\n  z-index: 9999; }\n  .toast-gritcode.active {\n    visibility: visible;\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    -ms-transform: translateY(0px); }\n  .toast-gritcode.top {\n    top: 0;\n    bottom: auto;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n    -ms-transform: translateY(-100px); }\n    .toast-gritcode.top.active {\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px);\n      -ms-transform: translateY(0px); }\n  .toast-gritcode.right {\n    left: auto;\n    right: 0; }\n  .toast-gritcode .progress-bar {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 0.4em;\n    background: rgba(255, 255, 255, 0.3);\n    width: 0;\n    -webkit-transition: width 3s;\n    transition: width 3s; }\n    .toast-gritcode .progress-bar.active {\n      width: 100%; }\n  .toast-gritcode .message, .toast-gritcode .action {\n    vertical-align: middle;\n    display: table-cell; }\n  .toast-gritcode .action {\n    text-align: right; }\n\n.toast-gritcode {\n  background-color: #818a91;\n  color: #fff; }\n  .toast-gritcode.toast-info {\n    background-color: #5bc0de;\n    color: #fff; }\n  .toast-gritcode.toast-success {\n    background-color: #42b983;\n    color: #fff; }\n  .toast-gritcode.toast-warning {\n    background-color: #f0ad4e;\n    color: #fff; }\n  .toast-gritcode.toast-danger {\n    background-color: #d9534f;\n    color: #fff; }\n  .toast-gritcode.toast-dark {\n    background-color: #000;\n    color: #fff; }\n  .toast-gritcode.toast-light {\n    background-color: #fff;\n    color: #000; }\n\n.lt-ie10 .progress-bar, .ie9 .progress-bar, .oldie .progress-bar, .no-csstransitions .progress-bar {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"toast toast-gritcode {{activeToast ? 'active' : ''}} {{position}} {{toastContext}} {{hideProgress ? '' : 'has-progress'}}\" v-on:mouseover=\"pause\" v-on:mouseout=\"animate\">\r\n  <div v-html=\"message\"></div>\r\n  <div class=\"action\">\r\n\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-on:click=\"clear\">\r\n\t    <span aria-hidden=\"true\">&times;</span>\r\n\t  </button>\r\n  </div>\r\n  <div v-bind:class=\"{'progress-bar': true, active: activeProgressBar}\" v-bind:style=\"style\" v-show=\"!hideProgress\"></div>\r\n</div>";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(8);

	var _buttonToggleHtml = __webpack_require__(10);

	var _buttonToggleHtml2 = _interopRequireDefault(_buttonToggleHtml);

	var ANIMATION = 350; // in ms

	exports['default'] = {
	    template: _buttonToggleHtml2['default'],
	    replace: true,
	    computed: {
	        btnVariant: function btnVariant() {
	            return !this.variant || this.variant === 'default' ? 'btn-primary' : 'btn-' + this.variant;
	        },
	        btnSize: function btnSize() {
	            return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	        }
	    },
	    data: function data() {
	        return {
	            active: true
	        };
	    },
	    props: {
	        model: {
	            type: Boolean,
	            twoWay: true
	        },
	        disabled: {
	            type: Boolean,
	            twoWay: true
	        },
	        size: {
	            type: String,
	            'default': 'md'
	        },
	        variant: {
	            type: String,
	            'default': 'primary'
	        },
	        text: {
	            type: Object,
	            'default': '',
	            required: true
	        }
	    },
	    methods: {
	        toggle: function toggle(value) {
	            var _this = this;

	            this.active = value || !this.active;
	            setTimeout(function () {
	                _this.model = _this.active;
	                _this.$dispatch('toggled::button-toggle', _this.model);
	            }, ANIMATION);
	        }
	    },
	    ready: function ready() {
	        this.active = this.model;
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./button-toggle.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./button-toggle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".btn-toggle-gritcode {\n  position: relative;\n  overflow: hidden;\n  padding: 0 !important;\n  border: 0; }\n  .btn-toggle-gritcode .btn {\n    margin: 0;\n    display: inline-block;\n    outline: none;\n    -webkit-transition: -webkit-transform .35s;\n    transition: -webkit-transform .35s;\n    transition: transform .35s;\n    transition: transform .35s, -webkit-transform .35s;\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n    -ms-transform: translate(-100%, 0);\n    padding-left: 1rem;\n    padding-right: 0.8rem; }\n    .btn-toggle-gritcode .btn:active, .btn-toggle-gritcode .btn:hover, .btn-toggle-gritcode .btn:visited, .btn-toggle-gritcode .btn:focus {\n      outline: none; }\n    .btn-toggle-gritcode .btn.btn-sm {\n      padding-left: 0.75rem;\n      padding-right: 0.55rem; }\n    .btn-toggle-gritcode .btn.btn-lg {\n      padding-left: 1.25rem;\n      padding-right: 1.05rem; }\n  .btn-toggle-gritcode.active .btn {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -ms-transform: translate(0, 0);\n    padding-left: 0.8rem;\n    padding-right: 1rem; }\n    .btn-toggle-gritcode.active .btn.btn-sm {\n      padding-left: 0.55rem;\n      padding-right: 0.75rem; }\n    .btn-toggle-gritcode.active .btn.btn-lg {\n      padding-left: 1.05rem;\n      padding-right: 1.25rem; }\n  .btn-toggle-gritcode.active .handle {\n    left: calc(100% - 12px); }\n  .btn-toggle-gritcode .handle {\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    background-color: #fff;\n    position: absolute;\n    margin: 1px;\n    height: calc(100% - 2px);\n    padding: 0;\n    width: 10px;\n    left: 0%;\n    top: 0;\n    z-index: 2;\n    -webkit-transition: left .35s;\n    transition: left .35s; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn btn-toggle btn-toggle-gritcode {{btnSize}} btn-default {{active ? 'active' : ''}}\" :disabled=\"disabled\">\r\n    <button class=\"btn btn-block {{btnVariant}} {{btnSize}}\" v-on:click.prevent=\"toggle(false)\">{{text.on}}</button><!--\r\n    --><span class=\"handle\" v-on:click.prevent=\"toggle()\"></span><!--\r\n    --><button class=\"btn btn-block btn-default {{btnSize}}\" v-on:click.prevent=\"toggle(true)\">{{text.off}}</button>\r\n</div>\r\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	// import template

	var _dropdownMultiselectHtml = __webpack_require__(14);

	var _dropdownMultiselectHtml2 = _interopRequireDefault(_dropdownMultiselectHtml);

	// import dependencies

	var _vuestrapIconsSrcComponentsIcons = __webpack_require__(15);

	var _vuestrapIconsSrcComponentsIcons2 = _interopRequireDefault(_vuestrapIconsSrcComponentsIcons);

	// export component object
	exports['default'] = {
	  template: _dropdownMultiselectHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false,
	      selected: false
	    };
	  },
	  props: {
	    model: {
	      type: Array,
	      'default': [],
	      twoWay: true,
	      required: true
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    position: {
	      type: String,
	      'default': 'left'
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    maxCount: {
	      type: Number,
	      'default': 2
	    },
	    defaultText: {
	      type: String,
	      'default': 'Plase select one'
	    },
	    defaultTextMultiple: {
	      type: String,
	      'default': 'items selected'
	    },
	    dropup: {
	      type: Boolean,
	      'default': false
	    },
	    returnObject: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    },
	    displayItem: function displayItem() {
	      var _this = this;

	      // if zero show default message
	      if (this.model.length === 0) {
	        return this.defaultText;
	      }
	      // if more than limit show "X items selected"
	      if (this.model.length > this.maxCount) {
	        return this.model.length + ' ' + this.defaultTextMultiple;
	      }

	      // otherwise show all items selected with coma seperated
	      var results = [];
	      this.model.forEach(function (modelItem) {
	        if (_this.returnObject) {
	          results.push(modelItem.text);
	        } else {
	          // find matching text
	          _this.list.forEach(function (listItem) {
	            if (listItem.value === modelItem) {
	              results.push(listItem.text);
	            }
	          });
	        }
	      });
	      return results.join(', ');
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('shown:dropdown');
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hidden::dropdown');
	      }
	    },
	    select: function select(itemIndex) {
	      var modelIndex = this.checked(itemIndex);
	      if (modelIndex !== false) {
	        this.model.splice(modelIndex, 1);
	      } else {
	        if (this.returnObject) {
	          this.model.push(this.list[itemIndex]);
	        } else {
	          this.model.push(this.list[itemIndex].value);
	        }
	      }

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('selected::dropdown', this.model);
	    },
	    checked: function checked(index) {
	      if (!this.list) return false;
	      var result = false;
	      if (this.returnObject) {
	        for (var i = 0; i < this.model.length; i++) {
	          if (this.model[i].value === this.list[index].value) {
	            result = i;
	          }
	        }
	      } else {
	        result = this.model.indexOf(this.list[index].value) !== -1 ? this.model.indexOf(this.list[index].value) : false;
	      }
	      return result;
	    }
	  },
	  events: {
	    'hide::dropdown': function hideDropdown() {
	      this.show = false;
	    }
	  },
	  components: {
	    vsIcon: _vuestrapIconsSrcComponentsIcons2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./dropdown-multiselect.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./dropdown-multiselect.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".dropdown-multiselect-gritcode .dropdown-toggle {\n  width: 200px; }\n  .dropdown-multiselect-gritcode .dropdown-toggle .checked-items {\n    width: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    float: left; }\n\n.dropdown-multiselect-gritcode .dropdown-menu {\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  width: auto; }\n  .dropdown-multiselect-gritcode .dropdown-menu::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #F5F5F5; }\n  .dropdown-multiselect-gritcode .dropdown-menu::-webkit-scrollbar {\n    width: 10px;\n    background-color: #F5F5F5; }\n  .dropdown-multiselect-gritcode .dropdown-menu::-webkit-scrollbar-thumb {\n    background-color: #ccc; }\n  .dropdown-multiselect-gritcode .dropdown-menu .dropdown-item {\n    padding: 0.3em 1.5em 0.3em 0.4em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: relative; }\n    .dropdown-multiselect-gritcode .dropdown-menu .dropdown-item .icons {\n      position: absolute;\n      right: 0.3em;\n      top: 0.5em; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown-multiselect-gritcode\" v-bind:class=\"{open: show, dropdown: !dropup, dropup: dropup}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click.prevent=\"toggle($event)\"\r\n        :disabled=\"disabled\">\r\n        <span class=\"checked-items\" v-html=\"displayItem\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click.stop.prevent=\"select($index)\" title=\"{{item.text}}\">{{item.text}} <vs-icon name=\"check\" v-show=\"checked($index) !== false\" class=\"pull-right\"></vs-icon></button>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(16);

	var _iconsHtml = __webpack_require__(18);

	var _iconsHtml2 = _interopRequireDefault(_iconsHtml);

	// enable support for svg in all browsers

	__webpack_require__(19);

	// export component object
	exports['default'] = {
	  template: _iconsHtml2['default'],
	  replace: true,
	  computed: {
	    iconsSize: function iconsSize() {
	      return !this.size ? 'icons-sm' : 'icons-' + this.size;
	    },
	    iconsAlign: function iconsAlign() {
	      return !this.align ? '' : 'icons-' + this.align;
	    },
	    iconsVariant: function iconsVariant() {
	      return !this.variant ? '' : 'icons-' + this.variant;
	    },
	    iconsBackground: function iconsBackground() {
	      var bg = this.background.split('-');
	      bg = bg[1] ? bg[1] : 'fill';
	      return !this.background ? '' : 'icons-bg-' + bg;
	    }
	  },
	  props: {
	    name: {
	      type: String
	    },
	    background: {
	      type: String,
	      'default': ''
	    },
	    align: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'sm'
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'standard'
	    },
	    path: {
	      type: String,
	      'default': function _default() {
	        if (false) {
	          return 'bower_components/vuestrap-icons/assets/icons.min.svg';
	        }
	        if (false) {
	          return 'assets/icons.min.svg';
	        }
	        return 'node_modules/vuestrap-icons/assets/icons.min.svg';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./icons.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./icons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".icons-vuestrap {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative; }\n  .icons-vuestrap .icon {\n    width: 100%;\n    height: 100%;\n    top: 0%;\n    left: 0%;\n    position: absolute;\n    z-index: 2; }\n  .icons-vuestrap .icon-background {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n  .icons-vuestrap.icons-bg-fill .icon, .icons-vuestrap.icons-bg-outline .icon {\n    width: 50%;\n    height: 50%;\n    top: 25%;\n    left: 25%; }\n  .icons-vuestrap .text {\n    position: relative;\n    color: #fff;\n    z-index: 3;\n    font-size: 70%;\n    width: 100%;\n    height: 100%;\n    display: table;\n    text-align: center; }\n    .icons-vuestrap .text > span {\n      display: table-cell;\n      vertical-align: middle; }\n  .icons-vuestrap.icons-right {\n    margin-left: 0.2em;\n    margin-right: 0; }\n  .icons-vuestrap.icons-left {\n    margin-left: 0;\n    margin-right: 0.2em; }\n  .icons-vuestrap .hidden {\n    display: none; }\n\n.icons-vuestrap.icons-sm {\n  font-size: 1rem;\n  line-height: 1rem;\n  width: 1rem;\n  height: 1rem; }\n\n.icons-vuestrap.icons-md {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem; }\n\n.icons-vuestrap.icons-lg {\n  font-size: 2rem;\n  line-height: 2rem;\n  width: 2rem;\n  height: 2rem; }\n\n.icons-vuestrap.icons-xl {\n  font-size: 3rem;\n  line-height: 3rem;\n  width: 3rem;\n  height: 3rem; }\n\n.icons-vuestrap.icons-xxl {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  width: 3.5rem;\n  height: 3.5rem; }\n\n.icons-vuestrap .icon {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-bg-fill .icon-background {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-bg-outline .icon-background {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-outline .text {\n  color: #818a91; }\n\n.icons-vuestrap.icons-primary .icon {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .icon-background {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-primary.icons-bg-outline .icon-background {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-outline .text {\n  color: #563d7c; }\n\n.icons-vuestrap.icons-info .icon {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .icon-background {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-info.icons-bg-outline .icon-background {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-outline .text {\n  color: #5bc0de; }\n\n.icons-vuestrap.icons-success .icon {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .icon-background {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-success.icons-bg-outline .icon-background {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-outline .text {\n  color: #42b983; }\n\n.icons-vuestrap.icons-warning .icon {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .icon-background {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-warning.icons-bg-outline .icon-background {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-outline .text {\n  color: #f0ad4e; }\n\n.icons-vuestrap.icons-danger .icon {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .icon-background {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-danger.icons-bg-outline .icon-background {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-outline .text {\n  color: #d9534f; }\n\n.icons-vuestrap.icons-dark .icon {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .icon-background {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-dark.icons-bg-outline .icon-background {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-outline .text {\n  color: #000; }\n\n.icons-vuestrap.icons-light .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .icon {\n  fill: #000; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .icon-background {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .text {\n  color: #000; }\n\n.icons-vuestrap.icons-light.icons-bg-outline .icon-background {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-outline .text {\n  color: #fff; }\n\n.btn.disabled svg {\n  opacity: 0.5; }\n\n.btn:hover svg {\n  fill: #fff; }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<span class=\"icons icons-vuestrap {{iconsSize}} {{iconsVariant}} {{iconsBackground}} {{iconsAlign}}\" aria-hidden=\"true\">\r\n\t<span v-if=\"name\">\r\n\t\t<svg role=\"img\" class=\"icon\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + name\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span v-if=\"background\">\r\n\t\t<svg role=\"img\" class=\"icon-background\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + background\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span class=\"text\" v-show=\"text.length\">\r\n\t\t<span><slot>{{text}}</slot></span>\r\n\t</span>\r\n</span>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var LEGACY_SUPPORT = false;

	function embed(svg, g) {
		if (g) {
			var viewBox = !svg.getAttribute('viewBox') && g.getAttribute('viewBox');
			var fragment = document.createDocumentFragment();
			var clone = g.cloneNode(true);

			if (viewBox) {
				svg.setAttribute('viewBox', viewBox);
			}

			while (clone.childNodes.length) {
				fragment.appendChild(clone.firstChild);
			}

			svg.appendChild(fragment);
		}
	}

	function loadreadystatechange(xhr) {
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				var x = document.createElement('x');

				x.innerHTML = xhr.responseText;

				xhr.s.splice(0).map(function (array) {
					embed(array[0], x.querySelector('#' + array[1].replace(/(\W)/g, '\\$1')));
				});
			}
		};

		xhr.onreadystatechange();
	}

	function svg4everybody(opts) {
		opts = opts || {};

		var uses = document.getElementsByTagName('use');
		var nosvg;

		if (LEGACY_SUPPORT) {
			var fallback = opts.fallback || function (src) {
				return src.replace(/\?[^#]+/, '').replace('#', '.').replace(/^\./, '') + '.png' + (/\?[^#]+/.exec(src) || [''])[0];
			};

			nosvg = 'nosvg' in opts ? opts.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent);

			if (nosvg) {
				document.createElement('svg');
				document.createElement('use');
			}
		}

		var polyfill = 'polyfill' in opts ? opts.polyfill : LEGACY_SUPPORT ? nosvg || /\bEdge\/12\b|\bMSIE [1-8]\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537 : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537;

		var validate = opts.validate;
		var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
		var svgCache = {};

		function oninterval() {
			var use;

			while (use = uses[0]) {
				var svg = use.parentNode;

				if (svg && /svg/i.test(svg.nodeName)) {
					var src = use.getAttribute('xlink:href');

					if (LEGACY_SUPPORT && nosvg) {
						var img = new Image();
						var width = svg.getAttribute('width');
						var height = svg.getAttribute('height');

						img.src = fallback(src, svg, use);

						if (width) {
							img.setAttribute('width', width);
						}

						if (height) {
							img.setAttribute('height', height);
						}

						svg.replaceChild(img, use);
					} else if (polyfill) {
						if (!validate || validate(src, svg, use)) {
							var url = src.split('#');
							var url_root = url[0];
							var url_hash = url[1];

							svg.removeChild(use);

							if (url_root.length) {
								var xhr = svgCache[url_root] = svgCache[url_root] || new XMLHttpRequest();

								if (!xhr.s) {
									xhr.s = [];

									xhr.open('GET', url_root);

									xhr.send();
								}

								xhr.s.push([svg, url_hash]);

								loadreadystatechange(xhr);
							} else {
								embed(svg, document.getElementById(url_hash));
							}
						}
					}
				}
			}

			requestAnimationFrame(oninterval, 17);
		}

		if (polyfill) {
			oninterval();
		}
	}

	var svgPolyfill = {
		svg4everybody: svg4everybody()
	};
	exports.svgPolyfill = svgPolyfill;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(21);

	// import template

	var _offcanvasDrawerHtml = __webpack_require__(23);

	var _offcanvasDrawerHtml2 = _interopRequireDefault(_offcanvasDrawerHtml);

	var offcanvasWrapper = {
	  template: _offcanvasDrawerHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      required: true,
	      'default': ''
	    },
	    animation: {
	      type: String,
	      'default': 'ease'
	    },
	    align: {
	      type: String,
	      'default': 'left'
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	      if (this.show) {
	        this.$dispatch('shown::offcanvas-drawer', this.id);
	      } else {
	        this.$dispatch('hiden::offcanvas-drawer', this.id);
	      }
	    }
	  },
	  events: {
	    'toggle::offcanvas-drawer': function toggleOffcanvasDrawer(id) {
	      if (id === this.id) {
	        this.toggle();
	      }
	    }
	  }
	};

	exports.offcanvasWrapper = offcanvasWrapper;
	var offcanvasDrawer = {
	  template: '<div class="offcanvas-drawer"><slot></slot></div>',
	  replace: true
	};
	exports.offcanvasDrawer = offcanvasDrawer;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./offcanvas-drawer.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./offcanvas-drawer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * Off Canvas drawer\r\n * based on https://scotch.io/tutorials/off-canvas-drawers-with-css3-transitions-and-transforms\r\n * --------------------------------------------------\r\n */\n.gritcode-offcanvas-drawer {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -ms-transform: translate(0, 0);\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .gritcode-offcanvas-drawer .offcanvas-drawer {\n    width: 100%;\n    left: -100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 9999; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .close {\n      color: #fff; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .navbar {\n      height: 100%; }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer .offcanvas-drawer {\n        width: 300px;\n        left: -300px; } }\n  .gritcode-offcanvas-drawer.active {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    -ms-transform: translate(100%, 0); }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer.active {\n        -webkit-transform: translate(300px, 0);\n                transform: translate(300px, 0);\n        -webkit-transform: translate3d(300px, 0, 0);\n                transform: translate3d(300px, 0, 0);\n        -ms-transform: translate(300px, 0); } }\n\n.gritcode-offcanvas-drawer.right .offcanvas-drawer {\n  left: auto;\n  right: -100%; }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right .offcanvas-drawer {\n      left: auto;\n      right: -300px; } }\n\n.gritcode-offcanvas-drawer.right.active {\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0); }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right.active {\n      -webkit-transform: translate(-300px, 0);\n              transform: translate(-300px, 0);\n      -webkit-transform: translate3d(-300px, 0, 0);\n              transform: translate3d(-300px, 0, 0);\n      -ms-transform: translate(-300px, 0); } }\n\n.gritcode-offcanvas-drawer.ease {\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform; }\n\n.gritcode-offcanvas-drawer.linear {\n  -webkit-transition: 300ms linear transform;\n  transition: 300ms linear transform; }\n\n.gritcode-offcanvas-drawer.ease-in {\n  -webkit-transition: 300ms ease-in transform;\n  transition: 300ms ease-in transform; }\n\n.gritcode-offcanvas-drawer.ease-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.ease-in-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.bounce {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15), -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15); }\n\n.gritcode-offcanvas-drawer.snappy {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1); }\n\n.gritcode-offcanvas-drawer.out-of-orbit {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15), -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15); }\n\n.gritcode-offcanvas-drawer.none {\n  -webkit-transition: none;\n  transition: none; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active .offcanvas-drawer {\n  left: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-bottom {\n  left: 300px;\n  right: auto;\n  width: 100%; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active.right .offcanvas-drawer {\n  left: auto;\n  right: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom {\n  left: -300px;\n  right: auto;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-offcanvas-drawer {{animation}} {{align}} {{show ? 'active' : ''}}\">\r\n  <slot></slot>\r\n</div>\r\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(25);

	// import template

	var _spinnerHtml = __webpack_require__(27);

	var _spinnerHtml2 = _interopRequireDefault(_spinnerHtml);

	var MIN_WAIT = 500; // in ms

	exports['default'] = {
	  template: _spinnerHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	  props: {
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    fixed: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return this.size ? 'spinner-' + this.size : 'spinner-sm';
	    }
	  },
	  methods: {
	    getMinWait: function getMinWait(delay) {
	      delay = delay || 0;
	      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
	    },
	    show: function show(options) {
	      if (options && options.text) {
	        this.text = options.text;
	      }
	      if (options && options.size) {
	        this.size = options.size;
	      }
	      if (options && options.fixed) {
	        this.fixed = options.fixed;
	      }

	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';

	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.$root.$broadcast('shown::spinner');
	    },
	    hide: function hide() {
	      var _this = this;

	      var delay = 0;
	      this._spinnerAnimation = setTimeout(function () {
	        _this.active = false;
	        _this._body.style.overflowY = _this._bodyOverflow;
	        _this.$root.$broadcast('hidden::spinner');
	      }, this.getMinWait(delay));
	    }
	  },
	  events: {
	    'show::spinner': function showSpinner(options) {
	      this.show(options);
	    },
	    'hide::spinner': function hideSpinner() {
	      this.hide();
	    },
	    'start::ajax': function startAjax(options) {
	      this.show(options);
	    },
	    'end::ajax': function endAjax() {
	      this.hide();
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  },
	  ready: function ready() {
	    this._body = document.querySelector('body');
	    this._bodyOverflow = this._body.style.overflowY || '';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./spinner.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #563d7c;\n    border-radius: 50%;\n    display: inline-block;\n    -webkit-animation: spin 0.6s linear;\n            animation: spin 0.6s linear;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #563d7c; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.lt-ie10 .spinner-gritcode .spinner-circle, .ie9 .spinner-gritcode .spinner-circle, .oldie .spinner-gritcode .spinner-circle, .no-csstransitions .spinner-gritcode .spinner-circle, .no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  -webkit-animation: none;\n          animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner spinner-gritcode {{spinnerSize}} {{fixed ? 'spinner-fixed' : ''}}\" v-show=\"active\"> \r\n\t<div class=\"spinner-wrapper\">\r\n\t  <div class=\"spinner-circle\"></div>\r\n\t  <div class=\"spinner-text\">{{text}}</div>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(29);

	// import template

	var _truncateHtml = __webpack_require__(31);

	var _truncateHtml2 = _interopRequireDefault(_truncateHtml);

	exports['default'] = {
	  template: _truncateHtml2['default'],
	  replace: true,
	  computed: {
	    truncateWidth: function truncateWidth() {
	      return isNaN(this.width) ? this.width : this.width + 'px';
	    }
	  },
	  props: {
	    width: {
	      'default': '20em'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./truncate.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./truncate.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".truncate-gritcode {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<span class=\"truncate truncate-gritcode\" v-bind:style=\"{width: truncateWidth}\"><slot></slot></span>\r\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// inspired by href='https://css-tricks.com/drag-and-drop-file-uploading/'

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(33);

	var _fileUploadHtml = __webpack_require__(35);

	var _fileUploadHtml2 = _interopRequireDefault(_fileUploadHtml);

	var _utilsHelpersJs = __webpack_require__(36);

	// export component object
	exports['default'] = {
	  template: _fileUploadHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      state: null,
	      dragover: false,
	      progress: '0%',
	      errorMessage: ''
	    };
	  },
	  props: {
	    accept: {
	      type: String,
	      'default': ''
	    },
	    ajax: {
	      type: String,
	      'default': ''
	    },
	    autoSubmit: {
	      type: Boolean,
	      'default': false
	    },
	    id: {
	      type: String,
	      'default': ''
	    },
	    formId: {
	      type: String,
	      'default': ''
	    },
	    method: {
	      type: String,
	      'default': 'POST'
	    },
	    name: {
	      type: String,
	      'default': 'files'
	    },
	    model: {
	      'default': null
	    },
	    multiple: {
	      type: Boolean,
	      'default': false
	    },
	    fileList: {
	      'default': null
	    },
	    hideButton: {
	      type: Boolean,
	      'default': false
	    },
	    text: {
	      type: Object,
	      'default': function _default() {
	        return {
	          action: 'Choose a file',
	          drag: 'or drag it here.',
	          selected: 'files selected',
	          button: 'Upload',
	          uploading: 'Uploading...',
	          done: 'Done!',
	          restart: 'Upload more?',
	          retry: 'Try again!'
	        };
	      }
	    }
	  },
	  computed: {
	    advancedUpload: function advancedUpload() {
	      var div = document.createElement('div');
	      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	    },
	    displaySelectionText: function displaySelectionText() {
	      if (!this.fileList.length) return '';
	      var result = this.fileList.length > 1 ? this.fileList.length + ' ' + this.text.selected : this.fileList[0].name;
	      if (this.state === 'retry') {
	        result += ' (change)';
	      }
	      return result;
	    }
	  },
	  methods: {
	    setError: function setError(message) {
	      this.state = 'error';
	      this.errorMessage = message;
	      this.$dispatch('completed::file-upload', { error: this.errorMessage });
	    },
	    parseResponse: function parseResponse(response) {
	      var data = null;
	      try {
	        data = JSON.parse(response);
	      } catch (e) {
	        // if no json returned we assume success
	        this.setError('Unexpected response from the server');
	      }
	      // set either success or error based on data returned from the server
	      if (data.success) {
	        this.state = 'success';
	        this.model = data.data;
	        this.$dispatch('completed::file-upload', { model: this.model });
	      } else {
	        this.setError(data.error);
	      }
	    },
	    submitForm: function submitForm() {
	      var _this = this;

	      if (!this.fileList.length) return;
	      if (this.ajax) {
	        this.state = 'uploading';
	        if (this.advancedUpload) {
	          (function () {
	            // ajax file upload for modern browsers

	            // gathering the form data
	            var ajaxData = new FormData();
	            // Loop through each of the selected files.
	            for (var i = 0; i < _this.fileList.length; i++) {
	              var file = _this.fileList[i];

	              // Check the file type.
	              if (_this.accept && !file.type.match(_this.accept)) {
	                continue;
	              }

	              // Add the file to the request.
	              ajaxData.append(_this.name, file, file.name);
	            }

	            // ajax request
	            var xhr = new XMLHttpRequest();
	            // xhr.setRequestHeader('Content-Length')
	            xhr.open(_this.method, _this.ajax, true);

	            xhr.onload = function () {
	              _this.state = null;
	              if (xhr.status >= 200 && xhr.status < 400) {
	                _this.parseResponse(xhr.responseText);
	              } else {
	                _this.parseResponse(xhr.responseText);
	              }
	            };

	            xhr.upload.onprogress = function (e) {
	              var loaded = e.loaded ? e.loaded : 0;
	              var total = e.total ? e.total : 1;
	              _this.progress = parseInt(loaded / total * 100, 10) + '%';
	            };

	            xhr.onerror = function () {
	              _this.setError('There was an error with ajax request');
	            };

	            // Send request to server
	            xhr.send(ajaxData);
	          })();
	        } else {
	          // fallback Ajax solution for older browsers for same-origin requests
	          if ((0, _utilsHelpersJs.testSameOrigin)(this.ajax)) {
	            (function () {
	              var iframeName = 'uploadiframe' + new Date().getTime();
	              var iframe = document.createElement('iframe');

	              iframe.setAttribute('name', iframeName);
	              iframe.style.display = 'none';

	              document.body.appendChild(iframe);
	              _this._wrappingForm.setAttribute('target', iframeName);

	              iframe.addEventListener('load', function () {
	                // this will not work on cross origin requests when using iframe
	                _this.parseResponse(iframe.contentDocument.body.innerHTML);
	                _this._wrappingForm.removeAttribute('target');
	                iframe.parentNode.removeChild(iframe);
	              });
	              _this._wrappingForm.submit();
	            })();
	          } else {
	            // we cannot guarantee a success in case of cross-origin request within iframe
	            // browsers will block access to the iframe.contentDocument.body.innerHTML so we can't tell if the request was a success
	            // TODO: add redirect functionality, similar to the https://github.com/blueimp/jQuery-File-Upload/wiki/Cross-domain-uploads#cross-site-iframe-transport-uploads
	            this.setError('Cross-origin requests are not supported within iframe');
	          }
	        }
	      }
	    },
	    retry: function retry() {
	      this.state = 'retry';
	      (0, _utilsHelpersJs.trigger)(this._input, 'change');
	    },
	    restart: function restart() {
	      this.state = null;
	      this.fileList = [];
	    },
	    onChange: function onChange(e) {
	      if (this.state === 'retry') {
	        this.state = null;
	      }
	      if (this.advancedUpload) {
	        this.fileList = e.target.files;
	        if (this.autoSubmit) {
	          this.submitForm();
	        }
	      } else {
	        this.fileList.push({ name: this._input.value.replace(/^.*\\/, '') });
	      }
	    },
	    _eventHandler: function _eventHandler(e) {
	      // stop propagation to avoid accidental behaviour
	      e.preventDefault();
	      e.stopPropagation();

	      // handle dragover
	      if (e.type === 'dragover' || e.type === 'dragenter') {
	        this.dragover = true;
	      }

	      // handle dragleave
	      if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
	        this.dragover = false;
	        if (e.type === 'drop') {
	          this.fileList = e.dataTransfer.files; // the files that were dropped
	          if (this.autoSubmit) {
	            this.submitForm();
	          }
	        }
	      }
	    }
	  },
	  events: {
	    'submit::file-upload': function submitFileUpload(id) {
	      if (this.id === id) {
	        this.submitForm();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    this._input = this.$el.querySelector('input');
	    if (this.advancedUpload) {
	      var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	      events.forEach(function (event) {
	        _this2.$el.addEventListener(event, function (e) {
	          return _this2._eventHandler(e);
	        });
	      });

	      // drag start
	      events = ['dragover', 'dragenter'];
	      events.forEach(function (event) {
	        return function (e) {
	          return _this2._eventHandler(e);
	        };
	      });

	      // drag end
	      events = ['dragend', 'dragleave', 'drop'];
	      events.forEach(function (event) {
	        _this2.$el.addEventListener(event, function (e) {
	          return _this2._eventHandler(e);
	        });
	      });
	    } else {
	      // get a wrapping form element id paseed in options
	      if (!this.formId) {
	        throw "You need to wrap this component in a form and specify it's id in a 'form-id' attribute.";
	      }
	      this._wrappingForm = document.getElementById(this.formId);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this3 = this;

	    var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	    events.forEach(function (event) {
	      _this3.$el.removeEventListener(event, function () {
	        return _this3._eventHandler();
	      });
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./file-upload.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./file-upload.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes appear-from-inside {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  75% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes appear-from-inside {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  75% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.gritcode-file-upload {\n  text-align: center;\n  font-size: 1.25rem;\n  /* 20 */\n  background-color: #c8dadf;\n  position: relative;\n  padding: 100px 20px; }\n  .gritcode-file-upload.advanced-upload {\n    outline: 2px dashed #92b0b3;\n    outline-offset: -10px;\n    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n    transition: outline-offset .15s ease-in-out, background-color .15s linear; }\n  .gritcode-file-upload .input .icon {\n    width: 100%;\n    height: 80px;\n    fill: #92b0b3;\n    display: block;\n    margin-bottom: 40px; }\n  .gritcode-file-upload .input .btn-primary {\n    font-weight: 700;\n    color: #e5edf1;\n    background-color: #39bfd3;\n    border: none;\n    display: block;\n    padding: 8px 16px;\n    margin: 40px auto 0; }\n  .gritcode-file-upload .state .state-uploading {\n    font-style: italic; }\n  .gritcode-file-upload .animate {\n    -webkit-animation: appear-from-inside .25s ease-in-out;\n            animation: appear-from-inside .25s ease-in-out; }\n  .gritcode-file-upload.is-dragover {\n    outline-offset: -20px;\n    outline-color: #c8dadf;\n    background-color: #fff; }\n  .gritcode-file-upload input[type=\"file\"] {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1; }\n    .gritcode-file-upload input[type=\"file\"] + label {\n      margin-bottom: 0;\n      max-width: 80%;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      cursor: pointer;\n      display: inline-block;\n      overflow: hidden; }\n      .gritcode-file-upload input[type=\"file\"] + label:hover, .gritcode-file-upload input[type=\"file\"] + label:focus {\n        color: #39bfd3; }\n    .gritcode-file-upload input[type=\"file\"]:focus + label, .gritcode-file-upload input[type=\"file\"].has-focus + label {\n      outline: 1px dotted #000;\n      outline: -webkit-focus-ring-color auto 5px; }\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-file-upload {{advancedUpload ? 'advanced-upload' : ''}} {{dragover ? 'is-dragover' : ''}}\">\r\n    <div class=\"input\" v-if=\"state == null || state == 'retry'\">\r\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"43\" viewBox=\"0 0 50 43\" v-if=\"advancedUpload\">\r\n            <path d=\"M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z\" />\r\n        </svg>\r\n        <input \r\n            type=\"file\" \r\n            name=\"files[]\" \r\n            id=\"file\"\r\n            accept=\"accept\" \r\n            v-bind:multiple=\"multiple && advancedUpload\" \r\n            v-on:change=\"onChange($event)\" />\r\n        <label for=\"file\">\r\n            <span v-if=\"fileList.length == 0\"><strong>{{text.action}}</strong><span v-if=\"advancedUpload\"> {{text.drag}}</span></span>\r\n            <span v-if=\"fileList.length > 0\" class=\"\">{{displaySelectionText}}</span>\r\n        </label>\r\n        <button type=\"submit\" class=\"btn btn-primary\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">{{text.button}}</button>\r\n    </div>\r\n    <div class=\"state\" v-if=\"state != null\">\r\n        <span class=\"state-uploading animate\" v-show=\"state == 'uploading'\">{{text.uploading}}<span v-if=\"advancedUpload\">{{progress}}</span></span>\r\n        <span class=\"state-success animate\" v-show=\"state == 'success'\">\r\n            {{text.done}} <a href=\"#\" v-on:click.prevent=\"restart\" role=\"button\" v-show=\"multiple\">{{text.restart}}</a>\r\n        </span>\r\n        <span class=\"state-error animate\" v-show=\"state == 'error'\">\r\n            Error! <span>{{errorMessage}}</span> <a href=\"#\" v-on:click.prevent=\"retry\">{{text.retry}}</a>\r\n        </span>\r\n    </div>\r\n</div>";

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Other utilities for demo pages
	 *
	 */

	// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.makeid = makeid;
	exports.csstransitions = csstransitions;

	function makeid() {
	  var text = '';
	  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	  for (var i = 0; i < 5; i++) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return text;
	}

	// check if browser supports css3 transitions

	function csstransitions() {
	  var style = document.documentElement.style;
	  return style.webkitTransition !== undefined || style.MozTransition !== undefined || style.OTransition !== undefined || style.MsTransition !== undefined || style.transition !== undefined;
	}

	/**
	 * test if given url is same origin than app url
	 * @param  {string} url to compare with app url
	 * @return {boolean}
	 */
	var testSameOrigin = function testSameOrigin(url) {
	  var loc = window.location;
	  var a = document.createElement('a');
	  a.href = url;
	  return a.hostname == loc.hostname && a.port == loc.port && a.protocol == loc.protocol;
	};

	exports.testSameOrigin = testSameOrigin;
	/**
	 * trigger
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */
	var trigger = function trigger(el, event, args) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(event, true, false);

	  if (args) {
	    for (var prop in args) {
	      e[prop] = args[prop];
	    }
	  }

	  // Due to Firefox bug, events fired on disabled
	  // non-attached form controls can throw errors
	  try {
	    el.dispatchEvent(e);
	  } catch (e) {}
	};

	exports.trigger = trigger;
	/**
	 * change location utility supports v-link like paths or hrefs
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */
	var changeLocation = function changeLocation(router, link) {
	  if (!link) return;
	  if (router) {
	    router.go(link);
	  } else {
	    window.location.href = link;
	  }
	};
	exports.changeLocation = changeLocation;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(38);

	var _wizardHtml = __webpack_require__(40);

	var _wizardHtml2 = _interopRequireDefault(_wizardHtml);

	var _wizardStepHtml = __webpack_require__(41);

	var _wizardStepHtml2 = _interopRequireDefault(_wizardStepHtml);

	var _vuestrapIconsSrcComponentsIcons = __webpack_require__(15);

	var _vuestrapIconsSrcComponentsIcons2 = _interopRequireDefault(_vuestrapIconsSrcComponentsIcons);

	var _utilsHelpersJs = __webpack_require__(36);

	// export component object
	var wizard = {
	  template: _wizardHtml2['default'],
	  replace: true,
	  props: {
	    currentIndex: {
	      type: Number,
	      'default': 0
	    }
	  },
	  data: function data() {
	    return {
	      countItems: 0
	    };
	  },
	  methods: {
	    changeCurrentIndex: function changeCurrentIndex(index) {
	      // change currentIndex
	      // if previous step is valid
	      // if previousDisabled is not set on the current step
	      if (this.$children[this.currentIndex].disablePrevious && this.currentIndex > index) return false;
	      if (this.$children[index - 1] && this.$children[index - 1].valid || index < this.currentIndex) {
	        this.currentIndex = index;
	        return true;
	      }
	      return false;
	    }
	  },
	  ready: function ready() {
	    // get all steps
	    this.countItems = this.$children.length;

	    // set index for each wiard-step component
	    this.$children.forEach(function (item, index) {
	      item.index = index;
	    });
	  }
	};

	exports.wizard = wizard;
	var wizardStep = {
	  template: _wizardStepHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      index: null,
	      active: false
	    };
	  },
	  computed: {
	    isActive: function isActive() {
	      return this.$parent.currentIndex === this.index;
	    },
	    isPrevious: function isPrevious() {
	      // every step before current index
	      return this.$parent.currentIndex > this.index;
	    },
	    isNext: function isNext() {
	      // everything after current index
	      return this.$parent.currentIndex < this.index;
	    }
	  },
	  props: {
	    link: {
	      type: String,
	      'default': ''
	    },
	    icon: {
	      type: String,
	      'default': false
	    },
	    iconNumber: {
	      type: String,
	      'default': false
	    },
	    title: {
	      type: String,
	      'default': false
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    progress: {
	      type: Number,
	      'default': 0
	    },
	    valid: {
	      type: Boolean,
	      'default': false
	    },
	    disablePrevious: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    changeCurrentIndex: function changeCurrentIndex() {
	      if (this.$parent.changeCurrentIndex(this.index) && this.link) {
	        // redirect user to the new location
	        (0, _utilsHelpersJs.changeLocation)(this.$router, this.link);
	      }
	    }
	  },
	  watch: {
	    progress: function progress(val) {
	      this._progressBar.style.width = val + '%';
	      if (val === 100) {
	        this.valid = true;
	      } else {
	        this.valid = false;
	      }
	    },
	    valid: function valid(val) {
	      if (val) {
	        this.progress = 100;
	      }
	    }
	  },
	  components: {
	    vsIcon: _vuestrapIconsSrcComponentsIcons2['default']
	  },
	  ready: function ready() {
	    this._progressBar = this.$el.querySelector('.wizard-progress-value');
	  }
	};
	exports.wizardStep = wizardStep;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./wizard.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./wizard.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".gritcode-wizard {\n  overflow: hidden;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  font-size: 0.8rem; }\n  .gritcode-wizard .wizard-step {\n    display: none;\n    width: auto;\n    border: 0;\n    text-align: center;\n    position: relative;\n    cursor: pointer; }\n    .gritcode-wizard .wizard-step.active {\n      display: table-cell; }\n    .gritcode-wizard .wizard-step .wizard-icon {\n      display: table;\n      width: 3em;\n      height: 3em;\n      background-color: #eaeaea;\n      text-align: center;\n      color: #a9a9a9;\n      border: 2px solid #d9d9d9;\n      position: relative;\n      z-index: 1;\n      border-radius: 50%;\n      z-index: 22;\n      margin: auto;\n      margin-bottom: 1em; }\n      .gritcode-wizard .wizard-step .wizard-icon .icon-number, .gritcode-wizard .wizard-step .wizard-icon .icon-icon {\n        display: table-cell;\n        vertical-align: middle; }\n      .gritcode-wizard .wizard-step .wizard-icon .icon-number {\n        line-height: 1em; }\n    .gritcode-wizard .wizard-step .title {\n      font-size: 1.1em;\n      color: #464646; }\n    .gritcode-wizard .wizard-step .description, .gritcode-wizard .wizard-step .step-info {\n      font-size: 0.8em;\n      color: #a8a8a8; }\n    .gritcode-wizard .wizard-step .description {\n      margin-bottom: 2em; }\n    .gritcode-wizard .wizard-step .wizard-progress, .gritcode-wizard .wizard-step .wizard-progress-value {\n      position: absolute;\n      bottom: 2em;\n      left: 0;\n      width: 100%;\n      height: 2px;\n      background: #d9d9d9;\n      z-index: 10; }\n    .gritcode-wizard .wizard-step .wizard-progress-value {\n      top: 0;\n      left: 0;\n      width: 0;\n      background: #42b983;\n      z-index: 11;\n      padding: 0;\n      -webkit-transition: 0.45s width ease;\n      transition: 0.45s width ease; }\n    .gritcode-wizard .wizard-step .step-info {\n      text-align: right; }\n    .gritcode-wizard .wizard-step.active .wizard-icon, .gritcode-wizard .wizard-step.previous .wizard-icon {\n      border-color: #42b983;\n      color: #42b983; }\n    .gritcode-wizard .wizard-step.active .icon, .gritcode-wizard .wizard-step.previous .icon {\n      fill: #42b983; }\n    .gritcode-wizard .wizard-step:last-child .wizard-progress-value {\n      width: 100% !important; }\n  @media (min-width: 544px) {\n    .gritcode-wizard {\n      font-size: 0.9rem; }\n      .gritcode-wizard .wizard-step {\n        display: table-cell; }\n        .gritcode-wizard .wizard-step .description {\n          margin-bottom: 0; }\n        .gritcode-wizard .wizard-step .wizard-progress, .gritcode-wizard .wizard-step .wizard-progress-value {\n          top: 1.45em;\n          left: 49%; }\n        .gritcode-wizard .wizard-step .wizard-progress-value {\n          top: 0;\n          left: 0;\n          padding: 0 0.75em; }\n        .gritcode-wizard .wizard-step .step-info {\n          display: none; }\n        .gritcode-wizard .wizard-step:last-child .wizard-progress {\n          display: none; }\n        .gritcode-wizard .wizard-step:last-child .wizard-progress-value {\n          width: 100% !important; } }\n  @media (min-width: 768px) {\n    .gritcode-wizard {\n      font-size: 1.2rem; } }\n", ""]);

	// exports


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gritcode-wizard\">\r\n   <slot></slot>\r\n</div>\r\n";

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{'wizard-step': true, 'active': isActive, 'previous' : isPrevious, 'next' : isNext}\" v-on:click.prevent=\"changeCurrentIndex()\">\r\n\t<div class=\"wizard-progress\">\r\n\t\t<div class=\"wizard-progress-value\"></div>\r\n\t</div>\r\n\t<div class=\"wizard-icon\">\r\n\t\t<div class=\"icon-icon\"><vs-icon :name=\"icon\" v-if=\"icon\"></vs-icon></div>\r\n\t\t<div class=\"icon-number\" v-if=\"!icon\">{{iconNumber || index +1}}</div>\r\n\t</div>\r\n\t<div class=\"wizard-content\">\r\n\t\t<div class=\"title\">{{title}}</div>\r\n\t\t<div class=\"description\">{{description}}</div>\r\n\t</div>\r\n\t<div class=\"step-info\">\r\n\t\tStep {{index+1}}/{{$parent.countItems}}\r\n\t</div>\r\n</div>";

/***/ }
/******/ ])
});
;