/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import external dependencies
	// docs component handles routing and demo pages
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vuestrapDocsSrcComponents = __webpack_require__(1);

	// drawer

	var _srcComponentsOffcanvasDrawer = __webpack_require__(22);

	var _srcComponentsToast = __webpack_require__(26);

	var _srcComponentsToast2 = _interopRequireDefault(_srcComponentsToast);

	// import utils

	var _vuestrapDocsSrcUtils = __webpack_require__(16);

	// import routes from all docs

	var _srcDocs = __webpack_require__(30);

	var _srcDocs2 = _interopRequireDefault(_srcDocs);

	// import package.json meta data

	var _packageJson = __webpack_require__(68);

	var _packageJson2 = _interopRequireDefault(_packageJson);

	// get list of the route objects
	var routes = (0, _vuestrapDocsSrcUtils.getRoutes)(_srcDocs2['default']);

	// create components from routes and attach it to the docs.components object
	routes.forEach(function (route) {
	  _vuestrapDocsSrcComponents.vsDocsPages.components[route.id] = route.component;
	});

	// start docs instance
	window.docs = new Vue({
	  el: '#docs',
	  data: {
	    routes: routes,
	    pageTitle: 'Vuestrap Docs',
	    animation: 'ease',
	    animations: [{ text: 'none', value: 'none' }, { text: 'ease', value: 'ease' }, { text: 'linear', value: 'linear' }, { text: 'ease-in', value: 'ease-in' }, { text: 'ease-out', value: 'ease-out' }, { text: 'ease-in-out', value: 'ease-in-out' }, { text: 'bounce', value: 'bounce' }, { text: 'snappy', value: 'snappy' }, { text: 'out-of-orbit', value: 'out-of-orbit' }],
	    align: 'right',
	    aligns: [{ text: 'left', value: 'left' }, { text: 'right', value: 'right' }],
	    pkg: _packageJson2['default']
	  },
	  methods: {
	    closeDropdownsAndPopovers: function closeDropdownsAndPopovers() {
	      this.$broadcast('hide::popover');
	      this.$broadcast('hide::tooltip');
	      this.$broadcast('hide::dropdown');
	      this.console = '';
	    }
	  },
	  components: {
	    vsDocsPages: _vuestrapDocsSrcComponents.vsDocsPages,
	    vsDocsDrawer: _vuestrapDocsSrcComponents.vsDocsDrawer,
	    vsOffcanvasWrapper: _srcComponentsOffcanvasDrawer.offcanvasWrapper,
	    vsOffcanvasDrawer: _srcComponentsOffcanvasDrawer.offcanvasDrawer,
	    vsToast: _srcComponentsToast2['default']
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT EACH COMPONENT
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _demo = __webpack_require__(2);

	var _demo2 = _interopRequireDefault(_demo);

	var _search = __webpack_require__(8);

	var _search2 = _interopRequireDefault(_search);

	var _docsPages = __webpack_require__(12);

	var _docsPages2 = _interopRequireDefault(_docsPages);

	var _docsDrawer = __webpack_require__(18);

	var _docsDrawer2 = _interopRequireDefault(_docsDrawer);

	var vuestrapDocs = {
	  'vsDemo': _demo2['default'],
	  'vsSearch': _search2['default'],
	  'vsDocsPages': _docsPages2['default'],
	  'vsDocsDrawer': _docsDrawer2['default']
	};

	exports['default'] = vuestrapDocs;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(3);

	var _demoHtml = __webpack_require__(7);

	var _demoHtml2 = _interopRequireDefault(_demoHtml);

	// export component object
	exports['default'] = {
	    template: _demoHtml2['default'],
	    replace: true,
	    props: {
	        meta: {
	            type: Object,
	            'default': {},
	            required: true
	        },
	        snippet: {
	            type: String,
	            'default': '',
	            required: true
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./demo.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./demo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-demo {\n  margin-bottom: 4rem; }\n  .vuestrap-docs-demo .code-demo {\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    padding-bottom: 0;\n    border: solid #f7f7f9;\n    border-width: .2rem; }\n    .vuestrap-docs-demo .code-demo > .inverse {\n      background-color: #898989;\n      padding: 0.2em; }\n  .vuestrap-docs-demo .highlight {\n    padding: 1rem;\n    margin: 1rem -1rem;\n    background-color: #f7f7f9;\n    margin-bottom: 0; }\n    .vuestrap-docs-demo .highlight pre {\n      margin-bottom: 0; }\n  .vuestrap-docs-demo .options > table code {\n    display: inline-block;\n    margin-right: 2px;\n    margin-bottom: 2px; }\n  .vuestrap-docs-demo .options > table td {\n    width: 10%; }\n    .vuestrap-docs-demo .options > table td p {\n      margin: 0; }\n    .vuestrap-docs-demo .options > table td p + p {\n      margin-top: 10px; }\n  .vuestrap-docs-demo .options > table td:nth-child(1) {\n    min-width: 50px;\n    max-width: 150px;\n    color: #563d7c; }\n  .vuestrap-docs-demo .options > table td:nth-child(5) {\n    width: 50%;\n    max-width: 50%;\n    min-width: 200px; }\n  .vuestrap-docs-demo [slot=\"controls\"] {\n    background-color: #f7f7f9;\n    padding: 1rem; }\n  .vuestrap-docs-demo [slot=\"controls\"] label {\n    margin-bottom: 0;\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo label.btn {\n    margin-bottom: 0; }\n  .vuestrap-docs-demo .label {\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo > .label {\n    background-color: #563d7c; }\n  .vuestrap-docs-demo > .alert {\n    border-right-color: #e6e6ec;\n    border-top-color: #e6e6ec;\n    border-bottom-color: #e6e6ec;\n    border-left-width: 5px;\n    background-color: transparent; }\n    .vuestrap-docs-demo > .alert .icons {\n      vertical-align: text-bottom; }\n  .vuestrap-docs-demo .tab-content .tab-pane {\n    padding: 1em 0; }\n", ""]);

	// exports


/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<!--<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon>--> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(9);

	var _searchHtml = __webpack_require__(11);

	var _searchHtml2 = _interopRequireDefault(_searchHtml);

	// export component object
	exports['default'] = {
	    template: _searchHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            search: ''
	        };
	    },
	    filters: {
	        skipIntro: function skipIntro(elements) {
	            var filtered = [];
	            elements.forEach(function (element) {
	                if (element.name !== 'introduction') {
	                    filtered.push(element);
	                }
	            });
	            return filtered;
	        }
	    },
	    props: {
	        showSearch: {
	            type: Number,
	            'default': 5
	        },
	        list: {
	            type: Array,
	            'default': []
	        },
	        currentView: {
	            type: String,
	            'default': null
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./search.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-search .list-group-search {\n  background: #f7f7f9; }\n\n.vuestrap-docs-search .list-group-item.active {\n  color: #42b983;\n  background-color: transparent;\n  border-color: #42b983; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-docs-search list-group\">\r\n  <!-- search -->\r\n  <div class=\"list-group-item list-group-search\" v-if=\"list.length > showSearch\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" v-model=\"search\" autocomplete=\"off\">\r\n  </div>\r\n  <!-- components -->\r\n  <a href=\"#{{item.url}}\" \r\n    v-bind:class=\"{\r\n      'list-group-item': true, \r\n      active: currentView && item.id === currentView,\r\n    }\" \r\n    v-for=\"item in list | skipIntro | filterBy search in 'title'\">\r\n    {{item.title}}\r\n  </a>\r\n</div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(13);

	var _docsPagesHtml = __webpack_require__(15);

	var _docsPagesHtml2 = _interopRequireDefault(_docsPagesHtml);

	// import external dependencies

	var _search = __webpack_require__(8);

	var _search2 = _interopRequireDefault(_search);

	// import utils

	var _utils = __webpack_require__(16);

	// export component object
	exports['default'] = {
	    template: _docsPagesHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            currentView: ''
	        };
	    },
	    props: {
	        routes: {
	            type: Array,
	            required: true
	        },
	        pageTitle: {
	            type: String,
	            required: true
	        },
	        pkg: {
	            type: Object,
	            required: true
	        }
	    },
	    components: {
	        docsSearch: _search2['default']
	    },
	    methods: {
	        changeRoute: function changeRoute(route) {
	            window.scrollTo(0, 0);
	            this.$set('currentView', route.id);
	            this.$set('pageTitle', route.pageTitle);
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        // set routes for each page
	        this.routes.forEach(function (route) {
	            // Adhoc Routing
	            _utils.router.on(route.url, function () {
	                if (route.redirect) {
	                    // if route has redirect param, redirect to the spcified route
	                    _utils.router.setRoute(route.redirect);
	                }
	                _this.changeRoute(route);
	            });
	        });

	        // init router
	        _utils.router.init('/');
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-pages.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-pages.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  height: 100%; }\n\nhtml {\n  font-size: 16px; }\n  @media (max-width: 480px) {\n    html {\n      font-size: 14px; } }\n\nbody {\n  margin: auto;\n  padding: 0;\n  overflow-x: hidden; }\n\nh1, h2, h3 {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #563d7c; }\n\nh2 {\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid #42b983; }\n\nh3 {\n  font-size: 1.3rem !important; }\n\n#docs-pages {\n  overflow-x: hidden; }\n  #docs-pages > .navbar {\n    padding: 0.2em 0 !important;\n    line-height: 3em; }\n    #docs-pages > .navbar .navbar-brand {\n      padding: 0 !important; }\n      #docs-pages > .navbar .navbar-brand img {\n        height: 2.5em; }\n  #docs-pages > .container {\n    padding-top: 5em; }\n\n.list-group-item.active {\n  color: #42b983 !important;\n  border-color: #42b983 !important;\n  background-color: transparent !important; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<!-- header -->\r\n<nav class=\"navbar navbar-fixed-top navbar-light bg-faded\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\t<img v-bind:src=\"'assets/vuestrap-logo.svg'\" alt=\"Vuestrap logo\">\r\n\t\t\t</a>\r\n\t\t\t<a class=\"navbar-brand text-center hidden-sm-down\" href=\"#/\">\r\n\t\t\t\tDocumentation\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\r\n\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t<a href=\"#/\" class=\"btn\">Introduction</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success\" target=\"_blank\">&#9733; Github</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item hidden-md-up\">\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-success\" target=\"_blank\" v-on:click.stop.prevent=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">&#9776;</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n  </div><!-- /.container -->\r\n</nav><!-- /.navbar -->\r\n\r\n<!-- content -->\r\n<div class=\"container\">\r\n\t<div class=\"row row-offcanvas row-offcanvas-right\">\r\n\t\t<div class=\"col-xs-12 col-md-9\">\r\n\t\t\t<component :is=\"currentView\"></component>\r\n    </div><!-- /col-xs-12 -->\r\n\r\n\t\t<!-- sidebar -->\r\n\t\t<div class=\"col-xs-12 col-md-3 sidebar-offcanvas hidden-sm-down\" id=\"sidebar\">\r\n\t\t\t<docs-search :list=\"routes\" :current-view=\"currentView\"></docs-search>\r\n\t\t</div><!--/sidebar-->\r\n\r\n\t</div><!--/row-->\r\n</div><!--/container-->";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Routes helper
	 */

	// import router
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	// create director instance
	var router = new _director2['default'].Router().configure({ strict: false });

	exports.router = router;
	// gets routes info from the nested array of pages
	var getRoutes = function getRoutes(arr) {
	  var parentId = '';
	  var parentTitle = '';
	  var parentUrl = '';
	  var routes = [];
	  var extractRoutes = function extractRoutes(data) {
	    for (var i = 0; i < data.pages.length; i++) {
	      var route = data.pages[i].route;
	      if (!route) throw new Error('Route object is missing.');
	      if (!route.name) throw new Error('Route object is missing "name" parameter.');
	      if (!route.url) throw new Error('Route object is missing "url" parameter.');
	      route.id = parentId ? parentId + route.name : route.name;
	      route.pageTitle = parentTitle ? parentTitle + route.title : route.title;
	      route.url = parentUrl ? parentUrl + route.url : route.url;

	      // add route to components object
	      route.component = data.pages[i];

	      // add route to the routes collection
	      routes.push(route);

	      // go to nested pages
	      if (data.pages[i].pages instanceof Array) {
	        parentId += route.name + '.';
	        parentTitle += route.title + ' - ';
	        parentUrl += route.url;
	        extractRoutes(data.pages[i]);
	      }
	    }
	  };

	  // get all routes from nested objects
	  extractRoutes(arr);
	  return routes;
	};
	exports.getRoutes = getRoutes;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	

	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	//

	(function (exports) {

	/*
	 * browser.js: Browser specific functionality for director.
	 *
	 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
	 * MIT LICENSE
	 *
	 */

	var dloc = document.location;

	function dlocHashEmpty() {
	  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
	  // assumes both mean empty.
	  return dloc.hash === '' || dloc.hash === '#';
	}

	var listener = {
	  mode: 'modern',
	  hash: dloc.hash,
	  history: false,

	  check: function () {
	    var h = dloc.hash;
	    if (h != this.hash) {
	      this.hash = h;
	      this.onHashChanged();
	    }
	  },

	  fire: function () {
	    if (this.mode === 'modern') {
	      this.history === true ? window.onpopstate() : window.onhashchange();
	    }
	    else {
	      this.onHashChanged();
	    }
	  },

	  init: function (fn, history) {
	    var self = this;
	    this.history = history;

	    if (!Router.listeners) {
	      Router.listeners = [];
	    }

	    function onchange(onChangeEvent) {
	      for (var i = 0, l = Router.listeners.length; i < l; i++) {
	        Router.listeners[i](onChangeEvent);
	      }
	    }

	    //note IE8 is being counted as 'modern' because it has the hashchange event
	    if ('onhashchange' in window && (document.documentMode === undefined
	      || document.documentMode > 7)) {
	      // At least for now HTML5 history is available for 'modern' browsers only
	      if (this.history === true) {
	        // There is an old bug in Chrome that causes onpopstate to fire even
	        // upon initial page load. Since the handler is run manually in init(),
	        // this would cause Chrome to run it twise. Currently the only
	        // workaround seems to be to set the handler after the initial page load
	        // http://code.google.com/p/chromium/issues/detail?id=63040
	        setTimeout(function() {
	          window.onpopstate = onchange;
	        }, 500);
	      }
	      else {
	        window.onhashchange = onchange;
	      }
	      this.mode = 'modern';
	    }
	    else {
	      //
	      // IE support, based on a concept by Erik Arvidson ...
	      //
	      var frame = document.createElement('iframe');
	      frame.id = 'state-frame';
	      frame.style.display = 'none';
	      document.body.appendChild(frame);
	      this.writeFrame('');

	      if ('onpropertychange' in document && 'attachEvent' in document) {
	        document.attachEvent('onpropertychange', function () {
	          if (event.propertyName === 'location') {
	            self.check();
	          }
	        });
	      }

	      window.setInterval(function () { self.check(); }, 50);

	      this.onHashChanged = onchange;
	      this.mode = 'legacy';
	    }

	    Router.listeners.push(fn);

	    return this.mode;
	  },

	  destroy: function (fn) {
	    if (!Router || !Router.listeners) {
	      return;
	    }

	    var listeners = Router.listeners;

	    for (var i = listeners.length - 1; i >= 0; i--) {
	      if (listeners[i] === fn) {
	        listeners.splice(i, 1);
	      }
	    }
	  },

	  setHash: function (s) {
	    // Mozilla always adds an entry to the history
	    if (this.mode === 'legacy') {
	      this.writeFrame(s);
	    }

	    if (this.history === true) {
	      window.history.pushState({}, document.title, s);
	      // Fire an onpopstate event manually since pushing does not obviously
	      // trigger the pop event.
	      this.fire();
	    } else {
	      dloc.hash = (s[0] === '/') ? s : '/' + s;
	    }
	    return this;
	  },

	  writeFrame: function (s) {
	    // IE support...
	    var f = document.getElementById('state-frame');
	    var d = f.contentDocument || f.contentWindow.document;
	    d.open();
	    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	    d.close();
	  },

	  syncHash: function () {
	    // IE support...
	    var s = this._hash;
	    if (s != dloc.hash) {
	      dloc.hash = s;
	    }
	    return this;
	  },

	  onHashChanged: function () {}
	};

	var Router = exports.Router = function (routes) {
	  if (!(this instanceof Router)) return new Router(routes);

	  this.params   = {};
	  this.routes   = {};
	  this.methods  = ['on', 'once', 'after', 'before'];
	  this.scope    = [];
	  this._methods = {};

	  this._insert = this.insert;
	  this.insert = this.insertEx;

	  this.historySupport = (window.history != null ? window.history.pushState : null) != null

	  this.configure();
	  this.mount(routes || {});
	};

	Router.prototype.init = function (r) {
	  var self = this
	    , routeTo;
	  this.handler = function(onChangeEvent) {
	    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
	    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
	    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
	  };

	  listener.init(this.handler, this.history);

	  if (this.history === false) {
	    if (dlocHashEmpty() && r) {
	      dloc.hash = r;
	    } else if (!dlocHashEmpty()) {
	      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
	    }
	  }
	  else {
	    if (this.convert_hash_in_init) {
	      // Use hash as route
	      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	      if (routeTo) {
	        window.history.replaceState({}, document.title, routeTo);
	      }
	    }
	    else {
	      // Use canonical url
	      routeTo = this.getPath();
	    }

	    // Router has been initialized, but due to the chrome bug it will not
	    // yet actually route HTML5 history state changes. Thus, decide if should route.
	    if (routeTo || this.run_in_init === true) {
	      this.handler();
	    }
	  }

	  return this;
	};

	Router.prototype.explode = function () {
	  var v = this.history === true ? this.getPath() : dloc.hash;
	  if (v.charAt(1) === '/') { v=v.slice(1) }
	  return v.slice(1, v.length).split("/");
	};

	Router.prototype.setRoute = function (i, v, val) {
	  var url = this.explode();

	  if (typeof i === 'number' && typeof v === 'string') {
	    url[i] = v;
	  }
	  else if (typeof val === 'string') {
	    url.splice(i, v, s);
	  }
	  else {
	    url = [i];
	  }

	  listener.setHash(url.join('/'));
	  return url;
	};

	//
	// ### function insertEx(method, path, route, parent)
	// #### @method {string} Method to insert the specific `route`.
	// #### @path {Array} Parsed path to insert the `route` at.
	// #### @route {Array|function} Route handlers to insert.
	// #### @parent {Object} **Optional** Parent "routes" to insert into.
	// insert a callback that will only occur once per the matched route.
	//
	Router.prototype.insertEx = function(method, path, route, parent) {
	  if (method === "once") {
	    method = "on";
	    route = function(route) {
	      var once = false;
	      return function() {
	        if (once) return;
	        once = true;
	        return route.apply(this, arguments);
	      };
	    }(route);
	  }
	  return this._insert(method, path, route, parent);
	};

	Router.prototype.getRoute = function (v) {
	  var ret = v;

	  if (typeof v === "number") {
	    ret = this.explode()[v];
	  }
	  else if (typeof v === "string"){
	    var h = this.explode();
	    ret = h.indexOf(v);
	  }
	  else {
	    ret = this.explode();
	  }

	  return ret;
	};

	Router.prototype.destroy = function () {
	  listener.destroy(this.handler);
	  return this;
	};

	Router.prototype.getPath = function () {
	  var path = window.location.pathname;
	  if (path.substr(0, 1) !== '/') {
	    path = '/' + path;
	  }
	  return path;
	};
	function _every(arr, iterator) {
	  for (var i = 0; i < arr.length; i += 1) {
	    if (iterator(arr[i], i, arr) === false) {
	      return;
	    }
	  }
	}

	function _flatten(arr) {
	  var flat = [];
	  for (var i = 0, n = arr.length; i < n; i++) {
	    flat = flat.concat(arr[i]);
	  }
	  return flat;
	}

	function _asyncEverySeries(arr, iterator, callback) {
	  if (!arr.length) {
	    return callback();
	  }
	  var completed = 0;
	  (function iterate() {
	    iterator(arr[completed], function(err) {
	      if (err || err === false) {
	        callback(err);
	        callback = function() {};
	      } else {
	        completed += 1;
	        if (completed === arr.length) {
	          callback();
	        } else {
	          iterate();
	        }
	      }
	    });
	  })();
	}

	function paramifyString(str, params, mod) {
	  mod = str;
	  for (var param in params) {
	    if (params.hasOwnProperty(param)) {
	      mod = params[param](str);
	      if (mod !== str) {
	        break;
	      }
	    }
	  }
	  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
	}

	function regifyString(str, params) {
	  var matches, last = 0, out = "";
	  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	    last = matches.index + matches[0].length;
	    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	    out += str.substr(0, matches.index) + matches[0];
	  }
	  str = out += str.substr(last);
	  var captures = str.match(/:([^\/]+)/ig), capture, length;
	  if (captures) {
	    length = captures.length;
	    for (var i = 0; i < length; i++) {
	      capture = captures[i];
	      if (capture.slice(0, 2) === "::") {
	        str = capture.slice(1);
	      } else {
	        str = str.replace(capture, paramifyString(capture, params));
	      }
	    }
	  }
	  return str;
	}

	function terminator(routes, delimiter, start, stop) {
	  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
	  for (i = 0; i < routes.length; i++) {
	    var chunk = routes[i];
	    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	      left = chunk.indexOf(start, last);
	      right = chunk.indexOf(stop, last);
	      if (~left && !~right || !~left && ~right) {
	        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
	      }
	      last = (right > left ? right : left) + 1;
	      i = 0;
	    } else {
	      last = 0;
	    }
	  }
	  return routes;
	}

	var QUERY_SEPARATOR = /\?.*/;

	Router.prototype.configure = function(options) {
	  options = options || {};
	  for (var i = 0; i < this.methods.length; i++) {
	    this._methods[this.methods[i]] = true;
	  }
	  this.recurse = options.recurse || this.recurse || false;
	  this.async = options.async || false;
	  this.delimiter = options.delimiter || "/";
	  this.strict = typeof options.strict === "undefined" ? true : options.strict;
	  this.notfound = options.notfound;
	  this.resource = options.resource;
	  this.history = options.html5history && this.historySupport || false;
	  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
	  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
	  this.every = {
	    after: options.after || null,
	    before: options.before || null,
	    on: options.on || null
	  };
	  return this;
	};

	Router.prototype.param = function(token, matcher) {
	  if (token[0] !== ":") {
	    token = ":" + token;
	  }
	  var compiled = new RegExp(token, "g");
	  this.params[token] = function(str) {
	    return str.replace(compiled, matcher.source || matcher);
	  };
	  return this;
	};

	Router.prototype.on = Router.prototype.route = function(method, path, route) {
	  var self = this;
	  if (!route && typeof path == "function") {
	    route = path;
	    path = method;
	    method = "on";
	  }
	  if (Array.isArray(path)) {
	    return path.forEach(function(p) {
	      self.on(method, p, route);
	    });
	  }
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  if (Array.isArray(method)) {
	    return method.forEach(function(m) {
	      self.on(m.toLowerCase(), path, route);
	    });
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.insert(method, this.scope.concat(path), route);
	};

	Router.prototype.path = function(path, routesFn) {
	  var self = this, length = this.scope.length;
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.scope = this.scope.concat(path);
	  routesFn.call(this, this);
	  this.scope.splice(length, path.length);
	};

	Router.prototype.dispatch = function(method, path, callback) {
	  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
	  this._invoked = true;
	  if (!fns || fns.length === 0) {
	    this.last = [];
	    if (typeof this.notfound === "function") {
	      this.invoke([ this.notfound ], {
	        method: method,
	        path: path
	      }, callback);
	    }
	    return false;
	  }
	  if (this.recurse === "forward") {
	    fns = fns.reverse();
	  }
	  function updateAndInvoke() {
	    self.last = fns.after;
	    self.invoke(self.runlist(fns), self, callback);
	  }
	  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
	  if (after && after.length > 0 && invoked) {
	    if (this.async) {
	      this.invoke(after, this, updateAndInvoke);
	    } else {
	      this.invoke(after, this);
	      updateAndInvoke();
	    }
	    return true;
	  }
	  updateAndInvoke();
	  return true;
	};

	Router.prototype.invoke = function(fns, thisArg, callback) {
	  var self = this;
	  var apply;
	  if (this.async) {
	    apply = function(fn, next) {
	      if (Array.isArray(fn)) {
	        return _asyncEverySeries(fn, apply, next);
	      } else if (typeof fn == "function") {
	        fn.apply(thisArg, (fns.captures || []).concat(next));
	      }
	    };
	    _asyncEverySeries(fns, apply, function() {
	      if (callback) {
	        callback.apply(thisArg, arguments);
	      }
	    });
	  } else {
	    apply = function(fn) {
	      if (Array.isArray(fn)) {
	        return _every(fn, apply);
	      } else if (typeof fn === "function") {
	        return fn.apply(thisArg, fns.captures || []);
	      } else if (typeof fn === "string" && self.resource) {
	        self.resource[fn].apply(thisArg, fns.captures || []);
	      }
	    };
	    _every(fns, apply);
	  }
	};

	Router.prototype.traverse = function(method, path, routes, regexp, filter) {
	  var fns = [], current, exact, match, next, that;
	  function filterRoutes(routes) {
	    if (!filter) {
	      return routes;
	    }
	    function deepCopy(source) {
	      var result = [];
	      for (var i = 0; i < source.length; i++) {
	        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
	      }
	      return result;
	    }
	    function applyFilter(fns) {
	      for (var i = fns.length - 1; i >= 0; i--) {
	        if (Array.isArray(fns[i])) {
	          applyFilter(fns[i]);
	          if (fns[i].length === 0) {
	            fns.splice(i, 1);
	          }
	        } else {
	          if (!filter(fns[i])) {
	            fns.splice(i, 1);
	          }
	        }
	      }
	    }
	    var newRoutes = deepCopy(routes);
	    newRoutes.matched = routes.matched;
	    newRoutes.captures = routes.captures;
	    newRoutes.after = routes.after.filter(filter);
	    applyFilter(newRoutes);
	    return newRoutes;
	  }
	  if (path === this.delimiter && routes[method]) {
	    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
	    next.after = [ routes.after ].filter(Boolean);
	    next.matched = true;
	    next.captures = [];
	    return filterRoutes(next);
	  }
	  for (var r in routes) {
	    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
	      current = exact = regexp + this.delimiter + r;
	      if (!this.strict) {
	        exact += "[" + this.delimiter + "]?";
	      }
	      match = path.match(new RegExp("^" + exact));
	      if (!match) {
	        continue;
	      }
	      if (match[0] && match[0] == path && routes[r][method]) {
	        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
	        next.after = [ routes[r].after ].filter(Boolean);
	        next.matched = true;
	        next.captures = match.slice(1);
	        if (this.recurse && routes === this.routes) {
	          next.push([ routes.before, routes.on ].filter(Boolean));
	          next.after = next.after.concat([ routes.after ].filter(Boolean));
	        }
	        return filterRoutes(next);
	      }
	      next = this.traverse(method, path, routes[r], current);
	      if (next.matched) {
	        if (next.length > 0) {
	          fns = fns.concat(next);
	        }
	        if (this.recurse) {
	          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
	          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
	          if (routes === this.routes) {
	            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
	            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
	          }
	        }
	        fns.matched = true;
	        fns.captures = next.captures;
	        fns.after = next.after;
	        return filterRoutes(fns);
	      }
	    }
	  }
	  return false;
	};

	Router.prototype.insert = function(method, path, route, parent) {
	  var methodType, parentType, isArray, nested, part;
	  path = path.filter(function(p) {
	    return p && p.length > 0;
	  });
	  parent = parent || this.routes;
	  part = path.shift();
	  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
	    part = regifyString(part, this.params);
	  }
	  if (path.length > 0) {
	    parent[part] = parent[part] || {};
	    return this.insert(method, path, route, parent[part]);
	  }
	  if (!part && !path.length && parent === this.routes) {
	    methodType = typeof parent[method];
	    switch (methodType) {
	     case "function":
	      parent[method] = [ parent[method], route ];
	      return;
	     case "object":
	      parent[method].push(route);
	      return;
	     case "undefined":
	      parent[method] = route;
	      return;
	    }
	    return;
	  }
	  parentType = typeof parent[part];
	  isArray = Array.isArray(parent[part]);
	  if (parent[part] && !isArray && parentType == "object") {
	    methodType = typeof parent[part][method];
	    switch (methodType) {
	     case "function":
	      parent[part][method] = [ parent[part][method], route ];
	      return;
	     case "object":
	      parent[part][method].push(route);
	      return;
	     case "undefined":
	      parent[part][method] = route;
	      return;
	    }
	  } else if (parentType == "undefined") {
	    nested = {};
	    nested[method] = route;
	    parent[part] = nested;
	    return;
	  }
	  throw new Error("Invalid route context: " + parentType);
	};



	Router.prototype.extend = function(methods) {
	  var self = this, len = methods.length, i;
	  function extend(method) {
	    self._methods[method] = true;
	    self[method] = function() {
	      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
	      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	    };
	  }
	  for (i = 0; i < len; i++) {
	    extend(methods[i]);
	  }
	};

	Router.prototype.runlist = function(fns) {
	  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
	  if (this.every && this.every.on) {
	    runlist.push(this.every.on);
	  }
	  runlist.captures = fns.captures;
	  runlist.source = fns.source;
	  return runlist;
	};

	Router.prototype.mount = function(routes, path) {
	  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	    return;
	  }
	  var self = this;
	  path = path || [];
	  if (!Array.isArray(path)) {
	    path = path.split(self.delimiter);
	  }
	  function insertOrMount(route, local) {
	    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
	    if (isRoute) {
	      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
	      parts.shift();
	    }
	    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
	      local = local.concat(parts);
	      self.mount(routes[route], local);
	      return;
	    }
	    if (isRoute) {
	      local = local.concat(rename.split(self.delimiter));
	      local = terminator(local, self.delimiter);
	    }
	    self.insert(event, local, routes[route]);
	  }
	  for (var route in routes) {
	    if (routes.hasOwnProperty(route)) {
	      insertOrMount(route, path.slice(0));
	    }
	  }
	};



	}( true ? exports : window));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(19);

	var _docsDrawerHtml = __webpack_require__(21);

	var _docsDrawerHtml2 = _interopRequireDefault(_docsDrawerHtml);

	// import external dependencies

	var _search = __webpack_require__(8);

	var _search2 = _interopRequireDefault(_search);

	// export component object
	exports['default'] = {
	    template: _docsDrawerHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            currentView: ''
	        };
	    },
	    props: {
	        routes: {
	            type: Array,
	            required: true
	        },
	        pkg: {
	            type: Object,
	            required: true
	        }
	    },
	    components: {
	        docsSearch: _search2['default']
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-drawer.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-drawer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* offcanvas menu */\n.offcanvas-drawer .close {\n  padding-top: 0.35em; }\n\n.navbar a.list-group-item {\n  width: 100%;\n  color: #C5C5C5;\n  text-align: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: 1px solid rgba(221, 221, 221, 0.04);\n  border-right: 0;\n  border-left: 0; }\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navbar navbar-collapse navbar-dark navbar-primary bg-inverse navbar-static-top navbar-full navbar-offcanvas-drawer\">\r\n\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success pull-left\" target=\"_blank\" v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n  \t&#9733; Github\r\n  </a>\r\n  <!-- close button -->\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n    <span aria-hidden=\"true\">×</span>\r\n    <span class=\"sr-only\">Close</span>\r\n  </button>\r\n  <div class=\"m-b clearfix\"></div>\r\n  <div class=\"list-group list-group-flush\">\r\n\t  <a href=\"#{{item.url}}\" \r\n\t    v-bind:class=\"{\r\n\t      'list-group-item': true, \r\n\t    }\" \r\n\t    v-for=\"item in routes\"\r\n\t    v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n\t    {{item.title}}\r\n\t  </a>\r\n\t</div>\r\n</div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(23);

	// import template

	var _offcanvasDrawerHtml = __webpack_require__(25);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * Off Canvas drawer\r\n * based on https://scotch.io/tutorials/off-canvas-drawers-with-css3-transitions-and-transforms\r\n * --------------------------------------------------\r\n */\n.gritcode-offcanvas-drawer {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -ms-transform: translate(0, 0);\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .gritcode-offcanvas-drawer .offcanvas-drawer {\n    width: 100%;\n    left: -100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 9999; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .close {\n      color: #fff; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .navbar {\n      height: 100%; }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer .offcanvas-drawer {\n        width: 300px;\n        left: -300px; } }\n  .gritcode-offcanvas-drawer.active {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    -ms-transform: translate(100%, 0); }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer.active {\n        -webkit-transform: translate(300px, 0);\n                transform: translate(300px, 0);\n        -webkit-transform: translate3d(300px, 0, 0);\n                transform: translate3d(300px, 0, 0);\n        -ms-transform: translate(300px, 0); } }\n\n.gritcode-offcanvas-drawer.right .offcanvas-drawer {\n  left: auto;\n  right: -100%; }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right .offcanvas-drawer {\n      left: auto;\n      right: -300px; } }\n\n.gritcode-offcanvas-drawer.right.active {\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0); }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right.active {\n      -webkit-transform: translate(-300px, 0);\n              transform: translate(-300px, 0);\n      -webkit-transform: translate3d(-300px, 0, 0);\n              transform: translate3d(-300px, 0, 0);\n      -ms-transform: translate(-300px, 0); } }\n\n.gritcode-offcanvas-drawer.ease {\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform; }\n\n.gritcode-offcanvas-drawer.linear {\n  -webkit-transition: 300ms linear transform;\n  transition: 300ms linear transform; }\n\n.gritcode-offcanvas-drawer.ease-in {\n  -webkit-transition: 300ms ease-in transform;\n  transition: 300ms ease-in transform; }\n\n.gritcode-offcanvas-drawer.ease-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.ease-in-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.bounce {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15), -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15); }\n\n.gritcode-offcanvas-drawer.snappy {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1); }\n\n.gritcode-offcanvas-drawer.out-of-orbit {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15), -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15); }\n\n.gritcode-offcanvas-drawer.none {\n  -webkit-transition: none;\n  transition: none; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active .offcanvas-drawer {\n  left: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-bottom {\n  left: 300px;\n  right: auto;\n  width: 100%; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active.right .offcanvas-drawer {\n  left: auto;\n  right: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom {\n  left: -300px;\n  right: auto;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-offcanvas-drawer {{animation}} {{align}} {{show ? 'active' : ''}}\">\r\n  <slot></slot>\r\n</div>\r\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(27);

	// import template

	var _toastHtml = __webpack_require__(29);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".toast-gritcode {\n  display: table;\n  position: fixed;\n  min-height: 48px;\n  min-width: 288px;\n  max-width: 600px;\n  padding: 16px 24px 16px 24px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 2px;\n  left: 0;\n  bottom: 0;\n  margin: 12px;\n  font-size: 14px;\n  cursor: default;\n  -webkit-transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: visibility 0.3s, transform 0.3s, opacity 0.3s;\n  transition: visibility 0.3s, transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: translateY(100px);\n          transform: translateY(100px);\n  -ms-transform: translateY(100px);\n  z-index: 9999; }\n  .toast-gritcode.active {\n    visibility: visible;\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    -ms-transform: translateY(0px); }\n  .toast-gritcode.top {\n    top: 0;\n    bottom: auto;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n    -ms-transform: translateY(-100px); }\n    .toast-gritcode.top.active {\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px);\n      -ms-transform: translateY(0px); }\n  .toast-gritcode.right {\n    left: auto;\n    right: 0; }\n  .toast-gritcode .progress-bar {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 0.4em;\n    background: rgba(255, 255, 255, 0.3);\n    width: 0;\n    -webkit-transition: width 3s;\n    transition: width 3s; }\n    .toast-gritcode .progress-bar.active {\n      width: 100%; }\n  .toast-gritcode .message, .toast-gritcode .action {\n    vertical-align: middle;\n    display: table-cell; }\n  .toast-gritcode .action {\n    text-align: right; }\n\n.toast-gritcode {\n  background-color: #818a91;\n  color: #fff; }\n  .toast-gritcode.toast-info {\n    background-color: #5bc0de;\n    color: #fff; }\n  .toast-gritcode.toast-success {\n    background-color: #42b983;\n    color: #fff; }\n  .toast-gritcode.toast-warning {\n    background-color: #f0ad4e;\n    color: #fff; }\n  .toast-gritcode.toast-danger {\n    background-color: #d9534f;\n    color: #fff; }\n  .toast-gritcode.toast-dark {\n    background-color: #000;\n    color: #fff; }\n  .toast-gritcode.toast-light {\n    background-color: #fff;\n    color: #000; }\n\n.lt-ie10 .progress-bar, .ie9 .progress-bar, .oldie .progress-bar, .no-csstransitions .progress-bar {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"toast toast-gritcode {{activeToast ? 'active' : ''}} {{position}} {{toastContext}} {{hideProgress ? '' : 'has-progress'}}\" v-on:mouseover=\"pause\" v-on:mouseout=\"animate\">\r\n  <div v-html=\"message\"></div>\r\n  <div class=\"action\">\r\n\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-on:click=\"clear\">\r\n\t    <span aria-hidden=\"true\">&times;</span>\r\n\t  </button>\r\n  </div>\r\n  <div v-bind:class=\"{'progress-bar': true, active: activeProgressBar}\" v-bind:style=\"style\" v-show=\"!hideProgress\"></div>\r\n</div>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */
	// import normalize, grid, utilities and
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(31);

	// import vuestrap dependencies

	__webpack_require__(34);

	__webpack_require__(37);

	__webpack_require__(44);

	__webpack_require__(45);

	__webpack_require__(50);

	__webpack_require__(53);

	__webpack_require__(54);

	__webpack_require__(57);

	__webpack_require__(60);

	// import modules and pages

	var _srcDocsIntroduction = __webpack_require__(63);

	var _srcDocsIntroduction2 = _interopRequireDefault(_srcDocsIntroduction);

	var _srcDocsToast = __webpack_require__(69);

	var _srcDocsToast2 = _interopRequireDefault(_srcDocsToast);

	var _srcDocsTruncate = __webpack_require__(73);

	var _srcDocsTruncate2 = _interopRequireDefault(_srcDocsTruncate);

	var _srcDocsSpinner = __webpack_require__(81);

	var _srcDocsSpinner2 = _interopRequireDefault(_srcDocsSpinner);

	var _srcDocsOffcanvasDrawer = __webpack_require__(90);

	var _srcDocsOffcanvasDrawer2 = _interopRequireDefault(_srcDocsOffcanvasDrawer);

	var _srcDocsDropdownMultiselect = __webpack_require__(94);

	var _srcDocsDropdownMultiselect2 = _interopRequireDefault(_srcDocsDropdownMultiselect);

	var _srcDocsButtonToggle = __webpack_require__(107);

	var _srcDocsButtonToggle2 = _interopRequireDefault(_srcDocsButtonToggle);

	var _srcDocsFileUpload = __webpack_require__(115);

	var _srcDocsFileUpload2 = _interopRequireDefault(_srcDocsFileUpload);

	var _srcDocsWizard = __webpack_require__(124);

	var _srcDocsWizard2 = _interopRequireDefault(_srcDocsWizard);

	exports['default'] = {
		pages: [_srcDocsIntroduction2['default'], _srcDocsToast2['default'], _srcDocsTruncate2['default'], _srcDocsSpinner2['default'], _srcDocsOffcanvasDrawer2['default'], _srcDocsDropdownMultiselect2['default'], _srcDocsButtonToggle2['default'], _srcDocsFileUpload2['default'], _srcDocsWizard2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';

	__webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_core.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active {\n  outline: 0; }\n\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n@-moz-viewport {\n  width: device-width; }\n\n@-ms-viewport {\n  width: device-width; }\n\n@-o-viewport {\n  width: device-width; }\n\n@-webkit-viewport {\n  width: device-width; }\n\n@viewport {\n  width: device-width; }\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\na {\n  color: #563d7c;\n  text-decoration: none; }\n  a:focus, a:hover {\n    color: #322449;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: left; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit; }\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none; }\n\noutput {\n  display: inline-block; }\n\n[hidden] {\n  display: none !important; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: .5; }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem; }\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.275rem 0.75rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.75rem 1.25rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.85714%; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.75rem; }\n\nh4 {\n  font-size: 1.5rem; }\n\nh5 {\n  font-size: 1.25rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.h1 {\n  font-size: 2.5rem; }\n\n.h2 {\n  font-size: 2rem; }\n\n.h3 {\n  font-size: 1.75rem; }\n\n.h4 {\n  font-size: 1.5rem; }\n\n.h5 {\n  font-size: 1.25rem; }\n\n.h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem; }\n  .dl-horizontal::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef; }\n  .blockquote p:last-child,\n  .blockquote ul:last-child,\n  .blockquote ol:last-child {\n    margin-bottom: 0; }\n  .blockquote footer {\n    display: block;\n    font-size: 80%;\n    line-height: 1.5;\n    color: #818a91; }\n    .blockquote footer::before {\n      content: \"\\2014   \\A0\"; }\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0; }\n  .blockquote-reverse footer::before {\n    content: \"\"; }\n  .blockquote-reverse footer::after {\n    content: \"\\A0   \\2014\"; }\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n\n.bg-faded {\n  background-color: #f7f7f9; }\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #563d7c !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #3e2c5a; }\n\n.bg-success {\n  color: #fff !important;\n  background-color: #42b983 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #359368; }\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #31b0d5; }\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #ec971f; }\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #c9302c; }\n\n.hidden-xs-up {\n  display: none !important; }\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important; } }\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important; } }\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important; } }\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important; } }\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important; } }\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important; } }\n\n.hidden-xl-down {\n  display: none !important; }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.m-a-0 {\n  margin: 0 !important; }\n\n.m-t-0 {\n  margin-top: 0 !important; }\n\n.m-r-0 {\n  margin-right: 0 !important; }\n\n.m-b-0 {\n  margin-bottom: 0 !important; }\n\n.m-l-0 {\n  margin-left: 0 !important; }\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-a {\n  margin: 1rem !important; }\n\n.m-t {\n  margin-top: 1rem !important; }\n\n.m-r {\n  margin-right: 1rem !important; }\n\n.m-b {\n  margin-bottom: 1rem !important; }\n\n.m-l {\n  margin-left: 1rem !important; }\n\n.m-x {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.m-y {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.m-a-md {\n  margin: 1.5rem !important; }\n\n.m-t-md {\n  margin-top: 1.5rem !important; }\n\n.m-r-md {\n  margin-right: 1.5rem !important; }\n\n.m-b-md {\n  margin-bottom: 1.5rem !important; }\n\n.m-l-md {\n  margin-left: 1.5rem !important; }\n\n.m-x-md {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.m-y-md {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-a-lg {\n  margin: 3rem !important; }\n\n.m-t-lg {\n  margin-top: 3rem !important; }\n\n.m-r-lg {\n  margin-right: 3rem !important; }\n\n.m-b-lg {\n  margin-bottom: 3rem !important; }\n\n.m-l-lg {\n  margin-left: 3rem !important; }\n\n.m-x-lg {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.m-y-lg {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.p-a-0 {\n  padding: 0 !important; }\n\n.p-t-0 {\n  padding-top: 0 !important; }\n\n.p-r-0 {\n  padding-right: 0 !important; }\n\n.p-b-0 {\n  padding-bottom: 0 !important; }\n\n.p-l-0 {\n  padding-left: 0 !important; }\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-a {\n  padding: 1rem !important; }\n\n.p-t {\n  padding-top: 1rem !important; }\n\n.p-r {\n  padding-right: 1rem !important; }\n\n.p-b {\n  padding-bottom: 1rem !important; }\n\n.p-l {\n  padding-left: 1rem !important; }\n\n.p-x {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.p-y {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-a-md {\n  padding: 1.5rem !important; }\n\n.p-t-md {\n  padding-top: 1.5rem !important; }\n\n.p-r-md {\n  padding-right: 1.5rem !important; }\n\n.p-b-md {\n  padding-bottom: 1.5rem !important; }\n\n.p-l-md {\n  padding-left: 1.5rem !important; }\n\n.p-x-md {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.p-y-md {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-a-lg {\n  padding: 3rem !important; }\n\n.p-t-lg {\n  padding-top: 3rem !important; }\n\n.p-r-lg {\n  padding-right: 3rem !important; }\n\n.p-b-lg {\n  padding-bottom: 3rem !important; }\n\n.p-l-lg {\n  padding-left: 3rem !important; }\n\n.p-x-lg {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.p-y-lg {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-xs-left {\n  text-align: left !important; }\n\n.text-xs-right {\n  text-align: right !important; }\n\n.text-xs-center {\n  text-align: center !important; }\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.text-muted {\n  color: #818a91; }\n\n.text-primary {\n  color: #563d7c !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #3e2c5a; }\n\n.text-success {\n  color: #42b983 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #359368; }\n\n.text-info {\n  color: #5bc0de !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #31b0d5; }\n\n.text-warning {\n  color: #f0ad4e !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #ec971f; }\n\n.text-danger {\n  color: #d9534f !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #c9302c; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .container {\n      max-width: 576px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 940px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container-fluid::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row {\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 544px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 768px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n    float: left; }\n  .col-xl-1 {\n    width: 8.33333%; }\n  .col-xl-2 {\n    width: 16.66667%; }\n  .col-xl-3 {\n    width: 25%; }\n  .col-xl-4 {\n    width: 33.33333%; }\n  .col-xl-5 {\n    width: 41.66667%; }\n  .col-xl-6 {\n    width: 50%; }\n  .col-xl-7 {\n    width: 58.33333%; }\n  .col-xl-8 {\n    width: 66.66667%; }\n  .col-xl-9 {\n    width: 75%; }\n  .col-xl-10 {\n    width: 83.33333%; }\n  .col-xl-11 {\n    width: 91.66667%; }\n  .col-xl-12 {\n    width: 100%; }\n  .col-xl-pull-0 {\n    right: auto; }\n  .col-xl-pull-1 {\n    right: 8.33333%; }\n  .col-xl-pull-2 {\n    right: 16.66667%; }\n  .col-xl-pull-3 {\n    right: 25%; }\n  .col-xl-pull-4 {\n    right: 33.33333%; }\n  .col-xl-pull-5 {\n    right: 41.66667%; }\n  .col-xl-pull-6 {\n    right: 50%; }\n  .col-xl-pull-7 {\n    right: 58.33333%; }\n  .col-xl-pull-8 {\n    right: 66.66667%; }\n  .col-xl-pull-9 {\n    right: 75%; }\n  .col-xl-pull-10 {\n    right: 83.33333%; }\n  .col-xl-pull-11 {\n    right: 91.66667%; }\n  .col-xl-pull-12 {\n    right: 100%; }\n  .col-xl-push-0 {\n    left: auto; }\n  .col-xl-push-1 {\n    left: 8.33333%; }\n  .col-xl-push-2 {\n    left: 16.66667%; }\n  .col-xl-push-3 {\n    left: 25%; }\n  .col-xl-push-4 {\n    left: 33.33333%; }\n  .col-xl-push-5 {\n    left: 41.66667%; }\n  .col-xl-push-6 {\n    left: 50%; }\n  .col-xl-push-7 {\n    left: 58.33333%; }\n  .col-xl-push-8 {\n    left: 66.66667%; }\n  .col-xl-push-9 {\n    left: 75%; }\n  .col-xl-push-10 {\n    left: 83.33333%; }\n  .col-xl-push-11 {\n    left: 91.66667%; }\n  .col-xl-push-12 {\n    left: 100%; }\n  .col-xl-offset-0 {\n    margin-left: 0%; }\n  .col-xl-offset-1 {\n    margin-left: 8.33333%; }\n  .col-xl-offset-2 {\n    margin-left: 16.66667%; }\n  .col-xl-offset-3 {\n    margin-left: 25%; }\n  .col-xl-offset-4 {\n    margin-left: 33.33333%; }\n  .col-xl-offset-5 {\n    margin-left: 41.66667%; }\n  .col-xl-offset-6 {\n    margin-left: 50%; }\n  .col-xl-offset-7 {\n    margin-left: 58.33333%; }\n  .col-xl-offset-8 {\n    margin-left: 66.66667%; }\n  .col-xl-offset-9 {\n    margin-left: 75%; }\n  .col-xl-offset-10 {\n    margin-left: 83.33333%; }\n  .col-xl-offset-11 {\n    margin-left: 91.66667%; }\n  .col-xl-offset-12 {\n    margin-left: 100%; } }\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(35);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_nav.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_nav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: inline-block; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #818a91; }\n    .nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: transparent; }\n\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .nav-tabs .nav-item {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs .nav-item + .nav-item {\n      margin-left: .2rem; }\n  .nav-tabs .nav-link {\n    display: block;\n    padding: 0.5em 1em;\n    border: 1px solid transparent;\n    border-radius: 0.25rem 0.25rem 0 0; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {\n      color: #818a91;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,\n  .nav-tabs .nav-item.open .nav-link,\n  .nav-tabs .nav-item.open .nav-link:focus,\n  .nav-tabs .nav-item.open .nav-link:hover {\n    color: #55595c;\n    background-color: #fff;\n    border-color: #ddd #ddd transparent; }\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav-pills .nav-item {\n  float: left; }\n  .nav-pills .nav-item + .nav-item {\n    margin-left: .2rem; }\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #563d7c; }\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none; }\n  .nav-stacked .nav-item + .nav-item {\n    margin-top: .2rem;\n    margin-left: 0; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(38);

	__webpack_require__(40);

	__webpack_require__(35);

	__webpack_require__(42);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_navbar.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_navbar.scss");
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

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".navbar {\n  position: relative;\n  padding: 0.5rem 1rem; }\n  .navbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .navbar {\n      border-radius: 0.25rem; } }\n\n.navbar-full {\n  z-index: 1000; }\n  @media (min-width: 544px) {\n    .navbar-full {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 544px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0; }\n\n.navbar-fixed-bottom {\n  bottom: 0; }\n\n.navbar-sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%; }\n  @media (min-width: 544px) {\n    .navbar-sticky-top {\n      border-radius: 0; } }\n\n.navbar-brand {\n  float: left;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden; }\n  .navbar-divider::before {\n    content: \"\\A0\"; }\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important; } }\n\n.navbar-nav .nav-item {\n  float: left; }\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n  .navbar-nav .nav-link + .nav-link {\n    margin-left: 1rem; }\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white; }\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075); }\n", ""]);

	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_buttons.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_buttons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn.focus {\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    background-image: none;\n    outline: 0; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953;\n    background-image: none; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2e2042;\n      border-color: #1b1327; }\n  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary.disabled:hover, .btn-primary:disabled:hover {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-secondary:hover {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:active, .btn-secondary.active,\n  .open > .btn-secondary.dropdown-toggle {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n    background-image: none; }\n    .btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,\n    .open > .btn-secondary.dropdown-toggle:hover,\n    .open > .btn-secondary.dropdown-toggle:focus,\n    .open > .btn-secondary.dropdown-toggle.focus {\n      color: #373a3c;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-secondary.disabled:hover, .btn-secondary:disabled:hover {\n    background-color: #fff;\n    border-color: #ccc; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2;\n    background-image: none; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1f7e9a; }\n  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info.disabled:hover, .btn-info:disabled:hover {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n\n.btn-success {\n  color: #fff;\n  background-color: #42b983;\n  border-color: #42b983; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63;\n    background-image: none; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2b7956;\n      border-color: #205b40; }\n  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success.disabled:hover, .btn-success:disabled:hover {\n    background-color: #42b983;\n    border-color: #42b983; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316;\n    background-image: none; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #b06d0f; }\n  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning.disabled:hover, .btn-warning:disabled:hover {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a;\n    background-image: none; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #8b211e; }\n  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger.disabled:hover, .btn-danger:disabled:hover {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n\n.btn-primary-outline {\n  color: #563d7c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #563d7c; }\n  .btn-primary-outline:focus, .btn-primary-outline.focus, .btn-primary-outline:active, .btn-primary-outline.active,\n  .open > .btn-primary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline:hover {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline.disabled:focus, .btn-primary-outline.disabled.focus, .btn-primary-outline:disabled:focus, .btn-primary-outline:disabled.focus {\n    border-color: #886ab5; }\n  .btn-primary-outline.disabled:hover, .btn-primary-outline:disabled:hover {\n    border-color: #886ab5; }\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc; }\n  .btn-secondary-outline:focus, .btn-secondary-outline.focus, .btn-secondary-outline:active, .btn-secondary-outline.active,\n  .open > .btn-secondary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline:hover {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline.disabled:focus, .btn-secondary-outline.disabled.focus, .btn-secondary-outline:disabled:focus, .btn-secondary-outline:disabled.focus {\n    border-color: white; }\n  .btn-secondary-outline.disabled:hover, .btn-secondary-outline:disabled:hover {\n    border-color: white; }\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de; }\n  .btn-info-outline:focus, .btn-info-outline.focus, .btn-info-outline:active, .btn-info-outline.active,\n  .open > .btn-info-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline:hover {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline.disabled:focus, .btn-info-outline.disabled.focus, .btn-info-outline:disabled:focus, .btn-info-outline:disabled.focus {\n    border-color: #b0e1ef; }\n  .btn-info-outline.disabled:hover, .btn-info-outline:disabled:hover {\n    border-color: #b0e1ef; }\n\n.btn-success-outline {\n  color: #42b983;\n  background-image: none;\n  background-color: transparent;\n  border-color: #42b983; }\n  .btn-success-outline:focus, .btn-success-outline.focus, .btn-success-outline:active, .btn-success-outline.active,\n  .open > .btn-success-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline:hover {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline.disabled:focus, .btn-success-outline.disabled.focus, .btn-success-outline:disabled:focus, .btn-success-outline:disabled.focus {\n    border-color: #8bd6b4; }\n  .btn-success-outline.disabled:hover, .btn-success-outline:disabled:hover {\n    border-color: #8bd6b4; }\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e; }\n  .btn-warning-outline:focus, .btn-warning-outline.focus, .btn-warning-outline:active, .btn-warning-outline.active,\n  .open > .btn-warning-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline:hover {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline.disabled:focus, .btn-warning-outline.disabled.focus, .btn-warning-outline:disabled:focus, .btn-warning-outline:disabled.focus {\n    border-color: #f8d9ac; }\n  .btn-warning-outline.disabled:hover, .btn-warning-outline:disabled:hover {\n    border-color: #f8d9ac; }\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f; }\n  .btn-danger-outline:focus, .btn-danger-outline.focus, .btn-danger-outline:active, .btn-danger-outline.active,\n  .open > .btn-danger-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline:hover {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline.disabled:focus, .btn-danger-outline.disabled.focus, .btn-danger-outline:disabled:focus, .btn-danger-outline:disabled.focus {\n    border-color: #eba5a3; }\n  .btn-danger-outline.disabled:hover, .btn-danger-outline:disabled:hover {\n    border-color: #eba5a3; }\n\n.btn-link {\n  font-weight: normal;\n  color: #563d7c;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #322449;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled:focus, .btn-link:disabled:hover {\n    color: #818a91;\n    text-decoration: none; }\n\n.btn-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.btn-sm {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_forms.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_forms.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: none; }\n  .form-control::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #eceeef;\n    opacity: 1; }\n  .form-control:disabled {\n    cursor: not-allowed; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem; }\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem; }\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem; } }\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0; }\n  .form-control-static.form-control-sm, .form-control-static.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem; }\n  .radio label,\n  .checkbox label {\n    padding-left: 1.25rem;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n    .radio label input:only-child,\n    .checkbox label input:only-child {\n      position: static; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem; }\n\ninput[type=\"radio\"]:disabled, input[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed; }\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed; }\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem; }\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #42b983; }\n\n.has-success .form-control {\n  border-color: #42b983; }\n\n.has-success .input-group-addon {\n  color: #42b983;\n  border-color: #42b983;\n  background-color: #d6f1e5; }\n\n.has-success .form-control-feedback {\n  color: #42b983; }\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\"); }\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e; }\n\n.has-warning .form-control {\n  border-color: #f0ad4e; }\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white; }\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\"); }\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f; }\n\n.has-danger .form-control {\n  border-color: #d9534f; }\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7; }\n\n.has-danger .form-control-feedback {\n  color: #d9534f; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\"); }\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(40);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(46);

	__webpack_require__(48);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_list-group.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_list-group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".list-group {\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-flush .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0; }\n\na.list-group-item,\nbutton.list-group-item {\n  width: 100%;\n  color: #555;\n  text-align: inherit; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:focus, a.list-group-item:hover,\n  button.list-group-item:focus,\n  button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #818a91; }\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #beaed7; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:focus,\n  button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:focus,\n  button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n", ""]);

	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_labels.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_labels.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".label {\n  display: inline-block;\n  padding: .25em .4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .label:empty {\n    display: none; }\n\n.btn .label {\n  position: relative;\n  top: -1px; }\n\na.label:focus, a.label:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem; }\n\n.label-default {\n  background-color: #818a91; }\n  .label-default[href]:focus, .label-default[href]:hover {\n    background-color: #687077; }\n\n.label-primary {\n  background-color: #563d7c; }\n  .label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #3e2c5a; }\n\n.label-success {\n  background-color: #42b983; }\n  .label-success[href]:focus, .label-success[href]:hover {\n    background-color: #359368; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c; }\n", ""]);

	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(40);

	__webpack_require__(42);

	__webpack_require__(51);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_custom-forms.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_custom-forms.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".c-input {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  color: #555;\n  cursor: pointer; }\n  .c-input > input {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n    .c-input > input:checked ~ .c-indicator {\n      color: #fff;\n      background-color: #0074d9; }\n    .c-input > input:focus ~ .c-indicator {\n      box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9; }\n    .c-input > input:active ~ .c-indicator {\n      color: #fff;\n      background-color: #84c6ff; }\n  .c-input + .c-input {\n    margin-left: 1rem; }\n\n.c-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  font-size: 65%;\n  line-height: 1rem;\n  color: #eee;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.c-checkbox .c-indicator {\n  border-radius: .25rem; }\n\n.c-checkbox input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=); }\n\n.c-checkbox input:indeterminate ~ .c-indicator {\n  background-color: #0074d9;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K); }\n\n.c-radio .c-indicator {\n  border-radius: 50%; }\n\n.c-radio input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==); }\n\n.c-inputs-stacked .c-input {\n  display: inline; }\n  .c-inputs-stacked .c-input::after {\n    display: block;\n    margin-bottom: .25rem;\n    content: \"\"; }\n  .c-inputs-stacked .c-input + .c-input {\n    margin-left: 0; }\n\n.c-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: .375rem 1.75rem .375rem .75rem;\n  padding-right: .75rem \\9;\n  vertical-align: middle;\n  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 0.75rem center;\n  background-image: none \\9;\n  background-size: 8px 10px;\n  border: 1px solid #ccc;\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n  .c-select:focus {\n    border-color: #51a7e8;\n    outline: none; }\n  .c-select::-ms-expand {\n    opacity: 0; }\n\n.c-select-sm {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 12px; }\n  .c-select-sm:not([multiple]) {\n    height: 26px;\n    min-height: 26px; }\n\n.file {\n  position: relative;\n  display: inline-block;\n  height: 2.5rem;\n  cursor: pointer; }\n\n.file input {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0; }\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: .075rem solid #ddd;\n  border-radius: .25rem; }\n\n.file-custom::after {\n  content: \"Choose file...\"; }\n\n.file-custom::before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  content: \"Browse\";\n  background-color: #eee;\n  border: .075rem solid #ddd;\n  border-radius: 0 .25rem .25rem 0; }\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(48);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(55);

	__webpack_require__(40);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_alert.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_alert.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".alert {\n  padding: 15px;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d0e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c1e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bcdff1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6d5ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faf2cc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7ecb5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebcccc;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9b9; }\n  .alert-danger .alert-link {\n    color: #843534; }\n", ""]);

	// exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(58);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tables.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tables.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    line-height: 1.5;\n    vertical-align: top;\n    border-top: 1px solid #eceeef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef; }\n  .table tbody + tbody {\n    border-top: 2px solid #eceeef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #eceeef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #eceeef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5; }\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #e8e8e8; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8; }\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #d0e9c6; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7; }\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #c4e3f3; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3; }\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #faf2cc; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede; }\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #ebcccc; }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto; }\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c; }\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef; }\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #55595c; }\n\n.table-reflow thead {\n  float: left; }\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap; }\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef; }\n  .table-reflow th:last-child,\n  .table-reflow td:last-child {\n    border-right: 1px solid #eceeef; }\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef; }\n\n.table-reflow tr {\n  float: left; }\n  .table-reflow tr th,\n  .table-reflow tr td {\n    display: block !important;\n    border: 1px solid #eceeef; }\n", ""]);

	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(61);

	__webpack_require__(40);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_dropdown.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_dropdown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: .25rem;\n  margin-left: .25rem;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 1rem;\n  color: #373a3c;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #373a3c;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #2b2d2f;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n  .dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #563d7c;\n    outline: 0; }\n  .dropdown-item.disabled, .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    color: #818a91; }\n  .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #818a91;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n", ""]);

	// exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _introductionHtml = __webpack_require__(64);

	var _introductionHtml2 = _interopRequireDefault(_introductionHtml);

	__webpack_require__(65);

	var _packageJson = __webpack_require__(68);

	var _packageJson2 = _interopRequireDefault(_packageJson);

	exports['default'] = {
		route: {
			url: '/',
			name: 'introduction',
			title: 'Intoduction'
		},
		data: function data() {
			return {
				pkg: _packageJson2['default'],
				componentNameCamelCase: 'toast',
				componentName: 'toast',
				componentNameSurfixed: 'vs-toast'
			};
		},
		template: _introductionHtml2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\">\r\n  <h1>{{pkg.name}} <span class=\"label label-success\">{{pkg.version}}</span></h1>\r\n  <p>{{pkg.description}}</p>\r\n</div>\r\n<h2>Installation</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-6\">\r\n    <h3>Compiled</h3>\r\n    <p>Minified CSS and JavaScript with no documentation or original source files.</p>\r\n    <code>bower install {{pkg.name}} --save-dev</code>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-6\">\r\n    <h3>Source</h3>\r\n    <p>Source Sass, JavaScript, and documentation files.</p>\r\n    <code>npm install {{pkg.name}} --save-dev</code>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Usage</h2>\r\n<p>For compiled components, use it within your Vue instance like this:</p>\r\n<p><code>new Vue({ components: { '{{componentNameSurfixed}}': {{pkg.library}}.{{componentNameCamelCase}} }})</code></p>\r\n\r\n<div class=\"m-b\"></div>\r\n<strong>OR</strong>\r\n<div class=\"m-b\"></div>\r\n\r\n<p>If you chosen to work with source components, just import* desired component like so:</p>\r\n<p><code>import {{componentNameCamelCase}} from '{{pkg.name}}/src/components/{{componentName}}'</code></p>\r\n<p>and then load it in your Vue instance:</p>\r\n<p><code>new Vue({ components: { '{{componentNameSurfixed}}' : {{componentNameCamelCase}} }})</code></p>\r\n<p>*Note: You will need <a href=\"https://github.com/babel/babel-loader\">Babel Loader</a> in your Webpack config file to support ES6 syntax.</p>\r\n\r\n<h2 class=\"m-t-lg\">Theming</h2>\r\n<p>To be able to use your app theme with component's scss variables, you will need to use <a href=\"https://github.com/kzima/vueastrap-theme-loader\">vuestrap-theme-loader</a> in your webpack config file. </p>\r\n\r\n<p><code>npm install vuestrap-theme-loader --save-dev</code></p>\r\n\r\n<p>See <a href=\"https://github.com/kzima/vuestrap-starter\">vuestrap-starter</a> for a webpack config example with theme loader.</p>";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(66);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_jumbotron.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_jumbotron.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #eceeef;\n  border-radius: 0.3rem; }\n\n.jumbotron-hr {\n  border-top-color: #d0d5d8; }\n\n@media (min-width: 544px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
		"name": "gritcode-components",
		"version": "0.4.8",
		"description": "Web components built with Vuestrap.",
		"library": "gritcode-components",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/gritcode/gritcode-components.git"
		},
		"scripts": {
			"build": "npm run docs && npm run dev && npm run dev-bundle && npm run dist && npm run dist-bundle",
			"dist": "webpack --colors --progress --config webpack.build.js --env production",
			"dist-bundle": "webpack --colors --progress --config webpack.build.js --env production --bundle true",
			"dev": "webpack --colors --progress --config webpack.build.js --env development",
			"dev-bundle": "webpack --colors --progress --config webpack.build.js --env development --bundle true",
			"docs": "webpack --colors --progress --config  webpack.build.js --env docs",
			"serve-docs": "webpack-dev-server --port 8084 --inline --hot --quiet --config webpack.build.js --env docs",
			"release": "bash build/release.sh && bash build/gh-pages.sh"
		},
		"keywords": [
			"Bootstrap4",
			"Web",
			"Components",
			"Polymer"
		],
		"author": {
			"name": "Kris Zima",
			"email": "kris@mosquito.ie",
			"url": "https://github.com/kzima"
		},
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/gritcode/gritcode-components/issues"
		},
		"dependencies": {
			"vue": "^1.0.16"
		},
		"devDependencies": {
			"autoprefixer-loader": "^3.1.0",
			"babel-core": "^5.8.33",
			"babel-eslint": "^4.1.3",
			"babel-loader": "^5.3.3",
			"css-loader": "^0.21.0",
			"director": "^1.2.8",
			"extract-text-webpack-plugin": "^0.8.2",
			"highlightjs-loader": "^0.2.3",
			"html-loader": "^0.3.0",
			"jasmine-core": "^2.4.1",
			"json-loader": "^0.5.4",
			"karma": "^0.13.19",
			"karma-jasmine": "^0.3.6",
			"karma-phantomjs-launcher": "^0.2.3",
			"karma-webpack": "^1.7.0",
			"nightwatch": "^0.8.15",
			"node-sass": "^3.4.1",
			"optimist": "^0.6.1",
			"phantomjs": "^1.9.19",
			"sass-loader": "^3.1.1",
			"style-loader": "^0.13.0",
			"vuestrap-docs": "^0.5.1",
			"vuestrap-icons": "^0.5.0",
			"vuestrap-theme-loader": "^0.1.2",
			"webpack": "^1.12.9",
			"webpack-dev-server": "^1.12.1"
		},
		"homepage": "https://github.com/gritcode/gritcode-components#readme"
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toastJson = __webpack_require__(70);

	var _toastJson2 = _interopRequireDefault(_toastJson);

	var _toastHtml = __webpack_require__(71);

	var _toastHtml2 = _interopRequireDefault(_toastHtml);

	var _snippetHtml = __webpack_require__(72);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsToast = __webpack_require__(26);

	var _srcComponentsToast2 = _interopRequireDefault(_srcComponentsToast);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/' + _toastJson2['default'].name,
	    name: _toastJson2['default'].name,
	    title: _toastJson2['default'].title
	  },
	  template: _toastHtml2['default'],
	  data: function data() {
	    return {
	      meta: _toastJson2['default'],
	      snippet: _snippetHtml2['default'],
	      hideProgress: false,
	      duration: 6000,
	      durations: [{ text: 1000, value: 1000 }, { text: 3000, value: 3000 }, { text: 6000, value: 6000 }],
	      position: 'bottom left',
	      positions: [{ text: 'top left', value: 'top left' }, { text: 'top right', value: 'top right' }, { text: 'bottom left', value: 'bottom left' }, { text: 'bottom right', value: 'bottom right' }]
	    };
	  },
	  components: {
	    vsToast: _srcComponentsToast2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = {
		"name": "toast",
		"title": "Toast",
		"description": "A subtle notification with a queue support.",
		"note": "Only one toast is shown at a time. All other toast will be queued and shown one after another.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "context",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger",
					"light",
					"dark"
				],
				"default": "success",
				"description": "Type of the toast."
			},
			{
				"name": "hide-progressbar",
				"type": "Boolean",
				"default": false,
				"description": "Removes progressbar from the toast."
			},
			{
				"name": "position",
				"type": "String",
				"default": false,
				"values": [
					"top left",
					"top right",
					"bottom left",
					"bottom right"
				],
				"description": "Absolute position within the parent element."
			},
			{
				"name": "on-ajax-errors",
				"type": "String",
				"default": false,
				"description": "If set to true you can communicate any api errors to the user via toast and <code>show::ajax</code> event. "
			}
		]
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>hide progressbar <input type=\"checkbox\" v-model=\"hideProgress\"></label>\r\n\t\t<label>duration\r\n\t\t\t<select v-model=\"duration\">\r\n\t\t\t\t<option v-for=\"option in durations\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>position\r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<button v-on:click=\"$root.$broadcast('show::toast', {\r\n\t\t\tmessage: 'Default', \r\n\t\t\thideProgress: hideProgress,\r\n\t\t\tposition: position,\r\n\t\t\tduration: duration\r\n\t\t})\">default</button>\r\n\t\t<button v-on:click=\"$root.$broadcast('show::toast', {\r\n\t\t\tsuccess: 'Success!', \r\n\t\t\thideProgress: hideProgress,\r\n\t\t\tposition: position,\r\n\t\t\tduration: duration\r\n\t\t\t})\">success</button>\r\n\t\t<button v-on:click=\"$root.$broadcast('show::toast', {\r\n\t\t\terror: 'Error!', \r\n\t\t\thideProgress: hideProgress,\r\n\t\t\tposition: position,\r\n\t\t\tduration: duration\r\n\t\t\t})\">error</button>\r\n\t\t<button v-on:click=\"$root.$broadcast('show::toast', {\r\n\t\t\tinfo: 'Info.', \r\n\t\t\thideProgress: hideProgress,\r\n\t\t\tposition: position,\r\n\t\t\tduration: duration\r\n\t\t\t})\">info</button>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- trigger examples --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::toast', {message: 'Default'})\"</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::toast', {success: 'Success!'})\"</span>&gt;</span>success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::toast', {error: 'Error!'})\"</span>&gt;</span>error<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::toast', {info: 'Info.'})\"</span>&gt;</span>info<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- toast element --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-toast</span> \r\n  <span class=\"hljs-attribute\">:hide-progress</span>=<span class=\"hljs-value\">\"true\"</span> \r\n  <span class=\"hljs-attribute\">:duration</span>=<span class=\"hljs-value\">\"6000\"</span> \r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"bottom left\"</span> \r\n  <span class=\"hljs-attribute\">context</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-toast</span>&gt;</span>";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _truncateJson = __webpack_require__(74);

	var _truncateJson2 = _interopRequireDefault(_truncateJson);

	var _truncateHtml = __webpack_require__(75);

	var _truncateHtml2 = _interopRequireDefault(_truncateHtml);

	var _snippetHtml = __webpack_require__(76);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTruncate = __webpack_require__(77);

	var _srcComponentsTruncate2 = _interopRequireDefault(_srcComponentsTruncate);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/' + _truncateJson2['default'].name,
	    name: _truncateJson2['default'].name,
	    title: _truncateJson2['default'].title
	  },
	  template: _truncateHtml2['default'],
	  data: function data() {
	    return {
	      meta: _truncateJson2['default'],
	      snippet: _snippetHtml2['default'],
	      width: '10em',
	      widths: [{ text: '10em', value: '10em' }, { text: '15em', value: '15em' }, { text: '20em', value: '20em' }]
	    };
	  },
	  components: {
	    vsTruncate: _srcComponentsTruncate2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
		"name": "truncate",
		"title": "Truncate",
		"description": "Truncate text that is too long.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "width",
				"type": "String",
				"default": "20em",
				"required": true,
				"description": "Any text that is longer than <code>width</code> will be CSS truncated."
			}
		]
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>width\r\n\t\t\t<select v-model=\"width\">\r\n\t\t\t\t<option v-for=\"option in widths\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-truncate :width=\"width\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, numquam.</vs-truncate>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-truncate</span> <span class=\"hljs-attribute\">:width</span>=<span class=\"hljs-value\">\"10em\"</span>&gt;</span>\r\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, numquam.\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-truncate</span>&gt;</span>";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(78);

	// import template

	var _truncateHtml = __webpack_require__(80);

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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".truncate-gritcode {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<span class=\"truncate truncate-gritcode\" v-bind:style=\"{width: truncateWidth}\"><slot></slot></span>\r\n";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _spinnerJson = __webpack_require__(82);

	var _spinnerJson2 = _interopRequireDefault(_spinnerJson);

	var _spinnerHtml = __webpack_require__(83);

	var _spinnerHtml2 = _interopRequireDefault(_spinnerHtml);

	var _srcUtils = __webpack_require__(84);

	var _snippetHtml = __webpack_require__(85);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsSpinner = __webpack_require__(86);

	var _srcComponentsSpinner2 = _interopRequireDefault(_srcComponentsSpinner);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/' + _spinnerJson2['default'].name,
	    name: _spinnerJson2['default'].name,
	    title: _spinnerJson2['default'].title
	  },
	  template: _spinnerHtml2['default'],
	  data: function data() {
	    return {
	      meta: _spinnerJson2['default'],
	      snippet: _snippetHtml2['default'],
	      fixed: false,
	      size: 'lg',
	      sizes: _srcUtils.sizes.concat({ text: 'xl', value: 'xl' })
	    };
	  },
	  components: {
	    vsSpinner: _srcComponentsSpinner2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  },
	  events: {
	    'shown::spinner': function shownSpinner(id) {
	      var _this = this;

	      setTimeout(function () {
	        _this.$root.$broadcast('hide::spinner', id);
	      }, 2000);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
		"name": "spinner",
		"title": "Spinner",
		"description": "Spinner circle informs a user about the pending process.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg",
					"xl"
				],
				"default": "md",
				"required": false,
				"description": "Size of the Circle in em units relative to the parent element."
			},
			{
				"name": "text",
				"type": "String",
				"default": "md",
				"required": false,
				"description": "A text under the animated spinner."
			},
			{
				"name": "fixed",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Full screen overlay."
			}
		]
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>fixed <input type=\"checkbox\" v-model=\"fixed\"></label>\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<button v-on:click=\"$broadcast('show::spinner')\">show spinner</button>\r\n\t\t<vs-spinner id=\"spinner-box\" :size=\"size\" :fixed=\"fixed\" text=\"I will close in 2 secs\"></vs-spinner>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Some common stuff used in demo pages
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var positions = [{ text: 'left', value: 'left' }, { text: 'right', value: 'right' }];
	exports.positions = positions;
	var states = [{ text: 'default', value: 'default' }, { text: 'success', value: 'success' }, { text: 'danger', value: 'danger' }, { text: 'warning', value: 'warning' }];
	exports.states = states;
	var variants = [{
	  text: 'default',
	  value: 'default'
	}, {
	  text: 'primary',
	  value: 'primary'
	}, {
	  text: 'success',
	  value: 'success'
	}, {
	  text: 'info',
	  value: 'info'
	}, {
	  text: 'warning',
	  value: 'warning'
	}, {
	  text: 'danger',
	  value: 'danger'
	}];
	exports.variants = variants;
	var sizes = [{
	  text: 'sm',
	  value: 'sm'
	}, {
	  text: 'md',
	  value: 'md'
	}, {
	  text: 'lg',
	  value: 'lg'
	}];
	exports.sizes = sizes;

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- trigger --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::spinner')\"</span>&gt;</span>show spinner<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- spiner --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-spinner</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"spinner-box\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"lg\"</span> <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"I will close in 2 secs\"</span> <span class=\"hljs-attribute\">fixed</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-spinner</span>&gt;</span>";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(87);

	// import template

	var _spinnerHtml = __webpack_require__(89);

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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #563d7c;\n    border-radius: 50%;\n    display: inline-block;\n    -webkit-animation: spin 0.6s linear;\n            animation: spin 0.6s linear;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #563d7c; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.lt-ie10 .spinner-gritcode .spinner-circle, .ie9 .spinner-gritcode .spinner-circle, .oldie .spinner-gritcode .spinner-circle, .no-csstransitions .spinner-gritcode .spinner-circle, .no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  -webkit-animation: none;\n          animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);

	// exports


