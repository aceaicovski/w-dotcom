"use strict";(self.webpackChunkcomponent_starter_kit=self.webpackChunkcomponent_starter_kit||[]).push([[8304],{"./src/stories/canvas/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_uniformdev_canvas_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@uniformdev/canvas-react/dist/index.esm.js"),_canvas__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/canvas/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Data Display/Accordion",component:_canvas__WEBPACK_IMPORTED_MODULE_2__.UQ,parameters:{layout:"centered"}};var ACCORDION_ITEMS=[{title:"Is this template completely free to use?",description:"Yes, this template is completely free to use."},{title:"Can I use it in a commercial project?",description:"Yes, this you can."},{title:"What is your refund policy?",description:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."},{title:"Do you offer technical support?",description:"No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."}],Default={args:{title:"Frequently Asked Questions",description:"Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests."},render:function render(args){var fakeComposition=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.z)("accordion",{title:args.title,description:args.description},{items:ACCORDION_ITEMS.map((function(item){return{type:"accordionItem",parameters:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)(item)}}))});return __jsx(_uniformdev_canvas_react__WEBPACK_IMPORTED_MODULE_4__.X6,{data:fakeComposition},__jsx(_canvas__WEBPACK_IMPORTED_MODULE_2__.UQ,args))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Frequently Asked Questions",\n    description: "Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests."\n  },\n  render: args => {\n    const fakeComposition = createFakeCompositionData("accordion", {\n      title: args.title,\n      description: args.description\n    }, {\n      items: ACCORDION_ITEMS.map(item => ({\n        type: "accordionItem",\n        parameters: createUniformParameter(item)\n      }))\n    });\n    return <UniformComposition data={fakeComposition}>\n        <Accordion {...args} />\n      </UniformComposition>;\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/stories/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>createUniformParameter,z:()=>createFakeCompositionData});var _home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var createUniformParameter=function createUniformParameter(params){return Object.keys(params).reduce((function(acc,key){var _params$key,_params$key2;return _objectSpread(_objectSpread({},acc),{},(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},key,{type:(null===(_params$key=params[key])||void 0===_params$key?void 0:_params$key.type)||"text",value:(null===(_params$key2=params[key])||void 0===_params$key2?void 0:_params$key2.value)||params[key]}))}),{})},createFakeCompositionData=function createFakeCompositionData(type,params,slots){return{_name:type,type,_id:"ebf7db31-5e01-4874-afb4-d8d668457ba8",parameters:createUniformParameter(params),slots}}}}]);