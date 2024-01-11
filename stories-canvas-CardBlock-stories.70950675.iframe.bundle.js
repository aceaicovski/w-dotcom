"use strict";(self.webpackChunkcomponent_starter_kit=self.webpackChunkcomponent_starter_kit||[]).push([[2246],{"./src/stories/canvas/CardBlock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CarouselBlock:()=>CarouselBlock,Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_CarouselBlock$parame,_CarouselBlock$parame2,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_uniformdev_canvas_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@uniformdev/canvas-react/dist/index.esm.js"),_canvas__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/canvas/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/utils/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/constants.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"CardBlock",component:_canvas__WEBPACK_IMPORTED_MODULE_2__.qp};var BASE_PROPS={title:"Leverage existing technology investments ",titleStyle:"h2",buttonCopy:"Home",buttonLink:{path:"/"},buttonStyle:"primary",textColorVariant:"Dark"},argTypes={titleStyle:{control:"select",options:_constants__WEBPACK_IMPORTED_MODULE_3__.ho},buttonStyle:{control:"select",options:_constants__WEBPACK_IMPORTED_MODULE_3__.A5}},BLOCK_CARDS=[{image:"https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",title:"Leverage existing technology investments ",description:"Use this paragraph to share information about your company or brand. Make it as engaging as possible."},{image:"https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",title:"Leverage existing technology investments ",description:"Use this paragraph to share information about your company or brand. Make it as engaging as possible."},{image:"https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",title:"Leverage existing technology investments ",description:"Use this paragraph to share information about your company or brand. Make it as engaging as possible."}],CAROUSEL_CARDS=[].concat(BLOCK_CARDS,[{image:"https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",title:"Leverage existing technology investments ",description:"Use this paragraph to share information about your company or brand. Make it as engaging as possible."}]),renderStory=function renderStory(args){var fakeComposition=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.z)("cardBlock",args,_objectSpread({},args.component.slots));return __jsx(_uniformdev_canvas_react__WEBPACK_IMPORTED_MODULE_5__.X6,{data:fakeComposition},__jsx(_canvas__WEBPACK_IMPORTED_MODULE_2__.qp,args))};renderStory.displayName="renderStory";var renderStoryCardBlockCarousel=function renderStoryCardBlockCarousel(args){var fakeComposition=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.z)("cardBlock",args,_objectSpread({},args.component.slots));return __jsx(_uniformdev_canvas_react__WEBPACK_IMPORTED_MODULE_5__.X6,{data:fakeComposition},__jsx(_canvas__WEBPACK_IMPORTED_MODULE_2__.qp,(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},args,{component:{type:"cardBlock",variant:_canvas__WEBPACK_IMPORTED_MODULE_2__.Ch.Carousel}})))};renderStoryCardBlockCarousel.displayName="renderStoryCardBlockCarousel";var Default={args:_objectSpread(_objectSpread({},BASE_PROPS),{},{component:{type:"cardBlock",variant:void 0,slots:{cardBlockInner:BLOCK_CARDS.map((function(card){return{type:"card",parameters:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.$)(card)}}))}}}),argTypes,render:renderStory},CarouselBlock={args:_objectSpread(_objectSpread({},BASE_PROPS),{},{component:{type:"cardBlock",variant:_canvas__WEBPACK_IMPORTED_MODULE_2__.Ch.Carousel,slots:{cardBlockInner:CAROUSEL_CARDS.map((function(card){return{type:"card",parameters:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.$)(card)}}))}}}),argTypes,render:renderStoryCardBlockCarousel};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...BASE_PROPS,\n    component: {\n      type: "cardBlock",\n      variant: undefined,\n      slots: {\n        cardBlockInner: BLOCK_CARDS.map(card => ({\n          type: "card",\n          parameters: createUniformParameter(card)\n        }))\n      }\n    }\n  },\n  argTypes,\n  render: renderStory\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),CarouselBlock.parameters=_objectSpread(_objectSpread({},CarouselBlock.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CarouselBlock$parame=CarouselBlock.parameters)||void 0===_CarouselBlock$parame?void 0:_CarouselBlock$parame.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...BASE_PROPS,\n    component: {\n      type: "cardBlock",\n      variant: CardBlockVariants.Carousel,\n      slots: {\n        cardBlockInner: CAROUSEL_CARDS.map(card => ({\n          type: "card",\n          parameters: createUniformParameter(card)\n        }))\n      }\n    }\n  },\n  argTypes,\n  render: renderStoryCardBlockCarousel\n}'},null===(_CarouselBlock$parame2=CarouselBlock.parameters)||void 0===_CarouselBlock$parame2||null===(_CarouselBlock$parame2=_CarouselBlock$parame2.docs)||void 0===_CarouselBlock$parame2?void 0:_CarouselBlock$parame2.source)})})},"./src/stories/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A5:()=>buttonStyleOptions,_Z:()=>flexItemsOptions,gq:()=>responsiveBreakpoints,ho:()=>titleStyleOptions,mV:()=>currencyOptions,q0:()=>flexContentOptions,td:()=>buttonSizeOptions});var titleStyleOptions=["h1","h2","h3","h4"],currencyOptions=["USD","EUR"],buttonStyleOptions=["primary","secondary","accent","ghost","outline","link"],buttonSizeOptions=["large","regular","small"],flexContentOptions=["start","end","center","between","around"],flexItemsOptions=["start","end","center","stretch"],responsiveBreakpoints=["sm","md","lg","xl","2xl"]},"./src/stories/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>createUniformParameter,z:()=>createFakeCompositionData});var _home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var createUniformParameter=function createUniformParameter(params){return Object.keys(params).reduce((function(acc,key){var _params$key,_params$key2;return _objectSpread(_objectSpread({},acc),{},(0,_home_runner_work_w_dotcom_w_dotcom_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},key,{type:(null===(_params$key=params[key])||void 0===_params$key?void 0:_params$key.type)||"text",value:(null===(_params$key2=params[key])||void 0===_params$key2?void 0:_params$key2.value)||params[key]}))}),{})},createFakeCompositionData=function createFakeCompositionData(type,params,slots){return{_name:type,type,_id:"ebf7db31-5e01-4874-afb4-d8d668457ba8",parameters:createUniformParameter(params),slots}}}}]);