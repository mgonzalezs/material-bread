var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _=require("../..");var _jsxFileName="/Users/ricbermo/development/material-bread/src/storybook/components/Header.js";var Header=function(_Component){(0,_inherits2.default)(Header,_Component);function Header(){(0,_classCallCheck2.default)(this,Header);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Header).apply(this,arguments));}(0,_createClass2.default)(Header,[{key:"render",value:function render(){var _this$props=this.props,title=_this$props.title,subtitle=_this$props.subtitle;return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_.Heading,{align:"center",type:4,__source:{fileName:_jsxFileName,lineNumber:16}},title),subtitle?_react.default.createElement(_.Subtitle,{type:1,style:[styles.subtitle],__source:{fileName:_jsxFileName,lineNumber:20}},subtitle):null);}}]);return Header;}(_react.Component);exports.default=Header;(0,_defineProperty2.default)(Header,"propTypes",{title:_propTypes.default.string,subtitle:_propTypes.default.string});var styles=_reactNative.StyleSheet.create({container:{marginBottom:60},subtitle:{marginTop:40}});