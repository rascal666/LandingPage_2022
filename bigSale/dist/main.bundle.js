/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _scripts_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/scroll */ "./src/scripts/scroll.js");
/* harmony import */ var _scripts_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_consultant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/consultant */ "./src/scripts/consultant.js");
/* harmony import */ var _scripts_consultant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_consultant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_reproduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/reproduction */ "./src/scripts/reproduction.js");
/* harmony import */ var _scripts_reproduction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_reproduction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_wow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/wow */ "./src/scripts/wow.js");
/* harmony import */ var _scripts_wow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_wow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/data */ "./src/scripts/data.js");
/* harmony import */ var _styles_an_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/an.css */ "./src/styles/an.css");
/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/modal */ "./src/scripts/modal.js");
/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_setting_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/setting-swiper */ "./src/scripts/setting-swiper.js");










/***/ }),

/***/ "./src/scripts/consultant.js":
/*!***********************************!*\
  !*** ./src/scripts/consultant.js ***!
  \***********************************/
/***/ (() => {

// Begin Me - Talk
window.MeTalkSetup = {
  domain: "comkc.pulscen.ru"
};

(function (d, w, m) {
  window.supportAPIMethod = m;
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.id = "supportScript";
  s.charset = "utf-8";
  s.async = true;
  var id = "9e71060b780fc267cbbfff6f8dec56ba";
  s.src = "//me-talk.ru/support/support.js?h=" + id;
  var sc = d.getElementsByTagName("script")[0];

  w[m] = w[m] || function () {
    (w[m].q = w[m].q || []).push(arguments);
  };

  if (sc) sc.parentNode.insertBefore(s, sc);else d.documentElement.firstChild.appendChild(s);
})(document, window, "MeTalk"); // End Me - Talk

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wow */ "./src/scripts/wow.js");
/* harmony import */ var _wow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wow__WEBPACK_IMPORTED_MODULE_1__);
var dom = document.querySelector('.js-body');


new (_wow__WEBPACK_IMPORTED_MODULE_1___default())().init();
var currentData = new Date();
var month = currentData.getMonth() + 1;
var data = currentData.getDate() + '0' + month + '22';
dom.innerHTML = dom.innerHTML.replace(/curData/gi, data); // Функция для анимации элемента
// anime({
//     // Получаем элемент
//     targets: '.benefits__title',
//     // Перемешаем его по X
//     translateX: 250
// });

(0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  targets: '.lines-d',
  strokeDashoffset: [animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].setDashoffset, 0],
  easing: 'easeInSine',
  duration: 1500,
  delay: function delay(el, i) {
    return i * 250;
  },
  direction: 'alternate',
  loop: false
});

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ (() => {

var _mainContent = document.querySelector('.js-body');

var _modalContent = document.querySelectorAll('.modal-wrapper-block');

var _modalClose = document.querySelectorAll('.modal-close');

_mainContent.addEventListener('click', function (e) {
  var attr_Rel = e.target.getAttribute('rel'); //находим аттрибут попапа который открыли

  var attr_Rel_child = e.target.parentNode.getAttribute('rel'); //находим аттрибут попапа который открыли

  if (attr_Rel != null) {
    modal(attr_Rel);
  } else {
    modal(attr_Rel_child);
  }
});

function modal(attr) {
  _modalContent.forEach(function (element) {
    attrPopup = element.getAttribute('data-popup');

    if (attrPopup == attr) {
      // сравниваем с аттрибутами модальных окн, если совпадают то
      _modalClose[0].style.display = "block";
      console.log(element);
      element.classList.add('modal-block-show'); // показываем модальное окно

      _mainContent.style.overflow = 'hidden'; // отключаем прокрутку страницы
      // функция для закрытия модального окна 

      _modalClose[0].onclick = function () {
        _modalClose[0].style.display = "none";
        element.classList.remove('modal-block-show');
        _mainContent.style.overflow = 'auto'; // включаем прокрутку страницы
      };

      element.addEventListener('click', function (clickClose_) {
        if (clickClose_.target.classList.contains('modal-wrapper-block') || clickClose_.target.classList.contains('modal-closeButt')) {
          element.classList.remove('modal-block-show');
          element.children[0].classList.remove('modal-block-height');
          _mainContent.style.overflow = 'auto'; // включаем прокрутку страницы
        }
      }); // функция для закрытия модального окна через Esc

      document.addEventListener('keydown', function (keyClose) {
        if (keyClose.keyCode == '27') {
          _modalClose[0].style.display = "none";
          element.classList.remove('modal-block-show');
          _mainContent.style.overflow = 'auto'; // включаем прокрутку страницы
        }
      }); //получаем высоту экрана (рабочей области)

      var height = document.documentElement.clientHeight; //получаем высоту элемента

      var heightEl = element.children[0].clientHeight;

      if (heightEl > height) {
        element.children[0].classList.add('modal-block-height');
        element.style.overflow = 'auto';
      }
    }
  });
}

/***/ }),

