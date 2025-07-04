module.exports = {

"[project]/.next-internal/server/app/questionnaire/[vertexId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/app/utils/loadDiagramData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "loadDiagramData": (()=>loadDiagramData),
    "parseVertexData": (()=>parseVertexData)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function loadDiagramData() {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "data", "generated-data.json");
    const jsonData = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return data;
}
const parseVertexData = (data)=>{
    const edges = data.edges;
    const vertices = new Map();
    data.vertices.forEach(([id, vertex])=>{
        vertices.set(id, vertex);
    });
    return {
        edges,
        vertices
    };
};
}}),
"[project]/components/icons/gradient-bg-blue.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gradient-bg-blue.a9923fbd.svg");}}),
"[project]/components/icons/gradient-bg-blue.svg.mjs { IMAGE => \"[project]/components/icons/gradient-bg-blue.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$blue$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/gradient-bg-blue.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$blue$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 1440,
    height: 760,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/icons/gradient-bg-double.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gradient-bg-double.e688d10b.svg");}}),
"[project]/components/icons/gradient-bg-double.svg.mjs { IMAGE => \"[project]/components/icons/gradient-bg-double.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$double$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/gradient-bg-double.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$double$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 1440,
    height: 760,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/icons/logo.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo.b1a18d6b.svg");}}),
"[project]/components/icons/logo.svg.mjs { IMAGE => \"[project]/components/icons/logo.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 187,
    height: 52,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/icons/x.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/x.763531a9.svg");}}),
