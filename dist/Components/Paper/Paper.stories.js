var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Paper/Paper.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Paper',module).addParameters({jest:['Paper']}).add('Elevation',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:11}},_react.default.createElement(_Header.default,{title:'Paper',__source:{fileName:_jsxFileName,lineNumber:12}}),_react.default.createElement(_.Paper,{style:{padding:8,height:100,width:100,alignItems:'center'},elevation:2,__source:{fileName:_jsxFileName,lineNumber:13}}),_react.default.createElement(_.Paper,{style:{padding:8,height:100,width:100,marginTop:30,alignItems:'center',justifyContent:'center'},elevation:4,__source:{fileName:_jsxFileName,lineNumber:22}}),_react.default.createElement(_.Paper,{style:{padding:8,height:100,width:100,marginTop:30,alignItems:'center',justifyContent:'center'},elevation:8,__source:{fileName:_jsxFileName,lineNumber:33}}));}).add('Roundness',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:47}},_react.default.createElement(_Header.default,{title:'Roudness',__source:{fileName:_jsxFileName,lineNumber:48}}),_react.default.createElement(_.Paper,{style:{padding:8,height:100,width:100,alignItems:'center'},elevation:4,radius:2,__source:{fileName:_jsxFileName,lineNumber:49}}),_react.default.createElement(_.Paper,{style:{padding:8,height:100,width:100,marginTop:30,alignItems:'center',justifyContent:'center'},elevation:4,radius:8,__source:{fileName:_jsxFileName,lineNumber:59}}));});exports.default=_default;