/***/ "./src/scripts/reproduction.js":
/*!*************************************!*\
  !*** ./src/scripts/reproduction.js ***!
  \*************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

phone_js = document.querySelectorAll('.phone-js');
var _byRender = "\n\t<p>\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438</p>\n\t\t\t\t\t\t\t\t<div class=\"col_cintact_futer\">\n\t\t\t\t\t\t\t\t\t<div class=\"massenger_futer\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t<a class=\"numder_futer fat\" href=\"tel:+375173882537\">+375 17 388 25 37\u200B</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"massenger_futer\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t<a class=\"numder_futer fat\" href=\"tel:+375445189191\">+375 44 518 91 91</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p>\u0418\u043B\u0438 \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440:</p>\n\t\t\t\t\t\t\t\t<div class=\"col_cintact_futer\">\n\t\t\t\t\t\t\t\t\t<div class=\"massenger_futer\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t<a class=\"numder_futer fat\" href=\"tel:81080010009191\">8 10 800 1000 91 91</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n";

var Ondata = /*#__PURE__*/function () {
  function Ondata(dom) {
    var _this = this;

    _classCallCheck(this, Ondata);

    this.domContent = document.querySelector('.onheading');
    this.utm = []; // номера телефонов стран

    this.generalNumbers = {
      kz: '8 10 800 1000 91 91',
      free: '8 800 234 43 10',
      pay: '8 800 100 91 91',
      ua: '+380 (89) 120 50 46',
      don: '+380 (89) 120 50 46',
      by: '8 10 800 1000 91 91'
    };
    this.generalNumbersSok = {
      kz: 'tel:81080010009191',
      free: 'tel:88002344310',
      pay: 'tel:88001009191',
      ua: 'tel:380891205046',
      don: 'tel:380891205046',
      by: 'tel:81080010009191'
    }; // подписи к номерам телефонов стран

    this.generalNote = {
      kz: 'Казахстана',
      free: 'РФ',
      pay: 'РФ',
      ua: 'Украины',
      don: 'Донецка и Луганска',
      by: ''
    }; // события для разных стран

    this.generalEvent = {
      kz: '_KZ_',
      free: '_РФ_',
      pay: '_РФ_',
      ua: '_YA_',
      don: '_ДНР&ЛНР_',
      by: '_РБ_'
    }; // настройка id под страны

    this.generalId = {
      kz: '99572059',
      free: '99572059',
      pay: '99560299',
      ua: '99572059',
      don: '99572059',
      by: '99593226'
    }; // аттребуты

    this.dataId = ['data-company', 'data-company-id']; // берем элемент который передали в конструкторе

    var _dom = document.querySelector(dom); // преобразуем поисковой запрос в объект с параметрами для удобства


    if (window.location.search && window.location.search.length > 0) {
      this.utm = window.location.search.slice(1).split('&').map(function (param) {
        return param.split('=');
      });
      var _tempUtm = {};

      for (var index = 0; index < this.utm.length; index++) {
        _tempUtm[this.utm[index][0]] = this.utm[index][1] ? this.utm[index][1] : undefined;
      }

      this.utm = _tempUtm;
      console.log(this.utm);
    } // если элемент найден


    if (_dom) {
      //меняем значение событий
      _dom.innerHTML = _dom.innerHTML.replace(/_РФ_/gi, this.generalEvent[this.utm.utm_rascal]); // если в списке с номерами есть подходящий под параметр номер то

      if (this.generalNumbers[this.utm.utm_rascal]) {
        var _numder = document.querySelectorAll('.phone-js');

        var _by = document.querySelector('.contact__by');

        var _contact__main = document.querySelector('.contact__main');

        var _note = document.querySelector('.phoneNote-js');

        var _item__kz = document.querySelector('.item-kz');

        var _item__by = document.querySelectorAll('.item-by');

        var _item__ua = document.querySelector('.item-ua');

        var _blocks__kz = document.querySelector('.blocks-kz '); // если нашли этот элемент то вставляем в него телефон из списка


        if (_numder) {
          _numder.forEach(function (element) {
            element.innerHTML = _this.generalNumbers[_this.utm.utm_rascal];
            element.setAttribute('href', _this.generalNumbersSok[_this.utm.utm_rascal]);
          }); // подставляем правильный комментарий к номеру


          _note.innerHTML = this.generalNote[this.utm.utm_rascal];
        } // если беларусь то скрываем обычный номер, показываем блок РБ


        if (this.utm.utm_rascal == 'by') {
          _by.innerHTML = _byRender;
          _contact__main.style.display = 'none';

          _item__by.forEach(function (element) {
            element.style.display = 'none';
          });
        }

        if (this.utm.utm_rascal == 'kz') {
          _item__kz.style.display = 'none';
          _blocks__kz.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
        }

        if (this.utm.utm_rascal == 'ua' || this.utm.utm_rascal == 'don') {
          _item__ua.style.display = 'none';
          _blocks__kz.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
        } //меняем значение id аттрибутов у data-company, data-company, data-params


        this.params = document.querySelectorAll('.feedback-js');
        this.dataId.forEach(function (_dataId) {
          //_dataId массив с аттрибутами data-company, data-company,
          _this.params.forEach(function (element) {
            element.setAttribute(_dataId, _this.generalId[_this.utm.utm_rascal]);
            element.setAttribute('data-params', "\"{company_id\":" + _this.generalId[_this.utm.utm_rascal] + "}");
          });
        });
      }
    } else {
      // если не нашли исходный элемент то пишем в консоль ошибку
      console.warn('Не удалось найти искомый элемент', dom);
      return false;
    }

    this.element = document.querySelector('.js-body');
    this.setInnerText();
    this.element = document.querySelector('.js-body'); // =================================================================
  }

  _createClass(Ondata, [{
    key: "setInnerText",
    value: function setInnerText(utm, whyText, text) {
      if (this.utm.utm_rascal == utm) {
        this.element.innerHTML = this.element.innerHTML.replace(whyText, text);
        return this;
      }
    }
  }]);

  return Ondata;
}(); // класс создали