"[project]/components/icons/x.svg.mjs { IMAGE => \"[project]/components/icons/x.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/x.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/NavigationHeader/NavigationHeader.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "navigationHeaderButton": "NavigationHeader-module__Be8KDG__navigationHeaderButton",
  "navigationHeaderContent": "NavigationHeader-module__Be8KDG__navigationHeaderContent",
  "navigationHeaderWrapper": "NavigationHeader-module__Be8KDG__navigationHeaderWrapper",
});
}}),
"[project]/components/NavigationHeader/NavigationHeader.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NavigationHeader": (()=>NavigationHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/logo.svg.mjs { IMAGE => "[project]/components/icons/logo.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$x$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/x.svg.mjs { IMAGE => "[project]/components/icons/x.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavigationHeader$2f$NavigationHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NavigationHeader/NavigationHeader.module.css [app-rsc] (css module)");
;
;
;
;
;
const NavigationHeader = ({ closeLink })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavigationHeader$2f$NavigationHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].navigationHeaderWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavigationHeader$2f$NavigationHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].navigationHeaderContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    priority: true,
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "Cardano Logo"
                }, void 0, false, {
                    fileName: "[project]/components/NavigationHeader/NavigationHeader.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                closeLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: closeLink,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavigationHeader$2f$NavigationHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].navigationHeaderButton,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        priority: true,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$x$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: "Close Icon"
                    }, void 0, false, {
                        fileName: "[project]/components/NavigationHeader/NavigationHeader.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/NavigationHeader/NavigationHeader.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/NavigationHeader/NavigationHeader.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/NavigationHeader/NavigationHeader.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/Layout/Layout.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "layoutContent": "Layout-module__fmZ1UG__layoutContent",
  "layoutGradient": "Layout-module__fmZ1UG__layoutGradient",
  "layoutWrapper": "Layout-module__fmZ1UG__layoutWrapper",
});
}}),
"[project]/components/Layout/Layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Layout": (()=>Layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$blue$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$blue$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/gradient-bg-blue.svg.mjs { IMAGE => "[project]/components/icons/gradient-bg-blue.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$double$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$double$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/gradient-bg-double.svg.mjs { IMAGE => "[project]/components/icons/gradient-bg-double.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavigationHeader$2f$NavigationHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NavigationHeader/NavigationHeader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Layout/Layout.module.css [app-rsc] (css module)");
;
;
;
;
;
;
const Layout = ({ children, gradient, closeLink })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layoutWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavigationHeader$2f$NavigationHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavigationHeader"], {
                closeLink: closeLink
            }, void 0, false, {
                fileName: "[project]/components/Layout/Layout.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layoutContent,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Layout/Layout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layoutGradient,
                children: [
                    gradient === "blue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        priority: true,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$blue$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$blue$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/Layout/Layout.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    gradient === "orange" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        priority: true,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$double$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$gradient$2d$bg$2d$double$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/Layout/Layout.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Layout/Layout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Layout/Layout.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/CollapsibleSidebar/CollapsibleSidebar.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "collapsibleSidebarChildren": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarChildren",
  "collapsibleSidebarChildrenWrapper": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarChildrenWrapper",
  "collapsibleSidebarChildrenWrapperSmallPadding": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarChildrenWrapperSmallPadding",
  "collapsibleSidebarCloseButton": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarCloseButton",
  "collapsibleSidebarContent": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarContent",
  "collapsibleSidebarDescription": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarDescription",
  "collapsibleSidebarHeader": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarHeader",
  "collapsibleSidebarOverlay": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarOverlay",
  "collapsibleSidebarTitle": "CollapsibleSidebar-module___z2hXa__collapsibleSidebarTitle",
  "contentShow": "CollapsibleSidebar-module___z2hXa__contentShow",
  "overlayShow": "CollapsibleSidebar-module___z2hXa__overlayShow",
});
}}),
"[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CollapsibleSidebar": (()=>CollapsibleSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CollapsibleSidebar/CollapsibleSidebar.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$x$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/x.svg.mjs { IMAGE => "[project]/components/icons/x.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
;
;
const CollapsibleSidebar = ({ trigger, children, title, description, hasSmallPadding })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Root"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Trigger"], {
                asChild: true,
                children: trigger
            }, void 0, false, {
                fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Portal"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Overlay"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarOverlay
                    }, void 0, false, {
                        fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Content"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Title"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarTitle,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Close"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "Close",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarCloseButton,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                priority: true,
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$x$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "Close Icon"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarChildrenWrapper, {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarChildrenWrapperSmallPadding]: hasSmallPadding
                                }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarChildren,
                                    children: [
                                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Description"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].collapsibleSidebarDescription,
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/icons/arrow-right.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrow-right.978c7a6f.svg");}}),
"[project]/components/icons/arrow-right.svg.mjs { IMAGE => \"[project]/components/icons/arrow-right.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$right$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/arrow-right.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$right$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/icons/nut.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nut.ce9c138f.svg");}}),
"[project]/components/icons/nut.svg.mjs { IMAGE => \"[project]/components/icons/nut.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$nut$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/nut.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$nut$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/ListWithTitle/ListWithTitle.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "listWithTitle": "ListWithTitle-module__hSBZVW__listWithTitle",
  "listWithTitleItem": "ListWithTitle-module__hSBZVW__listWithTitleItem",
  "listWithTitleList": "ListWithTitle-module__hSBZVW__listWithTitleList",
  "listWithTitleTitle": "ListWithTitle-module__hSBZVW__listWithTitleTitle",
});
}}),
"[project]/components/ListWithTitle/ListWithTitle.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ListWithTitle": (()=>ListWithTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ListWithTitle/ListWithTitle.module.css [app-rsc] (css module)");
;
;
const ListWithTitle = ({ title, items })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listWithTitle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listWithTitleTitle,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ListWithTitle/ListWithTitle.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listWithTitleList,
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listWithTitleItem,
                        children: item
                    }, `item-${item}`, false, {
                        fileName: "[project]/components/ListWithTitle/ListWithTitle.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ListWithTitle/ListWithTitle.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ListWithTitle/ListWithTitle.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/ProsAndCons/ProsAndCons.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "prosAndCons": "ProsAndCons-module__Qx3HBa__prosAndCons",
  "prosAndConsDescription": "ProsAndCons-module__Qx3HBa__prosAndConsDescription",
  "prosAndConsLink": "ProsAndCons-module__Qx3HBa__prosAndConsLink",
});
}}),
"[project]/components/icons/check.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/check.2190c6a6.svg");}}),
"[project]/components/icons/check.svg.mjs { IMAGE => \"[project]/components/icons/check.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$check$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/check.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$check$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/icons/cross.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cross.3f581e25.svg");}}),
"[project]/components/icons/cross.svg.mjs { IMAGE => \"[project]/components/icons/cross.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$cross$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/cross.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$cross$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/icons/arrow-square-out.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrow-square-out.5d711808.svg");}}),
"[project]/components/icons/arrow-square-out.svg.mjs { IMAGE => \"[project]/components/icons/arrow-square-out.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/arrow-square-out.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/ProsAndCons/ProsAndCons.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProsAndCons": (()=>ProsAndCons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ListWithTitle/ListWithTitle.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ProsAndCons/ProsAndCons.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$check$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$check$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/check.svg.mjs { IMAGE => "[project]/components/icons/check.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$cross$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$cross$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/cross.svg.mjs { IMAGE => "[project]/components/icons/cross.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/arrow-square-out.svg.mjs { IMAGE => "[project]/components/icons/arrow-square-out.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
;
;
;
const ProsAndCons = ({ pros, cons, usuallyUsed, description, link, name })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].prosAndCons,
        children: [
            pros && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListWithTitle"], {
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            priority: true,
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$check$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$check$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, void 0),
                        "Pros:"
                    ]
                }, void 0, true),
                items: pros
            }, void 0, false, {
                fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            cons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListWithTitle"], {
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            priority: true,
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$cross$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$cross$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, void 0),
                        "Cons:"
                    ]
                }, void 0, true),
                items: cons
            }, void 0, false, {
                fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            usuallyUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ListWithTitle$2f$ListWithTitle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListWithTitle"], {
                title: "When this is usually used:",
                items: usuallyUsed
            }, void 0, false, {
                fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].prosAndConsDescription,
                children: description
            }, void 0, false, {
                fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            link && name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].prosAndConsLink,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionCircle,
                        children: [
                            "Explore ",
                            name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        priority: true,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProsAndCons/ProsAndCons.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/ToolsAndUseCases/ToolsAndUseCases.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "toolsAndUseCases": "ToolsAndUseCases-module__5wvYGq__toolsAndUseCases",
  "toolsAndUseCasesItem": "ToolsAndUseCases-module__5wvYGq__toolsAndUseCasesItem",
  "toolsAndUseCasesItemText": "ToolsAndUseCases-module__5wvYGq__toolsAndUseCasesItemText",
  "toolsAndUseCasesItemTitle": "ToolsAndUseCases-module__5wvYGq__toolsAndUseCasesItemTitle",
});
}}),
"[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ToolsAndUseCases": (()=>ToolsAndUseCases)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ToolsAndUseCases/ToolsAndUseCases.module.css [app-rsc] (css module)");
;
;
const ToolsAndUseCases = ({ items })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].toolsAndUseCasesWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].toolsAndUseCases,
            children: items.map(({ title, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].toolsAndUseCasesItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].toolsAndUseCasesItemTitle,
                            children: [
                                title,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].toolsAndUseCasesItemText,
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    ]
                }, title, true, {
                    fileName: "[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/Question/Question.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "questionCircle": "Question-module__hJCz_q__questionCircle",
  "questionLink": "Question-module__hJCz_q__questionLink",
  "questionMoreOptionsWrapper": "Question-module__hJCz_q__questionMoreOptionsWrapper",
  "questionProsAndCons": "Question-module__hJCz_q__questionProsAndCons",
  "questionText": "Question-module__hJCz_q__questionText",
  "questionToolsAndUseCases": "Question-module__hJCz_q__questionToolsAndUseCases",
  "questionWrapper": "Question-module__hJCz_q__questionWrapper",
});
}}),
"[project]/components/Question/Question.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Question": (()=>Question)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-yaml/dist/js-yaml.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$right$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$right$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/arrow-right.svg.mjs { IMAGE => "[project]/components/icons/arrow-right.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$nut$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$nut$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/nut.svg.mjs { IMAGE => "[project]/components/icons/nut.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProsAndCons/ProsAndCons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ToolsAndUseCases/ToolsAndUseCases.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Question/Question.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
;
;
;
;
;
const Question = ({ text, link, isExternal, id })=>{
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "storage", "questions", `${id}.yml`);
    let additionalData = null;
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
        const fileOutput = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
        additionalData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].load(fileOutput);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionWrapper,
        children: [
            isExternal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionLink,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionText,
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/components/Question/Question.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionCircle
                    }, void 0, false, {
                        fileName: "[project]/components/Question/Question.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Question/Question.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: link,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionLink,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionText,
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/components/Question/Question.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionCircle
                    }, void 0, false, {
                        fileName: "[project]/components/Question/Question.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Question/Question.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            (additionalData?.toolsAndUseCases || additionalData?.pros || additionalData?.cons || additionalData?.usuallyUsed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionMoreOptionsWrapper,
                children: [
                    (additionalData?.pros || additionalData?.cons || additionalData?.usuallyUsed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleSidebar"], {
                        title: "Pros & cons",
                        description: text,
                        hasSmallPadding: true,
                        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionProsAndCons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "View pros & cons"
                                }, void 0, false, {
                                    fileName: "[project]/components/Question/Question.tsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    priority: true,
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$right$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$right$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/Question/Question.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Question/Question.tsx",
                            lineNumber: 73,
                            columnNumber: 17
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProsAndCons"], {
                            pros: additionalData.pros,
                            cons: additionalData.cons,
                            usuallyUsed: additionalData.usuallyUsed
                        }, void 0, false, {
                            fileName: "[project]/components/Question/Question.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Question/Question.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this),
                    additionalData?.toolsAndUseCases && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleSidebar"], {
                        title: "Tools and use cases",
                        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionToolsAndUseCases,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    priority: true,
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$nut$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$nut$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/Question/Question.tsx",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Tools and use cases"
                                }, void 0, false, {
                                    fileName: "[project]/components/Question/Question.tsx",
                                    lineNumber: 93,
                                    columnNumber: 19
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Question/Question.tsx",
                            lineNumber: 91,
                            columnNumber: 17
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToolsAndUseCases$2f$ToolsAndUseCases$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ToolsAndUseCases"], {
                            items: additionalData.toolsAndUseCases
                        }, void 0, false, {
                            fileName: "[project]/components/Question/Question.tsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Question/Question.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Question/Question.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Question/Question.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/QuestionsView/QuestionsView.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "questionsView": "QuestionsView-module__-cUIaG__questionsView",
  "questionsViewBackButton": "QuestionsView-module__-cUIaG__questionsViewBackButton",
  "questionsViewPreviousAnswer": "QuestionsView-module__-cUIaG__questionsViewPreviousAnswer",
  "questionsViewQuestions": "QuestionsView-module__-cUIaG__questionsViewQuestions",
  "questionsViewTitle": "QuestionsView-module__-cUIaG__questionsViewTitle",
  "questionsViewWrapper": "QuestionsView-module__-cUIaG__questionsViewWrapper",
  "questionsViewWrapperWrapper": "QuestionsView-module__-cUIaG__questionsViewWrapperWrapper",
});
}}),
"[project]/components/icons/arrow-left.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrow-left.361fe217.svg");}}),
"[project]/components/icons/arrow-left.svg.mjs { IMAGE => \"[project]/components/icons/arrow-left.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/arrow-left.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/QuestionsView/QuestionsView.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "QuestionsView": (()=>QuestionsView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout/Layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Question/Question.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/QuestionsView/QuestionsView.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/arrow-left.svg.mjs { IMAGE => "[project]/components/icons/arrow-left.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
;
;
;
const QuestionsView = ({ question, vertexes, answers, previousAnswer, prevQuestionId, closeLink })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Layout"], {
        gradient: "blue",
        closeLink: closeLink,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsViewWrapperWrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsViewWrapper,
                children: [
                    prevQuestionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/questionnaire/${prevQuestionId}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsViewBackButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                priority: true,
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsView,
                        children: [
                            previousAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsViewPreviousAnswer,
                                children: previousAnswer
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsViewTitle,
                                children: question
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionsViewQuestions,
                                children: answers.map((edge)=>{
                                    const nextVertex = vertexes.get(edge.end);
                                    if (!nextVertex) {
                                        return null;
                                    }
                                    return nextVertex?.link && nextVertex?.link.includes("https") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Question"], {
                                        text: edge.text || nextVertex.text,
                                        link: nextVertex.link,
                                        isExternal: true,
                                        id: nextVertex.id
                                    }, `question-${nextVertex.id}`, false, {
                                        fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Question"], {
                                        text: edge.text || nextVertex.text,
                                        link: `/questionnaire/${nextVertex?.id}`,
                                        id: nextVertex.id
                                    }, `question-${nextVertex.id}`, false, {
                                        fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/QuestionsView/QuestionsView.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/Solution/Solution.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "solutionContent": "Solution-module__oidftG__solutionContent",
  "solutionLink": "Solution-module__oidftG__solutionLink",
  "solutionLinks": "Solution-module__oidftG__solutionLinks",
  "solutionName": "Solution-module__oidftG__solutionName",
  "solutionProsConsTitle": "Solution-module__oidftG__solutionProsConsTitle",
  "solutionText": "Solution-module__oidftG__solutionText",
  "solutionViewMore": "Solution-module__oidftG__solutionViewMore",
  "solutionWrapper": "Solution-module__oidftG__solutionWrapper",
});
}}),
"[project]/components/Solution/Solution.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Solution": (()=>Solution)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Solution/Solution.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/arrow-square-out.svg.mjs { IMAGE => "[project]/components/icons/arrow-square-out.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CollapsibleSidebar/CollapsibleSidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProsAndCons/ProsAndCons.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const Solution = ({ link, name, pros, cons, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionName,
                children: name
            }, void 0, false, {
                fileName: "[project]/components/Solution/Solution.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionContent,
                children: [
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionText,
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/Solution/Solution.tsx",
                        lineNumber: 28,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionLinks,
                        children: [
                            (pros || cons) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollapsibleSidebar$2f$CollapsibleSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleSidebar"], {
                                title: name,
                                trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionViewMore,
                                    children: [
                                        "View more (",
                                        name,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Solution/Solution.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProsAndCons$2f$ProsAndCons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProsAndCons"], {
                                    description: description,
                                    pros: pros,
                                    cons: cons
                                }, void 0, false, {
                                    fileName: "[project]/components/Solution/Solution.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Solution/Solution.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].questionCircle,
                                        children: [
                                            "Explore ",
                                            name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Solution/Solution.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        priority: true,
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$square$2d$out$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: `Go to ${link}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Solution/Solution.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Solution/Solution.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Solution/Solution.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Solution/Solution.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Solution/Solution.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/SolutionsView/SolutionsView.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "solutionsViewBackButton": "SolutionsView-module__nuQ5la__solutionsViewBackButton",
  "solutionsViewContainer": "SolutionsView-module__nuQ5la__solutionsViewContainer",
  "solutionsViewContent": "SolutionsView-module__nuQ5la__solutionsViewContent",
  "solutionsViewCount": "SolutionsView-module__nuQ5la__solutionsViewCount",
  "solutionsViewStartOver": "SolutionsView-module__nuQ5la__solutionsViewStartOver",
  "solutionsViewTitle": "SolutionsView-module__nuQ5la__solutionsViewTitle",
  "solutionsViewTitleWrapper": "SolutionsView-module__nuQ5la__solutionsViewTitleWrapper",
  "solutionsViewWrapper": "SolutionsView-module__nuQ5la__solutionsViewWrapper",
});
}}),
"[project]/components/SolutionsView/SolutionsView.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SolutionsView": (()=>SolutionsView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout/Layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Solution/Solution.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SolutionsView/SolutionsView.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/components/icons/arrow-left.svg.mjs { IMAGE => "[project]/components/icons/arrow-left.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-yaml/dist/js-yaml.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const SolutionsView = ({ prevQuestionId, currentQuestion, closeLink })=>{
    const directoryPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "storage", "solutions", ...currentQuestion?.link.split("/"));
    const fileNames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(directoryPath);
    const solutions = fileNames.map((fileName)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(directoryPath, fileName);
        const fileOutput = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].load(fileOutput);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Layout"], {
        gradient: "orange",
        closeLink: closeLink,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewWrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewContent,
                children: [
                    prevQuestionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/questionnaire/${prevQuestionId}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewBackButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                priority: true,
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$components$2f$icons$2f$arrow$2d$left$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewTitleWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewTitle,
                                children: [
                                    "Your solutions",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewCount,
                                        children: [
                                            "(",
                                            solutions.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: process?.env?.FIRST_QUESTION_URL || "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewStartOver,
                                children: "Start over"
                            }, void 0, false, {
                                fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].solutionsViewContainer,
                        children: solutions.map(({ description, pros, cons, name, url }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Solution$2f$Solution$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Solution"], {
                                name: name,
                                description: description,
                                pros: pros,
                                cons: cons,
                                link: url
                            }, `solution-${name}-${index}`, false, {
                                fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SolutionsView/SolutionsView.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
}}),
"[project]/app/questionnaire/[vertexId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$loadDiagramData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/loadDiagramData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/QuestionsView/QuestionsView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SolutionsView/SolutionsView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorView$2f$ErrorView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorView/ErrorView.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$loadDiagramData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadDiagramData"])();
    return data.vertices.map(([vertexId])=>({
            vertexId
        }));
}
async function Page({ params }) {
    const { vertexId } = await params;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$loadDiagramData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseVertexData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$loadDiagramData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadDiagramData"])());
    const currentQuestion = data.vertices.get(vertexId);
    if (!currentQuestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Question not found"
        }, void 0, false, {
            fileName: "[project]/app/questionnaire/[vertexId]/page.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, this);
    }
    const findEdges = (vertice)=>{
        return data.edges.filter((edge)=>{
            return edge.start === vertice?.id;
        });
    };
    const findPreviousEdges = (vertice)=>{
        return data.edges.filter((edge)=>{
            return edge.end === vertice?.id;
        });
    };
    const getPreviousQuestion = (currentVertex)=>{
        const connectedEdges = findPreviousEdges(currentVertex);
        const prevVertex = data.vertices.get(connectedEdges[0]?.start);
        const prevVertexConnectedEdges = findEdges(prevVertex);
        if (prevVertexConnectedEdges.length === 1 && prevVertex) {
            return getPreviousQuestion(prevVertex);
        }
        return prevVertex;
    };
    const renderQuestionChain = (question, previousAnswer)=>{
        if (!question) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorView$2f$ErrorView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ErrorView"], {
                closeLink: process?.env?.CLOSE_URL,
                startOverLink: process?.env?.FIRST_QUESTION_URL
            }, void 0, false, {
                fileName: "[project]/app/questionnaire/[vertexId]/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this);
        }
        const connectedEdges = findEdges(question);
        const nextVertex = data.vertices.get(connectedEdges[0]?.end);
        const previousQuestions = getPreviousQuestion(currentQuestion);
        // If there are no connected edges and a link render it as an endpoint with data from yaml
        if (question && question.link && !question.link.includes("https")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SolutionsView$2f$SolutionsView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SolutionsView"], {
                currentQuestion: question,
                prevQuestionId: previousQuestions?.id,
                closeLink: process?.env?.CLOSE_URL
            }, void 0, false, {
                fileName: "[project]/app/questionnaire/[vertexId]/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this);
        }
        // If there's only one connected edge, render it as part of the QuestionsView
        if (connectedEdges.length === 1) {
            return renderQuestionChain(nextVertex, question.text);
        }
        // If this question has a link, render it as an external link
        if (question.link) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(question.link);
        }
        // If there are multiple edges, render them as answers
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionsView$2f$QuestionsView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuestionsView"], {
            vertexes: data.vertices,
            answers: connectedEdges,
            question: question.text,
            previousAnswer: previousAnswer,
            prevQuestionId: previousQuestions?.id,
            closeLink: process?.env?.CLOSE_URL
        }, void 0, false, {
            fileName: "[project]/app/questionnaire/[vertexId]/page.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    };
    return renderQuestionChain(currentQuestion);
}
}}),
"[project]/app/questionnaire/[vertexId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/questionnaire/[vertexId]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__400c1074._.js.map