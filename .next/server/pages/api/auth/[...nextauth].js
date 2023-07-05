"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./libs/prismadb.jsx":
/*!***************************!*\
  !*** ./libs/prismadb.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBU0MsV0FBV0MsVUFBVSxJQUFJSCx3REFBWUE7QUFDcEQsSUFBSUksS0FBbUMsRUFBRUYsRUFBMkJEO0FBRXBFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vbGlicy9wcmlzbWFkYi5qc3g/ODQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09XCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMscHJpc21hID0gY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.jsx\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/prismadb */ \"(api)/./libs/prismadb.jsx\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_6__);\n// this file is the main entry point that allows next-auth to be in the app\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"moesuo\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                },\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"Mohamed\"\n                }\n            },\n            async authorize (credentials) {\n                // Check if email and password are provided\n                if (!credentials.email || !credentials.password) {\n                    throw new Error(\"Please enter an email and password\");\n                }\n                // Check if user exists in the database\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                // If no user was found\n                if (!user || !user.hashedPassword) {\n                    throw new Error(\"No user found\");\n                }\n                // Check if password matches\n                const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_6___default().compare(credentials.password, user.hashedPassword);\n                // If password does not match\n                if (!passwordMatch) {\n                    throw new Error(\"Incorrect password\");\n                }\n                return user;\n            },\n            pages: {\n                signIn: \"/auth/login\"\n            }\n        })\n    ],\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    debug: \"development\" === \"development\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBMkU7QUFFckM7QUFDUztBQUNXO0FBQ1E7QUFDVjtBQUNBO0FBQzVCO0FBRXBCLE1BQU1PLGNBQWM7SUFDMUJDLFNBQVNOLHdFQUFhQSxDQUFDRCxzREFBTUE7SUFDN0JRLFdBQVc7UUFDVEosaUVBQWNBLENBQUM7WUFDYkssVUFBVUMsUUFBUUMsSUFBSUM7WUFDdEJDLGNBQWNILFFBQVFDLElBQUlHO1FBQzVCO1FBQ0FYLGlFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLElBQUlJO1lBQ3RCRixjQUFjSCxRQUFRQyxJQUFJSztRQUM1QjtRQUNBZCxzRUFBbUJBLENBQUM7WUFDbEJlLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBUUMsYUFBYTtnQkFBUztnQkFDN0RDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7Z0JBQ2hERyxVQUFVO29CQUFFSixPQUFPO29CQUFZQyxNQUFNO29CQUFRQyxhQUFhO2dCQUFVO1lBQ3RFO1lBQ0EsTUFBTUcsV0FBVVAsV0FBVztnQkFDekIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUNBLFlBQVlDLFNBQVMsQ0FBQ0QsWUFBWUssVUFBVTtvQkFDL0MsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFFQSx1Q0FBdUM7Z0JBQ3ZDLE1BQU1DLE9BQU8sTUFBTTNCLDJEQUFXMkIsQ0FBQ0MsV0FBVztvQkFDeENDLE9BQU87d0JBQ0xWLE9BQU9ELFlBQVlDO29CQUNyQjtnQkFDRjtnQkFFQSx1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQ1EsUUFBUSxDQUFDQSxLQUFLRyxnQkFBZ0I7b0JBQ2pDLE1BQU0sSUFBSUosTUFBTTtnQkFDbEI7Z0JBRUEsNEJBQTRCO2dCQUM1QixNQUFNSyxnQkFBZ0IsTUFBTTFCLHFEQUFjMkIsQ0FBQ2QsWUFBWUssVUFBVUksS0FBS0c7Z0JBRXRFLDZCQUE2QjtnQkFDN0IsSUFBSSxDQUFDQyxlQUFlO29CQUNsQixNQUFNLElBQUlMLE1BQU07Z0JBQ2xCO2dCQUVBLE9BQU9DO1lBQ1Q7WUFBR00sT0FBTztnQkFDUkMsUUFBUTtZQUNWO1FBQ047S0FDQztJQUNEQyxRQUFRekIsUUFBUUMsSUFBSXlCO0lBQ3BCQyxTQUFTO1FBQ1RDLFVBQVU7SUFDVjtJQUNBQyxPQUFPN0Isa0JBQXlCO0FBQ2hDLEVBQUM7QUFFRCxpRUFBZVgscURBQVFBLENBQUNPLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgZmlsZSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCB0aGF0IGFsbG93cyBuZXh0LWF1dGggdG8gYmUgaW4gdGhlIGFwcFxyXG5cclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi8uLi9saWJzL3ByaXNtYWRiXCI7XHJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5leHBvcnQgIGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwibW9lc3VvXCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiTW9oYW1lZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgcHJvdmlkZWRcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzLmVtYWlsIHx8ICFjcmVkZW50aWFscy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZW50ZXIgYW4gZW1haWwgYW5kIHBhc3N3b3JkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiB1c2VyIGV4aXN0cyBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgLy8gSWYgbm8gdXNlciB3YXMgZm91bmRcclxuICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaGFzaGVkUGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgcGFzc3dvcmQgbWF0Y2hlc1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5oYXNoZWRQYXNzd29yZCk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vIElmIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXHJcbiAgICAgICAgaWYgKCFwYXNzd29yZE1hdGNoKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBwYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH0sIHBhZ2VzOiB7XHJcbiAgICAgICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXHJcbiAgICAgIH0sXHJcbn0pLCAgXHJcbl0sXHJcbnNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG5zZXNzaW9uOiB7XHJcbnN0cmF0ZWd5OiBcImp3dFwiLFxyXG59LFxyXG5kZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInByaXNtYSIsIlByaXNtYUFkYXB0ZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJHaXRodWJQcm92aWRlciIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfSUQiLCJHT09HTEVfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwidXNlcm5hbWUiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsInBhc3N3b3JkTWF0Y2giLCJjb21wYXJlIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJTRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();