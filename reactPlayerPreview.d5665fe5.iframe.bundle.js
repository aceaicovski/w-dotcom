"use strict";(self.webpackChunkcomponent_starter_kit=self.webpackChunkcomponent_starter_kit||[]).push([[7664],{"./node_modules/react-player/lazy/Preview.js":(__unused_webpack_module,exports,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var cache={},Preview=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Preview,_Component);var _super=_createSuper(Preview);function Preview(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Preview);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"mounted",!1),_defineProperty(_assertThisInitialized(_this),"state",{image:null}),_defineProperty(_assertThisInitialized(_this),"handleKeyPress",(function(e){"Enter"!==e.key&&" "!==e.key||_this.props.onClick()})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Preview,[{key:"componentDidMount",value:function componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props=this.props,url=_this$props.url,light=_this$props.light;prevProps.url===url&&prevProps.light===light||this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.mounted=!1}},{key:"fetchImage",value:function fetchImage(_ref){var _this2=this,url=_ref.url,light=_ref.light,oEmbedUrl=_ref.oEmbedUrl;if(!_react.default.isValidElement(light))if("string"!=typeof light){if(!cache[url])return this.setState({image:null}),window.fetch(oEmbedUrl.replace("{url}",url)).then((function(response){return response.json()})).then((function(data){if(data.thumbnail_url&&_this2.mounted){var image=data.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");_this2.setState({image}),cache[url]=image}}));this.setState({image:cache[url]})}else this.setState({image:light})}},{key:"render",value:function render(){var _this$props2=this.props,light=_this$props2.light,onClick=_this$props2.onClick,playIcon=_this$props2.playIcon,previewTabIndex=_this$props2.previewTabIndex,image=this.state.image,isElement=_react.default.isValidElement(light),flexCenter={display:"flex",alignItems:"center",justifyContent:"center"},styles={preview:_objectSpread({width:"100%",height:"100%",backgroundImage:image&&!isElement?"url(".concat(image,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},flexCenter),shadow:_objectSpread({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:"64px",width:"64px",height:"64px",position:isElement?"absolute":void 0},flexCenter),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},defaultPlayIcon=_react.default.createElement("div",{style:styles.shadow,className:"react-player__shadow"},_react.default.createElement("div",{style:styles.playIcon,className:"react-player__play-icon"}));return _react.default.createElement("div",{style:styles.preview,className:"react-player__preview",onClick,tabIndex:previewTabIndex,onKeyPress:this.handleKeyPress},isElement?light:null,playIcon||defaultPlayIcon)}}]),Preview}(_react.Component);exports.default=Preview}}]);