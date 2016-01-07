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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
	
	__webpack_require__(1);
	
	/**
	 * IMPORT EACH COMPONENT
	 */
	
	var _toast = __webpack_require__(6);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	var _buttonToggle = __webpack_require__(10);
	
	var _buttonToggle2 = _interopRequireDefault(_buttonToggle);
	
	var _dropdownMultiselect = __webpack_require__(14);
	
	var _dropdownMultiselect2 = _interopRequireDefault(_dropdownMultiselect);
	
	var _offcanvasDrawer = __webpack_require__(28);
	
	var _spinner = __webpack_require__(32);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _truncate = __webpack_require__(36);
	
	var _truncate2 = _interopRequireDefault(_truncate);
	
	var gritcode = {
		toast: _toast2['default'],
		buttonToggle: _buttonToggle2['default'],
		dropdownMultiselect: _dropdownMultiselect2['default'],
		offcanvasWrapper: _offcanvasDrawer.offcanvasWrapper,
		offcanvasDrawer: _offcanvasDrawer.offcanvasDrawer,
		spinner: _spinner2['default'],
		truncate: _truncate2['default']
	};
	
	// export all components under global variable
	exports['default'] = gritcode;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(7);
	
	// import template
	
	var _toastHtml = __webpack_require__(9);
	
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
	    },
	    toastPosition: function toastPosition() {
	      return !this.position ? 'bottom left' : this.position;
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
	
	      this.activeToast = false;
	      this.activeProgressBar = false;
	      this.animationInProgress = false;
	      this.style.transition = 'width 0s';
	      clearTimeout(this.animation);
	      // show next toast from the queue
	      if (this.queue.length > 0) {
	        this._toastAnimation = setTimeout(function () {
	          var toast = _this.queue.shift();
	          _this.show(toast);
	        }, TOAST_ANIMATION);
	      }
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
	      if (options.message) {
	        this.message = options.message;
	      }
	      if (options.context) {
	        this.context = options.context;
	      }
	      if (options.debounce) {
	        this.debounce = options.debounce;
	      }
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
	      // wait for dom element
	      setTimeout(function () {
	        _this2.activeToast = true;
	        _this2.animate();
	      });
	    },
	    addToQueue: function addToQueue(options) {
	      var _this3 = this;
	
	      if (this.animationInProgress || this.queue.length > 0) {
	        // if some other toast is curently animating, add it to the queue
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
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"toast toast-gritcode {{activeToast ? 'active' : ''}} {{toastPosition}} {{toastContext}} {{hideProgress ? '' : 'has-progress'}}\" v-on:mouseover=\"pause\" v-on:mouseout=\"animate\">\r\n  <div v-html=\"message\"></div>\r\n  <div class=\"action\">\r\n\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-on:click=\"clear\">\r\n\t    <span aria-hidden=\"true\">&times;</span>\r\n\t  </button>\r\n  </div>\r\n  <div v-bind:class=\"{'progress-bar': true, active: activeProgressBar}\" v-bind:style=\"style\" v-show=\"!hideProgress\"></div>\r\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(11);
	
	var _buttonToggleHtml = __webpack_require__(13);
	
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
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn btn-toggle btn-toggle-gritcode {{btnSize}} btn-default {{active ? 'active' : ''}}\" :disabled=\"disabled\">\r\n    <button class=\"btn btn-block {{btnVariant}} {{btnSize}}\" v-on:click=\"toggle(false)\">{{text.on}}</button><!--\r\n    --><span class=\"handle\" v-on:click=\"toggle\"></span><!--\r\n    --><button class=\"btn btn-block btn-default {{btnSize}}\" v-on:click=\"toggle(true)\">{{text.off}}</button>\r\n</div>\r\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(15);
	
	__webpack_require__(17);
	
	// import template
	
	var _dropdownMultiselectHtml = __webpack_require__(22);
	
	var _dropdownMultiselectHtml2 = _interopRequireDefault(_dropdownMultiselectHtml);
	
	// import dependencies
	
	var _vuestrapIconsSrcComponentsIcons = __webpack_require__(23);
	
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
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(18);
	
	__webpack_require__(20);

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown-multiselect-gritcode\" v-bind:class=\"{open: show, dropdown: !dropup, dropup: dropup}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click=\"toggle($event)\"\r\n        :disabled=\"disabled\">\r\n        <span class=\"checked-items\" v-html=\"displayItem\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click.stop=\"select($index)\" title=\"{{item.text}}\">{{item.text}} <vs-icon name=\"check\" v-show=\"checked($index) !== false\" class=\"pull-right\"></vs-icon></button>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(24);
	
	var _iconsHtml = __webpack_require__(26);
	
	var _iconsHtml2 = _interopRequireDefault(_iconsHtml);
	
	// enable support for svg in all browsers
	
	__webpack_require__(27);
	
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
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	module.exports = "<span class=\"icons icons-vuestrap {{iconsSize}} {{iconsVariant}} {{iconsBackground}} {{iconsAlign}}\" aria-hidden=\"true\">\r\n\t<span v-if=\"name\">\r\n\t\t<svg role=\"img\" class=\"icon\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + name\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span v-if=\"background\">\r\n\t\t<svg role=\"img\" class=\"icon-background\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + background\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span class=\"text\" v-show=\"text.length\">\r\n\t\t<span><slot>{{text}}</slot></span>\r\n\t</span>\r\n</span>";

/***/ },
/* 27 */
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
	
	var _offcanvasDrawerHtml = __webpack_require__(31);
	
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
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-offcanvas-drawer {{animation}} {{align}} {{show ? 'active' : ''}}\">\r\n  <slot></slot>\r\n</div>\r\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(33);
	
	// import template
	
	var _spinnerHtml = __webpack_require__(35);
	
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
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner spinner-gritcode {{spinnerSize}} {{fixed ? 'spinner-fixed' : ''}}\" v-show=\"active\"> \r\n\t<div class=\"spinner-wrapper\">\r\n\t  <div class=\"spinner-circle\"></div>\r\n\t  <div class=\"spinner-text\">{{text}}</div>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(37);
	
	// import template
	
	var _truncateHtml = __webpack_require__(39);
	
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
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	module.exports = "<span class=\"truncate truncate-gritcode\" v-bind:style=\"{width: truncateWidth}\"><slot></slot></span>\r\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=gritcode-components.js.map