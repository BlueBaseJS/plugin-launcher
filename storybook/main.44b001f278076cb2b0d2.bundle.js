(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1080:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),app1_1=tslib_1.__importDefault(__webpack_require__(1081)),app2_1=tslib_1.__importDefault(__webpack_require__(1082)),app3_1=tslib_1.__importDefault(__webpack_require__(1083)),app4_1=tslib_1.__importDefault(__webpack_require__(1084)),app5_1=tslib_1.__importDefault(__webpack_require__(1085)),plugin_vector_icons_1=__webpack_require__(1086),src_1=tslib_1.__importDefault(__webpack_require__(1139)),plugin_responsive_grid_1=tslib_1.__importDefault(__webpack_require__(1149));exports.default={configs:{landscapeProps:{resizeMode:"contain",source:__webpack_require__(1241),style:{flex:1}},portraitProps:{resizeMode:"contain",source:__webpack_require__(1242),style:{flex:1}}},plugins:[app1_1.default,app2_1.default,app3_1.default,app4_1.default,app5_1.default,src_1.default,plugin_vector_icons_1.MaterialIcons,plugin_responsive_grid_1.default]}},1081:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__webpack_require__(2).__importDefault(__webpack_require__(1)),components_1=__webpack_require__(19),core_1=__webpack_require__(0);exports.default=core_1.createPlugin({key:"app-1",name:"D App 1",icon:{name:"delete",type:"icon"},indexRoute:"App1",routes:{name:"App1",path:"",screen:()=>react_1.default.createElement(components_1.Text,null,"App1")}})},1082:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__webpack_require__(2).__importDefault(__webpack_require__(1)),components_1=__webpack_require__(19),core_1=__webpack_require__(0);exports.default=core_1.createPlugin({key:"App 2",name:"Demp App 2, This one has a long name",icon:{source:{uri:"https://placeimg.com/300/300/any"},type:"image"},indexRoute:"App2",routes:{name:"App2",path:"",screen:()=>react_1.default.createElement(components_1.Text,null,"App2")}})},1083:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(59),react_1=tslib_1.__importDefault(__webpack_require__(1)),components_2=__webpack_require__(19),react_native_1=__webpack_require__(6),core_1=__webpack_require__(0);exports.default=core_1.createPlugin({key:"App 3",name:"Demp App 3",icon:{component:()=>react_1.default.createElement(react_native_1.View,{style:{backgroundColor:"red",borderRadius:50}},react_1.default.createElement(components_1.DynamicIcon,{type:"icon",name:"audiotrack",color:"white"})),type:"component"},indexRoute:"App3",routes:{name:"App3",path:"",screen:()=>react_1.default.createElement(components_2.Text,null,"App3")}})},1084:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(59),react_1=tslib_1.__importDefault(__webpack_require__(1)),components_2=__webpack_require__(19),react_native_1=__webpack_require__(6),core_1=__webpack_require__(0);exports.default=core_1.createPlugin({key:"App 4",name:"Demp App 4",icon:{component:({size:size})=>react_1.default.createElement(react_native_1.View,{style:{alignItems:"center",backgroundColor:"green",borderRadius:50,height:size,justifyContent:"center",width:size}},react_1.default.createElement(components_1.DynamicIcon,{type:"icon",name:"map",color:"white",size:size-30})),type:"component"},indexRoute:"App4",routes:{name:"App4",path:"",screen:()=>react_1.default.createElement(components_2.Text,null,"App4")}})},1085:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__webpack_require__(2).__importDefault(__webpack_require__(1)),components_1=__webpack_require__(19),core_1=__webpack_require__(0);exports.default=core_1.createPlugin({key:"App 5",name:"Demp App 5, No icon",indexRoute:"App5",routes:{name:"App5",path:"",screen:()=>react_1.default.createElement(components_1.Text,null,"App5")}})},1139:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const components_1=__webpack_require__(1140),version_1=__webpack_require__(1148),core_1=__webpack_require__(0);exports.default=core_1.createPlugin({description:"A plugin that replaces HomeScreen to show Apps just like any mobile OS",key:"plugin-launcher",name:"BlueBase App Launcher",version:version_1.VERSION,components:{HomeScreen:components_1.LauncherScreen,LauncherDefaultIcon:components_1.DefaultIcon,LauncherScreen:components_1.LauncherScreen},defaultConfigs:{"plugin.launcher.wallpaper":{},"plugin.launcher.wallpaper.landscape":{},"plugin.launcher.wallpaper.portrait":{}}})},1140:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2);tslib_1.__exportStar(__webpack_require__(416),exports),tslib_1.__exportStar(__webpack_require__(417),exports),tslib_1.__exportStar(__webpack_require__(1144),exports),tslib_1.__exportStar(__webpack_require__(1146),exports),tslib_1.__exportStar(__webpack_require__(420),exports)},1141:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(19),core_1=__webpack_require__(0),react_1=tslib_1.__importDefault(__webpack_require__(1)),DefaultIcon=core_1.getComponent("LauncherDefaultIcon");exports.AppCard=({plugin:plugin,size:size})=>react_1.default.createElement(components_1.NavigationActions,null,({navigate:navigate})=>{return react_1.default.createElement(components_1.TouchableItem,{onPress:()=>navigate(plugin.indexRoute)},react_1.default.createElement(components_1.View,{style:{alignItems:"center",marginVertical:8}},react_1.default.createElement(components_1.View,{style:{height:size,width:size}},plugin.icon?react_1.default.createElement(components_1.PluginIcon,{id:plugin.key,size:size}):react_1.default.createElement(DefaultIcon,{size:size})),react_1.default.createElement(components_1.Body2,{style:{paddingTop:8},ellipsizeMode:"tail",numberOfLines:1},plugin.name)))})},1142:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__exportStar(__webpack_require__(1143),exports)},1143:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(19),core_1=__webpack_require__(0),react_1=tslib_1.__importDefault(__webpack_require__(1));class ColumnComponent extends react_1.default.PureComponent{constructor(props){super(props),this.state={size:0},this.onLayout=this.onLayout.bind(this)}onLayout(event){const width=parseFloat(event.nativeEvent.layout.width);this.state.size!==width&&this.setState({size:width})}render(){const _a=this.props,{children:children}=_a,rest=tslib_1.__rest(_a,["children"]),size=this.state.size;return react_1.default.createElement(components_1.Column,Object.assign({onLayout:this.onLayout},rest),children(size))}}ColumnComponent.contextType=core_1.BlueBaseContext,exports.ColumnComponent=ColumnComponent,exports.Column=ColumnComponent},1144:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__exportStar(__webpack_require__(1145),exports)},1145:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(19),react_1=tslib_1.__importDefault(__webpack_require__(1));exports.DefaultIcon=({size:size,styles:_styles})=>{const styles=_styles;return react_1.default.createElement(components_1.View,{style:[styles.root,{height:size,width:size}]},react_1.default.createElement(components_1.DynamicIcon,{type:"icon",name:"build",color:styles.iconColor.color,size:size/2}))},exports.DefaultIcon.defaultStyles=theme=>({iconColor:{color:theme.palette.primary.main},root:{alignItems:"center",backgroundColor:"rgba(0,0,0,.12)",borderRadius:10,justifyContent:"center"}})},1146:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__exportStar(__webpack_require__(419),exports)},1147:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(19),react_1=tslib_1.__importDefault(__webpack_require__(1));exports.Wallpaper=({defaultProps:defaultProps,landscapeProps:landscapeProps,portraitProps:portraitProps,children:children})=>react_1.default.createElement(components_1.OrientationObserver,null,isLandscape=>{const customProps=isLandscape?landscapeProps:portraitProps,props=Object.assign({},defaultProps,customProps);return props.source?react_1.default.createElement(components_1.ImageBackground,props,children):children})},1148:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VERSION="1.0.1"},1241:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/wallpaper.06e6c417.png"},1242:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/wallpaper.93d2b484.jpg"},1243:function(module,exports,__webpack_require__){var map={"./components/AppGrid/__stories__/AppGrid.stories.tsx":1244,"./components/LauncherScreen/__stories__/LauncherScreen.stories.tsx":1245,"./components/Wallpaper/__stories__/LauncherScreen.stories.tsx":1246};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1243},1244:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),AppGrid_1=__webpack_require__(418),react_1=tslib_1.__importDefault(__webpack_require__(1));tslib_1.__importDefault(__webpack_require__(143)).default("AppGrid",module).add("AppGrid",()=>react_1.default.createElement(AppGrid_1.AppGrid,{plugins:[]}))}).call(this,__webpack_require__(56)(module))},1245:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),LauncherScreen_1=__webpack_require__(419),react_1=tslib_1.__importDefault(__webpack_require__(1));tslib_1.__importDefault(__webpack_require__(143)).default("LauncherScreen",module).add("LauncherScreen",()=>react_1.default.createElement(LauncherScreen_1.LauncherScreen,null))}).call(this,__webpack_require__(56)(module))},1246:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__importDefault(__webpack_require__(143)).default("Wallpaper",module)}).call(this,__webpack_require__(56)(module))},1247:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1247},416:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__exportStar(__webpack_require__(1141),exports)},417:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__exportStar(__webpack_require__(418),exports)},418:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),components_1=__webpack_require__(19),AppCard_1=__webpack_require__(416),Column_1=__webpack_require__(1142),react_1=tslib_1.__importDefault(__webpack_require__(1));exports.AppGrid=({plugins:plugins})=>react_1.default.createElement(components_1.Container,null,react_1.default.createElement(components_1.Row,null,plugins.map(plugin=>react_1.default.createElement(Column_1.Column,{key:plugin.key,xl:1,lg:1.5,md:2,sm:3,xs:3},size=>react_1.default.createElement(AppCard_1.AppCard,{plugin:plugin,size:size})))))},419:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),core_1=__webpack_require__(0),react_native_1=__webpack_require__(6),AppGrid_1=__webpack_require__(417),react_1=tslib_1.__importDefault(__webpack_require__(1)),components_1=__webpack_require__(19),Wallpaper_1=__webpack_require__(420),EmptyState=core_1.getComponent("LauncherEmptyState","EmptyState");class LauncherScreen extends react_1.default.PureComponent{constructor(){super(...arguments),this.state={plugins:[]}}async componentWillMount(){const BB=this.context,plugins=(await BB.Plugins.getAllEnabled()).filter(p=>!!p.indexRoute);this.setState({plugins:plugins})}render(){const BB=this.context,{styles:styles}=this.props,{plugins:plugins}=this.state;return plugins&&0!==plugins.length?react_1.default.createElement(Wallpaper_1.Wallpaper,{portraitProps:BB.Configs.getValue("plugin.launcher.wallpaper.portrait"),landscapeProps:BB.Configs.getValue("plugin.launcher.wallpaper.landscape"),defaultProps:BB.Configs.getValue("plugin.launcher.wallpaper")},react_1.default.createElement(react_native_1.ScrollView,{style:styles.root},react_1.default.createElement(AppGrid_1.AppGrid,{plugins:plugins}))):react_1.default.createElement(components_1.View,{testID:"view",style:{flex:1}},react_1.default.createElement(EmptyState,null))}}LauncherScreen.contextType=core_1.BlueBaseContext,LauncherScreen.defaultStyles=theme=>({root:{flex:1,paddingHorizontal:2*theme.spacing.unit}}),exports.LauncherScreen=LauncherScreen},420:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(2).__exportStar(__webpack_require__(1147),exports)},436:function(module,exports,__webpack_require__){__webpack_require__(437),__webpack_require__(532),module.exports=__webpack_require__(533)},533:function(module,exports,__webpack_require__){(function(module){__webpack_require__(64)(__webpack_require__(1));var _react2=__webpack_require__(267),_storybookAddon=__webpack_require__(143),BRConfigs=__webpack_require__(964);(0,_react2.addDecorator)((0,_storybookAddon.BlueBaseDecorator)(BRConfigs));var req=__webpack_require__(1243),req2=__webpack_require__(1247);(0,_react2.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)}),req2.keys().forEach(function(filename){return req2(filename)})},module)}).call(this,__webpack_require__(56)(module))},964:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(2),plugin_react_router_1=tslib_1.__importDefault(__webpack_require__(965)),bluebase_1=tslib_1.__importDefault(__webpack_require__(1080)),deepmerge_1=tslib_1.__importDefault(__webpack_require__(86)),bootOptions={plugins:[plugin_react_router_1.default]};exports.default=deepmerge_1.default(bluebase_1.default,bootOptions)}},[[436,1,2]]]);
//# sourceMappingURL=main.44b001f278076cb2b0d2.bundle.js.map