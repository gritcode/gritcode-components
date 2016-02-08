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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */,
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
//# sourceMappingURL=gritcode-components.js.map