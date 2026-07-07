(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  ["app-service"],
  [
    /* 0 */
    /*!***********************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/main.js ***!
  \***********************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      eval(
        "\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 16));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNmRyxZQUFHLEVBQ0w7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbkFwcC5tcFR5cGUgPSAnYXBwJ1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcblx0Li4uQXBwXG59KVxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n",
      );

      /***/
    },
    /* 1 */
    /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }
      ((module.exports = _interopRequireDefault),
        (module.exports.__esModule = true),
        (module.exports["default"] = module.exports));

      /***/
    },
    /* 2 */
    /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
      function _defineProperty(obj, key, value) {
        key = toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      ((module.exports = _defineProperty),
        (module.exports.__esModule = true),
        (module.exports["default"] = module.exports));

      /***/
    },
    /* 3 */
    /*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
      var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
      function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
      }
      ((module.exports = toPropertyKey),
        (module.exports.__esModule = true),
        (module.exports["default"] = module.exports));

      /***/
    },
    /* 4 */
    /*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      function _typeof(o) {
        "@babel/helpers - typeof";

        return (
          ((module.exports = _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    "function" == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
                }),
          (module.exports.__esModule = true),
          (module.exports["default"] = module.exports)),
          _typeof(o)
        );
      }
      ((module.exports = _typeof),
        (module.exports.__esModule = true),
        (module.exports["default"] = module.exports));

      /***/
    },
    /* 5 */
    /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
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
      ((module.exports = toPrimitive),
        (module.exports.__esModule = true),
        (module.exports["default"] = module.exports));

      /***/
    },
    /* 6 */
    /*!**************************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/pages.json ***!
  \**************************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
            function (value) {
              return promise.resolve(callback()).then(function () {
                return value;
              });
            },
            function (reason) {
              return promise.resolve(callback()).then(function () {
                throw reason;
              });
            },
          );
        };
      }
      if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
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
        uni.restoreGlobal(
          weex,
          plus,
          setTimeout,
          clearTimeout,
          setInterval,
          clearInterval,
        );
      }
      __definePage("pages/index/index", function () {
        return Vue.extend(
          __webpack_require__(/*! pages/index/index.vue?mpType=page */ 7)
            .default,
        );
      });

      /***/
    },
    /* 7 */
    /*!*************************************************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/pages/index/index.vue?mpType=page ***!
  \*************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],\n  renderjs\n)\n\ncomponent.options.__file = "pages/index/index.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n',
      );

      /***/
    },
    /* 8 */
    /*!*******************************************************************************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns, recyclableRender, components */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9,
        );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        "render",
        function () {
          return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ];
        },
      );

      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        "staticRenderFns",
        function () {
          return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ];
        },
      );

      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        "recyclableRender",
        function () {
          return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[
            "recyclableRender"
          ];
        },
      );

      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        "components",
        function () {
          return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[
            "components"
          ];
        },
      );

      /***/
    },
    /* 9 */
    /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns, recyclableRender, components */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "render",
        function () {
          return render;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "staticRenderFns",
        function () {
          return staticRenderFns;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "recyclableRender",
        function () {
          return recyclableRender;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "components",
        function () {
          return components;
        },
      );
      var components;
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
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
              ],
            ),
            _c(
              "view",
              { staticClass: _vm._$s(4, "sc", "card"), attrs: { _i: 4 } },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(5, "sc", "platform-badge"),
                    class: _vm._$s(
                      5,
                      "c",
                      _vm.isAndroid ? "android-badge" : "ios-badge",
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
                      [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.platformLabel)))],
                    ),
                  ],
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
                          _vm.isAndroid
                            ? "AAR library (Android)"
                            : "XCFramework (iOS)",
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(9, "sc", "button-wrapper"),
                attrs: { _i: 9 },
              },
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
                            _vm._s(
                              _vm.loading ? "Opening..." : "Open Game Screen",
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
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
                            _vm._s(_vm.resultStatus === "success" ? "✓" : "✗"),
                          ),
                        ),
                      ],
                    ),
                    _c(
                      "text",
                      {
                        staticClass: _vm._$s(14, "sc", "result-text"),
                        attrs: { _i: 14 },
                      },
                      [_vm._v(_vm._$s(14, "t0-0", _vm._s(_vm.resultMessage)))],
                    ),
                  ],
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
                                    : "TEST: UTS Android (experimental)",
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
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
                            _vm._s(
                              _vm.utsResultStatus === "success" ? "✓" : "✗",
                            ),
                          ),
                        ),
                      ],
                    ),
                    _c(
                      "text",
                      {
                        staticClass: _vm._$s(20, "sc", "result-text"),
                        attrs: { _i: 20 },
                      },
                      [
                        _vm._v(
                          _vm._$s(20, "t0-0", _vm._s(_vm.utsResultMessage)),
                        ),
                      ],
                    ),
                  ],
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
              ],
            ),
          ],
        );
      };
      var recyclableRender = false;
      var staticRenderFns = [];
      render._withStripped = true;

      /***/
    },
    /* 10 */
    /*!*************************************************************************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n',
      );

      /***/
    },
    /* 11 */
    /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      eval(
        '/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\nvar _nativeScreenPlugin = __webpack_require__(/*! @/uni_modules/native-screen-plugin */ 13);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// iOS: UTS plugin (uni_modules/native-screen-plugin) — HBuilderX compiles this\n// automatically, no separate native framework build needed.\n\n// Android: existing AAR-based native plugin — unchanged.\n// Not available on H5 or WeChat Mini Program.\nvar sysInfo = uni.getSystemInfoSync();\nvar isApp = sysInfo.uniPlatform === "app";\nvar isAndroidPlatform = sysInfo.platform === "android";\nvar nativePlugin = null;\nif (isApp && isAndroidPlatform) {\n  try {\n    nativePlugin = uni.requireNativePlugin("NativeScreenPlugin");\n  } catch (e) {\n    __f__("warn", "NativeScreenPlugin not loaded:", e, " at pages/index/index.vue:80");\n  }\n}\nvar _default = {\n  data: function data() {\n    return {\n      loading: false,\n      resultMessage: "",\n      resultStatus: "",\n      isAndroid: false,\n      platformLabel: "App"\n    };\n  },\n  onLoad: function onLoad() {\n    this.isAndroid = isAndroidPlatform;\n    this.platformLabel = this.isAndroid ? "🤖 Android" : " iOS";\n  },\n  methods: {\n    openGameScreen: function openGameScreen() {\n      var _this = this;\n      if (!isApp) {\n        uni.showModal({\n          title: "Not Available",\n          content: "Native plugins only work when running on a real device or emulator via HBuilderX custom base.",\n          showCancel: false\n        });\n        return;\n      }\n      this.loading = true;\n      this.resultMessage = "";\n      var handleResult = function handleResult(result) {\n        _this.loading = false;\n        if (result === "success" || result && result.action) {\n          _this.resultStatus = "success";\n          _this.resultMessage = "Game screen opened successfully";\n        } else {\n          _this.resultStatus = "error";\n          _this.resultMessage = result && result.errMsg || result || "Unknown error occurred";\n        }\n      };\n      if (isAndroidPlatform) {\n        if (!nativePlugin) {\n          this.loading = false;\n          this.resultStatus = "error";\n          this.resultMessage = "NativeScreenPlugin not loaded.";\n          return;\n        }\n        nativePlugin.openGameScreen(handleResult);\n      } else {\n        (0, _nativeScreenPlugin.openGameScreen)({\n          success: function success(res) {\n            return handleResult(res);\n          },\n          fail: function fail(err) {\n            return handleResult(err);\n          }\n        });\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)["default"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbIm5hdGl2ZVBsdWdpbiIsImRhdGEiLCJsb2FkaW5nIiwicmVzdWx0TWVzc2FnZSIsInJlc3VsdFN0YXR1cyIsImlzQW5kcm9pZCIsInBsYXRmb3JtTGFiZWwiLCJvbkxvYWQiLCJtZXRob2RzIiwib3BlbkdhbWVTY3JlZW4iLCJ1bmkiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwicmVzdWx0Iiwic3VjY2VzcyIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWtFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0VBQ0E7SUFDQUE7RUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLGVBRUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFBQTtNQUNBO1FBQ0FDO1VBQ0FDO1VBQ0FDLFNBQ0E7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO01BRUE7UUFDQTtRQUVBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQSxzQkFDQUM7UUFDQTtNQUNBO01BRUE7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQWQ7TUFDQTtRQUNBO1VBQ0FlO1lBQUE7VUFBQTtVQUNBQztZQUFBO1VBQUE7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPCEtLSBIZWFkZXIgLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj5OYXRpdmUgU2NyZWVuIERlbW88L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cInN1YnRpdGxlXCI+VW5pQXBwIMK3IEFBUiDCtyBYQ0ZyYW1ld29yazwvdGV4dD5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIFBsYXRmb3JtIENhcmQgLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8dmlld1xuICAgICAgICBjbGFzcz1cInBsYXRmb3JtLWJhZGdlXCJcbiAgICAgICAgOmNsYXNzPVwiaXNBbmRyb2lkID8gJ2FuZHJvaWQtYmFkZ2UnIDogJ2lvcy1iYWRnZSdcIlxuICAgICAgPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInBsYXRmb3JtLXRleHRcIj57eyBwbGF0Zm9ybUxhYmVsIH19PC90ZXh0PlxuICAgICAgPC92aWV3PlxuICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+TmF0aXZlIExpYnJhcnkgSW50ZWdyYXRpb248L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgVGFwIHRoZSBidXR0b24gYmVsb3cgdG8gb3BlbiB0aGUgbmF0aXZlIHNjcmVlbiBwcm92aWRlZCBieSB0aGVcbiAgICAgICAge3sgaXNBbmRyb2lkID8gXCJBQVIgbGlicmFyeSAoQW5kcm9pZClcIiA6IFwiWENGcmFtZXdvcmsgKGlPUylcIiB9fS5cbiAgICAgIDwvdGV4dD5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIE9wZW4gR2FtZSBTY3JlZW4gQnV0dG9uIC0tPlxuICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJuYXRpdmUtYnRuXCJcbiAgICAgICAgQGNsaWNrPVwib3BlbkdhbWVTY3JlZW5cIlxuICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCJcbiAgICAgICAgaG92ZXItY2xhc3M9XCJuYXRpdmUtYnRuLWhvdmVyXCJcbiAgICAgID5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tdGV4dFwiPlxuICAgICAgICAgIHt7IGxvYWRpbmcgPyBcIk9wZW5pbmcuLi5cIiA6IFwiT3BlbiBHYW1lIFNjcmVlblwiIH19XG4gICAgICAgIDwvdGV4dD5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0gUmVzdWx0IE1lc3NhZ2UgLS0+XG4gICAgPHZpZXcgdi1pZj1cInJlc3VsdE1lc3NhZ2VcIiBjbGFzcz1cInJlc3VsdC1ib3hcIiA6Y2xhc3M9XCJyZXN1bHRTdGF0dXNcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwicmVzdWx0LWljb25cIj57e1xuICAgICAgICByZXN1bHRTdGF0dXMgPT09IFwic3VjY2Vzc1wiID8gXCLinJNcIiA6IFwi4pyXXCJcbiAgICAgIH19PC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJyZXN1bHQtdGV4dFwiPnt7IHJlc3VsdE1lc3NhZ2UgfX08L3RleHQ+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSBJbmZvIEJveCAtLT5cbiAgICA8dmlldyBjbGFzcz1cImluZm8tYm94XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImluZm8tdGl0bGVcIj5Ib3cgaXQgd29ya3M8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cImluZm8taXRlbVwiXG4gICAgICAgID7igKIgQW5kcm9pZDogUGx1Z2luIGNhbGxzIEluaXRpYXRlR2FtZSgpLm9wZW5HYW1lU2NyZWVuKCkgZnJvbVxuICAgICAgICBnYW1pZmljYXRpb25fbGlicmFyeS5hYXI8L3RleHRcbiAgICAgID5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1pdGVtXCJcbiAgICAgICAgPuKAoiBpT1M6IFBsdWdpbiBGcmFtZXdvcmsgcHJlc2VudHMgVmlld0NvbnRyb2xsZXIgZnJvbSB0aGVcbiAgICAgICAgWENGcmFtZXdvcms8L3RleHRcbiAgICAgID5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1pdGVtXCJcbiAgICAgICAgPuKAoiBQYXNzIGFwaUtleSwgbXNpc2RuLCBsYW5ndWFnZSwgZ2FtZVR5cGUsIGNhbXBhaWduSWQsIHRva2VuPC90ZXh0XG4gICAgICA+XG4gICAgPC92aWV3PlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gaU9TOiBVVFMgcGx1Z2luICh1bmlfbW9kdWxlcy9uYXRpdmUtc2NyZWVuLXBsdWdpbikg4oCUIEhCdWlsZGVyWCBjb21waWxlcyB0aGlzXG4vLyBhdXRvbWF0aWNhbGx5LCBubyBzZXBhcmF0ZSBuYXRpdmUgZnJhbWV3b3JrIGJ1aWxkIG5lZWRlZC5cbmltcG9ydCB7IG9wZW5HYW1lU2NyZWVuIGFzIGlvc09wZW5HYW1lU2NyZWVuIH0gZnJvbSBcIkAvdW5pX21vZHVsZXMvbmF0aXZlLXNjcmVlbi1wbHVnaW5cIjtcblxuLy8gQW5kcm9pZDogZXhpc3RpbmcgQUFSLWJhc2VkIG5hdGl2ZSBwbHVnaW4g4oCUIHVuY2hhbmdlZC5cbi8vIE5vdCBhdmFpbGFibGUgb24gSDUgb3IgV2VDaGF0IE1pbmkgUHJvZ3JhbS5cbmNvbnN0IHN5c0luZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbmNvbnN0IGlzQXBwID0gc3lzSW5mby51bmlQbGF0Zm9ybSA9PT0gXCJhcHBcIjtcbmNvbnN0IGlzQW5kcm9pZFBsYXRmb3JtID0gc3lzSW5mby5wbGF0Zm9ybSA9PT0gXCJhbmRyb2lkXCI7XG5cbmxldCBuYXRpdmVQbHVnaW4gPSBudWxsO1xuaWYgKGlzQXBwICYmIGlzQW5kcm9pZFBsYXRmb3JtKSB7XG4gIHRyeSB7XG4gICAgbmF0aXZlUGx1Z2luID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oXCJOYXRpdmVTY3JlZW5QbHVnaW5cIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJOYXRpdmVTY3JlZW5QbHVnaW4gbm90IGxvYWRlZDpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHJlc3VsdE1lc3NhZ2U6IFwiXCIsXG4gICAgICByZXN1bHRTdGF0dXM6IFwiXCIsXG4gICAgICBpc0FuZHJvaWQ6IGZhbHNlLFxuICAgICAgcGxhdGZvcm1MYWJlbDogXCJBcHBcIixcbiAgICB9O1xuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5pc0FuZHJvaWQgPSBpc0FuZHJvaWRQbGF0Zm9ybTtcbiAgICB0aGlzLnBsYXRmb3JtTGFiZWwgPSB0aGlzLmlzQW5kcm9pZCA/IFwi8J+kliBBbmRyb2lkXCIgOiBcIiBpT1NcIjtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9wZW5HYW1lU2NyZWVuKCkge1xuICAgICAgaWYgKCFpc0FwcCkge1xuICAgICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogXCJOb3QgQXZhaWxhYmxlXCIsXG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgIFwiTmF0aXZlIHBsdWdpbnMgb25seSB3b3JrIHdoZW4gcnVubmluZyBvbiBhIHJlYWwgZGV2aWNlIG9yIGVtdWxhdG9yIHZpYSBIQnVpbGRlclggY3VzdG9tIGJhc2UuXCIsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICBjb25zdCBoYW5kbGVSZXN1bHQgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwic3VjY2Vzc1wiIHx8IChyZXN1bHQgJiYgcmVzdWx0LmFjdGlvbikpIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdFN0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9IFwiR2FtZSBzY3JlZW4gb3BlbmVkIHN1Y2Nlc3NmdWxseVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzdWx0U3RhdHVzID0gXCJlcnJvclwiO1xuICAgICAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9XG4gICAgICAgICAgICAocmVzdWx0ICYmIHJlc3VsdC5lcnJNc2cpIHx8IHJlc3VsdCB8fCBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzQW5kcm9pZFBsYXRmb3JtKSB7XG4gICAgICAgIGlmICghbmF0aXZlUGx1Z2luKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZXN1bHRTdGF0dXMgPSBcImVycm9yXCI7XG4gICAgICAgICAgdGhpcy5yZXN1bHRNZXNzYWdlID0gXCJOYXRpdmVTY3JlZW5QbHVnaW4gbm90IGxvYWRlZC5cIjtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbmF0aXZlUGx1Z2luLm9wZW5HYW1lU2NyZWVuKGhhbmRsZVJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpb3NPcGVuR2FtZVNjcmVlbih7XG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4gaGFuZGxlUmVzdWx0KHJlcyksXG4gICAgICAgICAgZmFpbDogKGVycikgPT4gaGFuZGxlUmVzdWx0KGVyciksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4MHJweCA0MHJweCA2MHJweDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNjBycHg7XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDUycnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFycHg7XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBsZXR0ZXItc3BhY2luZzogNHJweDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDI4cnB4O1xuICBwYWRkaW5nOiA0OHJweCA0MHJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDQ4cnB4O1xuICBib3JkZXI6IDFycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcblxuICAucGxhdGZvcm0tYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmc6IDEwcnB4IDMwcnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI4cnB4O1xuXG4gICAgJi5hbmRyb2lkLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTY0LCAxOTgsIDU3LCAwLjg1KTtcbiAgICB9XG5cbiAgICAmLmlvcy1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCA5MCwgOTUsIDAuODUpO1xuICAgIH1cbiAgfVxuXG4gIC5wbGF0Zm9ybS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI2cnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzNHJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcnB4O1xuICB9XG5cbiAgLmNhcmQtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjhycHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgfVxufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNDBycHg7XG59XG5cbi5uYXRpdmUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwNHJweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxMnJweCA0MHJweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XG5cbiAgLmJ0bi10ZXh0IHtcbiAgICBjb2xvcjogIzc2NGJhMjtcbiAgICBmb250LXNpemU6IDM2cnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41NSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5uYXRpdmUtYnRuLWhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgb3BhY2l0eTogMC45ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXN1bHQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI4cnB4IDM2cnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJi5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAyMTcsIDEwMCwgMC4xOCk7XG4gICAgYm9yZGVyOiAycnB4IHNvbGlkIHJnYmEoNzYsIDIxNywgMTAwLCAwLjU1KTtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1OSwgNDgsIDAuMTgpO1xuICAgIGJvcmRlcjogMnJweCBzb2xpZCByZ2JhKDI1NSwgNTksIDQ4LCAwLjU1KTtcbiAgfVxuXG4gIC5yZXN1bHQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzNnJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnJlc3VsdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDI4cnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZsZXg6IDE7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuXG4uaW5mby1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMzZycHggNDBycHg7XG4gIG1hcmdpbi10b3A6IDEycnB4O1xuXG4gIC5pbmZvLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI4cnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHJweDtcbiAgfVxuXG4gIC5pbmZvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjRycHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICBtYXJnaW4tYm90dG9tOiA4cnB4O1xuICB9XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n',
      );

      /***/
    },
    /* 12 */
    /*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
    /*! exports provided: log, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "log",
        function () {
          return log;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return formatLog;
        },
      );
      function typof(v) {
        var s = Object.prototype.toString.call(v);
        return s.substring(8, s.length - 1);
      }

      function isDebugMode() {
        /* eslint-disable no-undef */
        return typeof __channelId__ === "string" && __channelId__;
      }

      function jsonStringifyReplacer(k, p) {
        switch (typof(p)) {
          case "Function":
            return "function() { [native code] }";
          default:
            return p;
        }
      }

      function log(type) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        console[type].apply(console, args);
      }

      function formatLog() {
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        var type = args.shift();
        if (isDebugMode()) {
          args.push(args.pop().replace("at ", "uni-app:///"));
          return console[type].apply(console, args);
        }

        var msgs = args.map(function (v) {
          var type = Object.prototype.toString.call(v).toLowerCase();

          if (type === "[object object]" || type === "[object array]") {
            try {
              v =
                "---BEGIN:JSON---" +
                JSON.stringify(v, jsonStringifyReplacer) +
                "---END:JSON---";
            } catch (e) {
              v = type;
            }
          } else {
            if (v === null) {
              v = "---NULL---";
            } else if (v === undefined) {
              v = "---UNDEFINED---";
            } else {
              var vType = typof(v).toUpperCase();

              if (vType === "NUMBER" || vType === "BOOLEAN") {
                v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
              } else {
                v = String(v);
              }
            }
          }

          return v;
        });
        var msg = "";

        if (msgs.length > 1) {
          var lastMsg = msgs.pop();
          msg = msgs.join("---COMMA---");

          if (lastMsg.indexOf(" at ") === 0) {
            msg += lastMsg;
          } else {
            msg += "---COMMA---" + lastMsg;
          }
        } else {
          msg = msgs[0];
        }

        console[type](msg);
      }

      /***/
    },
    /* 13 */
    /*!***********************************************************************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/uni_modules/native-screen-plugin/package.json?uts-proxy ***!
  \***********************************************************************************************************************************/
    /*! exports provided: openGameScreen */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGameScreen", function() { return openGameScreen; });\n\nconst { registerUTSInterface, initUTSProxyClass, initUTSProxyFunction, initUTSPackageName, initUTSIndexClassName, initUTSClassName } = uni\nconst name = \'nativeScreenPlugin\'\nconst moduleName = \'Native Screen Plugin (iOS - Gamification UTS)\'\nconst moduleType = \'\'\nconst errMsg = ``\nconst is_uni_modules = true\nconst pkg = /*#__PURE__*/ initUTSPackageName(name, is_uni_modules)\nconst cls = /*#__PURE__*/ initUTSIndexClassName(name, is_uni_modules)\n\n\n\nconst openGameScreen = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: \'openGameScreenByJs\', keepAlive: false, params: [{"name":"options","type":"UTSSDKModulesNativeScreenPluginOpenGameScreenOptionsJSONObject"}], return: ""})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE9BQU8sNkhBQTZIO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU8sa0VBQWtFLCtIQUErSCx5RkFBeUYsY0FBYyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyByZWdpc3RlclVUU0ludGVyZmFjZSwgaW5pdFVUU1Byb3h5Q2xhc3MsIGluaXRVVFNQcm94eUZ1bmN0aW9uLCBpbml0VVRTUGFja2FnZU5hbWUsIGluaXRVVFNJbmRleENsYXNzTmFtZSwgaW5pdFVUU0NsYXNzTmFtZSB9ID0gdW5pXG5jb25zdCBuYW1lID0gJ25hdGl2ZVNjcmVlblBsdWdpbidcbmNvbnN0IG1vZHVsZU5hbWUgPSAnTmF0aXZlIFNjcmVlbiBQbHVnaW4gKGlPUyAtIEdhbWlmaWNhdGlvbiBVVFMpJ1xuY29uc3QgbW9kdWxlVHlwZSA9ICcnXG5jb25zdCBlcnJNc2cgPSBgYFxuY29uc3QgaXNfdW5pX21vZHVsZXMgPSB0cnVlXG5jb25zdCBwa2cgPSAvKiNfX1BVUkVfXyovIGluaXRVVFNQYWNrYWdlTmFtZShuYW1lLCBpc191bmlfbW9kdWxlcylcbmNvbnN0IGNscyA9IC8qI19fUFVSRV9fKi8gaW5pdFVUU0luZGV4Q2xhc3NOYW1lKG5hbWUsIGlzX3VuaV9tb2R1bGVzKVxuXG5cblxuZXhwb3J0IGNvbnN0IG9wZW5HYW1lU2NyZWVuID0gLyojX19QVVJFX18qLyBpbml0VVRTUHJveHlGdW5jdGlvbihmYWxzZSwgeyBtb2R1bGVOYW1lLCBtb2R1bGVUeXBlLCBlcnJNc2csIG1haW46IHRydWUsIHBhY2thZ2U6IHBrZywgY2xhc3M6IGNscywgbmFtZTogJ29wZW5HYW1lU2NyZWVuQnlKcycsIGtlZXBBbGl2ZTogZmFsc2UsIHBhcmFtczogW3tcIm5hbWVcIjpcIm9wdGlvbnNcIixcInR5cGVcIjpcIlVUU1NES01vZHVsZXNOYXRpdmVTY3JlZW5QbHVnaW5PcGVuR2FtZVNjcmVlbk9wdGlvbnNKU09OT2JqZWN0XCJ9XSwgcmV0dXJuOiBcIlwifSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n',
      );

      /***/
    },
    /* 14 */
    /*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return normalizeComponent;
        },
      );
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */,
        components, // fixed by xxxxxx auto components
        renderjs, // fixed by xxxxxx renderjs
      ) {
        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === "function"
            ? scriptExports.options
            : scriptExports;

        // fixed by xxxxxx auto components
        if (components) {
          if (!options.components) {
            options.components = {};
          }
          var hasOwn = Object.prototype.hasOwnProperty;
          for (var name in components) {
            if (
              hasOwn.call(components, name) &&
              !hasOwn.call(options.components, name)
            ) {
              options.components[name] = components[name];
            }
          }
        }
        // fixed by xxxxxx renderjs
        if (renderjs) {
          if (typeof renderjs.beforeCreate === "function") {
            renderjs.beforeCreate = [renderjs.beforeCreate];
          }
          (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(
            function () {
              this[renderjs.__module] = this;
            },
          );
          (options.mixins || (options.mixins = [])).push(renderjs);
        }

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = "data-v-" + scopeId;
        }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function (context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function () {
                injectStyles.call(this, this.$root.$options.shadowRoot);
              }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options: options,
        };
      }

      /***/
    },
    /* 15 */
    /*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
    /*! no static exports found */
    /***/ function (module, exports) {
      module.exports = Vue;

      /***/
    },
    /* 16 */
    /*!***********************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/App.vue ***!
  \***********************************************************************************/
    /*! no static exports found */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = "App.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNk07QUFDN00sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n',
      );

      /***/
    },
    /* 17 */
    /*!************************************************************************************************************!*\
  !*** /Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 18);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVzQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n',
      );

      /***/
    },
    /* 18 */
    /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/sathishkumar/Documents/DemoProjects/Uniapp/UniAppIntegration/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      eval(
        '/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__("log", \'App Launch\', " at App.vue:4");\n  },\n  onShow: function onShow() {\n    __f__("log", \'App Show\', " at App.vue:7");\n  },\n  onHide: function onHide() {\n    __f__("log", \'App Hide\', " at App.vue:10");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)["default"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n',
      );

      /***/
    },
  ],
  [[0, "app-config"]],
]);
