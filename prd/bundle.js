/******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(4);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _classify = __webpack_require__(7);
	
	var _classify2 = _interopRequireDefault(_classify);
	
	var _shopcar = __webpack_require__(10);
	
	var _shopcar2 = _interopRequireDefault(_shopcar);
	
	var _product = __webpack_require__(12);
	
	var _product2 = _interopRequireDefault(_product);
	
	var _login = __webpack_require__(15);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _mine = __webpack_require__(18);
	
	var _mine2 = _interopRequireDefault(_mine);
	
	var _Register = __webpack_require__(20);
	
	var _Register2 = _interopRequireDefault(_Register);
	
	var _list = __webpack_require__(23);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(27);
	var layout = __webpack_require__(31);
	var common = __webpack_require__(25);
	
	common.render(layout);
	//var common = require('./scripts/utils/util.common.js');
	//var html = require('./scripts/tpls/index.string');
	//var html = require('./scripts/tpls/classify.string');
	//var html = require('./scripts/tpls/shopcar.string');
	//var html = require('./scripts/tpls/product.string');
	//common.render(html);
	//require('./scripts/views/product.js');
	//
	//components
	
	//vue router 2
	var routes = [{
	  path: '/',
	  component: _index2.default,
	  children: [{
	    // 当 /user/:id/profile 匹配成功，
	    // UserProfile 会被渲染在 User 的 <router-view> 中
	    path: '/',
	    component: _home2.default
	  }, {
	    path: '/classify',
	    component: _classify2.default
	  }, {
	    path: '/shopcar',
	    component: _shopcar2.default
	  }, {
	    path: '/my',
	    component: _mine2.default
	  }, {
	    path: '/product',
	    component: _product2.default
	  }, {
	    path: '/login',
	    component: _login2.default
	  }, {
	    path: '/Register',
	    component: _Register2.default
	  }, {
	    path: '/list',
	    component: _list2.default
	  }]
	}];
	
	var router = new VueRouter({
	  routes: routes //(缩写)相当于routes:routes
	});
	
	var app = new Vue({
	  router: router
	}).$mount("#app");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				navIndex: 0,
				footerNav: [{
					router: '/',
					title: "主页",
					ico: "&#xe67c;"
				}, {
					router: '/classify',
					title: "分类",
					ico: "&#xe637;"
				}, {
					router: '/shopcar',
					title: "购物车",
					ico: "&#xe68a;"
				}, {
					router: '/my',
					title: "我的",
					ico: "&#xe614;"
				}]
			};
		},
		methods: {
			changeNav: function (index) {
				this.navIndex = index;
			}
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-index",
	    attrs: {
	      "id": "mIndex"
	    }
	  }, [_c('router-view'), _vm._v(" "), _c('footer', [_c('ul', _vm._l((_vm.footerNav), function(fn, i) {
	    return _c('li', {
	      class: {
	        active: i == _vm.navIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.changeNav(i)
	        }
	      }
	    }, [_c('router-link', {
	      attrs: {
	        "to": fn.router
	      }
	    }, [_c('i', {
	      staticClass: "yo-ico",
	      domProps: {
	        "innerHTML": _vm._s(fn.ico)
	      }
	    }), _vm._v(" "), _c('b', [_vm._v(_vm._s(fn.title))])])], 1)
	  }))])], 1)
	},staticRenderFns: []}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				swiper: null,
	
				navIndex: 0,
	
				nav: ['精选', '框架眼镜', '太阳眼镜', '隐形眼镜', '彩瞳', '护理液'],
	
				list: []
			};
		},
		methods: {
			changeTab: function (index) {
				this.swiper.slideTo(index);
				this.navIndex = index;
			}
		},
	
		mounted: function () {
	
			new Swiper('#banner-swiper', {
				autoplay: 1000,
				loop: true,
				pagination: '.swiper-pagination'
			});
	
			fetch('/api/indexList').then(response => response.json()).then(res => {
				var that = this;
				that.list = res;
				this.swiper = new Swiper('#index-swiper', {
					loop: false,
					onSlideChangeStart: function (swiper) {
						that.navIndex = swiper.activeIndex;
					}
				});
			}).catch(e => console.log("Oops,error", e));
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_vm._m(0), _vm._v(" "), _c('section', [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('nav', {
	    attrs: {
	      "id": "index-scroll"
	    }
	  }, [_c('ul', _vm._l((_vm.nav), function(item, index) {
	    return _c('li', {
	      class: {
	        active: index == _vm.navIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.changeTab(index)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "yo-ico"
	    }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v(_vm._s(item))])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "list"
	  }, [_c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "index-swiper"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "pTitle"
	    }, [_c('i', [_vm._v(_vm._s(item.active))]), _vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('b', {
	      staticClass: "pComment"
	    }, [_c('span', [_c('i', [_vm._v(_vm._s(item.currentPrice))]), _c('i', [_vm._v(_vm._s(item.prePrice))])]), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.commentCount))]), _c('i', [_vm._v("评论")])])])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "pTitle"
	    }, [_c('i', [_vm._v(_vm._s(item.active))]), _vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('b', {
	      staticClass: "pComment"
	    }, [_c('span', [_c('i', [_vm._v(_vm._s(item.currentPrice))]), _c('i', [_vm._v(_vm._s(item.prePrice))])]), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.commentCount))]), _c('i', [_vm._v("评论")])])])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "pTitle"
	    }, [_c('i', [_vm._v(_vm._s(item.active))]), _vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('b', {
	      staticClass: "pComment"
	    }, [_c('span', [_c('i', [_vm._v(_vm._s(item.currentPrice))]), _c('i', [_vm._v(_vm._s(item.prePrice))])]), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.commentCount))]), _c('i', [_vm._v("评论")])])])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "pTitle"
	    }, [_c('i', [_vm._v(_vm._s(item.active))]), _vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('b', {
	      staticClass: "pComment"
	    }, [_c('span', [_c('i', [_vm._v(_vm._s(item.currentPrice))]), _c('i', [_vm._v(_vm._s(item.prePrice))])]), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.commentCount))]), _c('i', [_vm._v("评论")])])])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "pTitle"
	    }, [_c('i', [_vm._v(_vm._s(item.active))]), _vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('b', {
	      staticClass: "pComment"
	    }, [_c('span', [_c('i', [_vm._v(_vm._s(item.currentPrice))]), _c('i', [_vm._v(_vm._s(item.prePrice))])]), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.commentCount))]), _c('i', [_vm._v("评论")])])])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "pTitle"
	    }, [_c('i', [_vm._v(_vm._s(item.active))]), _vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('b', {
	      staticClass: "pComment"
	    }, [_c('span', [_c('i', [_vm._v(_vm._s(item.currentPrice))]), _c('i', [_vm._v(_vm._s(item.prePrice))])]), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.commentCount))]), _c('i', [_vm._v("评论")])])])])
	  }))])])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('div', {
	    staticClass: "search"
	  }, [_c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入你要搜索的物品"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "banner-swiper"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', [_c('li', [_c('img', {
	    attrs: {
	      "src": "images/mobilevip_banner_bg.png"
	    }
	  })])])]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', [_c('li', [_c('img', {
	    attrs: {
	      "src": "images/banner-02.png"
	    }
	  })])])]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', [_c('li', [_c('img', {
	    attrs: {
	      "src": "images/mobilevip_banner_bg.png"
	    }
	  })])])]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', [_c('li', [_c('img', {
	    attrs: {
	      "src": "images/banner-02.png"
	    }
	  })])])])]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-pagination"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "classify"
	  }, [_c('ul', [_c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobileallclassify.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("全部分类")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobiletuangou.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("团购")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobileintergration.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("积分商城")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobileframeglasses.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("框架眼镜")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "images/mobilesunglasses.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("太阳镜")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobileconcatlense.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("隐形眼镜")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobilecolorlense.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("彩瞳")])]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/mobilecareproducts.png"
	    }
	  })]), _vm._v(" "), _c('b', [_vm._v("护理用品")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "topSales"
	  }, [_c('div', {
	    staticClass: "hotTitle"
	  }, [_c('b', [_c('img', {
	    attrs: {
	      "src": "/images/hotline.png"
	    }
	  }), _vm._v("热销TOP榜")]), _vm._v(" "), _c('b', [_vm._v("更多"), _c('img', {
	    attrs: {
	      "src": "/images/arrow_right.png"
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "hotProduct"
	  }, [_c('div', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/hot-01.png"
	    }
	  }), _vm._v(" "), _c('b', [_c('span', [_vm._v("点睛之美  让美更美")]), _c('span', [_vm._v("博士伦炫眸日抛10片装")])])]), _vm._v(" "), _c('p', [_c('span', [_vm._v("￥")]), _c('span', [_vm._v("68")]), _vm._v("/盒")]), _vm._v(" "), _c('img', {
	    staticClass: "itemImg",
	    attrs: {
	      "src": "/images/glasses-01.png"
	    }
	  })]), _vm._v(" "), _c('div', [_c('i', [_c('p', [_c('img', {
	    attrs: {
	      "src": "/images/hot-02.png"
	    }
	  }), _vm._v(" "), _c('span', [_c('span', [_vm._v("全面升级  更易配戴")]), _c('span', [_vm._v("强生美瞳日抛30片装")])])]), _vm._v(" "), _c('b', [_c('p', [_c('span', [_vm._v("￥")]), _c('span', [_vm._v("189")]), _vm._v("/盒")]), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/glasses-02.png"
	    }
	  })])]), _vm._v(" "), _c('i', [_c('p', [_c('img', {
	    attrs: {
	      "src": "/images/hot-02.png"
	    }
	  }), _vm._v(" "), _c('span', [_c('span', [_vm._v("长效高清  全天水润")]), _c('span', [_vm._v("博士伦清朗日抛20片装")])])]), _vm._v(" "), _c('b', [_c('p', [_c('span', [_vm._v("￥")]), _c('span', [_vm._v("158")]), _vm._v("/盒")]), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/glasses-03.png"
	    }
	  })])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "discounts"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/mobilediscount.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "barginBuy"
	  }, [_c('div', {
	    staticClass: "salesTitle"
	  }, [_c('b', [_c('img', {
	    attrs: {
	      "src": "/images/hotline.png"
	    }
	  }), _vm._v("超值购")])]), _vm._v(" "), _c('div', {
	    staticClass: "salesProduct"
	  }, [_c('div', [_c('i', [_c('b', [_vm._v("强生润眸双周抛6片装")]), _vm._v(" "), _c('b', [_vm._v("买一赠二")]), _vm._v(" "), _c('b', [_c('p', [_c('span', [_vm._v("￥")]), _c('span', [_vm._v("82")]), _vm._v("/盒")]), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/zhi-01.png"
	    }
	  })])]), _vm._v(" "), _c('i', [_c('img', {
	    attrs: {
	      "src": "/images/zhi-02.png"
	    }
	  })])]), _vm._v(" "), _c('div', [_c('b', [_vm._v("手机专享")]), _vm._v(" "), _c('b', [_vm._v("专属优惠  全品省不停")]), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/zhi-03.png"
	    }
	  })])])])
	}]}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(8)
	
	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				classify: [{
					ico: "&#xe6bd;",
					title: "透明隐形眼镜"
				}, {
					ico: "&#xe644;",
					title: "彩色隐形眼镜"
				}, {
					ico: "&#xe610;",
					title: "护理用品"
				}, {
					ico: "&#xe638;",
					title: "近视眼镜"
				}, {
					ico: "&#xe63e;",
					title: "太阳眼镜"
				}, {
					ico: "&#xe644;",
					title: "功能眼镜"
				}, {
					ico: "&#xe620;",
					title: "美妆个护"
				}]
			};
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "classify"
	    }
	  }, [_c('header', [_c('input', {
	    attrs: {
	      "type": "search",
	      "value": "请输入您要搜索的物品"
	    },
	    domProps: {
	      "value": "请输入您要搜索的物品"
	    }
	  })]), _vm._v(" "), _c('section', [_c('ul', _vm._l((_vm.classify), function(cla) {
	    return _c('li', [_c('i', {
	      staticClass: "yo-ico",
	      domProps: {
	        "innerHTML": _vm._s(cla.ico)
	      }
	    }), _vm._v(" "), _c('a', {
	      attrs: {
	        "href": "/#/list"
	      }
	    }, [_c('b', [_vm._v(_vm._s(cla.title))])])])
	  }))])])
	},staticRenderFns: []}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "shopcar"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('section', {
	    staticClass: "mes"
	  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
	    staticClass: "coupon"
	  }, [_c('h2', [_vm._v("使用礼券")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text",
	      "value": "请输入礼券号"
	    },
	    domProps: {
	      "value": "请输入礼券号"
	    }
	  })])]), _vm._v(" "), _vm._m(3)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('p', [_vm._v("\n\t\t\t购物车\n\t\t\t"), _c('i', [_vm._v("编辑")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ad"
	  }, [_c('span', [_vm._v("满赠卷")]), _vm._v(" "), _c('p', [_vm._v("还差340.00元可以参与“399赠2017年“月月打折券”")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', [_c('li', [_c('div', {
	    staticClass: "goodsImg"
	  }, [_c('img', {
	    attrs: {
	      "src": "images/goods01.jpg",
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "goodsName"
	  }, [_vm._v("博士伦波士顿滴眼液护理眼镜液护理眼镜液护理眼镜0.5ml")]), _vm._v(" "), _c('div', {
	    staticClass: "goodsOther"
	  }, [_c('span', [_vm._v("￥59.00")]), _vm._v(" "), _c('em', [_vm._v("已优惠￥10.00")]), _vm._v(" "), _c('em', [_vm._v("限购2件")])]), _vm._v(" "), _c('div', {
	    staticClass: "carBtn"
	  }, [_c('em', [_vm._v("-")]), _vm._v(" "), _c('em', [_vm._v("1")]), _vm._v(" "), _c('em', [_vm._v("+")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "goodsImg"
	  }, [_c('img', {
	    attrs: {
	      "src": "images/goods01.jpg",
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "goodsName"
	  }, [_vm._v("博士伦波士顿滴眼液护理眼镜液护理眼镜液护理眼镜0.5ml")]), _vm._v(" "), _c('div', {
	    staticClass: "goodsOther"
	  }, [_c('span', [_vm._v("￥59.00")]), _vm._v(" "), _c('em', [_vm._v("已优惠￥10.00")]), _vm._v(" "), _c('em', [_vm._v("限购2件")])]), _vm._v(" "), _c('div', {
	    staticClass: "carBtn"
	  }, [_c('em', [_vm._v("-")]), _vm._v(" "), _c('em', [_vm._v("1")]), _vm._v(" "), _c('em', [_vm._v("+")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "tot"
	  }, [_c('div', {
	    staticClass: "total"
	  }, [_c('div', {
	    staticClass: "totalLeft"
	  }, [_c('em', [_vm._v("总金额:￥69.00   已优惠:￥10.00")]), _vm._v(" "), _c('em', [_vm._v("应付:"), _c('b', [_vm._v("￥59.00")]), _vm._v("(不含运费)")])]), _vm._v(" "), _c('div', {
	    staticClass: "totalRight"
	  }, [_vm._v("\n\t\t\t\t结算(1)\n\t\t\t")])]), _vm._v(" "), _c('section')])
	}]}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(13)
	
	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 13 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				swiper: null,
				imgSwiper: null,
				proNavIndex: 0,
				proNav: [{
					title: '简介',
					ico: '&#xe627;'
				}, {
					title: '详情',
					ico: '&#xe65d;'
				}, {
					title: '评论',
					ico: '&#xe655;'
				}]
			};
		},
		methods: {
			changeTab: function (i) {
				this.swiper.slideTo(i + 1);
				this.proNavIndex = i;
			}
		},
		mounted: function () {
			this.swiper = new Swiper('.introduce .swiper-container', {
				autoplay: 0, //可选选项，自动滑动
				loop: true,
				autoHeight: true,
				touchRatio: 0
				//noSwiping : true,'
			});
			this.imgSwiper = new Swiper('.img .swiper-container', {
				autoplay: 0 });
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "product",
	    attrs: {
	      "id": "m-product"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('section', [_vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "product_nav"
	  }, [_c('ul', {
	    staticClass: "productNav"
	  }, _vm._l((_vm.proNav), function(item, index) {
	    return _c('li', {
	      staticClass: "{active:index==proNavIndex}",
	      on: {
	        "click": function($event) {
	          _vm.changeTab(index)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "yo-ico",
	      domProps: {
	        "innerHTML": _vm._s(item.ico)
	      }
	    }, [_vm._v("")]), _vm._v(" "), _c('b', {
	      domProps: {
	        "textContent": _vm._s(item.title)
	      }
	    })])
	  }))]), _vm._v(" "), _c('ol', {
	    staticClass: "introduce"
	  }, [_c('div', {
	    staticClass: "swiper-container"
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('div', {
	    staticClass: "contain"
	  }, [_vm._m(2), _vm._v(" "), _c('div', {
	    staticClass: "present"
	  }, [_vm._m(3), _vm._v(" "), _c('div', {
	    staticClass: "list"
	  }, [_c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_001.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("送品牌护理液")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_002.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("赠精美隐形眼镜")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_003.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("全场下单送护眼贴")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_004.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("爱尔康全套")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_001.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("爱尔康护理液")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_002.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("赠精美隐形眼镜")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_003.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("全场下单送护眼贴")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_004.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("爱尔康全套")])], 1), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": "/images/zp_001.jpg"
	    }
	  }), _vm._v(" "), _c('figuration', [_vm._v("爱尔康护理液")])], 1)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)])])])]), _vm._v(" "), _vm._m(8)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('ul', [_c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/arrow_left.png",
	      "alt": ""
	    }
	  })])]), _vm._v(" "), _c('li', [_vm._v("商品详情")]), _vm._v(" "), _c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/abc_ic_menu_moreoverflow_mtrl_alpha.png",
	      "alt": ""
	    }
	  })])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "img"
	  }, [_c('div', {
	    staticClass: "swiper-container"
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/001.jpg"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/001.jpg"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/001.jpg"
	    }
	  })])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "message"
	  }, [_c('div', {
	    staticClass: "introLeft"
	  }, [_c('span', [_vm._v("爱尔康视康舒视氧硅水凝胶月抛隐形眼镜6片装(新老包装随机发货)")]), _vm._v(" "), _c('i', [_vm._v("￥289.00")]), _vm._v(" "), _c('strong', [_vm._v("￥118.00"), _c('b', [_vm._v("可得价")])]), _vm._v(" "), _c('em', [_vm._v("积分抵扣$10元")]), _c('em', [_vm._v("购买赠送118积分")])]), _vm._v(" "), _c('div', {
	    staticClass: "introRight"
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "title"
	  }, [_c('p', [_vm._v("促销")]), _vm._v(" "), _c('p', [_vm._v("赠品")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "kf"
	  }, [_c('span', {
	    staticClass: "zx"
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("在线客服")])]), _vm._v(" "), _c('span', {
	    staticClass: "zx"
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("电话客服")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "likely"
	  }, [_c('h2', [_vm._v("猜你喜欢")]), _vm._v(" "), _c('div', {
	    staticClass: "list"
	  }, [_c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": "/images/likly_001.jpg"
	    }
	  })]), _vm._v(" "), _c('dd', [_c('i', [_vm._v("HAN板材金属光学眼镜")]), _vm._v(" "), _c('b', [_vm._v("￥169.00")])])]), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": "/images/likly_002.jpg"
	    }
	  })]), _vm._v(" "), _c('dd', [_c('i', [_vm._v("HAN SUNGLASSES太阳镜")]), _vm._v(" "), _c('b', [_vm._v("￥169.00")])])]), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": "/images/likly_002.jpg"
	    }
	  })]), _vm._v(" "), _c('dd', [_c('i', [_vm._v("KKR舒透氧气")]), _vm._v(" "), _c('b', [_vm._v("￥25.00")])])]), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": "/images/likly_001.jpg"
	    }
	  })]), _vm._v(" "), _c('dd', [_c('i', [_vm._v("HAN板材金属光学眼镜")]), _vm._v(" "), _c('b', [_vm._v("￥169.00")])])]), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": "/images/likly_002.jpg"
	    }
	  })]), _vm._v(" "), _c('dd', [_c('i', [_vm._v("HAN SUNGLASSES太阳镜")]), _vm._v(" "), _c('b', [_vm._v("￥169.00")])])]), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": "/images/likly_002.jpg"
	    }
	  })]), _vm._v(" "), _c('dd', [_c('i', [_vm._v("KKR舒透氧气")]), _vm._v(" "), _c('b', [_vm._v("￥25.00")])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('div', {
	    staticClass: "contain"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/content_1.jpg"
	    }
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/content_2.jpg"
	    }
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/content_3.jpg"
	    }
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": "/images/content_4.jpg"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('div', {
	    staticClass: "contain"
	  }, [_c('ul', {
	    staticClass: "comment"
	  }, [_c('li', [_c('div', {
	    staticClass: "person"
	  }, [_c('div', {
	    staticClass: "personLeft"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/comment_001.jpg"
	    }
	  }), _vm._v(" "), _c('i', [_vm._v("5***R")])]), _vm._v(" "), _c('div', {
	    staticClass: "personRight"
	  }, [_c('i', [_vm._v("2017-01-07 14:33:37")])])]), _vm._v(" "), _c('span', {
	    staticClass: "grade"
	  }, [_vm._v("★★★★★")]), _vm._v(" "), _c('span', {
	    staticClass: "account"
	  }, [_vm._v("挺好，挺便宜的，不错，经常买")]), _vm._v(" "), _c('span', {
	    staticClass: "color"
	  }, [_vm._v("博士伦朗一日水润高清日抛隐形眼镜30片装")]), _vm._v(" "), _c('span', {
	    staticClass: "add"
	  }, [_vm._v("来自：北京市")])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', [_c('ul', [_c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("收藏")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("购物车")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("加入购物车")])])])])
	}]}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(16)
	
	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				message: "获取验证码"
			};
		},
		methods: {
	
			bl: function () {
				var phone = $("#username").val();
				//console.log(typeof phone);
	
				if (/^1[34578]\d{9}$/.test(phone) == true) {
					console.log("ok");
				} else {
					console.log("手机号码错误！");
				};
			},
			bl1: function () {
				var num = $("#code").val();
				if (num == checkCode.innerHTML) {
					console.log("ok1");
				} else {
					console.log("验证码错误！");
				};
			},
	
			bl2: function () {
				var Word = $("#password").val();
				console.log(typeof Word);
	
				if (/^(\w){6,20}$/.test(Word) == true) {
					console.log("ok2");
				} else {
					console.log("密码格式不对！");
				};
			},
			bl3: function () {
				var nba = $("#newpassword").val();
				if (nba == $("#password").val()) {
					console.log("ok3");
				} else {
					console.log("确认密码不正确！");
				};
			},
	
			Math: function () {
				var code = "";
				var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
				for (var i = 0; i < 4; i++) {
					var charNum = Math.floor(Math.random() * 52);
					code += codeChars[charNum];
				}
				checkCode.innerHTML = code;
			},
			loginMethods: function () {}
		}
	
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "login-div"
	    }
	  }, [_c('header', [_c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/arrow_left.png"
	    }
	  })]), _vm._v(" "), _c('div', [_vm._v("登录")]), _vm._v(" "), _c('div')]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "mine-top"
	    }
	  }, [_c('div', {
	    staticClass: "mine-top1"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/no_login_default.png",
	      "alt": ""
	    }
	  }), _vm._v(" "), _c('p', [_vm._v("欢迎你!")])])]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "main"
	    }
	  }, [_c('div', [_c('span', [_vm._v("账号")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入手机号"
	    }
	  })]), _vm._v(" "), _c('div', [_c('span', [_vm._v("密码")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入密码"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "but"
	  }, [_c('button', [_vm._v("登录")]), _vm._v(" "), _c('button', [_vm._v("手机快速注册")]), _vm._v(" "), _c('span', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/forget_pwd.png"
	    }
	  }), _vm._v("忘记密码")])])]), _vm._v(" "), _c('footer', [_c('p', [_vm._v("第三方登录")]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/btn_qq.png",
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/alipay_icon.png",
	      "alt": ""
	    }
	  })])])])
	}]}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "mine-div"
	    }
	  }, [_c('header', [_c('div'), _vm._v(" "), _c('div', [_vm._v("我的")]), _vm._v(" "), _c('div', {
	    staticClass: "yo-ico"
	  }, [_vm._v("㐾")])]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "box"
	    }
	  }, [_c('div', {
	    attrs: {
	      "id": "mine-top"
	    }
	  }, [_c('div', {
	    staticClass: "mine-top1"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/no_login_default.png",
	      "alt": ""
	    }
	  }), _vm._v(" "), _c('p', [_vm._v("欢迎你!")])]), _vm._v(" "), _c('div', {
	    staticClass: "mine-top2"
	  }, [_c('span', [_c('a', {
	    attrs: {
	      "href": "/#/login"
	    }
	  }, [_vm._v("登录")])]), _vm._v(" "), _c('span', [_c('a', {
	    attrs: {
	      "href": "/#/Register"
	    }
	  }, [_vm._v("注册")])])])]), _vm._v(" "), _c('nav', [_c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/waitingpay.png",
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/consignment_unselect.png",
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/evaluate_unselect.png",
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/backchange_unselect.png",
	      "alt": ""
	    }
	  })])]), _vm._v(" "), _c('main', [_c('div', {
	    staticClass: "m-m1"
	  }, [_c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/all_orders.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("全部订单")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("全部已购买商品  >")])]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/my_wallet.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("我的钱包")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("优惠券、余额、积分  >")])])]), _vm._v(" "), _c('div', {
	    staticClass: "m-m2"
	  }, [_c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/my_collection.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("我的收藏")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v(">")])]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/my_message.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("我的消息")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v(">")])]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/security.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("账户安全")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v(">")])])]), _vm._v(" "), _c('div', {
	    staticClass: "m-m3"
	  }, [_c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/feedback.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("意见反馈")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v(">")])]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/no_picture.png"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("关于可得")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v(">")])])])])])])
	}]}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(21)
	
	/* template */
	var __vue_template__ = __webpack_require__(22)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  data: function () {
	    message: "获取验证码";
	  },
	  methods: {
	
	    bl: function () {
	      var phone = $("#username").val();
	      //console.log(typeof phone);
	
	      if (/^1[34578]\d{9}$/.test(phone) == true) {
	        console.log("ok");
	      } else {
	        console.log("手机号码错误！");
	      };
	    },
	    bl1: function () {
	      var num = $("#code").val();
	      if (num == checkCode.innerHTML) {
	        console.log("ok1");
	      } else {
	        console.log("验证码错误！");
	      };
	    },
	
	    bl2: function () {
	      var Word = $("#password").val();
	      console.log(typeof Word);
	
	      if (/^(\w){6,20}$/.test(Word) == true) {
	        console.log("ok2");
	      } else {
	        console.log("密码格式不对！");
	      };
	    },
	    bl3: function () {
	      var nba = $("#newpassword").val();
	      if (nba == $("#password").val()) {
	        console.log("ok3");
	      } else {
	        console.log("确认密码不正确！");
	      };
	    },
	
	    Math: function () {
	      var code = "";
	      var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	      for (var i = 0; i < 4; i++) {
	        var charNum = Math.floor(Math.random() * 52);
	        code += codeChars[charNum];
	      }
	      checkCode.innerHTML = code;
	    },
	    loginMethods: function () {
	      if (toggleAll.checked == true) {
	        localStorage.setItem("toggleAll", "username");
	      } else {
	        localStorage.setItem("toggleAll", "");
	      }
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "register-div"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('main', [_c('div', [_c('span', [_vm._v("手机")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text",
	      "id": "username",
	      "placeholder": "输入手机号"
	    },
	    on: {
	      "blur": _vm.bl
	    }
	  })]), _vm._v(" "), _c('div', [_c('input', {
	    attrs: {
	      "id": "code",
	      "placeholder": "请输入手机获取的验证码"
	    },
	    on: {
	      "blur": _vm.bl1
	    }
	  }), _c('button', {
	    attrs: {
	      "id": "checkCode"
	    },
	    on: {
	      "click": Math
	    }
	  }, [_vm._v(_vm._s(_vm.message))])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("设置密码")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "id": "password",
	      "type": "password",
	      "placeholder": "6-20位密码"
	    },
	    on: {
	      "blur": _vm.bl2
	    }
	  })]), _vm._v(" "), _c('div', [_c('span', [_vm._v("再次确认")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "id": "newpassword",
	      "type": "password",
	      "placeholder": "请输入确认密码"
	    },
	    on: {
	      "blur": _vm.bl3
	    }
	  })])]), _vm._v(" "), _c('footer', [_c('button', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.loginMethods
	    }
	  }, [_vm._v("注册登录")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/arrow_left.png"
	    }
	  })]), _vm._v(" "), _c('div', [_vm._v("手机注册")]), _vm._v(" "), _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/mine-picture/abc_ic_menu_moreoverflow_mtrl_alpha.png"
	    }
	  })])])
	}]}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(24)
	
	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var common = __webpack_require__(25);
	module.exports = {
		data: function () {
			return {
				swiper: null,
				navIndex: 0,
				nav: ['综合', '销量', '价格'],
				list: []
			};
		},
		methods: {
			changeTab: function (index) {
				this.swiper.slideTo(index);
	
				this.navIndex = index;
			}
		},
		mounted: function () {
			fetch('/api/list').then(response => response.json()).then(res => {
				//console.log(res);
				var that = this;
				that.list = res;
				that.swiper = new Swiper('#list-swiper', {
					loop: false,
					onSlideChangeStart: function (swiper) {
						that.navIndex = swiper.activeIndex;
					}
				});
				common.isAllLoaded('#list-scroll ul', function () {
					common.scroll(that);
				});
			}).catch(e => console.log("oops.error", e));
		}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	var common = {
		render: function render(str) {
			var body = document.body;
			body.innerHTML = str + body.innerHTML;
		},
		isAllLoaded: function isAllLoaded(scope, cb) {
			var t_img; // 定时器
			var isLoad = true; // 控制变量
	
			// 判断图片加载状况，加载完成后回调
			return isImgLoad(cb);
	
			// 判断图片加载的函数
			function isImgLoad(callback) {
				// 查找所有图片，迭代处理
				$(scope).find('img').each(function () {
					// 找到为0就将isLoad设为false，并退出each
					if (this.height === 0) {
						isLoad = false;
						return false;
					}
				});
				// 为true，没有发现为0的。加载完毕
				if (isLoad) {
					clearTimeout(t_img); // 清除定时器
					// 回调函数
					callback();
					// 为false，因为找到了没有加载完成的图，将调用定时器递归
				} else {
					isLoad = true;
					t_img = setTimeout(function () {
						isImgLoad(callback); // 递归扫描
					}, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
				}
			}
		},
	
		scroll: function scroll(that) {
			var myScroll = new IScroll('#list-scroll', {
				probeType: 3,
				mouseWheel: true
			});
			var scrollHeight = 50;
			$('.head.hide').removeClass('hide');
			$('.foot.hide').removeClass('hide');
			myScroll.scrollBy(0, -scrollHeight);
	
			var head = $('.head img'),
			    topImgHasClass = head.hasClass('up');
			var foot = $('.foot img'),
			    bottomImgHasClass = head.hasClass('down');
			myScroll.on('scroll', function () {
				var y = this.y,
				    maxY = this.maxScrollY - y;
				if (y >= 0) {
					!topImgHasClass && head.addClass('up');
					return '';
				}
				if (maxY >= 0) {
					!bottomImgHasClass && foot.addClass('down');
					return '';
				}
			});
	
			myScroll.on('scrollEnd', function () {
				if (this.y >= -scrollHeight && this.y < 0) {
					myScroll.scrollTo(0, -scrollHeight);
					head.removeClass('up');
				} else if (this.y >= 0) {
					head.attr('src', '/images/list-images/ajax-loader.gif');
	
					setTimeout(function () {
						myScroll.scrollTo(0, -scrollHeight);
						head.removeClass('up');
						head.attr('src', '/images/list-images/default_indicator_arrow.png');
					}, 100);
				}
	
				var maxY = this.maxScrollY - this.y;
				if (maxY > -scrollHeight && maxY < 0) {
					var self = this;
					myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
					foot.removeClass('down');
				} else if (maxY >= 0) {
					foot.attr('src', '/images/list-images/ajax-loader.gif');
	
					var self = this;
	
					fetch('/api/more').then(function (response) {
						return response.json();
					}).then(function (res) {
						//console.log(res);
						that.list = that.list.concat(res);
						console.log(list);
						myScroll.refresh();
	
						myScroll.scrollTo(0, self.maxScrollY - 60);
	
						foot.removeClass('down');
						foot.attr('src', '/images/list-images/default_indicator_arrow.png');
					});
				}
			});
		}
	};
	
	module.exports = common;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "list",
	    attrs: {
	      "id": "list"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('nav', [_c('ul', _vm._l((_vm.nav), function(item, index) {
	    return _c('li', {
	      class: {
	        active: index == _vm.navIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.changeTab(index)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('section', [_c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "list-swiper"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide",
	    attrs: {
	      "id": "list-scroll"
	    }
	  }, [_c('div', {
	    staticClass: "scroll-container"
	  }, [_vm._m(1), _vm._v(" "), _c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('i', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    })]), _vm._v(" "), _c('p', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
	      staticClass: "price"
	    }, [_c('b', [_vm._v("￥")]), _vm._v(_vm._s(item.price))])])
	  })), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('i', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    })]), _vm._v(" "), _c('p', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
	      staticClass: "price"
	    }, [_c('b', [_vm._v("￥")]), _vm._v(_vm._s(item.price))])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('i', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    })]), _vm._v(" "), _c('p', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
	      staticClass: "price"
	    }, [_c('b', [_vm._v("￥")]), _vm._v(_vm._s(item.price))])])
	  }))])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('ul', [_c('li', [_c('i', [_c('img', {
	    attrs: {
	      "src": "/images/list-images/arrow_left.png",
	      "alt": ""
	    }
	  })])]), _vm._v(" "), _c('li', [_vm._v("隐形护理眼镜")]), _vm._v(" "), _c('li', [_vm._v("筛选")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/list-images/default_indicator_arrow.png",
	      "alt": ""
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/list-images/default_indicator_arrow.png",
	      "alt": ""
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载...")])])
	}]}

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">   <router-view></router-view>  </div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map