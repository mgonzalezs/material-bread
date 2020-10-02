var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _propTypes=_interopRequireDefault(require("prop-types"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _ProgressBar=_interopRequireDefault(require("./ProgressBar.styles"));var _color=_interopRequireDefault(require("color"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Progress/ProgressBar/ProgressBar.js";var ProgressBar=function(_PureComponent){(0,_inherits2.default)(ProgressBar,_PureComponent);function ProgressBar(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,ProgressBar);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(ProgressBar)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{indicatorPosition:new _reactNative.Animated.Value(_this.props.indicatorStartPosition),indicatorScaleX:new _reactNative.Animated.Value(1),indicatorWidth:new _reactNative.Animated.Value(0),trackScaleY:new _reactNative.Animated.Value(0),trackOpacity:new _reactNative.Animated.Value(0),trackHeight:0,trackWidth:0});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onTrackLayout",function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;_this.setState({trackWidth:width,trackHeight:height});});return _this;}(0,_createClass2.default)(ProgressBar,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,visible=_this$props.visible,determinate=_this$props.determinate;if(visible){this.animateTrackHeight();}if(determinate){this.startDeterminateAnimation();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props2=this.props,value=_this$props2.value,visible=_this$props2.visible,determinate=_this$props2.determinate;if(value!=prevProps.value&&determinate){this.startDeterminateAnimation();}if(visible&&!prevProps.visible||!visible&&prevProps.visible){this.animateTrackHeight();}}},{key:"animateTrackHeight",value:function animateTrackHeight(){var _this2=this;var _this$state=this.state,trackScaleY=_this$state.trackScaleY,trackOpacity=_this$state.trackOpacity;var _this$props3=this.props,visible=_this$props3.visible,determinate=_this$props3.determinate;var scale=visible?1:0;var opacity=visible?1:0;_reactNative.Animated.parallel([_reactNative.Animated.timing(trackScaleY,{toValue:scale,duration:300}),_reactNative.Animated.timing(trackOpacity,{toValue:opacity,duration:300})]).start(function(){if(determinate){_this2.startDeterminateAnimation();}else{_this2.startIndeterminateAnimation();}});}},{key:"startDeterminateAnimation",value:function startDeterminateAnimation(){var _this3=this;var _this$state2=this.state,indicatorWidth=_this$state2.indicatorWidth,trackWidth=_this$state2.trackWidth;var _this$props4=this.props,animationDuration=_this$props4.animationDuration,value=_this$props4.value;if(trackWidth==0){setTimeout(function(){return _this3.startDeterminateAnimation();},100);}_reactNative.Animated.parallel([_reactNative.Animated.timing(indicatorWidth,{toValue:trackWidth*(value/100),duration:animationDuration})]).start();}},{key:"startIndeterminateAnimation",value:function startIndeterminateAnimation(){var _this4=this;var _this$state3=this.state,indicatorPosition=_this$state3.indicatorPosition,indicatorScaleX=_this$state3.indicatorScaleX,trackWidth=_this$state3.trackWidth;var _this$props5=this.props,animationDuration=_this$props5.animationDuration,animationEasing=_this$props5.animationEasing;if(trackWidth==0){setTimeout(function(){return _this4.startIndeterminateAnimation();},100);}_reactNative.Animated.loop(_reactNative.Animated.parallel([_reactNative.Animated.timing(indicatorPosition,{toValue:trackWidth,duration:animationDuration,animationEasing:animationEasing}),_reactNative.Animated.timing(indicatorScaleX,{toValue:2,duration:animationDuration/4,animationEasing:animationEasing})]),{iterations:-1}).start();}},{key:"render",value:function render(){var _this$props6=this.props,height=_this$props6.height,color=_this$props6.color,trackStyle=_this$props6.trackStyle,determinate=_this$props6.determinate,theme=_this$props6.theme,testID=_this$props6.testID;var _this$state4=this.state,indicatorPosition=_this$state4.indicatorPosition,indicatorScaleX=_this$state4.indicatorScaleX,indicatorWidth=_this$state4.indicatorWidth,trackScaleY=_this$state4.trackScaleY,trackOpacity=_this$state4.trackOpacity;var trackColor=color?(0,_color.default)(color).fade(0.4).string():(0,_color.default)(theme.primary.main).fade(0.4).string();var indicatorColor=color?color:theme.primary.main;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,onLayout:this.onTrackLayout,style:[_ProgressBar.default.track,{backgroundColor:trackColor,height:height?height:4,opacity:trackOpacity,transform:[{scaleY:trackScaleY}]},trackStyle],testID:testID,__source:{fileName:_jsxFileName,lineNumber:162}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_ProgressBar.default.indicator,{backgroundColor:indicatorColor,height:height?height:4,width:determinate?indicatorWidth:112,transform:[{translateX:indicatorPosition},{scaleX:indicatorScaleX}]}],__source:{fileName:_jsxFileName,lineNumber:176}}));}}]);return ProgressBar;}(_react.PureComponent);(0,_defineProperty2.default)(ProgressBar,"propTypes",{color:_propTypes.default.string,height:_propTypes.default.number,trackStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),determinate:_propTypes.default.bool,indicatorStartPosition:_propTypes.default.number,animationEasing:_propTypes.default.func,animationDuration:_propTypes.default.number,value:_propTypes.default.number,visible:_propTypes.default.bool,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,testID:_propTypes.default.string});(0,_defineProperty2.default)(ProgressBar,"defaultProps",{animationDuration:1000,indicatorStartPosition:0,animationEasing:_reactNative.Easing.bezier(0.65,0.815,0.735,0.395)});var _default=(0,_withTheme.default)(ProgressBar);exports.default=_default;