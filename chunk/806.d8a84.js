"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[806],{9806:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Celebrity)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1249);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8478);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1299);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9070);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7042);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1038);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4916);\n/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7601);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nfunction _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }\n\nfunction _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _selected = /*#__PURE__*/new WeakMap();\n\nvar _createCharacterItem = /*#__PURE__*/new WeakSet();\n\nvar _createUniqueUnGenerateItem = /*#__PURE__*/new WeakSet();\n\nvar Celebrity = /*#__PURE__*/function (_ui$view$DefaultTheme) {\n  _inherits(Celebrity, _ui$view$DefaultTheme);\n\n  var _super = _createSuper(Celebrity);\n\n  function Celebrity() {\n    var _this;\n\n    _classCallCheck(this, Celebrity);\n\n    _this = _super.call(this);\n\n    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createUniqueUnGenerateItem);\n\n    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createCharacterItem);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _selected, {\n      writable: true,\n      value: void 0\n    });\n\n    _this.btnRetry.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return _this.random();\n    });\n\n    _this.btnNext.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.next);\n\n    _this.panelCharacter.vScrollBar.elasticDistance = 150;\n    return _this;\n  }\n\n  _createClass(Celebrity, [{\n    key: "init",\n    value: function init() {\n      this.random();\n    }\n  }, {\n    key: "close",\n    value: function close() {\n      _classPrivateFieldSet(this, _selected, null);\n\n      this.vboxCharacter.destroyChildren(true);\n    }\n  }, {\n    key: "random",\n    value: function random(g) {\n      var _this2 = this;\n\n      _classPrivateFieldSet(this, _selected, null);\n\n      this.vboxCharacter.destroyChildren(true);\n\n      var _core$characterRandom = core.characterRandom(),\n          unique = _core$characterRandom.unique,\n          normal = _core$characterRandom.normal;\n\n      var items = [];\n      var uniqueItem = this.generateUnique(unique, function () {\n        core.generateUnique();\n\n        _this2.random(normal);\n      });\n      if (uniqueItem) items.push(uniqueItem);\n      (g || normal).forEach(function (character) {\n        return items.push(_classPrivateMethodGet(_this2, _createCharacterItem, _createCharacterItem2).call(_this2, character));\n      });\n      items.forEach(function (item, i) {\n        item.y = i;\n\n        _this2.vboxCharacter.addChild(item);\n\n        item.click(function () {\n          if (_classPrivateFieldGet(_this2, _selected)) _classPrivateFieldGet(_this2, _selected).switch(false);\n\n          _classPrivateFieldSet(_this2, _selected, item);\n\n          item.switch(true);\n          item.event(Laya.Event.RESIZE);\n        });\n      });\n\n      if (g && uniqueItem) {\n        _classPrivateFieldSet(this, _selected, uniqueItem);\n\n        uniqueItem.switch(true);\n        uniqueItem.event(Laya.Event.RESIZE);\n      }\n    }\n  }, {\n    key: "generateUnique",\n    value: function generateUnique(data, generate) {\n      if (!data) return null;\n      if (!data.generate) return _classPrivateMethodGet(this, _createUniqueUnGenerateItem, _createUniqueUnGenerateItem2).call(this, generate);\n      data.name = $lang.UI_UniqueWaTaShi;\n      return _classPrivateMethodGet(this, _createCharacterItem, _createCharacterItem2).call(this, data);\n    }\n  }, {\n    key: "next",\n    value: function next() {\n      if (!_classPrivateFieldGet(this, _selected)) return $$event(\'message\', [\'M_PleaseSelectOne\']);\n      if (!_classPrivateFieldGet(this, _selected).dataSource) return $$event(\'message\', [\'M_UnGenerate\']);\n\n      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _selected).dataSource,\n          propertyAllocate = _classPrivateFieldGet2.property,\n          talents = _classPrivateFieldGet2.talent;\n\n      var replace = core.remake(talents.map(function (talent) {\n        return talent.id;\n      }));\n\n      if (replace.length > 0) {\n        $$event(\'message\', [replace.map(function (v) {\n          return [\'F_TalentReplace\', v];\n        })]);\n      }\n\n      $ui.switchView(UI.pages.TRAJECTORY, {\n        propertyAllocate: propertyAllocate,\n        talents: talents,\n        enableExtend: false\n      });\n    }\n  }]);\n\n  return Celebrity;\n}(ui.view.DefaultTheme.CelebrityUI);\n\nfunction _createCharacterItem2(dataSource, click) {\n  var _this3 = this;\n\n  var name = dataSource.name,\n      property = dataSource.property,\n      talent = dataSource.talent;\n  var style = $ui.common.characterItem;\n\n  var item = _classStaticPrivateFieldSpecGet(Celebrity, Celebrity, _createComponent).call(Celebrity, \'boxCharacter\');\n\n  var vboxStates = item.getChildByName(\'vboxStates\');\n  var boxName = item.getChildByName(\'boxName\');\n  boxName.label = name;\n  var p = $_.clone(property);\n\n  for (var k in p) {\n    if (Math.abs(p[k] - Math.PI) < 0.0000001) p[k] = \'π\';\n  }\n\n  vboxStates.label = $_.format($lang.F_PropertyStr, p);\n  $_.deepMapSet(boxName, style.name);\n  $_.deepMapSet(vboxStates, style.state);\n\n  var _iterator = _createForOfIteratorHelper(talent),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var t = _step.value;\n\n      var i = _classStaticPrivateFieldSpecGet(Celebrity, Celebrity, _createComponent).call(Celebrity, \'boxTalent\');\n\n      i.label = $_.format($lang.F_TalentSelection, t);\n      i.y = vboxStates.height + vboxStates.space;\n      $_.deepMapSet(i, $ui.common.card[t.grade].normal);\n      vboxStates.addChild(i);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var box = new Laya.Box();\n  box.height = vboxStates.space;\n  box.y = vboxStates.height;\n  vboxStates.addChild(box);\n  vboxStates.scaleY = 0;\n  item.dataSource = dataSource;\n\n  item.switch = function (showDetails) {\n    return vboxStates.scaleY = !!showDetails ? 1 : 0;\n  };\n\n  item.click = function (cb, caller) {\n    boxName.offAll(Laya.Event.CLICK);\n    boxName.on(Laya.Event.CLICK, caller || _this3, cb);\n  };\n\n  if (click) item.click(click);\n  return item;\n}\n\nfunction _createUniqueUnGenerateItem2(generate) {\n  var _this4 = this;\n\n  var style = $ui.common.characterItem;\n\n  var item = _classStaticPrivateFieldSpecGet(Celebrity, Celebrity, _createComponent).call(Celebrity, \'boxUniqueUnGenerate\');\n\n  var boxName = item.getChildByName(\'boxName\');\n  var vboxStates = item.getChildByName(\'vboxStates\');\n  var label = vboxStates.getChildByName(\'label\');\n  var boxBtn = vboxStates.getChildByName(\'boxBtn\');\n  var btn = boxBtn.getChildByName(\'btn\');\n  $_.deepMapSet(boxName, style.name);\n  $_.deepMapSet(vboxStates, style.state);\n  $_.deepMapSet(btn, style.name);\n  boxBtn.y = label.height + vboxStates.space;\n  label.event(Laya.Event.RESIZE);\n  vboxStates.scaleY = 0;\n  item.dataSource = false;\n\n  item.switch = function (showDetails) {\n    return vboxStates.scaleY = !!showDetails ? 1 : 0;\n  };\n\n  item.click = function (cb, caller) {\n    boxName.offAll(Laya.Event.CLICK);\n    boxName.on(Laya.Event.CLICK, caller || _this4, cb);\n  };\n\n  item.generate = function (cb, caller) {\n    btn.offAll(Laya.Event.CLICK);\n    btn.on(Laya.Event.CLICK, caller || _this4, cb);\n  };\n\n  if (generate) item.generate(generate);\n  return item;\n}\n\nvar _createComponent = {\n  writable: true,\n  value: Laya.plugin.extractComponents(Celebrity.uiView, [\'boxCharacter\', \'boxTalent\', \'boxUniqueUnGenerate\'])\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTgwNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBOztBQUFBOztBQUNBOztBQURBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUpBO0FBS0E7Ozs7QUF3RUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRkE7QUFLQTs7OztBQTVJQTs7QUFVQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7O0FBZkE7QUFBQTs7QUFBQTtBQWdCQTtBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7OztBQW5FQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvZGVmYXVsdC9jZWxlYnJpdHkuanM/N2VkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxlYnJpdHkgZXh0ZW5kcyB1aS52aWV3LkRlZmF1bHRUaGVtZS5DZWxlYnJpdHlVSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYnRuUmV0cnkub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PnRoaXMucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLmJ0bk5leHQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5uZXh0KTtcbiAgICAgICAgdGhpcy5wYW5lbENoYXJhY3Rlci52U2Nyb2xsQmFyLmVsYXN0aWNEaXN0YW5jZSA9IDE1MDtcbiAgICB9XG5cbiAgICAjc2VsZWN0ZWQ7XG4gICAgc3RhdGljICNjcmVhdGVDb21wb25lbnQgPSBMYXlhLnBsdWdpbi5leHRyYWN0Q29tcG9uZW50cyhDZWxlYnJpdHkudWlWaWV3LCBbJ2JveENoYXJhY3RlcicsJ2JveFRhbGVudCcsJ2JveFVuaXF1ZVVuR2VuZXJhdGUnXSk7XG4gICAgI2NyZWF0ZUNoYXJhY3Rlckl0ZW0oZGF0YVNvdXJjZSwgY2xpY2spIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHByb3BlcnR5LCB0YWxlbnR9ID0gZGF0YVNvdXJjZTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSAkdWkuY29tbW9uLmNoYXJhY3Rlckl0ZW07XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBDZWxlYnJpdHkuI2NyZWF0ZUNvbXBvbmVudCgnYm94Q2hhcmFjdGVyJyk7XG4gICAgICAgIGNvbnN0IHZib3hTdGF0ZXMgPSBpdGVtLmdldENoaWxkQnlOYW1lKCd2Ym94U3RhdGVzJyk7XG4gICAgICAgIGNvbnN0IGJveE5hbWUgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdib3hOYW1lJyk7XG4gICAgICAgIGJveE5hbWUubGFiZWwgPSBuYW1lO1xuXG4gICAgICAgIGNvbnN0IHAgPSAkXy5jbG9uZShwcm9wZXJ0eSk7XG4gICAgICAgIGZvcihjb25zdCBrIGluIHApXG4gICAgICAgICAgICBpZihNYXRoLmFicyhwW2tdIC0gTWF0aC5QSSkgPCAwLjAwMDAwMDEpXG4gICAgICAgICAgICAgICAgcFtrXSA9ICfPgCc7XG5cbiAgICAgICAgdmJveFN0YXRlcy5sYWJlbCA9ICRfLmZvcm1hdCgkbGFuZy5GX1Byb3BlcnR5U3RyLCBwKTtcbiAgICAgICAgJF8uZGVlcE1hcFNldChib3hOYW1lLCBzdHlsZS5uYW1lKTtcbiAgICAgICAgJF8uZGVlcE1hcFNldCh2Ym94U3RhdGVzLCBzdHlsZS5zdGF0ZSk7XG4gICAgICAgIGZvcihjb25zdCB0IG9mIHRhbGVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IENlbGVicml0eS4jY3JlYXRlQ29tcG9uZW50KCdib3hUYWxlbnQnKTtcbiAgICAgICAgICAgIGkubGFiZWwgPSAkXy5mb3JtYXQoJGxhbmcuRl9UYWxlbnRTZWxlY3Rpb24sIHQpO1xuICAgICAgICAgICAgaS55ID0gdmJveFN0YXRlcy5oZWlnaHQrdmJveFN0YXRlcy5zcGFjZTtcbiAgICAgICAgICAgICRfLmRlZXBNYXBTZXQoaSwgJHVpLmNvbW1vbi5jYXJkW3QuZ3JhZGVdLm5vcm1hbCk7XG4gICAgICAgICAgICB2Ym94U3RhdGVzLmFkZENoaWxkKGkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJveCA9IG5ldyBMYXlhLkJveCgpO1xuICAgICAgICBib3guaGVpZ2h0ID0gdmJveFN0YXRlcy5zcGFjZTtcbiAgICAgICAgYm94LnkgPSB2Ym94U3RhdGVzLmhlaWdodDtcbiAgICAgICAgdmJveFN0YXRlcy5hZGRDaGlsZChib3gpO1xuICAgICAgICB2Ym94U3RhdGVzLnNjYWxlWSA9IDA7XG5cbiAgICAgICAgaXRlbS5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICAgICAgaXRlbS5zd2l0Y2ggPSBzaG93RGV0YWlscyA9PiB2Ym94U3RhdGVzLnNjYWxlWSA9ICEhc2hvd0RldGFpbHM/MTowO1xuICAgICAgICBpdGVtLmNsaWNrID0gKGNiLCBjYWxsZXIpID0+IHtcbiAgICAgICAgICAgIGJveE5hbWUub2ZmQWxsKExheWEuRXZlbnQuQ0xJQ0spO1xuICAgICAgICAgICAgYm94TmFtZS5vbihMYXlhLkV2ZW50LkNMSUNLLCBjYWxsZXIgfHwgdGhpcywgY2IpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNsaWNrKSBpdGVtLmNsaWNrKGNsaWNrKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgICNjcmVhdGVVbmlxdWVVbkdlbmVyYXRlSXRlbShnZW5lcmF0ZSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9ICR1aS5jb21tb24uY2hhcmFjdGVySXRlbTtcbiAgICAgICAgY29uc3QgaXRlbSA9IENlbGVicml0eS4jY3JlYXRlQ29tcG9uZW50KCdib3hVbmlxdWVVbkdlbmVyYXRlJyk7XG4gICAgICAgIGNvbnN0IGJveE5hbWUgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdib3hOYW1lJyk7XG4gICAgICAgIGNvbnN0IHZib3hTdGF0ZXMgPSBpdGVtLmdldENoaWxkQnlOYW1lKCd2Ym94U3RhdGVzJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdmJveFN0YXRlcy5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgYm94QnRuID0gdmJveFN0YXRlcy5nZXRDaGlsZEJ5TmFtZSgnYm94QnRuJyk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGJveEJ0bi5nZXRDaGlsZEJ5TmFtZSgnYnRuJyk7XG5cbiAgICAgICAgJF8uZGVlcE1hcFNldChib3hOYW1lLCBzdHlsZS5uYW1lKTtcbiAgICAgICAgJF8uZGVlcE1hcFNldCh2Ym94U3RhdGVzLCBzdHlsZS5zdGF0ZSk7XG4gICAgICAgICRfLmRlZXBNYXBTZXQoYnRuLCBzdHlsZS5uYW1lKTtcblxuICAgICAgICBib3hCdG4ueSA9IGxhYmVsLmhlaWdodCArIHZib3hTdGF0ZXMuc3BhY2U7XG4gICAgICAgIGxhYmVsLmV2ZW50KExheWEuRXZlbnQuUkVTSVpFKTtcbiAgICAgICAgdmJveFN0YXRlcy5zY2FsZVkgPSAwO1xuICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBmYWxzZTtcbiAgICAgICAgaXRlbS5zd2l0Y2ggPSBzaG93RGV0YWlscyA9PiB2Ym94U3RhdGVzLnNjYWxlWSA9ICEhc2hvd0RldGFpbHM/MTowO1xuICAgICAgICBpdGVtLmNsaWNrID0gKGNiLCBjYWxsZXIpID0+IHtcbiAgICAgICAgICAgIGJveE5hbWUub2ZmQWxsKExheWEuRXZlbnQuQ0xJQ0spO1xuICAgICAgICAgICAgYm94TmFtZS5vbihMYXlhLkV2ZW50LkNMSUNLLCBjYWxsZXIgfHwgdGhpcywgY2IpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uZ2VuZXJhdGUgPSAoY2IsIGNhbGxlcikgPT4ge1xuICAgICAgICAgICAgYnRuLm9mZkFsbChMYXlhLkV2ZW50LkNMSUNLKTtcbiAgICAgICAgICAgIGJ0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCBjYWxsZXIgfHwgdGhpcywgY2IpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdlbmVyYXRlKSBpdGVtLmdlbmVyYXRlKGdlbmVyYXRlKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5yYW5kb20oKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy4jc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICB0aGlzLnZib3hDaGFyYWN0ZXIuZGVzdHJveUNoaWxkcmVuKHRydWUpO1xuICAgIH1cblxuICAgIHJhbmRvbShnKSB7XG4gICAgICAgIHRoaXMuI3NlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy52Ym94Q2hhcmFjdGVyLmRlc3Ryb3lDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgY29uc3Qge3VuaXF1ZSwgbm9ybWFsfSA9IGNvcmUuY2hhcmFjdGVyUmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IHVuaXF1ZUl0ZW0gPSB0aGlzLmdlbmVyYXRlVW5pcXVlKHVuaXF1ZSwgKCk9PntcbiAgICAgICAgICAgIGNvcmUuZ2VuZXJhdGVVbmlxdWUoKTtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tKG5vcm1hbCk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHVuaXF1ZUl0ZW0pIGl0ZW1zLnB1c2godW5pcXVlSXRlbSk7XG4gICAgICAgIChnfHxub3JtYWwpLmZvckVhY2goY2hhcmFjdGVyID0+IGl0ZW1zLnB1c2godGhpcy4jY3JlYXRlQ2hhcmFjdGVySXRlbShjaGFyYWN0ZXIpKSk7XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaXRlbS55ID0gaTtcbiAgICAgICAgICAgIHRoaXMudmJveENoYXJhY3Rlci5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uY2xpY2soKCk9PntcbiAgICAgICAgICAgICAgICBpZih0aGlzLiNzZWxlY3RlZCkgdGhpcy4jc2VsZWN0ZWQuc3dpdGNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3RlZCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbS5zd2l0Y2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgaXRlbS5ldmVudChMYXlhLkV2ZW50LlJFU0laRSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgaWYoZyYmdW5pcXVlSXRlbSkge1xuICAgICAgICAgICAgdGhpcy4jc2VsZWN0ZWQgPSB1bmlxdWVJdGVtO1xuICAgICAgICAgICAgdW5pcXVlSXRlbS5zd2l0Y2godHJ1ZSk7XG4gICAgICAgICAgICB1bmlxdWVJdGVtLmV2ZW50KExheWEuRXZlbnQuUkVTSVpFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlVW5pcXVlKGRhdGEsIGdlbmVyYXRlKSB7XG4gICAgICAgIGlmKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYoIWRhdGEuZ2VuZXJhdGUpIHJldHVybiB0aGlzLiNjcmVhdGVVbmlxdWVVbkdlbmVyYXRlSXRlbShnZW5lcmF0ZSk7XG4gICAgICAgIGRhdGEubmFtZSA9ICRsYW5nLlVJX1VuaXF1ZVdhVGFTaGk7XG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVDaGFyYWN0ZXJJdGVtKGRhdGEpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmKCF0aGlzLiNzZWxlY3RlZCkgcmV0dXJuICQkZXZlbnQoJ21lc3NhZ2UnLCBbJ01fUGxlYXNlU2VsZWN0T25lJ10pO1xuICAgICAgICBpZighdGhpcy4jc2VsZWN0ZWQuZGF0YVNvdXJjZSkgcmV0dXJuICQkZXZlbnQoJ21lc3NhZ2UnLCBbJ01fVW5HZW5lcmF0ZSddKTtcblxuICAgICAgICBjb25zdCB7cHJvcGVydHk6IHByb3BlcnR5QWxsb2NhdGUsIHRhbGVudDogdGFsZW50c30gPSB0aGlzLiNzZWxlY3RlZC5kYXRhU291cmNlO1xuICAgICAgICBjb25zdCByZXBsYWNlID0gY29yZS5yZW1ha2UodGFsZW50cy5tYXAodGFsZW50ID0+IHRhbGVudC5pZCkpO1xuICAgICAgICBpZihyZXBsYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQkZXZlbnQoJ21lc3NhZ2UnLCBbcmVwbGFjZS5tYXAodiA9PiBbJ0ZfVGFsZW50UmVwbGFjZScsIHZdKV0pO1xuICAgICAgICB9XG4gICAgICAgICR1aS5zd2l0Y2hWaWV3KFxuICAgICAgICAgICAgVUkucGFnZXMuVFJBSkVDVE9SWSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFsbG9jYXRlLCB0YWxlbnRzLFxuICAgICAgICAgICAgICAgIGVuYWJsZUV4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9806\n')}}]);