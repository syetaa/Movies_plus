(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_07a1f7._.js", {

"[project]/components/slider_fav/Slider_fav.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "cont_main": "Slider_fav-module__M8lBLq__cont_main",
  "movieSlider": "Slider_fav-module__M8lBLq__movieSlider",
  "sliderItem": "Slider_fav-module__M8lBLq__sliderItem",
  "text_fav": "Slider_fav-module__M8lBLq__text_fav",
});
}}),
"[project]/components/slider_fav/Slider_fav.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$alice$2d$carousel$2f$lib$2f$react$2d$alice$2d$carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-alice-carousel/lib/react-alice-carousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/components/slider_fav/Slider_fav.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const Slider_fav = ()=>{
    _s();
    const [movies, setMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const renderNextButton = ({ isDisabled })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowRight"], {
            size: 20,
            color: "#11100F",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].next_btn
        }, void 0, false, {
            fileName: "[project]/components/slider_fav/Slider_fav.jsx",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    };
    const renderPrevButton = ({ isDisabled })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
            size: 20,
            color: "#11100F",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prev_btn
        }, void 0, false, {
            fileName: "[project]/components/slider_fav/Slider_fav.jsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    };
    const responsive = {
        400: {
            items: 2
        },
        840: {
            items: 3
        },
        1220: {
            items: 4
        },
        1600: {
            items: 5
        },
        2200: {
            items: 5
        }
    };
    // OMDb API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider_fav.useEffect": ()=>{
            const fetchMovies = {
                "Slider_fav.useEffect.fetchMovies": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://www.omdbapi.com/?apikey=a479eec2&s=popular&type=movie');
                        setMovies(response.data.Search || []);
                        setLoading(false);
                    } catch (error) {
                        console.error('Error fetching movies:', error);
                        setLoading(false);
                    }
                }
            }["Slider_fav.useEffect.fetchMovies"];
            fetchMovies();
        }
    }["Slider_fav.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cont_main,
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/components/slider_fav/Slider_fav.jsx",
        lineNumber: 46,
        columnNumber: 23
    }, this);
    // Слайдер с фильмами
    const movieItems = movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderItem,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: movie.Poster,
                    alt: movie.Title
                }, void 0, false, {
                    fileName: "[project]/components/slider_fav/Slider_fav.jsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    children: movie.Title
                }, void 0, false, {
                    fileName: "[project]/components/slider_fav/Slider_fav.jsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, this)
            ]
        }, movie.imdbID, true, {
            fileName: "[project]/components/slider_fav/Slider_fav.jsx",
            lineNumber: 50,
            columnNumber: 5
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cont_main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text_fav,
                children: "Избранные"
            }, void 0, false, {
                fileName: "[project]/components/slider_fav/Slider_fav.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider_fav$2f$Slider_fav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movieSlider,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$alice$2d$carousel$2f$lib$2f$react$2d$alice$2d$carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mouseTracking: true,
                    items: movieItems,
                    responsive: responsive,
                    infinite: true,
                    //autoPlay
                    autoPlayInterval: 3000,
                    animationDuration: 1000,
                    disableDotsControls: "true",
                    controlsStrategy: "alternate",
                    renderPrevButton: renderPrevButton,
                    renderNextButton: renderNextButton
                }, void 0, false, {
                    fileName: "[project]/components/slider_fav/Slider_fav.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slider_fav/Slider_fav.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slider_fav/Slider_fav.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_s(Slider_fav, "72fwlr08e18pammocXupWZZTEwc=");
_c = Slider_fav;
const __TURBOPACK__default__export__ = Slider_fav;
var _c;
__turbopack_refresh__.register(_c, "Slider_fav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/favourites/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_07a1f7._.js.map