/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner spinner-gritcode {{spinnerSize}} {{fixed ? 'spinner-fixed' : ''}}\" v-show=\"active\"> \r\n\t<div class=\"spinner-wrapper\">\r\n\t  <div class=\"spinner-circle\"></div>\r\n\t  <div class=\"spinner-text\">{{text}}</div>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _offcanvasDrawerJson = __webpack_require__(91);

	var _offcanvasDrawerJson2 = _interopRequireDefault(_offcanvasDrawerJson);

	var _offcanvasDrawerHtml = __webpack_require__(92);

	var _offcanvasDrawerHtml2 = _interopRequireDefault(_offcanvasDrawerHtml);

	var _snippetHtml = __webpack_require__(93);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/' + _offcanvasDrawerJson2['default'].name,
	    name: _offcanvasDrawerJson2['default'].name,
	    title: _offcanvasDrawerJson2['default'].title
	  },
	  template: _offcanvasDrawerHtml2['default'],
	  data: function data() {
	    return {
	      meta: _offcanvasDrawerJson2['default'],
	      snippet: _snippetHtml2['default'],
	      opened: false
	    };
	  },
	  components: {
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
		"name": "offcanvas drawer",
		"title": "Offcanvas Drawer",
		"description": "A toggable drawer that pushes page conent aside.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "success",
				"description": "An Id of the drawer instance."
			},
			{
				"name": "align",
				"type": "String",
				"default": "false",
				"values": [
					"left",
					"right"
				],
				"description": "Removes progressbar from the toast."
			},
			{
				"name": "animation",
				"type": "String",
				"default": "false",
				"values": [
					"none",
					"ease",
					"linear",
					"ease-in",
					"ease-out",
					"ease-in-out",
					"bounce",
					"snappy",
					"out-of-orbit"
				],
				"description": "Absolute position within the parent element."
			}
		]
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>animation\r\n\t\t\t<select v-model=\"$root.animation\">\r\n\t\t\t\t<option v-for=\"option in $root.animations\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>align\r\n\t\t\t<select v-model=\"$root.align\">\r\n\t\t\t\t<option v-for=\"option in $root.aligns\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<button v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\" >toggle drawer</button>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- wrapper --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-offcanvas-wrapper</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"main\"</span> <span class=\"hljs-attribute\">animation</span>=<span class=\"hljs-value\">\"ease-in\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"right\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-offcanvas-drawer</span>&gt;</span>\r\n    <span class=\"hljs-comment\">&lt;!-- drawer content --&gt;</span>\r\n    ...\r\n    <span class=\"hljs-comment\">&lt;!-- /drawer content--&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-offcanvas-drawer</span>&gt;</span>\r\n\r\n  <span class=\"hljs-comment\">&lt;!-- page content --&gt;</span>\r\n  ...\r\n  <span class=\"hljs-comment\">&lt;!-- /page content --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-offcanvas-wrapper</span>&gt;</span>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownMultiselectJson = __webpack_require__(95);

	var _dropdownMultiselectJson2 = _interopRequireDefault(_dropdownMultiselectJson);

	var _dropdownMultiselectHtml = __webpack_require__(96);

	var _dropdownMultiselectHtml2 = _interopRequireDefault(_dropdownMultiselectHtml);

	var _snippetHtml = __webpack_require__(97);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsDropdownMultiselect = __webpack_require__(98);

	var _srcComponentsDropdownMultiselect2 = _interopRequireDefault(_srcComponentsDropdownMultiselect);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(84);

	exports['default'] = {
	  route: {
	    url: '/' + _dropdownMultiselectJson2['default'].name,
	    name: _dropdownMultiselectJson2['default'].name,
	    title: _dropdownMultiselectJson2['default'].title
	  },
	  template: _dropdownMultiselectHtml2['default'],
	  data: function data() {
	    return {
	      meta: _dropdownMultiselectJson2['default'],
	      snippet: _snippetHtml2['default'],
	      hideProgress: false,
	      model: [],
	      list: [{ text: 'Australia', value: 'AU' }, { text: 'China', value: 'CN' }, { text: 'Germany', value: 'DE' }, { text: 'Macao', value: 'MO' }, { text: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' }, { text: 'Panama', value: 'PA' }, { text: 'Papua New Guinea', value: 'PG' }, { text: 'Poland', value: 'PL' }, { text: 'United Arab Emirates', value: 'AE' }, { text: 'United Kingdom', value: 'GB' }, { text: 'United States', value: 'US' }],
	      caret: true,
	      dropup: false,
	      position: 'left',
	      positions: _srcUtils.positions,
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'default',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsDropdownMultiselect: _srcComponentsDropdownMultiselect2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
		"name": "dropdown-multiselect",
		"title": "Dropdown Multiselect",
		"description": "Dropdown Multi Select allows to select one or more items from the list.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "Array",
				"default": "''",
				"required": false,
				"description": "A result of the selection. Can return objects in the array (see <code>return-object</code> attribute)."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of selectable items."
			},
			{
				"name": "position",
				"type": "String",
				"values": [
					"left",
					"right"
				],
				"default": "left",
				"required": false,
				"description": "Vertical position of the dropdown list against the dropdown button. It becomes handy when dropdown floats to the right."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Show/hide down caret."
			},
			{
				"name": "default-text",
				"type": "String",
				"default": "Plase select one",
				"required": false,
				"description": "Default text shown before selection is made."
			},
			{
				"name": "default-text-multiple",
				"type": "String",
				"default": "items slected",
				"required": false,
				"description": "Default text shown after selection is made."
			},
			{
				"name": "max-count",
				"type": "Number",
				"default": "1",
				"required": false,
				"description": "Force <code>default-text-multiple</code> to be shown when more than <code>max-count</code> items selected."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "If set to true, a full object will be returned in the model array. By default only <code>values</code> are returned."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"description": "Make button look inactive by adding the disabled boolean attribute."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>dropup <input type=\"checkbox\" v-model=\"dropup\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tposition \r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t<vs-dropdown-multiselect \r\n\t\t\t:size=\"size\" \r\n\t\t\t:list=\"list\"\r\n\t\t\t:model.sync=\"model\" \r\n\t\t\tdefault-text=\"Select Countries\"\r\n\t\t\tdefault-text-multiple=\"countries selected\"\r\n\t\t\t:variant=\"variant\"\r\n\t\t\t:position=\"position\"\r\n\t\t\t:dropup=\"dropup\"\r\n\t\t\t:max-count=\"2\"\r\n\t\t\t:caret=\"caret\"\r\n\t\t\treturn-object\r\n\t\t\tv-bind:class=\"{'pull-right': position == 'right'}\">\r\n\t\t</vs-dropdown-multiselect>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-dropdown-multiselect</span> \r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> \r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {text: 'Australia', value: 'AU'},\r\n    {text: 'China', value: 'CN'},\r\n    {text: 'Germany', value: 'DE'},\r\n  ]\"</span>\r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span> \r\n  <span class=\"hljs-attribute\">default-text</span>=<span class=\"hljs-value\">\"Select Countries\"</span>\r\n  <span class=\"hljs-attribute\">default-text-multiple</span>=<span class=\"hljs-value\">\"countries selected\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span>\r\n  <span class=\"hljs-attribute\">:max-count</span>=<span class=\"hljs-value\">\"2\"</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-dropdown-multiselect</span>&gt;</span>";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(99);

	// import template

	var _dropdownMultiselectHtml = __webpack_require__(101);

	var _dropdownMultiselectHtml2 = _interopRequireDefault(_dropdownMultiselectHtml);

	// import dependencies

	var _vuestrapIconsSrcComponentsIcons = __webpack_require__(102);

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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dropdown-multiselect-gritcode .dropdown-toggle {\n  width: 200px; }\n  .dropdown-multiselect-gritcode .dropdown-toggle .checked-items {\n    width: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    float: left; }\n\n.dropdown-multiselect-gritcode .dropdown-menu {\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  width: auto; }\n  .dropdown-multiselect-gritcode .dropdown-menu::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #F5F5F5; }\n  .dropdown-multiselect-gritcode .dropdown-menu::-webkit-scrollbar {\n    width: 10px;\n    background-color: #F5F5F5; }\n  .dropdown-multiselect-gritcode .dropdown-menu::-webkit-scrollbar-thumb {\n    background-color: #ccc; }\n  .dropdown-multiselect-gritcode .dropdown-menu .dropdown-item {\n    padding: 0.3em 1.5em 0.3em 0.4em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: relative; }\n    .dropdown-multiselect-gritcode .dropdown-menu .dropdown-item .icons {\n      position: absolute;\n      right: 0.3em;\n      top: 0.5em; }\n", ""]);

	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown-multiselect-gritcode\" v-bind:class=\"{open: show, dropdown: !dropup, dropup: dropup}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click.prevent=\"toggle($event)\"\r\n        :disabled=\"disabled\">\r\n        <span class=\"checked-items\" v-html=\"displayItem\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click.stop.prevent=\"select($index)\" title=\"{{item.text}}\">{{item.text}} <vs-icon name=\"check\" v-show=\"checked($index) !== false\" class=\"pull-right\"></vs-icon></button>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(103);

	var _iconsHtml = __webpack_require__(105);

	var _iconsHtml2 = _interopRequireDefault(_iconsHtml);

	// enable support for svg in all browsers

	__webpack_require__(106);

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
	        if (true) {
	          return 'assets/icons.min.svg';
	        }
	        return 'node_modules/vuestrap-icons/assets/icons.min.svg';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".icons-vuestrap {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative; }\n  .icons-vuestrap .icon {\n    width: 100%;\n    height: 100%;\n    top: 0%;\n    left: 0%;\n    position: absolute;\n    z-index: 2; }\n  .icons-vuestrap .icon-background {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n  .icons-vuestrap.icons-bg-fill .icon, .icons-vuestrap.icons-bg-outline .icon {\n    width: 50%;\n    height: 50%;\n    top: 25%;\n    left: 25%; }\n  .icons-vuestrap .text {\n    position: relative;\n    color: #fff;\n    z-index: 3;\n    font-size: 70%;\n    width: 100%;\n    height: 100%;\n    display: table;\n    text-align: center; }\n    .icons-vuestrap .text > span {\n      display: table-cell;\n      vertical-align: middle; }\n  .icons-vuestrap.icons-right {\n    margin-left: 0.2em;\n    margin-right: 0; }\n  .icons-vuestrap.icons-left {\n    margin-left: 0;\n    margin-right: 0.2em; }\n  .icons-vuestrap .hidden {\n    display: none; }\n\n.icons-vuestrap.icons-sm {\n  font-size: 1rem;\n  line-height: 1rem;\n  width: 1rem;\n  height: 1rem; }\n\n.icons-vuestrap.icons-md {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem; }\n\n.icons-vuestrap.icons-lg {\n  font-size: 2rem;\n  line-height: 2rem;\n  width: 2rem;\n  height: 2rem; }\n\n.icons-vuestrap.icons-xl {\n  font-size: 3rem;\n  line-height: 3rem;\n  width: 3rem;\n  height: 3rem; }\n\n.icons-vuestrap.icons-xxl {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  width: 3.5rem;\n  height: 3.5rem; }\n\n.icons-vuestrap .icon {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-bg-fill .icon-background {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-bg-outline .icon-background {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-outline .text {\n  color: #818a91; }\n\n.icons-vuestrap.icons-primary .icon {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .icon-background {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-primary.icons-bg-outline .icon-background {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-outline .text {\n  color: #563d7c; }\n\n.icons-vuestrap.icons-info .icon {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .icon-background {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-info.icons-bg-outline .icon-background {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-outline .text {\n  color: #5bc0de; }\n\n.icons-vuestrap.icons-success .icon {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .icon-background {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-success.icons-bg-outline .icon-background {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-outline .text {\n  color: #42b983; }\n\n.icons-vuestrap.icons-warning .icon {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .icon-background {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-warning.icons-bg-outline .icon-background {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-outline .text {\n  color: #f0ad4e; }\n\n.icons-vuestrap.icons-danger .icon {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .icon-background {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-danger.icons-bg-outline .icon-background {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-outline .text {\n  color: #d9534f; }\n\n.icons-vuestrap.icons-dark .icon {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .icon-background {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-dark.icons-bg-outline .icon-background {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-outline .text {\n  color: #000; }\n\n.icons-vuestrap.icons-light .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .icon {\n  fill: #000; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .icon-background {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .text {\n  color: #000; }\n\n.icons-vuestrap.icons-light.icons-bg-outline .icon-background {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-outline .text {\n  color: #fff; }\n\n.btn.disabled svg {\n  opacity: 0.5; }\n\n.btn:hover svg {\n  fill: #fff; }\n", ""]);

	// exports


/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<span class=\"icons icons-vuestrap {{iconsSize}} {{iconsVariant}} {{iconsBackground}} {{iconsAlign}}\" aria-hidden=\"true\">\r\n\t<span v-if=\"name\">\r\n\t\t<svg role=\"img\" class=\"icon\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + name\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span v-if=\"background\">\r\n\t\t<svg role=\"img\" class=\"icon-background\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + background\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span class=\"text\" v-show=\"text.length\">\r\n\t\t<span><slot>{{text}}</slot></span>\r\n\t</span>\r\n</span>";

/***/ },
/* 106 */
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonToggleJson = __webpack_require__(108);

	var _buttonToggleJson2 = _interopRequireDefault(_buttonToggleJson);

	var _buttonToggleHtml = __webpack_require__(109);

	var _buttonToggleHtml2 = _interopRequireDefault(_buttonToggleHtml);

	var _snippetHtml = __webpack_require__(110);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonToggle = __webpack_require__(111);

	var _srcComponentsButtonToggle2 = _interopRequireDefault(_srcComponentsButtonToggle);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(84);

	exports['default'] = {
	  route: {
	    url: '/' + _buttonToggleJson2['default'].name,
	    name: _buttonToggleJson2['default'].name,
	    title: _buttonToggleJson2['default'].title
	  },
	  template: _buttonToggleHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonToggleJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: true,
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'default',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsButtonToggle: _srcComponentsButtonToggle2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-toggle",
		"title": "Button Toggle",
		"description": "Simple on/off toggle in form of a button.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "Boolean",
				"default": "''",
				"required": false,
				"description": "Returns either <code>true</code> or <code>false</code>."
			},
			{
				"name": "text",
				"type": "Object",
				"default": "",
				"required": true,
				"description": "Text shown in the button for <code>on</code> and <code>off</code> option."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"description": "Make button look inactive by adding the disabled boolean attribute."
			}
		]
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t<vs-button-toggle \r\n\t\t\t:size=\"size\" \r\n\t\t\t:text=\"{on: 'Yes', off: 'No'}\" \r\n\t\t\t:model.sync=\"model\" \r\n\t\t\t:variant=\"variant\"\r\n\t\t\tstyle=\"width: 5em\">\r\n\t\t</vs-button-toggle>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-toggle</span> \r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> \r\n  <span class=\"hljs-attribute\">:text</span>=<span class=\"hljs-value\">\"{on: 'Yes', off: 'No'}\"</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span> \r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-toggle</span>&gt;</span>";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(112);

	var _buttonToggleHtml = __webpack_require__(114);

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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".btn-toggle-gritcode {\n  position: relative;\n  overflow: hidden;\n  padding: 0 !important;\n  border: 0; }\n  .btn-toggle-gritcode .btn {\n    margin: 0;\n    display: inline-block;\n    outline: none;\n    -webkit-transition: -webkit-transform .35s;\n    transition: -webkit-transform .35s;\n    transition: transform .35s;\n    transition: transform .35s, -webkit-transform .35s;\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n    -ms-transform: translate(-100%, 0);\n    padding-left: 1rem;\n    padding-right: 0.8rem; }\n    .btn-toggle-gritcode .btn:active, .btn-toggle-gritcode .btn:hover, .btn-toggle-gritcode .btn:visited, .btn-toggle-gritcode .btn:focus {\n      outline: none; }\n    .btn-toggle-gritcode .btn.btn-sm {\n      padding-left: 0.75rem;\n      padding-right: 0.55rem; }\n    .btn-toggle-gritcode .btn.btn-lg {\n      padding-left: 1.25rem;\n      padding-right: 1.05rem; }\n  .btn-toggle-gritcode.active .btn {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -ms-transform: translate(0, 0);\n    padding-left: 0.8rem;\n    padding-right: 1rem; }\n    .btn-toggle-gritcode.active .btn.btn-sm {\n      padding-left: 0.55rem;\n      padding-right: 0.75rem; }\n    .btn-toggle-gritcode.active .btn.btn-lg {\n      padding-left: 1.05rem;\n      padding-right: 1.25rem; }\n  .btn-toggle-gritcode.active .handle {\n    left: calc(100% - 12px); }\n  .btn-toggle-gritcode .handle {\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    background-color: #fff;\n    position: absolute;\n    margin: 1px;\n    height: calc(100% - 2px);\n    padding: 0;\n    width: 10px;\n    left: 0%;\n    top: 0;\n    z-index: 2;\n    -webkit-transition: left .35s;\n    transition: left .35s; }\n", ""]);

	// exports


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn btn-toggle btn-toggle-gritcode {{btnSize}} btn-default {{active ? 'active' : ''}}\" :disabled=\"disabled\">\r\n    <button class=\"btn btn-block {{btnVariant}} {{btnSize}}\" v-on:click.prevent=\"toggle(false)\">{{text.on}}</button><!--\r\n    --><span class=\"handle\" v-on:click.prevent=\"toggle()\"></span><!--\r\n    --><button class=\"btn btn-block btn-default {{btnSize}}\" v-on:click.prevent=\"toggle(true)\">{{text.off}}</button>\r\n</div>\r\n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fileUploadJson = __webpack_require__(116);

	var _fileUploadJson2 = _interopRequireDefault(_fileUploadJson);

	var _fileUploadHtml = __webpack_require__(117);

	var _fileUploadHtml2 = _interopRequireDefault(_fileUploadHtml);

	var _snippetHtml = __webpack_require__(118);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFileUpload = __webpack_require__(119);

	var _srcComponentsFileUpload2 = _interopRequireDefault(_srcComponentsFileUpload);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/' + _fileUploadJson2['default'].name,
	    name: _fileUploadJson2['default'].name,
	    title: _fileUploadJson2['default'].title
	  },
	  template: _fileUploadHtml2['default'],
	  data: function data() {
	    return {
	      meta: _fileUploadJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: null,
	      fileList: [],
	      multiple: true,
	      hideButton: false,
	      autoSubmit: false,
	      ajaxUrl:  true ? 'http://mosquito.ie:3004/upload' : 'http://localhost:3004/upload'
	    };
	  },
	  components: {
	    vsFileUpload: _srcComponentsFileUpload2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = {
		"name": "file-upload",
		"title": "File Upload",
		"description": "File Upload widget allows for multiple file selection, drag&drop support and progress monitoring. Files are uploaded via XMLHttpRequests if supported and uses iframes as fallback for legacy browsers.",
		"note": "File Upload is inspired by <a href='https://css-tricks.com/drag-and-drop-file-uploading/'>this</a> css-tricks article.",
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			],
			"note": "* IE9 will use iFrame to post files without browser refresh and it will work only with same-orgin requests. You will need to wrap this component in the form element and pass its id in 'form-id' option for this to work. Also drag and drop falls back to just input and only one file can be selected at a time."
		},
		"options": [
			{
				"name": "accept",
				"type": "Array/Object",
				"default": "''",
				"required": false,
				"description": "String of mime types to limit to certain extensions for file types, i.e. '.doc,image/*'. See this <a href='http://www.w3schools.com/tags/att_input_accept.asp'>resource</a> for more info."
			},
			{
				"name": "ajax",
				"type": "Boolean",
				"default": "''",
				"description": "If set it will send ajax request to the url provided. You can skip this option if you have a wrapping form and want to submit it manually."
			},
			{
				"name": "auto-submit",
				"type": "Boolean",
				"default": "false",
				"description": "If set to true, files will be uploaded via ajax right after file selection. It also hides an upload button."
			},
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Use id if you want to use events."
			},
			{
				"name": "form-id",
				"type": "String",
				"default": "",
				"required": false,
				"description": "On IE9 you will need to wrap this component within a form and pass its id here. This is required for the component to submit the form in iFrame to avoid browser refresh."
			},
			{
				"name": "method",
				"type": "String",
				"default": "POST",
				"required": false,
				"description": "A method of the ajax request."
			},
			{
				"name": "name",
				"type": "String",
				"default": "files",
				"required": false,
				"description": "The value of the name attribute for the file input."
			},
			{
				"name": "model",
				"type": "Array/Object",
				"default": "''",
				"required": false,
				"description": "After ajax request, File Upload will return a response from the server with file paths."
			},
			{
				"name": "multiple",
				"type": "Boolean",
				"default": "false",
				"description": "If set to true, one more files are allowed to be dragged-over/selected. On IE9, user will have to upload one file at a time."
			},
			{
				"name": "file-list",
				"type": "FileList",
				"default": "null",
				"required": false,
				"description": "A list of selected files. Share this object with other components like <code>&lt;image-preview></code> or <code>&lt;text-preview></code>"
			},
			{
				"name": "hide-button",
				"type": "Boolean",
				"default": "false",
				"description": "This could be handy if you want to submit ajax request using 'submit::file-upload' event."
			},
			{
				"name": "text",
				"type": "Object",
				"description": "Allows to modify text within the component. Default values:<br><code>{action: 'Choose a file'</code><br><code>drag: 'or drag it here.'</code><br><code>selected: 'files selected'</code><br><code>button: 'Upload'</code><br><code>uploading: 'Uploading...;'</code><br><code>done: 'Done!'</code><br><code>restart: 'Upload more?'</code><br><code>retry: 'Try again!'}</code>"
			}
		]
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>multiple <input type=\"checkbox\" v-model=\"multiple\"></label>\r\n\t\t<label>hide button <input type=\"checkbox\" v-model=\"hideButton\"></label>\r\n\t\t<label>auto submit <input type=\"checkbox\" v-model=\"autoSubmit\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t<form id=\"file-upload-test\" method=\"POST\" action=\"{{ajaxUrl}}\">\r\n\t\t\t<vs-file-upload \r\n\t    \tid=\"some-file\"\r\n\t    \tform-id=\"file-upload-test\"\r\n\t    \tmodel=\"model\" \r\n\t    \t:ajax=\"ajaxUrl\" \r\n\t    \t:multiple=\"multiple\" \r\n\t    \tname=\"files\"\r\n\t    \t:auto-submit=\"autoSubmit\" \r\n\t    \t:hide-button=\"hideButton\" \r\n\t    \t:file-list.sync=\"fileList\">\r\n\t    </vs-file-upload>\r\n\t   </form>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-file-upload</span> \r\n  <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"some-file\"</span>\r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span> \r\n  <span class=\"hljs-attribute\">ajax</span>=<span class=\"hljs-value\">\"http://localhost:3004/upload\"</span> \r\n  <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"files\"</span>\r\n  <span class=\"hljs-attribute\">:multiple</span>=<span class=\"hljs-value\">\"false\"</span> \r\n  <span class=\"hljs-attribute\">:auto-submit</span>=<span class=\"hljs-value\">\"true\"</span> \r\n  <span class=\"hljs-attribute\">:hide-button</span>=<span class=\"hljs-value\">\"true\"</span> \r\n  <span class=\"hljs-attribute\">:file-list.sync</span>=<span class=\"hljs-value\">\"fileList\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-file-upload</span>&gt;</span>";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// inspired by href='https://css-tricks.com/drag-and-drop-file-uploading/'

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(120);

	var _fileUploadHtml = __webpack_require__(122);

	var _fileUploadHtml2 = _interopRequireDefault(_fileUploadHtml);

	var _utilsHelpersJs = __webpack_require__(123);

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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes appear-from-inside {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  75% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes appear-from-inside {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  75% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.gritcode-file-upload {\n  text-align: center;\n  font-size: 1.25rem;\n  /* 20 */\n  background-color: #c8dadf;\n  position: relative;\n  padding: 100px 20px; }\n  .gritcode-file-upload.advanced-upload {\n    outline: 2px dashed #92b0b3;\n    outline-offset: -10px;\n    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n    transition: outline-offset .15s ease-in-out, background-color .15s linear; }\n  .gritcode-file-upload .input .icon {\n    width: 100%;\n    height: 80px;\n    fill: #92b0b3;\n    display: block;\n    margin-bottom: 40px; }\n  .gritcode-file-upload .input .btn-primary {\n    font-weight: 700;\n    color: #e5edf1;\n    background-color: #39bfd3;\n    border: none;\n    display: block;\n    padding: 8px 16px;\n    margin: 40px auto 0; }\n  .gritcode-file-upload .state .state-uploading {\n    font-style: italic; }\n  .gritcode-file-upload .animate {\n    -webkit-animation: appear-from-inside .25s ease-in-out;\n            animation: appear-from-inside .25s ease-in-out; }\n  .gritcode-file-upload.is-dragover {\n    outline-offset: -20px;\n    outline-color: #c8dadf;\n    background-color: #fff; }\n  .gritcode-file-upload input[type=\"file\"] {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1; }\n    .gritcode-file-upload input[type=\"file\"] + label {\n      margin-bottom: 0;\n      max-width: 80%;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      cursor: pointer;\n      display: inline-block;\n      overflow: hidden; }\n      .gritcode-file-upload input[type=\"file\"] + label:hover, .gritcode-file-upload input[type=\"file\"] + label:focus {\n        color: #39bfd3; }\n    .gritcode-file-upload input[type=\"file\"]:focus + label, .gritcode-file-upload input[type=\"file\"].has-focus + label {\n      outline: 1px dotted #000;\n      outline: -webkit-focus-ring-color auto 5px; }\n", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-file-upload {{advancedUpload ? 'advanced-upload' : ''}} {{dragover ? 'is-dragover' : ''}}\">\r\n    <div class=\"input\" v-if=\"state == null || state == 'retry'\">\r\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"43\" viewBox=\"0 0 50 43\" v-if=\"advancedUpload\">\r\n            <path d=\"M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z\" />\r\n        </svg>\r\n        <input \r\n            type=\"file\" \r\n            name=\"files[]\" \r\n            id=\"file\"\r\n            accept=\"accept\" \r\n            v-bind:multiple=\"multiple && advancedUpload\" \r\n            v-on:change=\"onChange($event)\" />\r\n        <label for=\"file\">\r\n            <span v-if=\"fileList.length == 0\"><strong>{{text.action}}</strong><span v-if=\"advancedUpload\"> {{text.drag}}</span></span>\r\n            <span v-if=\"fileList.length > 0\" class=\"\">{{displaySelectionText}}</span>\r\n        </label>\r\n        <button type=\"submit\" class=\"btn btn-primary\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">{{text.button}}</button>\r\n    </div>\r\n    <div class=\"state\" v-if=\"state != null\">\r\n        <span class=\"state-uploading animate\" v-show=\"state == 'uploading'\">{{text.uploading}}<span v-if=\"advancedUpload\">{{progress}}</span></span>\r\n        <span class=\"state-success animate\" v-show=\"state == 'success'\">\r\n            {{text.done}} <a href=\"#\" v-on:click.prevent=\"restart\" role=\"button\" v-show=\"multiple\">{{text.restart}}</a>\r\n        </span>\r\n        <span class=\"state-error animate\" v-show=\"state == 'error'\">\r\n            Error! <span>{{errorMessage}}</span> <a href=\"#\" v-on:click.prevent=\"retry\">{{text.retry}}</a>\r\n        </span>\r\n    </div>\r\n</div>";

/***/ },
/* 123 */
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(53);

	__webpack_require__(50);

	var _wizardJson = __webpack_require__(125);

	var _wizardJson2 = _interopRequireDefault(_wizardJson);

	var _wizardHtml = __webpack_require__(126);

	var _wizardHtml2 = _interopRequireDefault(_wizardHtml);

	var _srcUtils = __webpack_require__(84);

	var _snippetHtml = __webpack_require__(127);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsWizard = __webpack_require__(128);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(2);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/' + _wizardJson2['default'].name,
	    name: _wizardJson2['default'].name,
	    title: _wizardJson2['default'].title
	  },
	  template: _wizardHtml2['default'],
	  data: function data() {
	    return {
	      meta: _wizardJson2['default'],
	      snippet: _snippetHtml2['default'],
	      list: [{ text: 'Requester Details', href: '/requester', description: 'Your details' }, { text: 'First Collection', href: '/first-collection', description: 'The first collection of data' }, { text: 'Second Collection', href: '/second-collection', description: 'The second collection of data' }, { text: 'Payment', href: '/payment', description: 'Payment options' }, { text: 'Confirmation', href: '/confirmation', description: 'Confirm the cleanse' }],
	      icons: true,
	      models: {
	        email: '',
	        firstName: '',
	        lastName: '',
	        cardType: '',
	        cardNumber: '',
	        cardHolder: '',
	        cardExpiryMonth: '01',
	        cardExpiryYear: '2017'
	      },
	      progress: {
	        step1: 0,
	        step2: 0,
	        step3: 0
	      },
	      currentStep: 0
	    };
	  },
	  components: {
	    vsWizard: _srcComponentsWizard.wizard,
	    vsWizardStep: _srcComponentsWizard.wizardStep,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  },
	  events: {
	    'shown::wizard': function shownWizard(id) {
	      var _this = this;

	      setTimeout(function () {
	        _this.$root.$broadcast('hide::wizard', id);
	      }, 2000);
	    }
	  },
	  methods: {
	    startAgain: function startAgain() {
	      this.models = {
	        email: '',
	        firstName: '',
	        lastName: '',
	        cardType: '',
	        cardNumber: '',
	        cardHolder: '',
	        cardExpiryMonth: '01',
	        cardExpiryYear: '2017'
	      }, this.progress = {
	        step1: 0,
	        step2: 0,
	        step3: 0
	      }, this.currentStep = 0;
	    }
	  },
	  watch: {
	    models: {
	      handler: function handler() {
	        // step 1
	        if (this.currentStep === 0) {
	          this.progress.step1 = 0;
	          if (this.models.email.length) {
	            this.progress.step1 += 100 / 3;
	          }
	          if (this.models.firstName.length) {
	            this.progress.step1 += 100 / 3;
	          }
	          if (this.models.lastName.length) {
	            this.progress.step1 += 100 / 3;
	          }
	        }

	        // step 2
	        if (this.currentStep === 1) {
	          this.progress.step2 = 0;
	          if (this.models.cardType.length) {
	            this.progress.step2 += 100 / 3;
	          }
	          if (this.models.cardNumber.length) {
	            this.progress.step2 += 100 / 3;
	          }
	          if (this.models.cardHolder.length) {
	            this.progress.step2 += 100 / 3;
	          }
	        }
	      },
	      deep: true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = {
		"name": "wizard",
		"title": "Wizard",
		"description": "A step by step wizard style navigation with progress monitoring.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "current-index",
				"type": "Number",
				"default": "0",
				"required": false,
				"description": "Use this option on <code>&lt;vs-wizard></code> to control active step."
			},
			{
				"name": "title",
				"type": "String",
				"default": "md",
				"required": false,
				"description": "Sets title on the <code>&lt;vs-wizard-step></code> element."
			},
			{
				"name": "description",
				"type": "String",
				"default": "md",
				"required": false,
				"description": "Sets description on the <code>&lt;vs-wizard-step></code> element."
			},
			{
				"name": "disable-previous",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "This option can be handy on the last step if you don't want users to go back to previous step, i.e. after payment."
			},
			{
				"name": "icon",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Sets svg icon on the <code>&lt;vs-wizard-step></code> element. This component uses <a href='https://github.com/kzima/vuestrap-icons/'>vuestrap-icons</a>. If no icon is specified, wizard will auto fall back to numbers."
			},
			{
				"name": "progress",
				"type": "Number",
				"default": "''",
				"required": false,
				"description": "Sets progress bar on the <code>&lt;vs-wizard-step></code> element. Pass a value from 0 to 100 to show a progress within each step."
			},
			{
				"name": "valid",
				"type": "Number",
				"default": "''",
				"required": false,
				"description": "Sets valid state on the <code>&lt;vs-wizard-step></code> element. When set to true, progress will be forced to 100, and next step will become clickable."
			}
		]
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>icons <input type=\"checkbox\" v-model=\"icons\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\r\n\t\t<!-- icons -->\r\n\t\t<vs-wizard :current-index.sync=\"currentStep\" v-if=\"icons\">\r\n\t\t\t<vs-wizard-step \r\n\t\t\t\ttitle=\"Personal Information\" \r\n\t\t\t\tdescription=\"Enter your details\"\r\n\t\t\t\t:progress=\"progress.step1\" \r\n\t\t\t\ticon=\"person\">\r\n\t\t\t</vs-wizard-step>\r\n\t\t\t<vs-wizard-step \r\n\t\t\t\ttitle=\"Payment\" \r\n\t\t\t\tdescription=\"Pay with credit card or Paypal\" \r\n\t\t\t\t:progress=\"progress.step2\"\r\n\t\t\t\ticon=\"credit-card\">\r\n\t\t\t</vs-wizard-step>\r\n\t\t\t<vs-wizard-step \r\n\t\t\t\ttitle=\"Confirmation\" \r\n\t\t\t\tdescription=\"Your order details\" \r\n\t\t\t\t:progress=\"progress.step3\"\r\n\t\t\t\t:disable-previous=\"true\"\r\n\t\t\t\ticon=\"check\">\r\n\t\t\t</vs-wizard-step>\r\n\t\t</vs-wizard>\r\n\r\n\t\t<!-- no icons -->\r\n\t\t<vs-wizard :current-index.sync=\"currentStep\" v-if=\"!icons\">\r\n\t\t\t<vs-wizard-step \r\n\t\t\t\ttitle=\"Personal Information\" \r\n\t\t\t\tdescription=\"Enter your details\"\r\n\t\t\t\t:progress=\"progress.step1\">\r\n\t\t\t</vs-wizard-step>\r\n\t\t\t<vs-wizard-step \r\n\t\t\t\ttitle=\"Payment\" \r\n\t\t\t\tdescription=\"Pay with credit card or Paypal\" \r\n\t\t\t\t:progress=\"progress.step2\">\r\n\t\t\t</vs-wizard-step>\r\n\t\t\t<vs-wizard-step \r\n\t\t\t\ttitle=\"Confirmation\" \r\n\t\t\t\tdescription=\"Your order details\" \r\n\t\t\t\t:progress=\"progress.step3\"\r\n\t\t\t\t:disable-previous=\"true\">\r\n\t\t\t</vs-wizard-step>\r\n\t\t</vs-wizard>\r\n\t\t<hr class=\"hidden-xs-down\">\r\n\t\t<form class=\"m-b row clearfix\" v-if=\"currentStep == 0\">\r\n\t\t\t<div class=\"col-xs-12 col-md-8 col-md-offset-2\">  \r\n\t\t\t\t<fieldset class=\"form-group\">\r\n\t\t\t    <label for=\"firstName\">First Name</label>\r\n\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"e.g. Jon\" v-model=\"models.firstName\">\r\n\t\t\t  </fieldset>\r\n\t\t\t  <fieldset class=\"form-group\">\r\n\t\t\t    <label for=\"lastName\">Last Name</label>\r\n\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"e.g. Doe\" v-model=\"models.lastName\">\r\n\t\t\t  </fieldset>\r\n\t\t\t  <fieldset class=\"form-group\">\r\n\t\t\t    <label for=\"email\">Email address</label>\r\n\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"e.g. joe@doe.com\" v-model=\"models.email\">\r\n\t\t\t  </fieldset>\r\n\t\t\t  <button class=\"btn btn-default pull-right\" v-bind:disabled=\"progress.step1 < 100\" v-on:click.prevent=\"currentStep++\">Next</button>\r\n\t\t \t</div>\r\n\t  </form>\r\n\t  <form class=\"m-b row clearfix\" v-if=\"currentStep == 1\">\r\n\t  \t<div class=\"col-xs-12 col-md-8 col-md-offset-2\">  \t\t\r\n\t\t\t\t<fieldset class=\"form-group\">\r\n\t\t\t    <label for=\"cardType\">Card Type</label>\r\n\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"cardType\" placeholder=\"e.g. Visa\" v-model=\"models.cardType\">\r\n\t\t\t  </fieldset>\r\n\t\t\t  <fieldset class=\"form-group\">\r\n\t\t\t    <label for=\"cardNumber\">Card Number</label>\r\n\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"cardNumber\" placeholder=\"4141 4141 4141 4141\" v-model=\"models.cardNumber\">\r\n\t\t\t  </fieldset>\r\n\t\t\t  <fieldset class=\"form-group\">\r\n\t\t\t    <label for=\"cardHolder\">Card Holder Name</label>\r\n\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"cardHolder\" placeholder=\"e.g. Joe Doe\" v-model=\"models.cardHolder\">\r\n\t\t\t  </fieldset>\r\n\t\t\t  <div class=\"row\">\t  \t\r\n\t\t\t\t  <fieldset class=\"form-group col-xs-6\">\r\n\t\t\t\t    <label for=\"cardExpiryMonth\">Expiry Month</label>\r\n\t\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"cardExpiryMonth\" placeholder=\"e.g. Joe Doe\" v-model=\"models.cardExpiryMonth\">\r\n\t\t\t\t  </fieldset>\r\n\t\t\t\t  <fieldset class=\"form-group col-xs-6\">\r\n\t\t\t\t    <label for=\"cardExpiryMonth\">Expiry Year</label>\r\n\t\t\t\t    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" id=\"cardExpiryYear\" placeholder=\"e.g. Joe Doe\" v-model=\"models.cardExpiryYear\">\r\n\t\t\t\t  </fieldset>\r\n\t\t\t  </div>\r\n\t\t  \t<button class=\"btn btn-default pull-right\" v-bind:disabled=\"progress.step2 < 100\" v-on:click.prevent=\"currentStep++\">Next</button>\r\n\t  \t</div>\t\t\r\n\t  </form>\r\n\t  <div class='text-center clearfix' v-if=\"currentStep == 2\">\r\n\t\t\t<h3 class=\"m-y-lg\">Success! Your order is on its way...</h3>\r\n\t\t\t<button v-on:click=\"startAgain\">Start again</button>\r\n\t  </div>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-wizard</span> <span class=\"hljs-attribute\">:current-index.sync</span>=<span class=\"hljs-value\">\"currentStep\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-wizard-step</span> \r\n    <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Personal Information\"</span> \r\n    <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"Enter your details\"</span>\r\n    <span class=\"hljs-attribute\">:progress</span>=<span class=\"hljs-value\">\"progress.step1\"</span> \r\n    <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"person\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-wizard-step</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-wizard-step</span> \r\n    <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Payment\"</span> \r\n    <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"Pay with credit card or Paypal\"</span> \r\n    <span class=\"hljs-attribute\">:progress</span>=<span class=\"hljs-value\">\"progress.step2\"</span>\r\n    <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"credit-card\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-wizard-step</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-wizard-step</span> \r\n    <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Confirmation\"</span> \r\n    <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"Your order details\"</span> \r\n    <span class=\"hljs-attribute\">:progress</span>=<span class=\"hljs-value\">\"progress.step3\"</span>\r\n    <span class=\"hljs-attribute\">:disable-previous</span>=<span class=\"hljs-value\">\"true\"</span>\r\n    <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"check\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-wizard-step</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-wizard</span>&gt;</span>";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(129);

	var _wizardHtml = __webpack_require__(131);

	var _wizardHtml2 = _interopRequireDefault(_wizardHtml);

	var _wizardStepHtml = __webpack_require__(132);

	var _wizardStepHtml2 = _interopRequireDefault(_wizardStepHtml);

	var _vuestrapIconsSrcComponentsIcons = __webpack_require__(102);

	var _vuestrapIconsSrcComponentsIcons2 = _interopRequireDefault(_vuestrapIconsSrcComponentsIcons);

	var _utilsHelpersJs = __webpack_require__(123);

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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".gritcode-wizard {\n  overflow: hidden;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  font-size: 0.8rem; }\n  .gritcode-wizard .wizard-step {\n    display: none;\n    width: auto;\n    border: 0;\n    text-align: center;\n    position: relative;\n    cursor: pointer; }\n    .gritcode-wizard .wizard-step.active {\n      display: table-cell; }\n    .gritcode-wizard .wizard-step .wizard-icon {\n      display: table;\n      width: 3em;\n      height: 3em;\n      background-color: #eaeaea;\n      text-align: center;\n      color: #a9a9a9;\n      border: 2px solid #d9d9d9;\n      position: relative;\n      z-index: 1;\n      border-radius: 50%;\n      z-index: 22;\n      margin: auto;\n      margin-bottom: 1em; }\n      .gritcode-wizard .wizard-step .wizard-icon .icon-number, .gritcode-wizard .wizard-step .wizard-icon .icon-icon {\n        display: table-cell;\n        vertical-align: middle; }\n      .gritcode-wizard .wizard-step .wizard-icon .icon-number {\n        line-height: 1em; }\n    .gritcode-wizard .wizard-step .title {\n      font-size: 1.1em;\n      color: #464646; }\n    .gritcode-wizard .wizard-step .description, .gritcode-wizard .wizard-step .step-info {\n      font-size: 0.8em;\n      color: #a8a8a8; }\n    .gritcode-wizard .wizard-step .description {\n      margin-bottom: 2em; }\n    .gritcode-wizard .wizard-step .wizard-progress, .gritcode-wizard .wizard-step .wizard-progress-value {\n      position: absolute;\n      bottom: 2em;\n      left: 0;\n      width: 100%;\n      height: 2px;\n      background: #d9d9d9;\n      z-index: 10; }\n    .gritcode-wizard .wizard-step .wizard-progress-value {\n      top: 0;\n      left: 0;\n      width: 0;\n      background: #42b983;\n      z-index: 11;\n      padding: 0;\n      -webkit-transition: 0.45s width ease;\n      transition: 0.45s width ease; }\n    .gritcode-wizard .wizard-step .step-info {\n      text-align: right; }\n    .gritcode-wizard .wizard-step.active .wizard-icon, .gritcode-wizard .wizard-step.previous .wizard-icon {\n      border-color: #42b983;\n      color: #42b983; }\n    .gritcode-wizard .wizard-step.active .icon, .gritcode-wizard .wizard-step.previous .icon {\n      fill: #42b983; }\n    .gritcode-wizard .wizard-step:last-child .wizard-progress-value {\n      width: 100% !important; }\n  @media (min-width: 544px) {\n    .gritcode-wizard {\n      font-size: 0.9rem; }\n      .gritcode-wizard .wizard-step {\n        display: table-cell; }\n        .gritcode-wizard .wizard-step .description {\n          margin-bottom: 0; }\n        .gritcode-wizard .wizard-step .wizard-progress, .gritcode-wizard .wizard-step .wizard-progress-value {\n          top: 1.45em;\n          left: 49%; }\n        .gritcode-wizard .wizard-step .wizard-progress-value {\n          top: 0;\n          left: 0;\n          padding: 0 0.75em; }\n        .gritcode-wizard .wizard-step .step-info {\n          display: none; }\n        .gritcode-wizard .wizard-step:last-child .wizard-progress {\n          display: none; }\n        .gritcode-wizard .wizard-step:last-child .wizard-progress-value {\n          width: 100% !important; } }\n  @media (min-width: 768px) {\n    .gritcode-wizard {\n      font-size: 1.2rem; } }\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gritcode-wizard\">\r\n   <slot></slot>\r\n</div>\r\n";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{'wizard-step': true, 'active': isActive, 'previous' : isPrevious, 'next' : isNext}\" v-on:click.prevent=\"changeCurrentIndex()\">\r\n\t<div class=\"wizard-progress\">\r\n\t\t<div class=\"wizard-progress-value\"></div>\r\n\t</div>\r\n\t<div class=\"wizard-icon\">\r\n\t\t<div class=\"icon-icon\"><vs-icon :name=\"icon\" v-if=\"icon\"></vs-icon></div>\r\n\t\t<div class=\"icon-number\" v-if=\"!icon\">{{iconNumber || index +1}}</div>\r\n\t</div>\r\n\t<div class=\"wizard-content\">\r\n\t\t<div class=\"title\">{{title}}</div>\r\n\t\t<div class=\"description\">{{description}}</div>\r\n\t</div>\r\n\t<div class=\"step-info\">\r\n\t\tStep {{index+1}}/{{$parent.countItems}}\r\n\t</div>\r\n</div>";

/***/ }
/******/ ]);