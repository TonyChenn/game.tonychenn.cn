System.register("bundle://main/_virtual/Action.ts",["cc"],(function(){var t;return{setters:[function(c){t=c.cclegacy}],execute:function(){t._RF.push({},"71bceDom4ZP/qSp9Sv4KuCp","Action",void 0),t._RF.pop()}}}));

System.register("bundle://main/_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("bundle://main/_virtual/IDict.ts",["cc"],(function(t){var i;return{setters:[function(t){i=t.cclegacy}],execute:function(){i._RF.push({},"9a30d11MdJCM7HmLbmSoNjt","IDict",void 0);t("IDict",function(){function t(){this.items=void 0,this.items={}}var i=t.prototype;return i.HasKey=function(t){return this.items.hasOwnProperty(t)},i.Get=function(t){return this.HasKey(t)?this.items[t]:null},i.Keys=function(){var t=[];for(var i in this.items)this.HasKey(i)&&t.push(i);return t},i.Values=function(){var t=[];for(var i in this.items)this.HasKey(i)&&t.push(this.items[i]);return t},i.Add=function(t,i){this.items[t]=i},i.Remove=function(t){this.HasKey(t)&&delete this.items[t]},t}());i._RF.pop()}}}));

System.register("bundle://main/_virtual/main",["./debug-view-runtime-control.ts","./Action.ts","./IDict.ts","./MapNode.ts","./Messenger.ts","./PathFind.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("bundle://main/_virtual/MapNode.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Messenger.ts"],(function(e){var t,n,i,o,l,r,a,s,u,c,h,p,b,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.createClass,o=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,s=e.Label,u=e.Enum,c=e.Sprite,h=e.Button,p=e.math,b=e.Component},function(e){d=e.Messenger}],execute:function(){var f,_,y,g,v,C,m,T,k,P,w;r._RF.push({},"61cce6MHwlGjqxqUwPnLVwu","MapNode",void 0);var E=a.ccclass,F=a.property,N=e("NodeType",function(e){return e[e.Road=0]="Road",e[e.Wall=1]="Wall",e[e.Start=2]="Start",e[e.End=3]="End",e}({}));e("MapNode",(f=E("MapNode"),_=F(s),y=F(s),g=F(s),v=F({type:u(N),serializable:!0,visible:!0}),f((T=t((m=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i))||this,o(t,"labelG",T,l(t)),o(t,"labelH",k,l(t)),o(t,"labelF",P,l(t)),o(t,"_nodeType",w,l(t)),t.PosX=void 0,t.PosY=void 0,t.sprite=null,t.button=null,t.PreNode=void 0,t._g_value=void 0,t._h_value=void 0,t._f_value=void 0,t}n(t,e);var r=t.prototype;return r.onLoad=function(){var e=this;this.labelG.string="",this.labelH.string="",this.labelF.string="",this.sprite=this.getComponent(c),this.button=this.getComponent(h),this.NodeType=this._nodeType,this.button.enabled=!1,this.button.node.on(h.EventType.CLICK,(function(){d.BroadcastT("click_node",e)}),this)},r.Init=function(e,t){this.PosX=e,this.PosY=t},r.SetColor=function(e){this.sprite.color=e},r.GetKey=function(){return this.PosX+"_"+this.PosY},i(t,[{key:"NodeType",get:function(){return this._nodeType},set:function(e){switch(e){case N.Road:break;case N.Wall:this.SetColor(p.Color.BLACK);break;case N.Start:this.SetColor(p.Color.GREEN),this.labelF.string="开始点";break;case N.End:this.SetColor(p.Color.RED),this.labelF.string="结束点"}this._nodeType=e}},{key:"GValue",get:function(){return this._g_value},set:function(e){this._g_value=e,this.labelG.string=e+""}},{key:"HValue",get:function(){return this._h_value},set:function(e){this._h_value=e,this.labelH.string=e+""}},{key:"FValue",get:function(){return this._f_value},set:function(e){this._f_value=e,this.labelF.string=e+""}},{key:"ClickEnable",set:function(e){this.button.enabled=e}}]),t}(b)).prototype,"labelG",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(m.prototype,"labelH",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(m.prototype,"labelF",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(m.prototype,"_nodeType",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return N.Road}}),C=m))||C));r._RF.pop()}}}));

System.register("bundle://main/_virtual/Messenger.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"dea19W6LwJKjJj4N5q2rbH7","Messenger",void 0),e("Messenger",function(){function e(){}return e.AddListener=function(e,t,n){this._events.has(e)?this._events.get(e).push({func:t,ctx:n}):this._events.set(e,[{func:t,ctx:n}])},e.RemoveListener=function(e,t,n){if(this._events.has(e)){var s=this._events.get(e),c=s.findIndex((function(e){return e.func===t&&e.ctx===n}));c>-1&&s.splice(c,1),0==s.length&&this._events.delete(e)}},e.Broadcast=function(e){this._events.has(e)&&this._events.get(e).forEach((function(e){e.func.call(e.ctx)}))},e.BroadcastT=function(e,t){this._events.has(e)&&this._events.get(e).forEach((function(e){e.func.call(e.ctx,t)}))},e}())._events=new Map,t._RF.pop()}}}));

System.register("bundle://main/_virtual/PathFind.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MapNode.ts","./IDict.ts","./Messenger.ts"],(function(e){var t,o,i,s,n,r,a,d,h,l,c,u,N,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){n=e.cclegacy,r=e._decorator,a=e.Vec2,d=e.Color,h=e.math,l=e.Component},function(e){c=e.MapNode,u=e.NodeType},function(e){N=e.IDict},function(e){p=e.Messenger}],execute:function(){var f,P,y,G,v,g,C;n._RF.push({},"1da1d5Md91OurMpeMm/kdn6","PathFind",void 0);var L=r.ccclass,E=r.property;e("PathFind",(f=L("PathFind"),P=E({type:a,displayName:"开始点"}),y=E({type:a,displayName:"结束点"}),f((g=t((v=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,i(t,"startPos",g,s(t)),i(t,"endPos",C,s(t)),t.StartNode=void 0,t.EndNode=void 0,t.OpenList=new N,t.CloseList=new N,t.rowNodes=[],t}o(t,e);var n=t.prototype;return n.Add2OpenList=function(e){e.SetColor(d.CYAN),this.OpenList.Add(e.GetKey(),e)},n.Add2CloseList=function(e){e.SetColor(d.GRAY),this.CloseList.Add(e.GetKey(),e)},n.onLoad=function(){for(var e=this.node.getChildByName("Rows").children,t=0;t<e.length;t++){for(var o=e[t],i=o.children,s=[],n=0,r=i.length;n<r;n++){var a=i[n].getComponent(c);a.Init(n,t),s.push(a)}var d={row:o,cells:s};this.rowNodes.push(d)}p.AddListener("click_node",this.clickMapNodeCallback,this)},n.start=function(){this.StartNode=this.GetNode(this.startPos.x,this.startPos.y),this.StartNode.NodeType=u.Start,this.EndNode=this.GetNode(this.endPos.x,this.endPos.y),this.EndNode.NodeType=u.End,this.Add2OpenList(this.StartNode),this.RefreshEightNode(this.StartNode,this.EndNode),this.GetMinOpenListNode().ClickEnable=!0},n.onDestroy=function(){p.RemoveListener("click_node",this.clickMapNodeCallback,this)},n.GetNode=function(e,t){var o=this.rowNodes[t];o.cells;return o.cells[e]},n.GetEightNode=function(e){var t=this,o=[],i=e.PosX,s=e.PosY,n=function(i){var s=i.GetKey();i.NodeType==u.Wall||t.OpenList.HasKey(s)||t.CloseList.HasKey(s)||(i.PreNode=e,o.push(i))};i>0&&n(this.GetNode(i-1,s));i<9&&n(this.GetNode(i+1,s));s>0&&n(this.GetNode(i,s-1));s<6&&n(this.GetNode(i,s+1));i>0&&s>0&&n(this.GetNode(i-1,s-1));i>0&&s<6&&n(this.GetNode(i-1,s+1));i<9&&s>0&&n(this.GetNode(i+1,s-1));i<9&&s<6&&n(this.GetNode(i+1,s+1));return o},n.RefreshEightNode=function(e,t){var o=this.GetEightNode(e);if(console.log("8点个数："+o.length),0!=o.length){this.OpenList.Remove(e.GetKey()),this.Add2CloseList(e);for(var i=0;i<o.length;i++){var s=o[i];s.SetColor(h.Color.CYAN);var n=Math.abs(e.PosX-s.PosX)+Math.abs(e.PosY-s.PosY)==1?10:14;s.GValue=n;var r=Math.abs(t.PosX-s.PosX),a=Math.abs(t.PosY-s.PosY),d=Math.min(r,a),l=14*d+10*(Math.max(r,a)-d);s.HValue=l,s.FValue=n+l,this.OpenList.Add(s.GetKey(),s)}}},n.GetMinOpenListNode=function(){var e=this.OpenList.Values();if(0==e.length)return null;for(var t=e[0],o=1,i=e.length;o<i;o++)(t.FValue>e[o].FValue||t.FValue==e[o].FValue&&t.HValue>e[o].HValue)&&(t=e[o]);return this.GetEightNode(t).length>0?(t.SetColor(d.GREEN),t):(this.OpenList.Remove(t.GetKey()),this.Add2CloseList(t),this.GetMinOpenListNode())},n.clickMapNodeCallback=function(e){if(console.log(e.PosX,e.PosY),e!=this.EndNode){e.ClickEnable=!1,this.Add2OpenList(e),this.RefreshEightNode(e,this.EndNode);var t=this.GetMinOpenListNode();null!=t&&(t.ClickEnable=!0)}else this.printSearchPath(this.EndNode)},n.printSearchPath=function(e){null==e&&(e=this.EndNode),e.SetColor(h.Color.GREEN),e!=this.StartNode&&null!=e.PreNode&&this.printSearchPath(e.PreNode)},t}(l)).prototype,"startPos",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new a(0,0)}}),C=t(v.prototype,"endPos",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new a(1,1)}}),G=v))||G));n._RF.pop()}}}));

System.register("bundle://main/_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function t(r,i){return(t=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e}))(r,i)}function i(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function n(e){var r=i(e,"string");return"symbol"==typeof r?r:String(r)}e({applyDecoratedDescriptor:function(e,r,t,i,n){var o={};Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,i){return i(e,r,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,r,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},createClass:function(e,t,i){t&&r(e.prototype,t);i&&r(e,i);return Object.defineProperty(e,"prototype",{writable:!1}),e},inheritsLoose:function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)},initializerDefineProperty:function(e,r,t,i){if(!t)return;Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})},setPrototypeOf:t,toPrimitive:i,toPropertyKey:n})}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'bundle://main/_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});