var onData = new Ondata('.js-body'); // console.log(domContent);

var re = '/50% на первые места в каталоге/gi';
var by = 'Хочу +2 месяца'; // пользуешься созданным классом

onData.setInnerText("by", /2 месяца повышенного тарифа/gi, "1 месяц повышенного тарифа");
onData.setInnerText("by", /2 любых месяца на более эффективном тарифе. Максимальное усиление продаж!/gi, "Любой месяц на более эффективном тарифе. Максимальное усиление продаж!");
onData.setInnerText("by", /любой подарок/gi, "бонус");
onData.setInnerText("by", /_Сезон_/gi, "_ПБ_");
onData.setInnerText("by", /2 бонусных месяца на вашем тарифе. Без дополнительных вложений!/gi, "Самые конверсионные места. Ваши товары увидят абсолютно все посетители рубрики!");
onData.setInnerText("by", /2 дополнительных месяца размещения/gi, "до -50% на первые места в каталоге");
onData.setInnerText("by", by, "Хочу быть первым");
onData.setInnerText("ua", /Дополнительный город/gi, "Продвижение в регионы");
onData.setInnerText("ua", /Хочу город/gi, "Хочу продвижение в регионы");
onData.setInnerText("ua", /1 месяц размещения в дополнительном городе. Увеличение заказов и заявок!/gi, "1 месяц размещения в дополнительном регионе по вашему выбору.Увеличение заказов и заявок!");
onData.setInnerText("don", /Дополнительный город/gi, "Продвижение в регионы");
onData.setInnerText("don", /Хочу город/gi, "Хочу продвижение в регионы");
onData.setInnerText("don", /1 месяц размещения в дополнительном городе. Увеличение заказов и заявок!/gi, "1 месяц размещения в дополнительном регионе по вашему выбору.Увеличение заказов и заявок!");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Плавный scroll
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href").substring(1);

      if (blockID) {
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        return false;
      }
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/scripts/setting-swiper.js":
/*!***************************************!*\
  !*** ./src/scripts/setting-swiper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-r", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 20,
  // effect: "coverflow",
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  loop: true,
  // centerSlides: true,
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
    disabledClass: 'button-disabled'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1
    }
  }
});

/***/ }),

