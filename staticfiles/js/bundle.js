/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gql-query-builder/build/OperationType.js":
/*!***************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/OperationType.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar OperationType;\n(function (OperationType) {\n    OperationType[\"Mutation\"] = \"mutation\";\n    OperationType[\"Query\"] = \"query\";\n    OperationType[\"Subscription\"] = \"subscription\";\n})(OperationType || (OperationType = {}));\nexports.default = OperationType;\n//# sourceMappingURL=OperationType.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/OperationType.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/Utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/gql-query-builder/build/Utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Utils = /** @class */ (function () {\n    function Utils() {\n    }\n    Utils.resolveVariables = function (operations) {\n        var ret = {};\n        for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {\n            var variables = operations_1[_i].variables;\n            ret = __assign({}, ret, variables);\n        }\n        return ret;\n    };\n    Utils.queryFieldsMap = function (fields) {\n        var _this = this;\n        return fields\n            ? fields\n                .map(function (field) {\n                return typeof field === \"object\"\n                    ? Object.keys(field)[0] + \" { \" + _this.queryFieldsMap(Object.values(field)[0]) + \" }\"\n                    : \"\" + field;\n            })\n                .join(\", \")\n            : \"\";\n    };\n    // Variables map. eg: { \"id\": 1, \"name\": \"Jon Doe\" }\n    Utils.queryVariablesMap = function (variables) {\n        var variablesMapped = {};\n        if (variables) {\n            Object.keys(variables).map(function (key) {\n                variablesMapped[key] =\n                    typeof variables[key] === \"object\"\n                        ? variables[key].value\n                        : variables[key];\n            });\n        }\n        return variablesMapped;\n    };\n    Utils.queryDataType = function (variable) {\n        var type = \"String\";\n        var value = typeof variable === \"object\" ? variable.value : variable;\n        if (variable.type !== undefined) {\n            type = variable.type;\n        }\n        else {\n            switch (typeof value) {\n                case \"object\":\n                    type = \"Object\";\n                    break;\n                case \"boolean\":\n                    type = \"Boolean\";\n                    break;\n                case \"number\":\n                    type = value % 1 === 0 ? \"Int\" : \"Float\";\n                    break;\n            }\n        }\n        if (typeof variable === \"object\" && variable.required) {\n            type += \"!\";\n        }\n        return type;\n    };\n    return Utils;\n}());\nexports.default = Utils;\n//# sourceMappingURL=Utils.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/Utils.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/adapters/DefaultAppSyncMutationAdapter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/adapters/DefaultAppSyncMutationAdapter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar OperationType_1 = __webpack_require__(/*! ../OperationType */ \"./node_modules/gql-query-builder/build/OperationType.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils */ \"./node_modules/gql-query-builder/build/Utils.js\");\nvar DefaultAppSyncMutationAdapter = /** @class */ (function () {\n    function DefaultAppSyncMutationAdapter(options) {\n        if (Array.isArray(options)) {\n            this.variables = Utils_1.default.resolveVariables(options);\n        }\n        else {\n            this.variables = options.variables;\n            this.fields = options.fields;\n            this.operation = options.operation;\n        }\n    }\n    DefaultAppSyncMutationAdapter.prototype.mutationBuilder = function () {\n        return this.operationWrapperTemplate(this.variables, this.operationTemplate(this.operation));\n    };\n    DefaultAppSyncMutationAdapter.prototype.mutationsBuilder = function (mutations) {\n        var _this = this;\n        var content = mutations.map(function (opts) {\n            _this.operation = opts.operation;\n            _this.variables = opts.variables;\n            _this.fields = opts.fields;\n            return _this.operationTemplate(opts.operation);\n        });\n        return this.operationWrapperTemplate(Utils_1.default.resolveVariables(mutations), content.join(\"\\n  \"));\n    };\n    // Convert object to name and argument map. eg: (id: $id)\n    DefaultAppSyncMutationAdapter.prototype.queryDataNameAndArgumentMap = function () {\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + key + \": $\" + key;\n            }, \"\") + \")\"\n            : \"\";\n    };\n    DefaultAppSyncMutationAdapter.prototype.queryDataArgumentAndTypeMap = function (variables) {\n        return Object.keys(variables).length\n            ? \"(\" + Object.keys(variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + \"$\" + key + \": \" + Utils_1.default.queryDataType(variables[key]);\n            }, \"\") + \")\"\n            : \"\";\n    };\n    // start of mutation building\n    DefaultAppSyncMutationAdapter.prototype.operationWrapperTemplate = function (variables, content) {\n        return {\n            query: OperationType_1.default.Mutation + \" \" + (this.operation\n                .charAt(0)\n                .toUpperCase() +\n                this.operation.slice(1)) + \" \" + this.queryDataArgumentAndTypeMap(variables) + \" {\\n  \" + content + \"\\n}\",\n            variables: Utils_1.default.queryVariablesMap(variables)\n        };\n    };\n    DefaultAppSyncMutationAdapter.prototype.operationTemplate = function (operation) {\n        return operation + \" \" + this.queryDataNameAndArgumentMap() + \" {\\n    \" + this.queryFieldsMap(this.fields) + \"\\n  }\";\n    };\n    // Fields selection map. eg: { id, name }\n    DefaultAppSyncMutationAdapter.prototype.queryFieldsMap = function (fields) {\n        var _this = this;\n        return Array.isArray(fields)\n            ? fields\n                .map(function (field) {\n                return typeof field === \"object\"\n                    ? Object.keys(field)[0] + \" { \" + _this.queryFieldsMap(Object.values(field)[0]) + \" }\"\n                    : \"\" + field;\n            })\n                .join(\", \")\n            : \"\";\n    };\n    return DefaultAppSyncMutationAdapter;\n}());\nexports.default = DefaultAppSyncMutationAdapter;\n//# sourceMappingURL=DefaultAppSyncMutationAdapter.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/adapters/DefaultAppSyncMutationAdapter.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/adapters/DefaultAppSyncQueryAdapter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/adapters/DefaultAppSyncQueryAdapter.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar OperationType_1 = __webpack_require__(/*! ../OperationType */ \"./node_modules/gql-query-builder/build/OperationType.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils */ \"./node_modules/gql-query-builder/build/Utils.js\");\nvar DefaultAppSyncQueryAdapter = /** @class */ (function () {\n    function DefaultAppSyncQueryAdapter(options) {\n        this.queryDataType = function (variable) {\n            var type = \"String\";\n            var value = typeof variable === \"object\" ? variable.value : variable;\n            if (variable.type !== undefined) {\n                type = variable.type;\n            }\n            else {\n                switch (typeof value) {\n                    case \"object\":\n                        type = \"Object\";\n                        break;\n                    case \"boolean\":\n                        type = \"Boolean\";\n                        break;\n                    case \"number\":\n                        type = value % 1 === 0 ? \"Int\" : \"Float\";\n                        break;\n                }\n            }\n            if (typeof variable === \"object\" && variable.required) {\n                type += \"!\";\n            }\n            return type;\n        };\n        if (Array.isArray(options)) {\n            this.variables = Utils_1.default.resolveVariables(options);\n        }\n        else {\n            this.variables = options.variables;\n            this.fields = options.fields || [];\n            this.operation = options.operation;\n        }\n    }\n    // kicks off building for a single query\n    DefaultAppSyncQueryAdapter.prototype.queryBuilder = function () {\n        return this.operationWrapperTemplate(this.operationTemplate());\n    };\n    // if we have an array of options, call this\n    DefaultAppSyncQueryAdapter.prototype.queriesBuilder = function (queries) {\n        var _this = this;\n        var content = function () {\n            var tmpl = [];\n            queries.forEach(function (query) {\n                if (query) {\n                    _this.operation = query.operation;\n                    _this.fields = query.fields;\n                    _this.variables = query.variables;\n                    tmpl.push(_this.operationTemplate());\n                }\n            });\n            return tmpl.join(\" \");\n        };\n        return this.operationWrapperTemplate(content());\n    };\n    // Convert object to name and argument map. eg: (id: $id)\n    DefaultAppSyncQueryAdapter.prototype.queryDataNameAndArgumentMap = function () {\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + key + \": $\" + key;\n            }, \"\") + \")\"\n            : \"\";\n    };\n    // Convert object to argument and type map. eg: ($id: Int)\n    DefaultAppSyncQueryAdapter.prototype.queryDataArgumentAndTypeMap = function () {\n        var _this = this;\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + \"$\" + key + \": \" + _this.queryDataType(_this.variables[key]);\n            }, \"\") + \")\"\n            : \"\";\n    };\n    DefaultAppSyncQueryAdapter.prototype.operationWrapperTemplate = function (content) {\n        return {\n            query: OperationType_1.default.Query + \" \" + this.operation\n                .charAt(0)\n                .toUpperCase() + this.operation.slice(1) + \" \" + this.queryDataArgumentAndTypeMap() + \" { \" + content + \" }\",\n            variables: Utils_1.default.queryVariablesMap(this.variables)\n        };\n    };\n    // query\n    DefaultAppSyncQueryAdapter.prototype.operationTemplate = function () {\n        return this.operation + \" \" + this.queryDataNameAndArgumentMap() + \" { nodes { \" + Utils_1.default.queryFieldsMap(this.fields) + \" } }\";\n    };\n    return DefaultAppSyncQueryAdapter;\n}());\nexports.default = DefaultAppSyncQueryAdapter;\n//# sourceMappingURL=DefaultAppSyncQueryAdapter.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/adapters/DefaultAppSyncQueryAdapter.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/adapters/DefaultMutationAdapter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/adapters/DefaultMutationAdapter.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar OperationType_1 = __webpack_require__(/*! ../OperationType */ \"./node_modules/gql-query-builder/build/OperationType.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils */ \"./node_modules/gql-query-builder/build/Utils.js\");\nvar DefaultMutationAdapter = /** @class */ (function () {\n    function DefaultMutationAdapter(options) {\n        if (Array.isArray(options)) {\n            this.variables = Utils_1.default.resolveVariables(options);\n        }\n        else {\n            this.variables = options.variables;\n            this.fields = options.fields;\n            this.operation = options.operation;\n        }\n    }\n    DefaultMutationAdapter.prototype.mutationBuilder = function () {\n        return this.operationWrapperTemplate(OperationType_1.default.Mutation, this.variables, this.operationTemplate(this.operation));\n    };\n    DefaultMutationAdapter.prototype.mutationsBuilder = function (mutations) {\n        var _this = this;\n        var content = mutations.map(function (opts) {\n            _this.operation = opts.operation;\n            _this.variables = opts.variables;\n            _this.fields = opts.fields;\n            return _this.operationTemplate(opts.operation);\n        });\n        return this.operationWrapperTemplate(OperationType_1.default.Mutation, Utils_1.default.resolveVariables(mutations), content.join(\"\\n  \"));\n    };\n    // Convert object to name and argument map. eg: (id: $id)\n    DefaultMutationAdapter.prototype.queryDataNameAndArgumentMap = function () {\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + key + \": $\" + key;\n            }, \"\") + \")\"\n            : \"\";\n    };\n    DefaultMutationAdapter.prototype.queryDataArgumentAndTypeMap = function (variables) {\n        if (!variables) {\n            return \"\";\n        }\n        return Object.keys(variables).length\n            ? \"(\" + Object.keys(variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + \"$\" + key + \": \" + Utils_1.default.queryDataType(variables[key]);\n            }, \"\") + \")\"\n            : \"\";\n    };\n    // start of mutation building\n    DefaultMutationAdapter.prototype.operationWrapperTemplate = function (type, variables, content) {\n        return {\n            query: type + \" \" + this.queryDataArgumentAndTypeMap(variables) + \" {\\n  \" + content + \"\\n}\",\n            variables: Utils_1.default.queryVariablesMap(variables)\n        };\n    };\n    DefaultMutationAdapter.prototype.operationTemplate = function (operation) {\n        return operation + \" \" + this.queryDataNameAndArgumentMap() + \" \" + (this.fields && this.fields.length > 0\n            ? \"{\\n    \" + this.queryFieldsMap(this.fields) + \"\\n  }\"\n            : \"\");\n    };\n    // Fields selection map. eg: { id, name }\n    DefaultMutationAdapter.prototype.queryFieldsMap = function (fields) {\n        var _this = this;\n        return fields\n            ? fields\n                .map(function (field) {\n                return typeof field === \"object\"\n                    ? Object.keys(field)[0] + \" { \" + _this.queryFieldsMap(Object.values(field)[0]) + \" }\"\n                    : \"\" + field;\n            })\n                .join(\", \")\n            : \"\";\n    };\n    return DefaultMutationAdapter;\n}());\nexports.default = DefaultMutationAdapter;\n//# sourceMappingURL=DefaultMutationAdapter.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/adapters/DefaultMutationAdapter.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/adapters/DefaultQueryAdapter.js":
/*!******************************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/adapters/DefaultQueryAdapter.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar OperationType_1 = __webpack_require__(/*! ../OperationType */ \"./node_modules/gql-query-builder/build/OperationType.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils */ \"./node_modules/gql-query-builder/build/Utils.js\");\nvar DefaultQueryAdapter = /** @class */ (function () {\n    function DefaultQueryAdapter(options) {\n        this.queryDataType = function (variable) {\n            var type = \"String\";\n            var value = typeof variable === \"object\" ? variable.value : variable;\n            if (variable.type !== undefined) {\n                type = variable.type;\n            }\n            else {\n                switch (typeof value) {\n                    case \"object\":\n                        type = \"Object\";\n                        break;\n                    case \"boolean\":\n                        type = \"Boolean\";\n                        break;\n                    case \"number\":\n                        type = value % 1 === 0 ? \"Int\" : \"Float\";\n                        break;\n                }\n            }\n            if (typeof variable === \"object\" && variable.required) {\n                type += \"!\";\n            }\n            return type;\n        };\n        if (Array.isArray(options)) {\n            this.variables = Utils_1.default.resolveVariables(options);\n        }\n        else {\n            this.variables = options.variables;\n            this.fields = options.fields || [];\n            this.operation = options.operation;\n        }\n    }\n    // kicks off building for a single query\n    DefaultQueryAdapter.prototype.queryBuilder = function () {\n        return this.operationWrapperTemplate(this.operationTemplate());\n    };\n    // if we have an array of options, call this\n    DefaultQueryAdapter.prototype.queriesBuilder = function (queries) {\n        var _this = this;\n        var content = function () {\n            var tmpl = [];\n            queries.forEach(function (query) {\n                if (query) {\n                    _this.operation = query.operation;\n                    _this.fields = query.fields;\n                    _this.variables = query.variables;\n                    tmpl.push(_this.operationTemplate());\n                }\n            });\n            return tmpl.join(\" \");\n        };\n        return this.operationWrapperTemplate(content());\n    };\n    // Convert object to name and argument map. eg: (id: $id)\n    DefaultQueryAdapter.prototype.queryDataNameAndArgumentMap = function () {\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + key + \": $\" + key;\n            }, \"\") + \")\"\n            : \"\";\n    };\n    // Convert object to argument and type map. eg: ($id: Int)\n    DefaultQueryAdapter.prototype.queryDataArgumentAndTypeMap = function () {\n        var _this = this;\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + \"$\" + key + \": \" + _this.queryDataType(_this.variables[key]);\n            }, \"\") + \")\"\n            : \"\";\n    };\n    DefaultQueryAdapter.prototype.operationWrapperTemplate = function (content) {\n        return {\n            query: OperationType_1.default.Query + \" \" + this.queryDataArgumentAndTypeMap() + \" { \" + content + \" }\",\n            variables: Utils_1.default.queryVariablesMap(this.variables)\n        };\n    };\n    // query\n    DefaultQueryAdapter.prototype.operationTemplate = function () {\n        return this.operation + \" \" + this.queryDataNameAndArgumentMap() + \" { \" + Utils_1.default.queryFieldsMap(this.fields) + \" }\";\n    };\n    return DefaultQueryAdapter;\n}());\nexports.default = DefaultQueryAdapter;\n//# sourceMappingURL=DefaultQueryAdapter.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/adapters/DefaultQueryAdapter.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/adapters/DefaultSubscriptionAdapter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/adapters/DefaultSubscriptionAdapter.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar OperationType_1 = __webpack_require__(/*! ../OperationType */ \"./node_modules/gql-query-builder/build/OperationType.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils */ \"./node_modules/gql-query-builder/build/Utils.js\");\nvar DefaultSubscriptionAdapter = /** @class */ (function () {\n    function DefaultSubscriptionAdapter(options) {\n        if (Array.isArray(options)) {\n            this.variables = Utils_1.default.resolveVariables(options);\n        }\n        else {\n            this.variables = options.variables;\n            this.fields = options.fields;\n            this.operation = options.operation;\n        }\n    }\n    DefaultSubscriptionAdapter.prototype.subscriptionBuilder = function () {\n        return this.operationWrapperTemplate(OperationType_1.default.Subscription, this.variables, this.operationTemplate(this.operation));\n    };\n    DefaultSubscriptionAdapter.prototype.subscriptionsBuilder = function (subscriptions) {\n        var _this = this;\n        var content = subscriptions.map(function (opts) {\n            _this.operation = opts.operation;\n            _this.variables = opts.variables;\n            _this.fields = opts.fields;\n            return _this.operationTemplate(opts.operation);\n        });\n        return this.operationWrapperTemplate(OperationType_1.default.Subscription, Utils_1.default.resolveVariables(subscriptions), content.join(\"\\n  \"));\n    };\n    // Convert object to name and argument map. eg: (id: $id)\n    DefaultSubscriptionAdapter.prototype.queryDataNameAndArgumentMap = function () {\n        return this.variables && Object.keys(this.variables).length\n            ? \"(\" + Object.keys(this.variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + key + \": $\" + key;\n            }, \"\") + \")\"\n            : \"\";\n    };\n    DefaultSubscriptionAdapter.prototype.queryDataArgumentAndTypeMap = function (variables) {\n        return Object.keys(variables).length\n            ? \"(\" + Object.keys(variables).reduce(function (dataString, key, i) {\n                return \"\" + dataString + (i !== 0 ? \", \" : \"\") + \"$\" + key + \": \" + Utils_1.default.queryDataType(variables[key]);\n            }, \"\") + \")\"\n            : \"\";\n    };\n    // start of subscription building\n    DefaultSubscriptionAdapter.prototype.operationWrapperTemplate = function (type, variables, content) {\n        return {\n            query: type + \" \" + this.queryDataArgumentAndTypeMap(variables) + \" {\\n  \" + content + \"\\n}\",\n            variables: Utils_1.default.queryVariablesMap(variables)\n        };\n    };\n    DefaultSubscriptionAdapter.prototype.operationTemplate = function (operation) {\n        return operation + \" \" + this.queryDataNameAndArgumentMap() + \" {\\n    \" + this.queryFieldsMap(this.fields) + \"\\n  }\";\n    };\n    // Fields selection map. eg: { id, name }\n    DefaultSubscriptionAdapter.prototype.queryFieldsMap = function (fields) {\n        var _this = this;\n        return fields\n            ? fields\n                .map(function (field) {\n                return typeof field === \"object\"\n                    ? Object.keys(field)[0] + \" { \" + _this.queryFieldsMap(Object.values(field)[0]) + \" }\"\n                    : \"\" + field;\n            })\n                .join(\", \")\n            : \"\";\n    };\n    return DefaultSubscriptionAdapter;\n}());\nexports.default = DefaultSubscriptionAdapter;\n//# sourceMappingURL=DefaultSubscriptionAdapter.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/adapters/DefaultSubscriptionAdapter.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/adapters/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/gql-query-builder/build/adapters/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DefaultAppSyncMutationAdapter_1 = __webpack_require__(/*! ./DefaultAppSyncMutationAdapter */ \"./node_modules/gql-query-builder/build/adapters/DefaultAppSyncMutationAdapter.js\");\nvar DefaultAppSyncQueryAdapter_1 = __webpack_require__(/*! ./DefaultAppSyncQueryAdapter */ \"./node_modules/gql-query-builder/build/adapters/DefaultAppSyncQueryAdapter.js\");\nexports.default = { DefaultAppSyncQueryAdapter: DefaultAppSyncQueryAdapter_1.default, DefaultAppSyncMutationAdapter: DefaultAppSyncMutationAdapter_1.default };\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/adapters/index.js?");

/***/ }),

/***/ "./node_modules/gql-query-builder/build/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/gql-query-builder/build/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar adapters_1 = __webpack_require__(/*! ./adapters */ \"./node_modules/gql-query-builder/build/adapters/index.js\");\nexports.adapters = adapters_1.default;\nvar DefaultMutationAdapter_1 = __webpack_require__(/*! ./adapters/DefaultMutationAdapter */ \"./node_modules/gql-query-builder/build/adapters/DefaultMutationAdapter.js\");\nvar DefaultQueryAdapter_1 = __webpack_require__(/*! ./adapters/DefaultQueryAdapter */ \"./node_modules/gql-query-builder/build/adapters/DefaultQueryAdapter.js\");\nvar DefaultSubscriptionAdapter_1 = __webpack_require__(/*! ./adapters/DefaultSubscriptionAdapter */ \"./node_modules/gql-query-builder/build/adapters/DefaultSubscriptionAdapter.js\");\nfunction queryOperation(options, adapter) {\n    var defaultAdapter;\n    if (Array.isArray(options)) {\n        if (adapter) {\n            var customAdapter = new adapter(options);\n            return customAdapter.queriesBuilder(options);\n        }\n        defaultAdapter = new DefaultQueryAdapter_1.default(options);\n        return defaultAdapter.queriesBuilder(options);\n    }\n    if (adapter) {\n        var customAdapter = new adapter(options);\n        return customAdapter.queryBuilder();\n    }\n    defaultAdapter = new DefaultQueryAdapter_1.default(options);\n    return defaultAdapter.queryBuilder();\n}\nexports.query = queryOperation;\nfunction mutationOperation(options, adapter) {\n    var customAdapter;\n    var defaultAdapter;\n    if (Array.isArray(options)) {\n        if (adapter) {\n            // @ts-ignore\n            customAdapter = new adapter(options);\n            return customAdapter.mutationsBuilder(options);\n        }\n        defaultAdapter = new DefaultMutationAdapter_1.default(options);\n        return defaultAdapter.mutationsBuilder(options);\n    }\n    if (adapter) {\n        // @ts-ignore\n        customAdapter = new adapter(options);\n        return customAdapter.mutationBuilder();\n    }\n    defaultAdapter = new DefaultMutationAdapter_1.default(options);\n    return defaultAdapter.mutationBuilder();\n}\nexports.mutation = mutationOperation;\nfunction subscriptionOperation(options, adapter) {\n    var customAdapter;\n    var defaultAdapter;\n    if (Array.isArray(options)) {\n        if (adapter) {\n            // @ts-ignore\n            customAdapter = new adapter(options);\n            return customAdapter.subscriptionsBuilder(options);\n        }\n        defaultAdapter = new DefaultSubscriptionAdapter_1.default(options);\n        return defaultAdapter.subscriptionsBuilder(options);\n    }\n    if (adapter) {\n        // @ts-ignore\n        customAdapter = new adapter(options);\n        return customAdapter.subscriptionBuilder();\n    }\n    defaultAdapter = new DefaultSubscriptionAdapter_1.default(options);\n    return defaultAdapter.subscriptionBuilder();\n}\nexports.subscription = subscriptionOperation;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/gql-query-builder/build/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gql_query_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gql-query-builder */ \"./node_modules/gql-query-builder/build/index.js\");\n/* harmony import */ var gql_query_builder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gql_query_builder__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst base_url = 'http://localhost:8000/';\nconst gql_url = base_url + 'graphql/';\n\nvar query = gql_query_builder__WEBPACK_IMPORTED_MODULE_0__[\"query\"]({\n  operation: 'account',\n  fields: ['id']\n});\n\nconsole.log(query);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });