(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************!*\
  !*** D:/Uniapp/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 16));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNmRyxZQUFHLEVBQ0w7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbkFwcC5tcFR5cGUgPSAnYXBwJ1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcblx0Li4uQXBwXG59KVxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!****************************!*\
  !*** D:/Uniapp/pages.json ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!***************************************************!*\
  !*** D:/Uniapp/pages/index/index.vue?mpType=page ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dPO0FBQ2hPLGdCQUFnQixzT0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************!*\
  !*** D:/Uniapp/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Uniapp/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c("text", {
            staticClass: _vm._$s(2, "sc", "title"),
            attrs: { _i: 2 },
          }),
          _c("text", {
            staticClass: _vm._$s(3, "sc", "subtitle"),
            attrs: { _i: 3 },
          }),
        ]
      ),
      _c("view", { staticClass: _vm._$s(4, "sc", "card"), attrs: { _i: 4 } }, [
        _c(
          "view",
          {
            staticClass: _vm._$s(5, "sc", "platform-badge"),
            class: _vm._$s(
              5,
              "c",
              _vm.isAndroid ? "android-badge" : "ios-badge"
            ),
            attrs: { _i: 5 },
          },
          [
            _c(
              "text",
              {
                staticClass: _vm._$s(6, "sc", "platform-text"),
                attrs: { _i: 6 },
              },
              [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.platformLabel)))]
            ),
          ]
        ),
        _c("text", {
          staticClass: _vm._$s(7, "sc", "card-title"),
          attrs: { _i: 7 },
        }),
        _c(
          "text",
          {
            staticClass: _vm._$s(8, "sc", "card-description"),
            attrs: { _i: 8 },
          },
          [
            _vm._v(
              _vm._$s(
                8,
                "t0-0",
                _vm._s(
                  _vm.isAndroid ? "AAR library (Android)" : "XCFramework (iOS)"
                )
              )
            ),
          ]
        ),
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(9, "sc", "button-wrapper"), attrs: { _i: 9 } },
        [
          _c(
            "button",
            {
              staticClass: _vm._$s(10, "sc", "native-btn"),
              attrs: {
                disabled: _vm._$s(10, "a-disabled", _vm.loading),
                _i: 10,
              },
              on: { click: _vm.openGameScreen },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(11, "sc", "btn-text"),
                  attrs: { _i: 11 },
                },
                [
                  _vm._v(
                    _vm._$s(
                      11,
                      "t0-0",
                      _vm._s(_vm.loading ? "Opening..." : "Open Game Screen")
                    )
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._$s(12, "i", _vm.resultMessage)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "result-box"),
              class: _vm._$s(12, "c", _vm.resultStatus),
              attrs: { _i: 12 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(13, "sc", "result-icon"),
                  attrs: { _i: 13 },
                },
                [
                  _vm._v(
                    _vm._$s(
                      13,
                      "t0-0",
                      _vm._s(_vm.resultStatus === "success" ? "✓" : "✗")
                    )
                  ),
                ]
              ),
              _c(
                "text",
                {
                  staticClass: _vm._$s(14, "sc", "result-text"),
                  attrs: { _i: 14 },
                },
                [_vm._v(_vm._$s(14, "t0-0", _vm._s(_vm.resultMessage)))]
              ),
            ]
          )
        : _vm._e(),
      _vm._$s(15, "i", _vm.isAndroid)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(15, "sc", "button-wrapper"),
              attrs: { _i: 15 },
            },
            [
              _c(
                "button",
                {
                  staticClass: _vm._$s(16, "sc", "native-btn"),
                  attrs: {
                    disabled: _vm._$s(16, "a-disabled", _vm.utsLoading),
                    _i: 16,
                  },
                  on: { click: _vm.testUtsAndroid },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(17, "sc", "btn-text"),
                      attrs: { _i: 17 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          17,
                          "t0-0",
                          _vm._s(
                            _vm.utsLoading
                              ? "Testing..."
                              : "TEST: UTS Android (experimental)"
                          )
                        )
                      ),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._$s(18, "i", _vm.utsResultMessage)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(18, "sc", "result-box"),
              class: _vm._$s(18, "c", _vm.utsResultStatus),
              attrs: { _i: 18 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(19, "sc", "result-icon"),
                  attrs: { _i: 19 },
                },
                [
                  _vm._v(
                    _vm._$s(
                      19,
                      "t0-0",
                      _vm._s(_vm.utsResultStatus === "success" ? "✓" : "✗")
                    )
                  ),
                ]
              ),
              _c(
                "text",
                {
                  staticClass: _vm._$s(20, "sc", "result-text"),
                  attrs: { _i: 20 },
                },
                [_vm._v(_vm._$s(20, "t0-0", _vm._s(_vm.utsResultMessage)))]
              ),
            ]
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(21, "sc", "info-box"), attrs: { _i: 21 } },
        [
          _c("text", {
            staticClass: _vm._$s(22, "sc", "info-title"),
            attrs: { _i: 22 },
          }),
          _c("text", {
            staticClass: _vm._$s(23, "sc", "info-item"),
            attrs: { _i: 23 },
          }),
          _c("text", {
            staticClass: _vm._$s(24, "sc", "info-item"),
            attrs: { _i: 24 },
          }),
          _c("text", {
            staticClass: _vm._$s(25, "sc", "info-item"),
            attrs: { _i: 25 },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!***************************************************************************!*\
  !*** D:/Uniapp/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV4QixDQUFnQiwweUJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTEhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxha3NoYXkua3VtYXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC41LjA3LjIwMjYwNDEwMDZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFDOlxcXFxVc2Vyc1xcXFxha3NoYXkua3VtYXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC41LjA3LjIwMjYwNDEwMDZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFDOlxcXFxVc2Vyc1xcXFxha3NoYXkua3VtYXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC41LjA3LjIwMjYwNDEwMDZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Uniapp/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _nativeScreenPlugin = __webpack_require__(/*! @/uni_modules/native-screen-plugin */ 13);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// UTS plugin (uni_modules/native-screen-plugin) — HBuilderX compiles this\n// automatically per-platform: on iOS this resolves to utssdk/app-ios/index.uts,\n// on Android to utssdk/app-android/index.uts. Same import, different native\n// code underneath depending on build target.\n\n// Android: existing AAR-based native plugin — unchanged.\n// Not available on H5 or WeChat Mini Program.\nvar sysInfo = uni.getSystemInfoSync();\nvar isApp = sysInfo.uniPlatform === \"app\";\nvar isAndroidPlatform = sysInfo.platform === \"android\";\nvar nativePlugin = null;\nif (isApp && isAndroidPlatform) {\n  try {\n    nativePlugin = uni.requireNativePlugin(\"NativeScreenPlugin\");\n  } catch (e) {\n    __f__(\"warn\", \"NativeScreenPlugin not loaded:\", e, \" at pages/index/index.vue:104\");\n  }\n}\nvar _default = {\n  data: function data() {\n    return {\n      loading: false,\n      resultMessage: \"\",\n      resultStatus: \"\",\n      isAndroid: false,\n      platformLabel: \"App\",\n      utsLoading: false,\n      utsResultMessage: \"\",\n      utsResultStatus: \"\"\n    };\n  },\n  onLoad: function onLoad() {\n    this.isAndroid = isAndroidPlatform;\n    this.platformLabel = this.isAndroid ? \"🤖 Android\" : \" iOS\";\n  },\n  methods: {\n    openGameScreen: function openGameScreen() {\n      var _this = this;\n      if (!isApp) {\n        uni.showModal({\n          title: \"Not Available\",\n          content: \"Native plugins only work when running on a real device or emulator via HBuilderX custom base.\",\n          showCancel: false\n        });\n        return;\n      }\n      this.loading = true;\n      this.resultMessage = \"\";\n      var handleResult = function handleResult(result) {\n        _this.loading = false;\n        if (result === \"success\" || result && result.action) {\n          _this.resultStatus = \"success\";\n          _this.resultMessage = \"Game screen opened successfully\";\n        } else {\n          _this.resultStatus = \"error\";\n          _this.resultMessage = result && result.errMsg || result || \"Unknown error occurred\";\n        }\n      };\n      if (isAndroidPlatform) {\n        if (!nativePlugin) {\n          this.loading = false;\n          this.resultStatus = \"error\";\n          this.resultMessage = \"NativeScreenPlugin not loaded.\";\n          return;\n        }\n        nativePlugin.openGameScreen(handleResult);\n      } else {\n        (0, _nativeScreenPlugin.openGameScreen)({\n          success: function success(res) {\n            return handleResult(res);\n          },\n          fail: function fail(err) {\n            return handleResult(err);\n          }\n        });\n      }\n    },\n    // TEST ONLY — calls the new UTS Android implementation\n    // (uni_modules/native-screen-plugin/utssdk/app-android/index.uts)\n    // directly, bypassing the proven nativeplugins/NativeScreenPlugin path\n    // above. Use this to verify the UTS path works before considering a\n    // switch. Safe to remove once done testing.\n    testUtsAndroid: function testUtsAndroid() {\n      var _this2 = this;\n      this.utsLoading = true;\n      this.utsResultMessage = \"\";\n      (0, _nativeScreenPlugin.openGameScreen)({\n        success: function success(res) {\n          _this2.utsLoading = false;\n          _this2.utsResultStatus = \"success\";\n          _this2.utsResultMessage = \"UTS Android: game screen opened successfully\";\n        },\n        fail: function fail(err) {\n          _this2.utsLoading = false;\n          _this2.utsResultStatus = \"error\";\n          _this2.utsResultMessage = \"UTS Android error: \" + (err && err.errMsg || err || \"unknown\");\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbIm5hdGl2ZVBsdWdpbiIsImRhdGEiLCJsb2FkaW5nIiwicmVzdWx0TWVzc2FnZSIsInJlc3VsdFN0YXR1cyIsImlzQW5kcm9pZCIsInBsYXRmb3JtTGFiZWwiLCJ1dHNMb2FkaW5nIiwidXRzUmVzdWx0TWVzc2FnZSIsInV0c1Jlc3VsdFN0YXR1cyIsIm9uTG9hZCIsIm1ldGhvZHMiLCJvcGVuR2FtZVNjcmVlbiIsInVuaSIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJzdWNjZXNzIiwiZmFpbCIsInRlc3RVdHNBbmRyb2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUEwRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0VBQ0E7SUFDQUE7RUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLGVBRUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFBQTtNQUNBO1FBQ0FDO1VBQ0FDO1VBQ0FDLFNBQ0E7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO01BRUE7UUFDQTtRQUVBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQSxzQkFDQUM7UUFDQTtNQUNBO01BRUE7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQWpCO01BQ0E7UUFDQTtVQUNBa0I7WUFBQTtVQUFBO1VBQ0FDO1lBQUE7VUFBQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFFQTtRQUNBRjtVQUNBO1VBQ0E7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7VUFDQTtVQUNBLDBCQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8IS0tIEhlYWRlciAtLT5cclxuICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj5OYXRpdmUgU2NyZWVuIERlbW88L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwic3VidGl0bGVcIj5VbmlBcHAgwrcgQUFSIMK3IFhDRnJhbWV3b3JrPC90ZXh0PlxyXG4gICAgPC92aWV3PlxyXG5cclxuICAgIDwhLS0gUGxhdGZvcm0gQ2FyZCAtLT5cclxuICAgIDx2aWV3IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8dmlld1xyXG4gICAgICAgIGNsYXNzPVwicGxhdGZvcm0tYmFkZ2VcIlxyXG4gICAgICAgIDpjbGFzcz1cImlzQW5kcm9pZCA/ICdhbmRyb2lkLWJhZGdlJyA6ICdpb3MtYmFkZ2UnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicGxhdGZvcm0tdGV4dFwiPnt7IHBsYXRmb3JtTGFiZWwgfX08L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+TmF0aXZlIExpYnJhcnkgSW50ZWdyYXRpb248L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIFRhcCB0aGUgYnV0dG9uIGJlbG93IHRvIG9wZW4gdGhlIG5hdGl2ZSBzY3JlZW4gcHJvdmlkZWQgYnkgdGhlXHJcbiAgICAgICAge3sgaXNBbmRyb2lkID8gXCJBQVIgbGlicmFyeSAoQW5kcm9pZClcIiA6IFwiWENGcmFtZXdvcmsgKGlPUylcIiB9fS5cclxuICAgICAgPC90ZXh0PlxyXG4gICAgPC92aWV3PlxyXG5cclxuICAgIDwhLS0gT3BlbiBHYW1lIFNjcmVlbiBCdXR0b24gLS0+XHJcbiAgICA8dmlldyBjbGFzcz1cImJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzcz1cIm5hdGl2ZS1idG5cIlxyXG4gICAgICAgIEBjbGljaz1cIm9wZW5HYW1lU2NyZWVuXCJcclxuICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCJcclxuICAgICAgICBob3Zlci1jbGFzcz1cIm5hdGl2ZS1idG4taG92ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tdGV4dFwiPlxyXG4gICAgICAgICAge3sgbG9hZGluZyA/IFwiT3BlbmluZy4uLlwiIDogXCJPcGVuIEdhbWUgU2NyZWVuXCIgfX1cclxuICAgICAgICA8L3RleHQ+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC92aWV3PlxyXG5cclxuICAgIDwhLS0gUmVzdWx0IE1lc3NhZ2UgLS0+XHJcbiAgICA8dmlldyB2LWlmPVwicmVzdWx0TWVzc2FnZVwiIGNsYXNzPVwicmVzdWx0LWJveFwiIDpjbGFzcz1cInJlc3VsdFN0YXR1c1wiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInJlc3VsdC1pY29uXCI+e3tcclxuICAgICAgICByZXN1bHRTdGF0dXMgPT09IFwic3VjY2Vzc1wiID8gXCLinJNcIiA6IFwi4pyXXCJcclxuICAgICAgfX08L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwicmVzdWx0LXRleHRcIj57eyByZXN1bHRNZXNzYWdlIH19PC90ZXh0PlxyXG4gICAgPC92aWV3PlxyXG5cclxuICAgIDwhLS0gVEVTVCBPTkxZOiBuZXcgVVRTLWJhc2VkIEFuZHJvaWQgcGF0aCwgbm90IHdpcmVkIGludG8gdGhlIG1haW5cclxuICAgICAgICAgYnV0dG9uIGFib3ZlLiBSZW1vdmUgdGhpcyBibG9jayBvbmNlIHRoZSBVVFMgQW5kcm9pZCBwYXRoIGlzXHJcbiAgICAgICAgIHZlcmlmaWVkIChvciBjb25maXJtZWQgdW5uZWNlc3NhcnkpIGJ5IHRoZSBBbmRyb2lkIGRldi4gLS0+XHJcbiAgICA8dmlldyB2LWlmPVwiaXNBbmRyb2lkXCIgY2xhc3M9XCJidXR0b24td3JhcHBlclwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3M9XCJuYXRpdmUtYnRuXCJcclxuICAgICAgICBAY2xpY2s9XCJ0ZXN0VXRzQW5kcm9pZFwiXHJcbiAgICAgICAgOmRpc2FibGVkPVwidXRzTG9hZGluZ1wiXHJcbiAgICAgICAgaG92ZXItY2xhc3M9XCJuYXRpdmUtYnRuLWhvdmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuLXRleHRcIj5cclxuICAgICAgICAgIHt7IHV0c0xvYWRpbmcgPyBcIlRlc3RpbmcuLi5cIiA6IFwiVEVTVDogVVRTIEFuZHJvaWQgKGV4cGVyaW1lbnRhbClcIiB9fVxyXG4gICAgICAgIDwvdGV4dD5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyB2LWlmPVwidXRzUmVzdWx0TWVzc2FnZVwiIGNsYXNzPVwicmVzdWx0LWJveFwiIDpjbGFzcz1cInV0c1Jlc3VsdFN0YXR1c1wiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInJlc3VsdC1pY29uXCI+e3tcclxuICAgICAgICB1dHNSZXN1bHRTdGF0dXMgPT09IFwic3VjY2Vzc1wiID8gXCLinJNcIiA6IFwi4pyXXCJcclxuICAgICAgfX08L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwicmVzdWx0LXRleHRcIj57eyB1dHNSZXN1bHRNZXNzYWdlIH19PC90ZXh0PlxyXG4gICAgPC92aWV3PlxyXG5cclxuICAgIDwhLS0gSW5mbyBCb3ggLS0+XHJcbiAgICA8dmlldyBjbGFzcz1cImluZm8tYm94XCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby10aXRsZVwiPkhvdyBpdCB3b3JrczwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLWl0ZW1cIlxyXG4gICAgICAgID7igKIgQW5kcm9pZDogUGx1Z2luIGNhbGxzIEluaXRpYXRlR2FtZSgpLm9wZW5HYW1lU2NyZWVuKCkgZnJvbVxyXG4gICAgICAgIGdhbWlmaWNhdGlvbl9saWJyYXJ5LmFhcjwvdGV4dFxyXG4gICAgICA+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1pdGVtXCJcclxuICAgICAgICA+4oCiIGlPUzogUGx1Z2luIEZyYW1ld29yayBwcmVzZW50cyBWaWV3Q29udHJvbGxlciBmcm9tIHRoZVxyXG4gICAgICAgIFhDRnJhbWV3b3JrPC90ZXh0XHJcbiAgICAgID5cclxuICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLWl0ZW1cIlxyXG4gICAgICAgID7igKIgUGFzcyBhcGlLZXksIG1zaXNkbiwgbGFuZ3VhZ2UsIGdhbWVUeXBlLCBjYW1wYWlnbklkLCB0b2tlbjwvdGV4dFxyXG4gICAgICA+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gVVRTIHBsdWdpbiAodW5pX21vZHVsZXMvbmF0aXZlLXNjcmVlbi1wbHVnaW4pIOKAlCBIQnVpbGRlclggY29tcGlsZXMgdGhpc1xyXG4vLyBhdXRvbWF0aWNhbGx5IHBlci1wbGF0Zm9ybTogb24gaU9TIHRoaXMgcmVzb2x2ZXMgdG8gdXRzc2RrL2FwcC1pb3MvaW5kZXgudXRzLFxyXG4vLyBvbiBBbmRyb2lkIHRvIHV0c3Nkay9hcHAtYW5kcm9pZC9pbmRleC51dHMuIFNhbWUgaW1wb3J0LCBkaWZmZXJlbnQgbmF0aXZlXHJcbi8vIGNvZGUgdW5kZXJuZWF0aCBkZXBlbmRpbmcgb24gYnVpbGQgdGFyZ2V0LlxyXG5pbXBvcnQgeyBvcGVuR2FtZVNjcmVlbiBhcyB1dHNPcGVuR2FtZVNjcmVlbiB9IGZyb20gXCJAL3VuaV9tb2R1bGVzL25hdGl2ZS1zY3JlZW4tcGx1Z2luXCI7XHJcblxyXG4vLyBBbmRyb2lkOiBleGlzdGluZyBBQVItYmFzZWQgbmF0aXZlIHBsdWdpbiDigJQgdW5jaGFuZ2VkLlxyXG4vLyBOb3QgYXZhaWxhYmxlIG9uIEg1IG9yIFdlQ2hhdCBNaW5pIFByb2dyYW0uXHJcbmNvbnN0IHN5c0luZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuY29uc3QgaXNBcHAgPSBzeXNJbmZvLnVuaVBsYXRmb3JtID09PSBcImFwcFwiO1xyXG5jb25zdCBpc0FuZHJvaWRQbGF0Zm9ybSA9IHN5c0luZm8ucGxhdGZvcm0gPT09IFwiYW5kcm9pZFwiO1xyXG5cclxubGV0IG5hdGl2ZVBsdWdpbiA9IG51bGw7XHJcbmlmIChpc0FwcCAmJiBpc0FuZHJvaWRQbGF0Zm9ybSkge1xyXG4gIHRyeSB7XHJcbiAgICBuYXRpdmVQbHVnaW4gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbihcIk5hdGl2ZVNjcmVlblBsdWdpblwiKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJOYXRpdmVTY3JlZW5QbHVnaW4gbm90IGxvYWRlZDpcIiwgZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICByZXN1bHRNZXNzYWdlOiBcIlwiLFxyXG4gICAgICByZXN1bHRTdGF0dXM6IFwiXCIsXHJcbiAgICAgIGlzQW5kcm9pZDogZmFsc2UsXHJcbiAgICAgIHBsYXRmb3JtTGFiZWw6IFwiQXBwXCIsXHJcbiAgICAgIHV0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB1dHNSZXN1bHRNZXNzYWdlOiBcIlwiLFxyXG4gICAgICB1dHNSZXN1bHRTdGF0dXM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5pc0FuZHJvaWQgPSBpc0FuZHJvaWRQbGF0Zm9ybTtcclxuICAgIHRoaXMucGxhdGZvcm1MYWJlbCA9IHRoaXMuaXNBbmRyb2lkID8gXCLwn6SWIEFuZHJvaWRcIiA6IFwiIGlPU1wiO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb3BlbkdhbWVTY3JlZW4oKSB7XHJcbiAgICAgIGlmICghaXNBcHApIHtcclxuICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiBcIk5vdCBBdmFpbGFibGVcIixcclxuICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgIFwiTmF0aXZlIHBsdWdpbnMgb25seSB3b3JrIHdoZW4gcnVubmluZyBvbiBhIHJlYWwgZGV2aWNlIG9yIGVtdWxhdG9yIHZpYSBIQnVpbGRlclggY3VzdG9tIGJhc2UuXCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXN1bHQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwic3VjY2Vzc1wiIHx8IChyZXN1bHQgJiYgcmVzdWx0LmFjdGlvbikpIHtcclxuICAgICAgICAgIHRoaXMucmVzdWx0U3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSBcIkdhbWUgc2NyZWVuIG9wZW5lZCBzdWNjZXNzZnVsbHlcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHRTdGF0dXMgPSBcImVycm9yXCI7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAocmVzdWx0ICYmIHJlc3VsdC5lcnJNc2cpIHx8IHJlc3VsdCB8fCBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoaXNBbmRyb2lkUGxhdGZvcm0pIHtcclxuICAgICAgICBpZiAoIW5hdGl2ZVBsdWdpbikge1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdFN0YXR1cyA9IFwiZXJyb3JcIjtcclxuICAgICAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9IFwiTmF0aXZlU2NyZWVuUGx1Z2luIG5vdCBsb2FkZWQuXCI7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdGl2ZVBsdWdpbi5vcGVuR2FtZVNjcmVlbihoYW5kbGVSZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHV0c09wZW5HYW1lU2NyZWVuKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IGhhbmRsZVJlc3VsdChyZXMpLFxyXG4gICAgICAgICAgZmFpbDogKGVycikgPT4gaGFuZGxlUmVzdWx0KGVyciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gVEVTVCBPTkxZIOKAlCBjYWxscyB0aGUgbmV3IFVUUyBBbmRyb2lkIGltcGxlbWVudGF0aW9uXHJcbiAgICAvLyAodW5pX21vZHVsZXMvbmF0aXZlLXNjcmVlbi1wbHVnaW4vdXRzc2RrL2FwcC1hbmRyb2lkL2luZGV4LnV0cylcclxuICAgIC8vIGRpcmVjdGx5LCBieXBhc3NpbmcgdGhlIHByb3ZlbiBuYXRpdmVwbHVnaW5zL05hdGl2ZVNjcmVlblBsdWdpbiBwYXRoXHJcbiAgICAvLyBhYm92ZS4gVXNlIHRoaXMgdG8gdmVyaWZ5IHRoZSBVVFMgcGF0aCB3b3JrcyBiZWZvcmUgY29uc2lkZXJpbmcgYVxyXG4gICAgLy8gc3dpdGNoLiBTYWZlIHRvIHJlbW92ZSBvbmNlIGRvbmUgdGVzdGluZy5cclxuICAgIHRlc3RVdHNBbmRyb2lkKCkge1xyXG4gICAgICB0aGlzLnV0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnV0c1Jlc3VsdE1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICAgICAgdXRzT3BlbkdhbWVTY3JlZW4oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMudXRzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy51dHNSZXN1bHRTdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgICAgIHRoaXMudXRzUmVzdWx0TWVzc2FnZSA9IFwiVVRTIEFuZHJvaWQ6IGdhbWUgc2NyZWVuIG9wZW5lZCBzdWNjZXNzZnVsbHlcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMudXRzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy51dHNSZXN1bHRTdGF0dXMgPSBcImVycm9yXCI7XHJcbiAgICAgICAgICB0aGlzLnV0c1Jlc3VsdE1lc3NhZ2UgPVxyXG4gICAgICAgICAgICBcIlVUUyBBbmRyb2lkIGVycm9yOiBcIiArICgoZXJyICYmIGVyci5lcnJNc2cpIHx8IGVyciB8fCBcInVua25vd25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogODBycHggNDBycHggNjBycHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA2MHJweDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA1MnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFycHg7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI2cnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjhycHg7XHJcbiAgcGFkZGluZzogNDhycHggNDBycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhycHg7XHJcbiAgYm9yZGVyOiAxcnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcblxyXG4gIC5wbGF0Zm9ybS1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcnB4IDMwcnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHJweDtcclxuXHJcbiAgICAmLmFuZHJvaWQtYmFkZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NCwgMTk4LCA1NywgMC44NSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pb3MtYmFkZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCA5MCwgOTUsIDAuODUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYXRmb3JtLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHJweDtcclxufVxyXG5cclxuLm5hdGl2ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyMHJweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTA0cnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDEycnB4IDQwcnB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcclxuXHJcbiAgLmJ0bi10ZXh0IHtcclxuICAgIGNvbG9yOiAjNzY0YmEyO1xyXG4gICAgZm9udC1zaXplOiAzNnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAmW2Rpc2FibGVkXSB7XHJcbiAgICBvcGFjaXR5OiAwLjU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF0aXZlLWJ0bi1ob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcclxuICBvcGFjaXR5OiAwLjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlc3VsdC1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cnB4IDM2cnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLnN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMjE3LCAxMDAsIDAuMTgpO1xyXG4gICAgYm9yZGVyOiAycnB4IHNvbGlkIHJnYmEoNzYsIDIxNywgMTAwLCAwLjU1KTtcclxuICB9XHJcblxyXG4gICYuZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDU5LCA0OCwgMC4xOCk7XHJcbiAgICBib3JkZXI6IDJycHggc29saWQgcmdiYSgyNTUsIDU5LCA0OCwgMC41NSk7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzNnJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBycHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5yZXN1bHQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbn1cclxuXHJcbi5pbmZvLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG4gIHBhZGRpbmc6IDM2cnB4IDQwcnB4O1xyXG4gIG1hcmdpbi10b3A6IDEycnB4O1xyXG5cclxuICAuaW5mby10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cnB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm8taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cnB4O1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!*************************************************************************!*\
  !*** D:/Uniapp/uni_modules/native-screen-plugin/package.json?uts-proxy ***!
  \*************************************************************************/
/*! exports provided: openGameScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openGameScreen\", function() { return openGameScreen; });\n\nconst { registerUTSInterface, initUTSProxyClass, initUTSProxyFunction, initUTSPackageName, initUTSIndexClassName, initUTSClassName } = uni\nconst name = 'nativeScreenPlugin'\nconst moduleName = 'Native Screen Plugin (iOS - Gamification UTS)'\nconst moduleType = ''\nconst errMsg = ``\nconst is_uni_modules = true\nconst pkg = /*#__PURE__*/ initUTSPackageName(name, is_uni_modules)\nconst cls = /*#__PURE__*/ initUTSIndexClassName(name, is_uni_modules)\n\n\n\nconst openGameScreen = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'openGameScreenByJs', keepAlive: false, params: [{\"name\":\"options\",\"type\":\"UTSSDKModulesNativeScreenPluginOpenGameScreenOptionsJSONObject\"}], return: \"\"})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE9BQU8sNkhBQTZIO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU8sa0VBQWtFLCtIQUErSCx5RkFBeUYsY0FBYyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyByZWdpc3RlclVUU0ludGVyZmFjZSwgaW5pdFVUU1Byb3h5Q2xhc3MsIGluaXRVVFNQcm94eUZ1bmN0aW9uLCBpbml0VVRTUGFja2FnZU5hbWUsIGluaXRVVFNJbmRleENsYXNzTmFtZSwgaW5pdFVUU0NsYXNzTmFtZSB9ID0gdW5pXG5jb25zdCBuYW1lID0gJ25hdGl2ZVNjcmVlblBsdWdpbidcbmNvbnN0IG1vZHVsZU5hbWUgPSAnTmF0aXZlIFNjcmVlbiBQbHVnaW4gKGlPUyAtIEdhbWlmaWNhdGlvbiBVVFMpJ1xuY29uc3QgbW9kdWxlVHlwZSA9ICcnXG5jb25zdCBlcnJNc2cgPSBgYFxuY29uc3QgaXNfdW5pX21vZHVsZXMgPSB0cnVlXG5jb25zdCBwa2cgPSAvKiNfX1BVUkVfXyovIGluaXRVVFNQYWNrYWdlTmFtZShuYW1lLCBpc191bmlfbW9kdWxlcylcbmNvbnN0IGNscyA9IC8qI19fUFVSRV9fKi8gaW5pdFVUU0luZGV4Q2xhc3NOYW1lKG5hbWUsIGlzX3VuaV9tb2R1bGVzKVxuXG5cblxuZXhwb3J0IGNvbnN0IG9wZW5HYW1lU2NyZWVuID0gLyojX19QVVJFX18qLyBpbml0VVRTUHJveHlGdW5jdGlvbihmYWxzZSwgeyBtb2R1bGVOYW1lLCBtb2R1bGVUeXBlLCBlcnJNc2csIG1haW46IHRydWUsIHBhY2thZ2U6IHBrZywgY2xhc3M6IGNscywgbmFtZTogJ29wZW5HYW1lU2NyZWVuQnlKcycsIGtlZXBBbGl2ZTogZmFsc2UsIHBhcmFtczogW3tcIm5hbWVcIjpcIm9wdGlvbnNcIixcInR5cGVcIjpcIlVUU1NES01vZHVsZXNOYXRpdmVTY3JlZW5QbHVnaW5PcGVuR2FtZVNjcmVlbk9wdGlvbnNKU09OT2JqZWN0XCJ9XSwgcmV0dXJuOiBcIlwifSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 16 */
/*!*************************!*\
  !*** D:/Uniapp/App.vue ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ087QUFDaE8sZ0JBQWdCLHNPQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**************************************************!*\
  !*** D:/Uniapp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 18);\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTB3QixDQUFnQiw2eEJBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTEhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFDOlxcXFxVc2Vyc1xcXFxha3NoYXkua3VtYXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC41LjA3LjIwMjYwNDEwMDZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Uniapp/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ })
],[[0,"app-config"]]]);