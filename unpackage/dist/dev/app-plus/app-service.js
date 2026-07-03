(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************!*\
  !*** D:/Uniapp/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 14));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 15));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNmRyxZQUFHLEVBQ0w7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbkFwcC5tcFR5cGUgPSAnYXBwJ1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcblx0Li4uQXBwXG59KVxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dPO0FBQ2hPLGdCQUFnQixzT0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

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
      _c(
        "view",
        { staticClass: _vm._$s(15, "sc", "info-box"), attrs: { _i: 15 } },
        [
          _c("text", {
            staticClass: _vm._$s(16, "sc", "info-title"),
            attrs: { _i: 16 },
          }),
          _c("text", {
            staticClass: _vm._$s(17, "sc", "info-item"),
            attrs: { _i: 17 },
          }),
          _c("text", {
            staticClass: _vm._$s(18, "sc", "info-item"),
            attrs: { _i: 18 },
          }),
          _c("text", {
            staticClass: _vm._$s(19, "sc", "info-item"),
            attrs: { _i: 19 },
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// Require the native plugin — only available when running on a real device/emulator\n// Not available on H5 or WeChat Mini Program\nvar isApp = uni.getSystemInfoSync().uniPlatform === \"app\";\nvar nativePlugin = null;\nif (isApp) {\n  try {\n    nativePlugin = uni.requireNativePlugin(\"NativeScreenPlugin\");\n  } catch (e) {\n    __f__(\"warn\", \"NativeScreenPlugin not loaded:\", e, \" at pages/index/index.vue:74\");\n  }\n}\nvar _default = {\n  data: function data() {\n    return {\n      loading: false,\n      resultMessage: \"\",\n      resultStatus: \"\",\n      isAndroid: false,\n      platformLabel: \"App\"\n    };\n  },\n  onLoad: function onLoad() {\n    var sysInfo = uni.getSystemInfoSync();\n    this.isAndroid = sysInfo.platform === \"android\";\n    this.platformLabel = this.isAndroid ? \"🤖 Android\" : \" iOS\";\n  },\n  methods: {\n    openGameScreen: function openGameScreen() {\n      var _this = this;\n      if (!isApp || !nativePlugin) {\n        uni.showModal({\n          title: \"Not Available\",\n          content: \"Native plugins only work when running on a real device or emulator via HBuilderX custom base.\",\n          showCancel: false\n        });\n        return;\n      }\n      this.loading = true;\n      this.resultMessage = \"\";\n      nativePlugin.openGameScreen(function (result) {\n        _this.loading = false;\n        if (result === \"success\") {\n          _this.resultStatus = \"success\";\n          _this.resultMessage = \"Game screen opened successfully\";\n        } else {\n          _this.resultStatus = \"error\";\n          _this.resultMessage = result || \"Unknown error occurred\";\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbIm5hdGl2ZVBsdWdpbiIsImRhdGEiLCJsb2FkaW5nIiwicmVzdWx0TWVzc2FnZSIsInJlc3VsdFN0YXR1cyIsImlzQW5kcm9pZCIsInBsYXRmb3JtTGFiZWwiLCJvbkxvYWQiLCJtZXRob2RzIiwib3BlbkdhbWVTY3JlZW4iLCJ1bmkiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7RUFDQTtJQUNBQTtFQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsZUFFQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQUE7TUFDQTtRQUNBQztVQUNBQztVQUNBQyxTQUNBO1VBQ0FDO1FBQ0E7UUFDQTtNQUNBO01BRUE7TUFDQTtNQUVBYjtRQUNBO1FBRUE7VUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDwhLS0gSGVhZGVyIC0tPlxuICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+TmF0aXZlIFNjcmVlbiBEZW1vPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJzdWJ0aXRsZVwiPlVuaUFwcCDCtyBBQVIgwrcgWENGcmFtZXdvcms8L3RleHQ+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSBQbGF0Zm9ybSBDYXJkIC0tPlxuICAgIDx2aWV3IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPHZpZXdcbiAgICAgICAgY2xhc3M9XCJwbGF0Zm9ybS1iYWRnZVwiXG4gICAgICAgIDpjbGFzcz1cImlzQW5kcm9pZCA/ICdhbmRyb2lkLWJhZGdlJyA6ICdpb3MtYmFkZ2UnXCJcbiAgICAgID5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJwbGF0Zm9ybS10ZXh0XCI+e3sgcGxhdGZvcm1MYWJlbCB9fTwvdGV4dD5cbiAgICAgIDwvdmlldz5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC10aXRsZVwiPk5hdGl2ZSBMaWJyYXJ5IEludGVncmF0aW9uPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIFRhcCB0aGUgYnV0dG9uIGJlbG93IHRvIG9wZW4gdGhlIG5hdGl2ZSBzY3JlZW4gcHJvdmlkZWQgYnkgdGhlXG4gICAgICAgIHt7IGlzQW5kcm9pZCA/IFwiQUFSIGxpYnJhcnkgKEFuZHJvaWQpXCIgOiBcIlhDRnJhbWV3b3JrIChpT1MpXCIgfX0uXG4gICAgICA8L3RleHQ+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSBPcGVuIEdhbWUgU2NyZWVuIEJ1dHRvbiAtLT5cbiAgICA8dmlldyBjbGFzcz1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwibmF0aXZlLWJ0blwiXG4gICAgICAgIEBjbGljaz1cIm9wZW5HYW1lU2NyZWVuXCJcbiAgICAgICAgOmRpc2FibGVkPVwibG9hZGluZ1wiXG4gICAgICAgIGhvdmVyLWNsYXNzPVwibmF0aXZlLWJ0bi1ob3ZlclwiXG4gICAgICA+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuLXRleHRcIj5cbiAgICAgICAgICB7eyBsb2FkaW5nID8gXCJPcGVuaW5nLi4uXCIgOiBcIk9wZW4gR2FtZSBTY3JlZW5cIiB9fVxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIFJlc3VsdCBNZXNzYWdlIC0tPlxuICAgIDx2aWV3IHYtaWY9XCJyZXN1bHRNZXNzYWdlXCIgY2xhc3M9XCJyZXN1bHQtYm94XCIgOmNsYXNzPVwicmVzdWx0U3RhdHVzXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInJlc3VsdC1pY29uXCI+e3tcbiAgICAgICAgcmVzdWx0U3RhdHVzID09PSBcInN1Y2Nlc3NcIiA/IFwi4pyTXCIgOiBcIuKcl1wiXG4gICAgICB9fTwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwicmVzdWx0LXRleHRcIj57eyByZXN1bHRNZXNzYWdlIH19PC90ZXh0PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0gSW5mbyBCb3ggLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJpbmZvLWJveFwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXRpdGxlXCI+SG93IGl0IHdvcmtzPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLWl0ZW1cIlxuICAgICAgICA+4oCiIEFuZHJvaWQ6IFBsdWdpbiBjYWxscyBJbml0aWF0ZUdhbWUoKS5vcGVuR2FtZVNjcmVlbigpIGZyb21cbiAgICAgICAgZ2FtaWZpY2F0aW9uX2xpYnJhcnkuYWFyPC90ZXh0XG4gICAgICA+XG4gICAgICA8dGV4dCBjbGFzcz1cImluZm8taXRlbVwiXG4gICAgICAgID7igKIgaU9TOiBQbHVnaW4gRnJhbWV3b3JrIHByZXNlbnRzIFZpZXdDb250cm9sbGVyIGZyb20gdGhlXG4gICAgICAgIFhDRnJhbWV3b3JrPC90ZXh0XG4gICAgICA+XG4gICAgICA8dGV4dCBjbGFzcz1cImluZm8taXRlbVwiXG4gICAgICAgID7igKIgUGFzcyBhcGlLZXksIG1zaXNkbiwgbGFuZ3VhZ2UsIGdhbWVUeXBlLCBjYW1wYWlnbklkLCB0b2tlbjwvdGV4dFxuICAgICAgPlxuICAgIDwvdmlldz5cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIFJlcXVpcmUgdGhlIG5hdGl2ZSBwbHVnaW4g4oCUIG9ubHkgYXZhaWxhYmxlIHdoZW4gcnVubmluZyBvbiBhIHJlYWwgZGV2aWNlL2VtdWxhdG9yXG4vLyBOb3QgYXZhaWxhYmxlIG9uIEg1IG9yIFdlQ2hhdCBNaW5pIFByb2dyYW1cbmNvbnN0IGlzQXBwID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkudW5pUGxhdGZvcm0gPT09IFwiYXBwXCI7XG5sZXQgbmF0aXZlUGx1Z2luID0gbnVsbDtcblxuaWYgKGlzQXBwKSB7XG4gIHRyeSB7XG4gICAgbmF0aXZlUGx1Z2luID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oXCJOYXRpdmVTY3JlZW5QbHVnaW5cIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJOYXRpdmVTY3JlZW5QbHVnaW4gbm90IGxvYWRlZDpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHJlc3VsdE1lc3NhZ2U6IFwiXCIsXG4gICAgICByZXN1bHRTdGF0dXM6IFwiXCIsXG4gICAgICBpc0FuZHJvaWQ6IGZhbHNlLFxuICAgICAgcGxhdGZvcm1MYWJlbDogXCJBcHBcIixcbiAgICB9O1xuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgY29uc3Qgc3lzSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgIHRoaXMuaXNBbmRyb2lkID0gc3lzSW5mby5wbGF0Zm9ybSA9PT0gXCJhbmRyb2lkXCI7XG4gICAgdGhpcy5wbGF0Zm9ybUxhYmVsID0gdGhpcy5pc0FuZHJvaWQgPyBcIvCfpJYgQW5kcm9pZFwiIDogXCIgaU9TXCI7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuR2FtZVNjcmVlbigpIHtcbiAgICAgIGlmICghaXNBcHAgfHwgIW5hdGl2ZVBsdWdpbikge1xuICAgICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogXCJOb3QgQXZhaWxhYmxlXCIsXG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgIFwiTmF0aXZlIHBsdWdpbnMgb25seSB3b3JrIHdoZW4gcnVubmluZyBvbiBhIHJlYWwgZGV2aWNlIG9yIGVtdWxhdG9yIHZpYSBIQnVpbGRlclggY3VzdG9tIGJhc2UuXCIsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICBuYXRpdmVQbHVnaW4ub3BlbkdhbWVTY3JlZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMucmVzdWx0U3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgdGhpcy5yZXN1bHRNZXNzYWdlID0gXCJHYW1lIHNjcmVlbiBvcGVuZWQgc3VjY2Vzc2Z1bGx5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRTdGF0dXMgPSBcImVycm9yXCI7XG4gICAgICAgICAgdGhpcy5yZXN1bHRNZXNzYWdlID0gcmVzdWx0IHx8IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogODBycHggNDBycHggNjBycHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDYwcnB4O1xuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiA1MnJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcnB4O1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI2cnB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRycHg7XG4gIH1cbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAyOHJweDtcbiAgcGFkZGluZzogNDhycHggNDBycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA0OHJweDtcbiAgYm9yZGVyOiAxcnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG5cbiAgLnBsYXRmb3JtLWJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nOiAxMHJweCAzMHJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHJweDtcblxuICAgICYuYW5kcm9pZC1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NCwgMTk4LCA1NywgMC44NSk7XG4gICAgfVxuXG4gICAgJi5pb3MtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg5MCwgOTAsIDk1LCAwLjg1KTtcbiAgICB9XG4gIH1cblxuICAucGxhdGZvcm0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNnJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzRycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHJweDtcbiAgfVxuXG4gIC5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI4cnB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIH1cbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xufVxuXG4ubmF0aXZlLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDRycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTJycHggNDBycHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xuXG4gIC5idG4tdGV4dCB7XG4gICAgY29sb3I6ICM3NjRiYTI7XG4gICAgZm9udC1zaXplOiAzNnJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubmF0aXZlLWJ0bi1ob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50O1xufVxuXG4ucmVzdWx0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyOHJweCAzNnJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMjE3LCAxMDAsIDAuMTgpO1xuICAgIGJvcmRlcjogMnJweCBzb2xpZCByZ2JhKDc2LCAyMTcsIDEwMCwgMC41NSk7XG4gIH1cblxuICAmLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjE4KTtcbiAgICBib3JkZXI6IDJycHggc29saWQgcmdiYSgyNTUsIDU5LCA0OCwgMC41NSk7XG4gIH1cblxuICAucmVzdWx0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzZycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHJweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5yZXN1bHQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyOHJweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmbGV4OiAxO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLmluZm8tYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBycHg7XG4gIHBhZGRpbmc6IDM2cnB4IDQwcnB4O1xuICBtYXJnaW4tdG9wOiAxMnJweDtcblxuICAuaW5mby10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyOHJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRycHg7XG4gIH1cblxuICAuaW5mby1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI0cnB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHJweDtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

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
/* 14 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 15 */
/*!*************************!*\
  !*** D:/Uniapp/App.vue ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ087QUFDaE8sZ0JBQWdCLHNPQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**************************************************!*\
  !*** D:/Uniapp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_C_Users_akshay_kumar_Downloads_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTB3QixDQUFnQiw2eEJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTEhQzpcXFxcVXNlcnNcXFxcYWtzaGF5Lmt1bWFyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguNS4wNy4yMDI2MDQxMDA2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUM6XFxcXFVzZXJzXFxcXGFrc2hheS5rdW1hclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjUuMDcuMjAyNjA0MTAwNlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFDOlxcXFxVc2Vyc1xcXFxha3NoYXkua3VtYXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC41LjA3LjIwMjYwNDEwMDZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Uniapp/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ })
],[[0,"app-config"]]]);