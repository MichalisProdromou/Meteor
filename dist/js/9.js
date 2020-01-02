(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Players.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Players.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Players\",\n  components: {},\n  data: function data() {\n    return {\n      displayAsSelection: 0,\n      players: [],\n      headers: [{\n        text: 'Full name',\n        align: 'left',\n        value: 'name'\n      }, {\n        text: 'Phone no.',\n        align: 'left',\n        value: 'phone'\n      }, {\n        text: 'Email',\n        align: 'left',\n        value: 'email'\n      }]\n    };\n  },\n  computed: {\n    computedPlayers: function computedPlayers() {\n      var players = this.players.map(function (player) {\n        player.imgUrl = \"https://picsum.photos/200\";\n        return player;\n      });\n      return players;\n    }\n  },\n  methods: {\n    GetPlayers: function GetPlayers() {\n      var VM = this;\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://jsonplaceholder.typicode.com/users\").then(function (res) {\n        console.log(res);\n        VM.players = res.data;\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.GetPlayers();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Players.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"13e7e81c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Players.vue?vue&type=template&id=9f802130&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13e7e81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Players.vue?vue&type=template&id=9f802130& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-container\",\n    { attrs: { fluid: \"\" } },\n    [\n      _c(\n        \"v-row\",\n        [\n          _c(\n            \"v-col\",\n            { attrs: { sm: \"12\" } },\n            [\n              _c(\n                \"v-btn-toggle\",\n                {\n                  attrs: { mandatory: \"\" },\n                  model: {\n                    value: _vm.displayAsSelection,\n                    callback: function($$v) {\n                      _vm.displayAsSelection = $$v\n                    },\n                    expression: \"displayAsSelection\"\n                  }\n                },\n                [\n                  _c(\n                    \"v-btn\",\n                    [_c(\"v-icon\", [_vm._v(\"mdi-format-list-bulleted\")])],\n                    1\n                  ),\n                  _c(\n                    \"v-btn\",\n                    [_c(\"v-icon\", [_vm._v(\"mdi-view-grid-outline\")])],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm.displayAsSelection === 0\n        ? [\n            _c(\n              \"v-col\",\n              { attrs: { sm: \"12\" } },\n              [\n                _c(\"v-data-table\", {\n                  attrs: {\n                    items: _vm.computedPlayers,\n                    headers: _vm.headers,\n                    \"items-per-page\": -1\n                  }\n                })\n              ],\n              1\n            )\n          ]\n        : [\n            _c(\n              \"v-row\",\n              _vm._l(_vm.players, function(player, index) {\n                return _c(\n                  \"v-col\",\n                  { key: index, attrs: { sm: \"6\", md: \"4\", lg: \"4\" } },\n                  [\n                    _c(\n                      \"v-card\",\n                      [\n                        _c(\"v-img\", {\n                          attrs: { height: \"200px\", src: player.imgUrl }\n                        }),\n                        _c(\"v-card-title\", [_vm._v(_vm._s(player.name))]),\n                        _c(\"v-card-text\", [\n                          _vm._v(\" \" + _vm._s(player.name) + \" \")\n                        ])\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              }),\n              1\n            )\n          ]\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Players.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2213e7e81c-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/Players.vue":
/*!*******************************!*\
  !*** ./src/views/Players.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Players_vue_vue_type_template_id_9f802130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players.vue?vue&type=template&id=9f802130& */ \"./src/views/Players.vue?vue&type=template&id=9f802130&\");\n/* harmony import */ var _Players_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Players.vue?vue&type=script&lang=js& */ \"./src/views/Players.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"./node_modules/vuetify/lib/components/VBtn/index.js\");\n/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ \"./node_modules/vuetify/lib/components/VBtnToggle/index.js\");\n/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ \"./node_modules/vuetify/lib/components/VCard/index.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ \"./node_modules/vuetify/lib/components/VDataTable/index.js\");\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ \"./node_modules/vuetify/lib/components/VIcon/index.js\");\n/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ \"./node_modules/vuetify/lib/components/VImg/index.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Players_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Players_vue_vue_type_template_id_9f802130___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Players_vue_vue_type_template_id_9f802130___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__[\"VBtn\"],VBtnToggle: vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_5__[\"VBtnToggle\"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__[\"VCard\"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__[\"VCardText\"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__[\"VCardTitle\"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__[\"VCol\"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__[\"VContainer\"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__[\"VDataTable\"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__[\"VIcon\"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__[\"VImg\"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__[\"VRow\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Players.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Players.vue?");

/***/ }),

/***/ "./src/views/Players.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/views/Players.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Players_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Players.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Players.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Players_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Players.vue?");

/***/ }),

/***/ "./src/views/Players.vue?vue&type=template&id=9f802130&":
/*!**************************************************************!*\
  !*** ./src/views/Players.vue?vue&type=template&id=9f802130& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_13e7e81c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Players_vue_vue_type_template_id_9f802130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"13e7e81c-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Players.vue?vue&type=template&id=9f802130& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"13e7e81c-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Players.vue?vue&type=template&id=9f802130&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_13e7e81c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Players_vue_vue_type_template_id_9f802130___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_13e7e81c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Players_vue_vue_type_template_id_9f802130___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Players.vue?");

/***/ })

}]);