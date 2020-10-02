var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Progress/ProgressCircle/ProgressCircleDeterminate.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ProgressCircleDeterminate=function(_Component){(0,_inherits2.default)(ProgressCircleDeterminate,_Component);function ProgressCircleDeterminate(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,ProgressCircleDeterminate);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(ProgressCircleDeterminate)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{animatedValue:_this.props.value.constructor.name==='AnimatedValue'?null:new _reactNative.Animated.Value(_this.props.shouldAnimateFirstValue?0:_this.props.value)});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"ANIMATION_TYPES",['timing','spring','bounce','decay']);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleChange",function(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_this.props.value;_this.props.onChange();if(value.constructor.name==='AnimatedValue'){return;}if(_this.getAnimationMethod()){_this.animateChange(value);}else{_this.state.animatedValue.setValue(value);}});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"animateChange",function(value){return _reactNative.Animated[_this.getAnimationMethod()](_this.state.animatedValue,_objectSpread({toValue:value/100,useNativeDriver:true},_this.props.animationConfig)).start(_this.props.onChangeAnimationEnd);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"renderHalfCircle",function(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$isFlipped=_ref.isFlipped,isFlipped=_ref$isFlipped===void 0?false:_ref$isFlipped;var _this$props=_this.props,size=_this$props.size,color=_this$props.color,thickness=_this$props.thickness,value=_this$props.value;var valueToInterpolate=value.constructor.name==='AnimatedValue'?value:_this.state.animatedValue;return _react.default.createElement(_reactNative.View,{pointerEvents:"none",style:[_this.getHalfCircleContainerStyle(),{transform:[{scaleX:isFlipped?-1.015:1.015}]}],__source:{fileName:_jsxFileName,lineNumber:114}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:{width:size,height:size,transform:[{rotate:valueToInterpolate.interpolate({inputRange:isFlipped?[0,0.5]:[0.5,1],outputRange:isFlipped?['180deg','0deg']:['-180deg','0deg'],extrapolate:'clamp'})}]},__source:{fileName:_jsxFileName,lineNumber:120}},_react.default.createElement(_reactNative.View,{style:_this.getHalfCircleContainerStyle(),__source:{fileName:_jsxFileName,lineNumber:137}},_react.default.createElement(_reactNative.View,{style:[_this.getFullCircleStyle(),{borderWidth:thickness,borderColor:color}],__source:{fileName:_jsxFileName,lineNumber:138}}))));});return _this;}(0,_createClass2.default)(ProgressCircleDeterminate,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,shouldAnimateFirstValue=_this$props2.shouldAnimateFirstValue,value=_this$props2.value;if(shouldAnimateFirstValue)this.animateChange(value);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var value=this.props.value;if(value!=prevProps.value){this.handleChange(value);}}},{key:"getFullCircleStyle",value:function getFullCircleStyle(){return{width:this.props.size,height:this.props.size,borderRadius:this.props.size/2};}},{key:"getHalfCircleContainerStyle",value:function getHalfCircleContainerStyle(){return{width:this.props.size/2.01,height:this.props.size,overflow:'hidden'};}},{key:"getAnimationMethod",value:function getAnimationMethod(){return this.ANIMATION_TYPES.includes(this.props.animationMethod)?this.props.animationMethod:null;}},{key:"render",value:function render(){var _this$props3=this.props,thickness=_this$props3.thickness,unfilledColor=_this$props3.unfilledColor,children=_this$props3.children,style=_this$props3.style,noTrackColor=_this$props3.noTrackColor;return _react.default.createElement(_reactNative.View,{style:[this.getFullCircleStyle(),styles.mainContainer,style],__source:{fileName:_jsxFileName,lineNumber:160}},_react.default.createElement(_reactNative.View,{pointerEvents:"box-none",style:[this.getFullCircleStyle(),{borderWidth:noTrackColor?0:thickness,borderColor:unfilledColor},styles.innerCircleContainer],__source:{fileName:_jsxFileName,lineNumber:161}},children),this.renderHalfCircle(),this.renderHalfCircle({isFlipped:true}));}}]);return ProgressCircleDeterminate;}(_react.Component);(0,_defineProperty2.default)(ProgressCircleDeterminate,"propTypes",{value:_propTypes.default.number,size:_propTypes.default.number,thickness:_propTypes.default.number,color:_propTypes.default.string,unfilledColor:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),children:_propTypes.default.node,animationMethod:_propTypes.default.string,animationConfig:_propTypes.default.object,shouldAnimateFirstValue:_propTypes.default.bool,onChange:_propTypes.default.func,onChangeAnimationEnd:_propTypes.default.func,noTrackColor:_propTypes.default.bool});(0,_defineProperty2.default)(ProgressCircleDeterminate,"defaultProps",{value:0,size:64,thickness:4,color:'#4c90ff',unfilledColor:'transparent',noTrackColor:true,style:{},children:null,animationMethod:null,animationConfig:{duration:200},shouldAnimateFirstValue:false,onChange:function onChange(){},onChangeAnimationEnd:function onChangeAnimationEnd(){}});var styles=_reactNative.StyleSheet.create({mainContainer:{flexDirection:'row',borderColor:'transparent',backgroundColor:'transparent'},innerCircleContainer:{position:'absolute',justifyContent:'center',alignItems:'center'}});var _default=(0,_withTheme.default)(ProgressCircleDeterminate);exports.default=_default;