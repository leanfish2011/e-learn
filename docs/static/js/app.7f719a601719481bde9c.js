webpackJsonp([1],{"+ho5":function(e,t){},"2+h/":function(e,t){},"8BJK":function(e,t){},CgUh:function(e,t){},EEvj:function(e,t){},HFLm:function(e,t){},MAZg:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("CgUh")},null,null).exports,s=n("/ocq"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header fixed-header"},[n("div",{staticClass:"header-container"},[e._m(0),e._v(" "),n("ul",{staticClass:"right-list"},e._l(e.menuData,function(t){return n("label",[n("li",{staticClass:"list-item"},[n("router-link",{staticClass:"item-link",attrs:{to:t.route,exact:""}},[e._v(e._s(t.name))])],1)])}),0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"home-link",attrs:{href:"/"}},[t("div",{staticClass:"logo"}),this._v(" "),t("span",[this._v("轻松学-题库")])])}]};var l=n("VU/8")({name:"Header",data:function(){return{menuData:[{id:"1",name:"数学",route:"/"},{id:"4",name:"关于",route:"/about"}]}}},o,!1,function(e){n("jqHp")},"data-v-1be32c2c",null).exports,u={name:"Footer",data:function(){return{year:""}},methods:{getYear:function(){this.year=(new Date).getFullYear()}},created:function(){this.getYear()}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"footer"},[t("div",{staticClass:"rightInfo"},[t("p",[this._v("Copyright © Tim 2016-"+this._s(this.year))])])]),this._v(" "),t("el-backtop")],1)},staticRenderFns:[]};var p=n("VU/8")(u,c,!1,function(e){n("MAZg")},"data-v-dc069e80",null).exports,m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"option"},[n("div",{staticClass:"option-form"},[n("el-form",{attrs:{model:e.optionModel}},[n("el-form-item",{attrs:{label:"运算:"}},[n("el-checkbox-group",{model:{value:e.optionModel.opeList,callback:function(t){e.$set(e.optionModel,"opeList",t)},expression:"optionModel.opeList"}},[n("el-checkbox",{attrs:{label:"+",name:"type",disabled:""}},[e._v("\n              加法\n            ")]),e._v(" "),n("el-checkbox",{attrs:{label:"-",name:"type"}},[e._v("\n              减法\n            ")]),e._v(" "),n("el-checkbox",{attrs:{label:"*",name:"type"}},[e._v("\n              乘法\n            ")]),e._v(" "),n("el-checkbox",{attrs:{label:"/",name:"type"}},[e._v("\n              除法\n            ")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"题型:"}},[n("el-radio-group",{model:{value:e.optionModel.displayType,callback:function(t){e.$set(e.optionModel,"displayType",t)},expression:"optionModel.displayType"}},[n("el-radio",{attrs:{label:1}},[e._v("\n              标准题\n            ")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"括号:"}},[n("el-radio-group",{model:{value:e.optionModel.bracketType,callback:function(t){e.$set(e.optionModel,"bracketType",t)},expression:"optionModel.bracketType"}},[n("el-radio",{attrs:{label:1}},[e._v("\n              无括号\n            ")]),e._v(" "),n("el-radio",{attrs:{label:2}},[e._v("\n              有括号\n            ")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"算数范围:"}},[n("el-input-number",{attrs:{size:"mini",label:"最小值"},model:{value:e.optionModel.paraMin,callback:function(t){e.$set(e.optionModel,"paraMin",t)},expression:"optionModel.paraMin"}}),e._v(" "),n("span",[e._v("—")]),e._v(" "),n("el-input-number",{attrs:{size:"mini",label:"最大值"},model:{value:e.optionModel.paraMax,callback:function(t){e.$set(e.optionModel,"paraMax",t)},expression:"optionModel.paraMax"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"结果范围:"}},[n("el-input-number",{attrs:{size:"mini",label:"最小值"},model:{value:e.optionModel.resultMin,callback:function(t){e.$set(e.optionModel,"resultMin",t)},expression:"optionModel.resultMin"}}),e._v(" "),n("span",[e._v("—")]),e._v(" "),n("el-input-number",{attrs:{size:"mini",label:"最大值"},model:{value:e.optionModel.resultMax,callback:function(t){e.$set(e.optionModel,"resultMax",t)},expression:"optionModel.resultMax"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"算数个数:"}},[n("el-input-number",{attrs:{min:2,max:5,size:"mini",label:"算数个数"},model:{value:e.optionModel.numCount,callback:function(t){e.$set(e.optionModel,"numCount",t)},expression:"optionModel.numCount"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"题目数量:"}},[n("span",[n("span",{staticClass:"option-sub-label"},[e._v("总页数：")]),e._v(" "),n("el-input-number",{attrs:{min:1,size:"mini",label:"总页数"},model:{value:e.optionModel.pageCount,callback:function(t){e.$set(e.optionModel,"pageCount",t)},expression:"optionModel.pageCount"}}),e._v(" "),n("span",{staticClass:"option-sub-label label-page-size"},[e._v("每页题目数：")]),e._v(" "),n("el-input-number",{attrs:{min:1,size:"mini",label:"每页条数"},model:{value:e.optionModel.pageSize,callback:function(t){e.$set(e.optionModel,"pageSize",t)},expression:"optionModel.pageSize"}})],1)])],1)],1),e._v(" "),n("div",{staticClass:"option-declare"})])},staticRenderFns:[]};var v=n("VU/8")({name:"Option",data:function(){return{optionModel:{opeList:["+","-","*","/"],paraMin:0,paraMax:50,resultMin:0,resultMax:50,numCount:3,examNum:100,pageCount:5,pageSize:60,displayType:1,bracketType:1,isInt:!0}}},methods:{getOption:function(){return this.optionModel}}},m,!1,function(e){n("d/jE")},"data-v-4ab9b1e5",null).exports,d=n("Gu7T"),_=n.n(d);var f={"+":1,"-":1,"*":2,"/":2};function h(e){return null!=f[e]}function b(e,t){if(0!=t.length){var n=t.pop(),a=e.pop(),i=e.pop(),r=void 0;switch(n){case"+":r=i+a;break;case"-":r=i-a;break;case"*":r=i*a;break;case"/":r=i/a}e.push(r)}}function g(e,t){return Math.floor(Math.random()*(t-e+1))+e}function x(e){var t=function(e,t){for(var n=g(e,t);n%2!=0;)n=g(e,t);return n}(0,e.length-2),n=t+2*g(1,e.length)+2;n=Math.min(e.length+1,n),0===t&&n===e.length+1||(e.splice(t,0,"("),e.splice(n,0,")"))}function M(e,t,n,a,i,r){var s=function(e,t,n,a,i){for(var r,s=[g(a,i)],o=1;o<t;o++){var l=(r=e)[Math.floor(Math.random()*r.length)];s.push(l);var u=g(a,i);s.push(u)}return n&&x(s),s}(e,r,n,a,i),o=function(e){for(var t=[],n=[],a=0;a<e.length;a++){var i=e[a];if(isNaN(i)){if(h(i)){for(;0!=n.length&&f[i]<=f[n[n.length-1]];)b(t,n);n.push(i)}else if("("==i)n.push(i);else if(")"==i){for(;0!=n.length&&"("!=n[n.length-1];)b(t,n);n.pop()}}else t.push(parseInt(i))}for(;0!=n.length;)b(t,n);return t[t.length-1]}(s);if(function(e){for(var t=0;t<e.length;t++){var n=e[t],a=void 0;switch(n){case"*":a="&#215;";break;case"/":a="&#247;";break;default:a=n}e[t]=a}}(s),t){var l=function(e){var t=g(0,e.length-1),n=e[t];return e[t]="__",n}(s);return{exp:s.join("")+"=",result:o,toRep:l}}return{exp:s.join("")+"=",result:o}}function C(e){return function(e,t,n,a,i,r,s,o,l,u){for(var c=[],p=0;p<u;){var m=M(e,t,n,a,i,l),v=m.result;v>=r&&v<=s&&(o?v%1==0&&(c.push(m),p++):(c.push(m),p++))}return c}(e.opeList||["+","-","*","/"],2===e.displayType,1!==e.bracketType,e.paraMin||1,e.paraMax||50,e.resultMin||0,e.resultMax||50,e.isInt,e.numCount||3,e.examNum||100)}var k=function(e){var t={0:"零",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九"},n=["个","万","亿","万亿","兆"],a=["","十","百","千"],i=""+e;if(!/^\d+$/.test(i))throw new Error("Not a number");if(e.length>20)throw new Error("Number is too large");var r=i.split("");r.reverse();for(var s=[],o=r.splice(0,4);o.length;)s.push(o),o=r.splice(0,4);var l="";s.forEach(function(e,i){var r="";e.forEach(function(e,n){r=t[e]+a[n]+r}),l=(r+=n[i%6])+l}),a.forEach(function(e){l=l.replace(new RegExp("零"+e,"g"),"零")});for(var u=function(e){var t=n[e];l=l.replace(new RegExp("(零+)"+t,"g"),function(e,n){return 4===n.length?"":t})},c=n.length-1;c>=0;c-=1)u(c);return l=(l=(l=l.replace(/零+/g,"零")).replace(/个/g,"")).replace(/^一十/,"十")},y={name:"CircleNumber",props:{num:{type:Number,default:0}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"circle-number"},[t("span",{staticClass:"circle-number-num"},[this._v(this._s(this.num))])])},staticRenderFns:[]};var E=n("VU/8")(y,w,!1,function(e){n("EEvj")},"data-v-86239eec",null).exports,L={name:"Answer",components:{CircleNumber:E},props:{examPageList:{type:Array,default:null}},methods:{num2Chinese:function(e){return k(e)}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam-answer"},[e.examPageList&&e.examPageList.length>0?e._l(e.examPageList,function(t,a){return n("div",{key:a,staticClass:"sheet-page"},[n("div",{staticClass:"page-title",class:a%5==0?"page-break":""},[e._v("\n        答案（"+e._s(e.num2Chinese(a+1))+"）\n      ")]),e._v(" "),n("div",{staticClass:"page-content"},[e._l(t,function(t,a){return[n("div",{key:a,staticClass:"page-content-item"},[n("span",{staticClass:"item-cell"},[n("CircleNumber",{staticClass:"item-index",attrs:{num:a+1}}),e._v(" "),n("span",[e._v(e._s(t.answer))])],1)])]})],2)])}):e._e()],2)},staticRenderFns:[]};var z={name:"Preview",components:{CircleNumber:E,Answer:n("VU/8")(L,$,!1,function(e){n("jS0/")},"data-v-2f35f7ae",null).exports},data:function(){return{examList:[],pageSize:30}},computed:{pageNum:function(){return Math.ceil(this.examList.length/this.pageSize)},examPageList:function(){var e=this;return this.pageNum>0?[].concat(_()(new Array(this.pageNum).keys())).map(function(t){var n=t*e.pageSize,a=(t+1)*e.pageSize;return e.examList.slice(n,a)}):[]}},methods:{examGenerator:function(e){this.pageSize=e.pageSize;var t=C(e);this.examList=t.map(function(e){return{display:e.exp,answer:e.result}})},num2Chinese:function(e){return k(e)}}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam-preview"},[n("div",[e.examPageList&&e.examPageList.length>0?e._l(e.examPageList,function(t,a){return n("div",{key:a,staticClass:"sheet-page"},[n("div",{staticClass:"page-title"},[e._v("\n          计算题（"+e._s(e.num2Chinese(a+1))+"）\n        ")]),e._v(" "),n("div",{staticClass:"page-subtitle"},[e._v("\n          姓名：________________    \n          日期：________________    \n          得分：________    \n          用时：________\n        ")]),e._v(" "),n("div",{staticClass:"page-content"},[e._l(t,function(t,a){return[n("div",{key:a,staticClass:"page-content-item"},[n("span",{staticClass:"item-cell"},[n("CircleNumber",{staticClass:"item-index",attrs:{num:a+1}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.display)}})],1)])]})],2)])}):e._e()],2),e._v(" "),n("Answer",{attrs:{"exam-page-list":e.examPageList}})],1)},staticRenderFns:[]};var P={name:"Home",components:{Option:v,Preview:n("VU/8")(z,N,!1,function(e){n("2+h/")},"data-v-24a93bbf",null).exports},data:function(){return{examList:[]}},computed:{pageNum:function(){return Math.floor(this.examList.length/30)-1}},methods:{handleExamGenerator:function(){var e=this.$refs.option.getOption();e.examNum=parseInt(e.pageCount*e.pageSize,10),console.log("参数：",e),this.$refs.examPreview.examGenerator(e)},handlePrint:function(){window.print()}}},F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"math"},[t("div",{staticClass:"exam"},[t("div",{staticClass:"print_hide"},[t("div",{staticClass:"option"},[t("Option",{ref:"option"})],1),this._v(" "),t("div",{staticClass:"buttons"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:this.handleExamGenerator}},[this._v("\n          生成\n        ")]),this._v(" "),t("el-button",{on:{click:this.handlePrint}},[this._v("\n          打印\n        ")])],1)]),this._v(" "),t("Preview",{ref:"examPreview"})],1)])},staticRenderFns:[]};var R={name:"Home",components:{topHeader:l,bottomFooter:p,mainMath:n("VU/8")(P,F,!1,function(e){n("+ho5")},"data-v-4d10ecd2",null).exports}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home"}},[t("top-header",{staticClass:"print_hide"}),this._v(" "),t("main",{staticClass:"app-body"},[t("main-math")],1),this._v(" "),t("bottom-footer",{staticClass:"print_hide"})],1)},staticRenderFns:[]};var T={name:"About",components:{topHeader:l,bottomFooter:p}},j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"about"}},[t("top-header"),this._v(" "),this._m(0),this._v(" "),t("bottom-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aboutContent"},[e._v("\n    一个可以生成题库的网站，适用于幼儿园、小学同学"),n("br"),e._v(" "),n("br"),e._v("\n    支持数学加减乘除混合运算，可设置题目，可打印题目"),n("br"),e._v(" "),n("br"),e._v("\n    1. 在线访问："),n("a",{attrs:{href:"https://leanfish2011.github.io/e-learn",target:"_blank"}},[e._v("轻松学-题库")]),n("br"),e._v(" "),n("br"),e._v("\n    2. 离线使用，下载压缩包，用浏览器打开index.html即可访问"),n("br"),e._v(" "),n("br"),e._v("\n    * 链接: "),n("a",{attrs:{href:"https://pan.baidu.com/s/1mq_SrofNQIh-GDL9na8OSA",target:"_blank"}},[e._v("下载链接")]),n("br"),e._v(" "),n("br"),e._v("\n    * 提取码: 7jgn"),n("br"),e._v(" "),n("br"),e._v("\n    使用中有任何问题或者建议，可给作者发邮件：leanfish2011@163.com"),n("br")])}]};var A=[{path:"/",component:n("VU/8")(R,S,!1,function(e){n("HFLm")},"data-v-4d6160c0",null).exports},{path:"/about",component:n("VU/8")(T,j,!1,function(e){n("8BJK")},"data-v-15622418",null).exports}],H=n("zL8q"),U=n.n(H);n("tvR6");a.default.config.productionTip=!1,a.default.use(s.a),a.default.use(U.a);var V=new s.a({routes:A,mode:"hash"});new a.default({el:"#app",components:{App:r},template:"<App/>",router:V})},"d/jE":function(e,t){},"jS0/":function(e,t){},jqHp:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7f719a601719481bde9c.js.map