/***/ "./src/scripts/wow.js":
/*!****************************!*\
  !*** ./src/scripts/wow.js ***!
  \****************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function isIn(needle, haystack) {
    return haystack.indexOf(needle) >= 0;
  }

  function extend(custom, defaults) {
    for (var key in defaults) {
      if (custom[key] == null) {
        var value = defaults[key];
        custom[key] = value;
      }
    }

    return custom;
  }

  function isMobile(agent) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
  }

  function createEvent(event) {
    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    var customEvent = void 0;

    if (document.createEvent != null) {
      // W3C DOM
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, bubble, cancel, detail);
    } else if (document.createEventObject != null) {
      // IE DOM < 9
      customEvent = document.createEventObject();
      customEvent.eventType = event;
    } else {
      customEvent.eventName = event;
    }

    return customEvent;
  }

  function emitEvent(elem, event) {
    if (elem.dispatchEvent != null) {
      // W3C DOM
      elem.dispatchEvent(event);
    } else if (event in (elem != null)) {
      elem[event]();
    } else if ('on' + event in (elem != null)) {
      elem['on' + event]();
    }
  }

  function addEvent(elem, event, fn) {
    if (elem.addEventListener != null) {
      // W3C DOM
      elem.addEventListener(event, fn, false);
    } else if (elem.attachEvent != null) {
      // IE DOM
      elem.attachEvent('on' + event, fn);
    } else {
      // fallback
      elem[event] = fn;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener != null) {
      // W3C DOM
      elem.removeEventListener(event, fn, false);
    } else if (elem.detachEvent != null) {
      // IE DOM
      elem.detachEvent('on' + event, fn);
    } else {
      // fallback
      delete elem[event];
    }
  }

  function getInnerHeight() {
    if ('innerHeight' in window) {
      return window.innerHeight;
    }

    return document.documentElement.clientHeight;
  } // Minimalistic WeakMap shim, just in case.


  var WeakMap = window.WeakMap || window.MozWeakMap || function () {
    function WeakMap() {
      _classCallCheck(this, WeakMap);

      this.keys = [];
      this.values = [];
    }

    _createClass(WeakMap, [{
      key: 'get',
      value: function get(key) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];

          if (item === key) {
            return this.values[i];
          }
        }

        return undefined;
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];

          if (item === key) {
            this.values[i] = value;
            return this;
          }
        }

        this.keys.push(key);
        this.values.push(value);
        return this;
      }
    }]);

    return WeakMap;
  }(); // Dummy MutationObserver, to avoid raising exceptions.


  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
    function MutationObserver() {
      _classCallCheck(this, MutationObserver);

      if (typeof console !== 'undefined' && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    _createClass(MutationObserver, [{
      key: 'observe',
      value: function observe() {}
    }]);

    return MutationObserver;
  }(), _class.notSupported = true, _temp); // getComputedStyle shim, from http://stackoverflow.com/a/21797294

  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
    var getComputedStyleRX = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(prop) {
        if (prop === 'float') {
          prop = 'styleFloat';
        }

        if (getComputedStyleRX.test(prop)) {
          prop.replace(getComputedStyleRX, function (_, _char) {
            return _char.toUpperCase();
          });
        }

        var currentStyle = el.currentStyle;
        return (currentStyle != null ? currentStyle[prop] : void 0) || null;
      }
    };
  };

  var WOW = function () {
    function WOW() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, WOW);

      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: null,
        resetAnimation: true
      };

      this.animate = function animateFactory() {
        if ('requestAnimationFrame' in window) {
          return function (callback) {
            return window.requestAnimationFrame(callback);
          };
        }

        return function (callback) {
          return callback();
        };
      }();

      this.vendors = ['moz', 'webkit'];
      this.start = this.start.bind(this);
      this.resetAnimation = this.resetAnimation.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrolled = true;
      this.config = extend(options, this.defaults);

      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      } // Map of elements to animation names:


      this.animationNameCache = new WeakMap();
      this.wowEvent = createEvent(this.config.boxClass);
    }

    _createClass(WOW, [{
      key: 'init',
      value: function init() {
        this.element = window.document.documentElement;

        if (isIn(document.readyState, ['interactive', 'complete'])) {
          this.start();
        } else {
          addEvent(document, 'DOMContentLoaded', this.start);
        }

        this.finished = [];
      }
    }, {
      key: 'start',
      value: function start() {
        var _this = this;

        this.stopped = false;
        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
        this.all = this.boxes.slice(0);

        if (this.boxes.length) {
          if (this.disabled()) {
            this.resetStyle();
          } else {
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              this.applyStyle(box, true);
            }
          }
        }

        if (!this.disabled()) {
          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          addEvent(window, 'resize', this.scrollHandler);
          this.interval = setInterval(this.scrollCallback, 50);
        }

        if (this.config.live) {
          var mut = new MutationObserver(function (records) {
            for (var j = 0; j < records.length; j++) {
              var record = records[j];

              for (var k = 0; k < record.addedNodes.length; k++) {
                var node = record.addedNodes[k];

                _this.doSync(node);
              }
            }

            return undefined;
          });
          mut.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.stopped = true;
        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        removeEvent(window, 'resize', this.scrollHandler);

        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }
    }, {
      key: 'sync',
      value: function sync() {
        if (MutationObserver.notSupported) {
          this.doSync(this.element);
        }
      }
    }, {
      key: 'doSync',
      value: function doSync(element) {
        if (typeof element === 'undefined' || element === null) {
          element = this.element;
        }

        if (element.nodeType !== 1) {
          return;
        }

        element = element.parentNode || element;
        var iterable = element.querySelectorAll('.' + this.config.boxClass);

        for (var i = 0; i < iterable.length; i++) {
          var box = iterable[i];

          if (!isIn(box, this.all)) {
            this.boxes.push(box);
            this.all.push(box);

            if (this.stopped || this.disabled()) {
              this.resetStyle();
            } else {
              this.applyStyle(box, true);
            }

            this.scrolled = true;
          }
        }
      }
    }, {
      key: 'show',
      value: function show(box) {
        this.applyStyle(box);
        box.className = box.className + ' ' + this.config.animateClass;

        if (this.config.callback != null) {
          this.config.callback(box);
        }

        emitEvent(box, this.wowEvent);

        if (this.config.resetAnimation) {
          addEvent(box, 'animationend', this.resetAnimation);
          addEvent(box, 'oanimationend', this.resetAnimation);
          addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
          addEvent(box, 'MSAnimationEnd', this.resetAnimation);
        }

        return box;
      }
    }, {
      key: 'applyStyle',
      value: function applyStyle(box, hidden) {
        var _this2 = this;

        var duration = box.getAttribute('data-wow-duration');
        var delay = box.getAttribute('data-wow-delay');
        var iteration = box.getAttribute('data-wow-iteration');
        return this.animate(function () {
          return _this2.customStyle(box, hidden, duration, delay, iteration);
        });
      }
    }, {
      key: 'resetStyle',
      value: function resetStyle() {
        for (var i = 0; i < this.boxes.length; i++) {
          var box = this.boxes[i];
          box.style.visibility = 'visible';
        }

        return undefined;
      }
    }, {
      key: 'resetAnimation',
      value: function resetAnimation(event) {
        if (event.type.toLowerCase().indexOf('animationend') >= 0) {
          var target = event.target || event.srcElement;
          target.className = target.className.replace(this.config.animateClass, '').trim();
        }
      }
    }, {
      key: 'customStyle',
      value: function customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) {
          this.cacheAnimationName(box);
        }

        box.style.visibility = hidden ? 'hidden' : 'visible';

        if (duration) {
          this.vendorSet(box.style, {
            animationDuration: duration
          });
        }

        if (delay) {
          this.vendorSet(box.style, {
            animationDelay: delay
          });
        }

        if (iteration) {
          this.vendorSet(box.style, {
            animationIterationCount: iteration
          });
        }

        this.vendorSet(box.style, {
          animationName: hidden ? 'none' : this.cachedAnimationName(box)
        });
        return box;
      }
    }, {
      key: 'vendorSet',
      value: function vendorSet(elem, properties) {
        for (var name in properties) {
          if (properties.hasOwnProperty(name)) {
            var value = properties[name];
            elem['' + name] = value;

            for (var i = 0; i < this.vendors.length; i++) {
              var vendor = this.vendors[i];
              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
            }
          }
        }
      }
    }, {
      key: 'vendorCSS',
      value: function vendorCSS(elem, property) {
        var style = getComputedStyle(elem);
        var result = style.getPropertyCSSValue(property);

        for (var i = 0; i < this.vendors.length; i++) {
          var vendor = this.vendors[i];
          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
        }

        return result;
      }
    }, {
      key: 'animationName',
      value: function animationName(box) {
        var aName = void 0;

        try {
          aName = this.vendorCSS(box, 'animation-name').cssText;
        } catch (error) {
          // Opera, fall back to plain property value
          aName = getComputedStyle(box).getPropertyValue('animation-name');
        }

        if (aName === 'none') {
          return ''; // SVG/Firefox, unable to get animation name?
        }

        return aName;
      }
    }, {
      key: 'cacheAnimationName',
      value: function cacheAnimationName(box) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
        // box.dataset is not supported for SVG elements in Firefox
        return this.animationNameCache.set(box, this.animationName(box));
      }
    }, {
      key: 'cachedAnimationName',
      value: function cachedAnimationName(box) {
        return this.animationNameCache.get(box);
      }
    }, {
      key: 'scrollHandler',
      value: function scrollHandler() {
        this.scrolled = true;
      }
    }, {
      key: 'scrollCallback',
      value: function scrollCallback() {
        if (this.scrolled) {
          this.scrolled = false;
          var results = [];

          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];

            if (box) {
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }

              results.push(box);
            }
          }

          this.boxes = results;

          if (!this.boxes.length && !this.config.live) {
            this.stop();
          }
        }
      }
    }, {
      key: 'offsetTop',
      value: function offsetTop(element) {
        // SVG elements don't have an offsetTop in Firefox.
        // This will use their nearest parent that has an offsetTop.
        // Also, using ('offsetTop' of element) causes an exception in Firefox.
        while (element.offsetTop === undefined) {
          element = element.parentNode;
        }

        var top = element.offsetTop;

        while (element.offsetParent) {
          element = element.offsetParent;
          top += element.offsetTop;
        }

        return top;
      }
    }, {
      key: 'isVisible',
      value: function isVisible(box) {
        var offset = box.getAttribute('data-wow-offset') || this.config.offset;
        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
        var top = this.offsetTop(box);
        var bottom = top + box.clientHeight;
        return top <= viewBottom && bottom >= viewTop;
      }
    }, {
      key: 'disabled',
      value: function disabled() {
        return !this.config.mobile && isMobile(navigator.userAgent);
      }
    }]);

    return WOW;
  }();

  exports["default"] = WOW;
  module.exports = exports['default'];
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/an.css":
/*!***************************!*\
  !*** ./src/styles/an.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_start"] = self["webpackChunkreact_start"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_animejs_lib_anime_es_js-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map