webpackJsonp([1],{"+RBS":function(e,t){},"+ho5":function(e,t){},CgUh:function(e,t){},IKBt:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(e){n("CgUh")},null,null).exports,r=n("/ocq"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header fixed-header"},[n("div",{staticClass:"header-container"},[e._m(0),e._v(" "),n("div",{staticClass:"right-list"},[n("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal",router:""}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[e._v("数学")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-1",route:"/"}},[e._v("\n            计算题\n          ")])],2),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("英语")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-1",route:"/english"}},[e._v("\n            单词\n          ")])],2),e._v(" "),n("el-menu-item",{attrs:{index:"3",route:"/about"}},[e._v("\n          关于\n        ")])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"home-link",attrs:{href:"/"}},[t("div",{staticClass:"logo"}),this._v(" "),t("span",[this._v("轻松学-题库")])])}]};var l=n("VU/8")({name:"Header",data:function(){return{activeIndex:"1"}}},s,!1,function(e){n("YiEU")},"data-v-6d5ca393",null).exports,_={name:"Footer",data:function(){return{year:""}},methods:{getYear:function(){this.year=(new Date).getFullYear()}},created:function(){this.getYear()}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"footer"},[t("div",{staticClass:"rightInfo"},[t("p",[this._v("Copyright © Tim 2023-"+this._s(this.year))])])]),this._v(" "),t("el-backtop")],1)},staticRenderFns:[]};var d=n("VU/8")(_,u,!1,function(e){n("T3/o")},"data-v-651dca48",null).exports,p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"option"},[n("div",{staticClass:"option-form"},[n("el-form",{attrs:{model:e.optionModel}},[n("el-form-item",{attrs:{label:"运算:"}},[n("el-checkbox-group",{model:{value:e.optionModel.opeList,callback:function(t){e.$set(e.optionModel,"opeList",t)},expression:"optionModel.opeList"}},[n("el-checkbox",{attrs:{label:"+",name:"type",disabled:""}},[e._v("\n              加法\n            ")]),e._v(" "),n("el-checkbox",{attrs:{label:"-",name:"type"}},[e._v("\n              减法\n            ")]),e._v(" "),n("el-checkbox",{attrs:{label:"*",name:"type"}},[e._v("\n              乘法\n            ")]),e._v(" "),n("el-checkbox",{attrs:{label:"/",name:"type"}},[e._v("\n              除法\n            ")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"题型:"}},[n("el-radio-group",{model:{value:e.optionModel.displayType,callback:function(t){e.$set(e.optionModel,"displayType",t)},expression:"optionModel.displayType"}},[n("el-radio",{attrs:{label:1}},[e._v("\n              标准题\n            ")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"括号:"}},[n("el-radio-group",{model:{value:e.optionModel.bracketType,callback:function(t){e.$set(e.optionModel,"bracketType",t)},expression:"optionModel.bracketType"}},[n("el-radio",{attrs:{label:1}},[e._v("\n              无括号\n            ")]),e._v(" "),n("el-radio",{attrs:{label:2}},[e._v("\n              有括号\n            ")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"算数范围:"}},[n("el-input-number",{attrs:{size:"mini",label:"最小值"},model:{value:e.optionModel.paraMin,callback:function(t){e.$set(e.optionModel,"paraMin",t)},expression:"optionModel.paraMin"}}),e._v(" "),n("span",[e._v("—")]),e._v(" "),n("el-input-number",{attrs:{size:"mini",label:"最大值"},model:{value:e.optionModel.paraMax,callback:function(t){e.$set(e.optionModel,"paraMax",t)},expression:"optionModel.paraMax"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"结果范围:"}},[n("el-input-number",{attrs:{size:"mini",label:"最小值"},model:{value:e.optionModel.resultMin,callback:function(t){e.$set(e.optionModel,"resultMin",t)},expression:"optionModel.resultMin"}}),e._v(" "),n("span",[e._v("—")]),e._v(" "),n("el-input-number",{attrs:{size:"mini",label:"最大值"},model:{value:e.optionModel.resultMax,callback:function(t){e.$set(e.optionModel,"resultMax",t)},expression:"optionModel.resultMax"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"算数个数:"}},[n("el-input-number",{attrs:{min:2,max:5,size:"mini",label:"算数个数"},model:{value:e.optionModel.numCount,callback:function(t){e.$set(e.optionModel,"numCount",t)},expression:"optionModel.numCount"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"题目数量:"}},[n("span",[n("span",{staticClass:"option-sub-label"},[e._v("总页数：")]),e._v(" "),n("el-input-number",{attrs:{min:1,size:"mini",label:"总页数"},model:{value:e.optionModel.pageCount,callback:function(t){e.$set(e.optionModel,"pageCount",t)},expression:"optionModel.pageCount"}}),e._v(" "),n("span",{staticClass:"option-sub-label label-page-size"},[e._v("每页题目数：")]),e._v(" "),n("el-input-number",{attrs:{min:1,size:"mini",label:"每页条数"},model:{value:e.optionModel.pageSize,callback:function(t){e.$set(e.optionModel,"pageSize",t)},expression:"optionModel.pageSize"}})],1)])],1)],1),e._v(" "),n("div",{staticClass:"option-declare"})])},staticRenderFns:[]};var c=n("VU/8")({name:"Option",data:function(){return{optionModel:{opeList:["+","-","*","/"],paraMin:0,paraMax:50,resultMin:0,resultMax:50,numCount:3,examNum:100,pageCount:1,pageSize:120,displayType:1,bracketType:1,isInt:!0}}},methods:{getOption:function(){return this.optionModel}}},p,!1,function(e){n("Yw87")},"data-v-54387e68",null).exports,v=n("Gu7T"),m=n.n(v);var h={"+":1,"-":1,"*":2,"/":2};function f(e){return null!=h[e]}function g(e,t){if(0!=t.length){var n=t.pop(),a=e.pop(),i=e.pop(),o=void 0;switch(n){case"+":o=i+a;break;case"-":o=i-a;break;case"*":o=i*a;break;case"/":o=i/a}e.push(o)}}function b(e,t){return Math.floor(Math.random()*(t-e+1))+e}function y(e){var t=function(e,t){for(var n=b(e,t);n%2!=0;)n=b(e,t);return n}(0,e.length-2),n=t+2*b(1,e.length)+2;n=Math.min(e.length+1,n),0===t&&n===e.length+1||(e.splice(t,0,"("),e.splice(n,0,")"))}function x(e,t,n,a,i,o){var r=function(e,t,n,a,i){for(var o,r=[b(a,i)],s=1;s<t;s++){var l=(o=e)[Math.floor(Math.random()*o.length)];r.push(l);var _=b(a,i);r.push(_)}return n&&y(r),r}(e,o,n,a,i),s=function(e){for(var t=[],n=[],a=0;a<e.length;a++){var i=e[a];if(isNaN(i)){if(f(i)){for(;0!=n.length&&h[i]<=h[n[n.length-1]];)g(t,n);n.push(i)}else if("("==i)n.push(i);else if(")"==i){for(;0!=n.length&&"("!=n[n.length-1];)g(t,n);n.pop()}}else t.push(parseInt(i))}for(;0!=n.length;)g(t,n);return t[t.length-1]}(r);if(function(e){for(var t=0;t<e.length;t++){var n=e[t],a=void 0;switch(n){case"*":a="&#215;";break;case"/":a="&#247;";break;default:a=n}e[t]=a}}(r),t){var l=function(e){var t=b(0,e.length-1),n=e[t];return e[t]="__",n}(r);return{exp:r.join("")+"=",result:s,toRep:l}}return{exp:r.join("")+"=",result:s}}function k(e){return function(e,t,n,a,i,o,r,s,l,_){for(var u=[],d=0;d<_;){var p=x(e,t,n,a,i,l),c=p.result;c>=o&&c<=r&&(s?c%1==0&&(u.push(p),d++):(u.push(p),d++))}return u}(e.opeList||["+","-","*","/"],2===e.displayType,1!==e.bracketType,e.paraMin||1,e.paraMax||50,e.resultMin||0,e.resultMax||50,e.isInt,e.numCount||3,e.examNum||100)}var w=function(e){var t={0:"零",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九"},n=["个","万","亿","万亿","兆"],a=["","十","百","千"],i=""+e;if(!/^\d+$/.test(i))throw new Error("Not a number");if(e.length>20)throw new Error("Number is too large");var o=i.split("");o.reverse();for(var r=[],s=o.splice(0,4);s.length;)r.push(s),s=o.splice(0,4);var l="";r.forEach(function(e,i){var o="";e.forEach(function(e,n){o=t[e]+a[n]+o}),l=(o+=n[i%6])+l}),a.forEach(function(e){l=l.replace(new RegExp("零"+e,"g"),"零")});for(var _=function(e){var t=n[e];l=l.replace(new RegExp("(零+)"+t,"g"),function(e,n){return 4===n.length?"":t})},u=n.length-1;u>=0;u-=1)_(u);return l=(l=(l=l.replace(/零+/g,"零")).replace(/个/g,"")).replace(/^一十/,"十")},j={name:"CircleNumber",props:{num:{type:Number,default:0}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"circle-number"},[t("span",{staticClass:"circle-number-num"},[this._v(this._s(this.num))])])},staticRenderFns:[]};var M=n("VU/8")(j,C,!1,function(e){n("d/Sy")},"data-v-2141e0e2",null).exports,E={name:"Answer",components:{CircleNumber:M},props:{examPageList:{type:Array,default:null}},methods:{num2Chinese:function(e){return w(e)}}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam-answer"},[e.examPageList&&e.examPageList.length>0?e._l(e.examPageList,function(t,a){return n("div",{key:a,staticClass:"sheet-page"},[n("div",{staticClass:"page-title",class:a%5==0?"page-break":""},[e._v("\n        答案（"+e._s(e.num2Chinese(a+1))+"）\n      ")]),e._v(" "),n("div",{staticClass:"page-content"},[e._l(t,function(t,a){return[n("div",{key:a,staticClass:"page-content-item"},[n("span",{staticClass:"item-cell"},[n("CircleNumber",{staticClass:"item-index",attrs:{num:a+1}}),e._v(" "),n("span",[e._v(e._s(t.answer))])],1)])]})],2)])}):e._e()],2)},staticRenderFns:[]};var U=n("VU/8")(E,z,!1,function(e){n("o0E4")},"data-v-1d94111e",null).exports,$={name:"Preview",components:{CircleNumber:M,Answer:U},data:function(){return{examList:[],pageSize:30}},computed:{pageNum:function(){return Math.ceil(this.examList.length/this.pageSize)},examPageList:function(){var e=this;return this.pageNum>0?[].concat(m()(new Array(this.pageNum).keys())).map(function(t){var n=t*e.pageSize,a=(t+1)*e.pageSize;return e.examList.slice(n,a)}):[]}},methods:{examGenerator:function(e){this.pageSize=e.pageSize;var t=k(e);this.examList=t.map(function(e){return{display:e.exp,answer:e.result}})},num2Chinese:function(e){return w(e)}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam-preview"},[n("div",[e.examPageList&&e.examPageList.length>0?e._l(e.examPageList,function(t,a){return n("div",{key:a,staticClass:"sheet-page"},[n("div",{staticClass:"page-title"},[e._v("\n          计算题（"+e._s(e.num2Chinese(a+1))+"）\n        ")]),e._v(" "),n("div",{staticClass:"page-subtitle"},[e._v("\n          姓名：________________    \n          日期：________________    \n          得分：________    \n          用时：________\n        ")]),e._v(" "),n("div",{staticClass:"page-content"},[e._l(t,function(t,a){return[n("div",{key:a,staticClass:"page-content-item"},[n("span",{staticClass:"item-cell"},[n("CircleNumber",{staticClass:"item-index",attrs:{num:a+1}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.display)}})],1)])]})],2)])}):e._e()],2),e._v(" "),n("Answer",{attrs:{"exam-page-list":e.examPageList}})],1)},staticRenderFns:[]};var P={name:"Home",components:{Option:c,Preview:n("VU/8")($,L,!1,function(e){n("fOvU")},"data-v-6c1616fe",null).exports},data:function(){return{examList:[]}},computed:{pageNum:function(){return Math.floor(this.examList.length/30)-1}},methods:{handleExamGenerator:function(){var e=this.$refs.option.getOption();e.examNum=parseInt(e.pageCount*e.pageSize,10),console.log("参数：",e),this.$refs.examPreview.examGenerator(e)},handlePrint:function(){window.print()}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"math"},[t("div",{staticClass:"exam"},[t("div",{staticClass:"print_hide"},[t("div",{staticClass:"option"},[t("Option",{ref:"option"})],1),this._v(" "),t("div",{staticClass:"buttons"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:this.handleExamGenerator}},[this._v("\n          生成\n        ")]),this._v(" "),t("el-button",{on:{click:this.handlePrint}},[this._v("\n          打印\n        ")])],1)]),this._v(" "),t("Preview",{ref:"examPreview"})],1)])},staticRenderFns:[]};var N={name:"MathHome",components:{topHeader:l,bottomFooter:d,mainMath:n("VU/8")(P,S,!1,function(e){n("+ho5")},"data-v-4d10ecd2",null).exports}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home"}},[t("top-header",{staticClass:"print_hide"}),this._v(" "),t("main",{staticClass:"app-body"},[t("main-math")],1),this._v(" "),t("bottom-footer",{staticClass:"print_hide"})],1)},staticRenderFns:[]};var R=n("VU/8")(N,T,!1,function(e){n("vtsx")},"data-v-c24d4b7e",null).exports,F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"option"},[n("div",{staticClass:"option-form"},[n("el-form",{attrs:{model:e.optionModel,size:"mini"}},[n("el-form-item",{attrs:{label:"年级："}},[n("el-select",{attrs:{placeholder:"请选择年级"},model:{value:e.optionModel.grade,callback:function(t){e.$set(e.optionModel,"grade",t)},expression:"optionModel.grade"}},e._l(e.allGrades,function(e){return n("label",[n("el-option",{attrs:{label:e.label,value:e.value}})],1)}),0)],1),e._v(" "),n("el-form-item",{attrs:{label:"单元："}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择单元"},model:{value:e.optionModel.units,callback:function(t){e.$set(e.optionModel,"units",t)},expression:"optionModel.units"}},e._l(e.allUnits,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"题型："}},[n("el-select",{attrs:{placeholder:"请选择题型"},model:{value:e.optionModel.questionType,callback:function(t){e.$set(e.optionModel,"questionType",t)},expression:"optionModel.questionType"}},e._l(e.allQuestionTypes,function(e){return n("label",[n("el-option",{attrs:{label:e.label,value:e.value}})],1)}),0)],1),e._v(" "),n("el-form-item",{attrs:{label:"题目数量:"}},[n("span",[n("span",{staticClass:"option-sub-label"},[e._v("总页数：")]),e._v(" "),n("el-input-number",{attrs:{min:1,label:"总页数"},model:{value:e.optionModel.pageCount,callback:function(t){e.$set(e.optionModel,"pageCount",t)},expression:"optionModel.pageCount"}}),e._v(" "),n("span",{staticClass:"option-sub-label label-page-size"},[e._v("每页题目数：")]),e._v(" "),n("el-input-number",{attrs:{min:1,label:"每页条数"},model:{value:e.optionModel.pageSize,callback:function(t){e.$set(e.optionModel,"pageSize",t)},expression:"optionModel.pageSize"}})],1)])],1)],1),e._v(" "),n("div",{staticClass:"option-declare"})])},staticRenderFns:[]};var A=n("VU/8")({name:"Option",data:function(){return{optionModel:{grade:"7-1",units:[1],questionType:1,examNum:100,pageCount:1,pageSize:120},allGrades:[{label:"七年级-上册",value:"7-0"},{label:"七年级-下册",value:"7-1"}],allUnits:[{label:"Unit 1",value:1},{label:"Unit 2",value:2},{label:"Unit 3",value:3},{label:"Unit 4",value:4},{label:"Unit 5",value:5},{label:"Unit 6",value:6},{label:"Unit 7",value:7},{label:"Unit 8",value:8},{label:"Unit 9",value:9},{label:"Unit 10",value:10},{label:"Unit 11",value:11},{label:"Unit 12",value:12}],allQuestionTypes:[{label:"单词补全",value:1},{label:"意思匹配",value:2}]}},methods:{getOption:function(){return this.optionModel}}},F,!1,function(e){n("R5DH")},"data-v-6cdad460",null).exports,H=n("c/Tr"),O=n.n(H),V={"7-0":{"unit-1":{},"unit-2":{},"unit-3":{},"unit-4":{},"unit-5":{}},"7-1":{"unit-1":["guitar_n.吉他","sing_v.唱;唱歌","swim_v.＆n.游泳","dance_v.跳舞;n.舞蹈","draw_v.画","chess_n.国际象棋","play chess_下国际象棋","speak_v.说(某种语言);说话","speak English_说英语","join_v.参加;加入","club_n.俱乐部;社团","be good at…_擅长于…","tell_v.讲述;告诉","story_n.故事;小说","write_v.写作;写字","show_n.演出;节目; v.给…看;展示","or_conj.或者;也不(用于否定句)","talk_v.＆n.说话;交谈","talk to…_跟……说","kung fu_n.(中国)功夫","drum_n.鼓","play the drums_敲鼓","piano_n.钢琴","play the piano_弹钢琴","violin_n.小提琴","play the violin_拉小提琴","also_adv.也;而且","people_n.人;人们","home_n.家;活动本部; adv.到家;在家","be good with…_善于应付……的;对……有办法","make_v.使成为;制造","make friends_结交朋友","today_adv.在今天","help (sb) with sth_在某方面帮助(某人)","center (=centre)_n.中心;中央","weekend_n.周末","on the weekend_(在)周末","teach_v.教;讲授","musician_n.音乐家"],"unit-2":["up_adv.向上","get up_起床;站起","dress_v.&n.穿衣服;连衣裙","get dressed_穿上衣服","brush_v.&n.刷;刷净;刷子","teeth_pl.牙齿","tooth_n.牙齿","shower_n.&v.淋浴;淋浴器(间)","take a shower_洗淋浴","usually_adv.通常地;一般地","forty_num.四十","wow_int.(表示惊奇或敬佩)哇;呀","never_adv.从不;绝不","early_adv.&adj.早(的)","fifty_num.五十","job_n.工作;职业","work_v.&n.工作","station_n.电(视)台;车站","radio station_广播电台","o'clock_adv.(表示整点)……点钟","night_n.晚上;夜晚","funny_adj.奇怪的;滑稽好笑的","exercise_v.&n.锻炼;练习","on weekends_(在)周末","best_adj.&adv.最好的;最好地;最","group_n.组;群","half_n.&pron.一半;半数","past_prep.晚于;过(时间); adj.过去的","quarter_n.一刻钟;四分之一","homework_n.家庭作业","do (one's) homework_做作业","run_v.跑;奔","clean_v.打扫;弄干净; adj.干净的","walk_n.&v.行走;步行","take a walk_散步;走一走","quickly_adv.很快地","either_adv.或者;也(用在否定词组后)","either…or…_要么…要么…;或者…或者…","lot_pron.大量;许多","lots of_大量;许多","sometimes_adv.有时","taste_v.有…的味道;品尝; n.味道;滋味","lives_pl.生活;生命","life_n.生活;生命"],"unit-3":["train_n.火车","bus_n.公共汽车","subway_n.地铁","take the subway_乘地铁","ride_v.&n.骑;旅程","bike_n.自行车","ride a bike_骑自行车","sixty_num.六十","seventy_num.七十","eighty_num.八十","ninety_num.九十","hundred_num.一百","minute_n.分钟","far_adv.&adj.远;远的","kilometer_n.千米;公里","new_adj.新的;刚出现的","every_adj.每一;每个","every day 每天","by_prep.(表示方式)乘(交通工具)","by bike_骑自行车","drive_v.开车","car_n.小汽车;轿车","live_v.居住;生活","stop_n.车站;停止","think of_认为","cross_v.横过;越过","river_n.河;江","many_adj.&pron.许多","village_n.村庄;村镇","between_prep.介于……之间","between…and…_在……和……之间","bridge_n.桥","boat_n.小船","ropeway_n.索道","year_n.年;岁","afraid_adj.害怕;畏惧","like_prep.像;怎么样","villager_n.村民","leave_v.离开","dream_n.梦想;睡梦;v.做梦","true_adj.真的;符合事实的","come ture 实现;成为现实"],"unit-4":["rule_n.规则;规章","arrive_v.到达","(be) on time_准时","hallway_n.走廊;过道","hall_n.大厅;礼堂","dining hall_餐厅","listen_v.听;倾听","listen to…_听……","fight_v.&n.打架;战斗","sorry_adj.抱歉的;难过的;惋惜的","outside_adv.在外面; adj.外面的","wear_v.穿;戴","important_adj.重要的","bring_v.带来;取来","uniform_n.校服;制服","quiet_adj.安静的","out_adv.外出","go out_外出(娱乐)","practice_v.&n.练习","dish_n.碟;盘","do the dishes_清洗餐具","before_prep.&conj.在……以前;adv.以前","make (one's) bed_铺床","dirty_adj.脏的","kitchen_n.厨房","more_adj.&pron.更多(的)","noisy_adj.吵闹的","relax_v.放松;休息","read_v.读;阅读","terrible_adj.非常讨厌的;可怕的","feel_v.感受;觉得","strict_adj.严格的;严厉的","be strict (with sb)_(对某人)要求严格","remember_v.记住;记起","follow_v.遵循;跟随","follow the rules_遵守规则","luck_n.幸运;运气","keep_v.保持;保留","hair_n.头发;毛发","learn_v.学习;学会"],"unit-5":["panda_n.熊猫","zoo_n.动物园","tiger_n.老虎","elephant_n.大象","koala_n.树袋熊;考拉","lion_n.狮子","giraffe_n.长颈鹿","animal_n.动物","cute_adj.可爱的;机灵的","lazy_adj.懒散的;懒惰的","smart_adj.聪明的","beautiful_adj.美丽的;美好的","scary_adj.吓人的;恐怖的","kind_n.种类","kind of 稍微;有点儿","Australia_n.澳大利亚","south_adj.南方的; n.南;南方","Africa_n.非洲","South Africa_南非","pet_n.宠物","leg_n.腿","cat_n.猫","sleep_v.&n.睡觉","friendly_adj.友好的","shy_adj.羞怯的;腼腆的","save_v.救;救助","symbol_n.象征","flag_n.旗;旗帜","forget_v.忘记;遗忘","get lost 迷路","place_n.地点;位置","water_n.水","danger_n.危险","be in (great) danger_处于(极大)危险之中","cut_v.砍;切","down_adv.(坐、躺、倒)下; prep.向下;沿着","cut down 砍倒","tree_n.树","kill_v.杀死;弄死","ivory_n.象牙","over_prep.超过，多于;在……上方","(be) made of_由……制成的"],"unit-6":["newspaper_n.报纸","read a newspaper_看报纸","use_v.使用;运用","soup_n.汤","make soup_做汤","wash_v.洗","movie_n.电影","go to the movies_看电影","just_adv.只是;恰好","eat out_出去吃饭","house_n.房子","drink_v..喝; n饮料","tea_n.茶;茶叶","drink tea_喝茶","tomorrow_adv.在明天; n.明天;未来","pool_n.游泳池;水池","shop_v.购物; n.商店","supermarket_n.超市","man_n.男人;人","race_n.竞赛","host_n.主人;东道主","study_v.&n.学习;研究","state_n.州","the United States_美国","American_adj.美国的;美洲的;n.美国人;美洲人","dragon_n.龙","Dragon Boat Festival_端午节","any_adj.任何的;任一的; pron.任何;任一","other_adj.另外的;其他的;","pron.另外的人(或物)","young_adj.幼小的;年轻的","child_n.儿童","miss_v.怀念;怀念","wish_v.希望","delicious_adj.可口的;美味的","still_adv.还;仍然","living room_客厅"],"unit-7":["rain_v.下雨; n.雨水","windy_adj.多风的","cloudy_adj.多云的","sunny_adj.晴朗的","snow_v.下雪; n.雪","weather_n.天气","cook_v.做饭","bad_adj.坏的;糟的","park_n.公园","message_n.信息;消息","take a message_捎个口信;传话","him_pron.他(he的宾格)","could modal_v.能;可以","back_adv.回来;回原处","call (sb) back_(给某人)回电话","problem_n.困难;难题","again_adv.再一次;又一次","dry_adj.干燥的","cold_adj.寒冷的;冷的","hot_adj.热的","warm_adj.温暖的","visit_v.拜访;参观","Canada_n.加拿大","summer_n.夏天;夏季","sit_v.坐","juice_n.果汁;饮料","soon_adv.不久;很快","vacation_n.假期","on (a) vacation_度假","hard_adv.努力地; adj.困难的","Europe_n.欧洲","mountain_n.高山","country_n.国;国家","skate_v.滑冰","snowy_adj.下雪的","winter_n.冬天;冬季","Russian_adj.俄罗斯的; n.俄罗斯人;俄语","snowman_n.雪人","rainy_adj.阴雨的;多雨的"],"unit-8":["post_n.邮政","office_n.办公室","post office_邮局","police_n.警察","police station_警察局","hotel_n.旅馆;酒店","restaurant_n.餐馆","bank_n.银行","hospital_n.医院","street_n.大街","pay_v.&n.付费","pay phone_付费电话","near_prep.在……附近","across_adv.&prep.过;穿过","across from_在……对面","front_n.前面","in front of_在……前面","behind_prep.在……后面","town_n.镇;市镇","around_adv.&prep.到处;大约","north_n.北;北方; adj.北方的","along prep.沿着","go along (the street)_沿着(这条街)走","turn_v.转向;翻","right_adv.&n.向右边;右边","left_adv.&n.向左边;左边","turn right_向右","crossing_n.十字路口","neighborhood_n.街区;街坊","spend_v.花(时间、钱等)","spend time_花时间","climb_v.爬","road_n.路","often_adv.时常;常常","air_n.空气","sunshine_n.阳光","free_adj.免费的","enjoy_v.享受;喜爱","enjoy reading_喜欢阅读","easily_adv.容易地","money_n.钱"],"unit-9":["curly_adj.卷曲的","straight_adj.直的","tall_adj.高的","medium_adj.中等的","height_n.身高;高度","(be) of medium height_中等身高","thin_adj.瘦的","heavy_adj.重的","build_n.身材","(be) of medium build_中等身材","tonight_adv.&n.(在)今晚;(在)今夜","little_adj.小的","a little_一点;少量","cinema_n.电影院","glasses_n.(pl.)眼睛","later_adv.以后","handsome_adj.英俊的","actor_n.演员","actress_n.女演员","person_n.人","nose_n.鼻子","blonde_adj.金黄色的","mouth_n.嘴","round_adj.圆形的","face_n.脸","eye_n.眼睛","singer_n.歌手","artist_n.艺术家","crime_n.犯罪活动","criminal_n.罪犯","put_v.放","each_adj.&pron.每个;各自","way_n.方式;路线","describe_v.描述","differently_adv.不同地","another_adj.&pron.另一;又一","end_n.结尾;尽头","in the end_最后","real_adj.真正的;真实的","jeans_n.牛仔裤"],"unit-10":["noodle_n.面条","mutton_n.羊肉","beef_n.牛肉","cabbage_n.卷心菜;洋白菜","potato_n.土豆;马铃薯","special_n.特色菜;特价品;","adj.特别的;特殊的","would modal_v.(表示意愿)愿意","would like_(表示意愿)愿意;喜欢","yet_adv.(常用于否定句或疑问句)还;仍然","large_adj.大号的;大的","order_n.&v.点菜;命令","take one's order_点菜","size_n.大小;尺码","bowl_n.碗","one (large) bowl of…_一(大)碗...","tofu_n.豆腐","meat_n.(可食用的)肉","dumpling_n.饺子","porridge_n.粥;面糊","onion_n.洋葱","fish_n.鱼;鱼肉","pancake_n.烙饼;薄饼","world_n.世界","around the world_世界各地","answer_n.答案; v.回答","different_adj.不同的","cake_n.蛋糕","candle_n.蜡烛","age_n.年龄","make a wish_许愿","blow_v.吹","blow out_吹灭","if_conj.如果","will_v.将要;会","the UK_n.英国","candy_n.糖果","lucky_adj.幸运的","popular_adj.受欢迎的;普遍的","get popular_受欢迎;流行","cut up_切碎","idea_n.想法;主意","bring good luck to…_给……带来好运"],"unit-11":["milk_v.挤奶","cow_n.奶牛","milk a cow_给奶牛挤奶","horse_n.马","ride a horse_骑马","feed_)喂养;饲养","feed chickens_喂鸡","farmer_n.农民;农场主","quite_adv.相当;完全","quite a lot (of…)_许多","anything_pron.(常用于否定句或疑问句)任何东西;任何事物","grow_v.种植;生长;发育","farm_n.农场; v.务农;种田","pick_v.采;摘","excellent_adj.极好的;优秀的","countryside_n.乡村;农村","in the countryside_在乡下;在农村","yesterday_adv.昨天","flower_n.花","worry_v.&n.担心;担忧","luckily_adv.幸运地;好运地","sun_n.太阳","museum_n.博物馆","fire_n.火;火灾","fire station_消防站","painting_n.油画;绘画","exciting_adj.使人兴奋的;令人激动的","lovely_adj.可爱的","expensive_adj.昂贵的","cheap_adj.廉价的;便宜的","slow_adj.缓慢的;迟缓的","fast_adv.&adj.快地(的)","robot_n.机器人","guide_n.导游;向导","gift_n.礼物;赠品","all in all_总的说来","everything_pron.所有事物;一切","interested_adj.感兴趣的","be interested in_对……感兴趣","dark_adj.黑暗的;昏暗的","hear_v.听到;听见"],"unit-12":["camp_v.扎营;搭帐篷","lake_n.湖;湖泊","beach_n.海滩;沙滩","badminton_n.羽毛球运动","sheep_n.羊;绵羊","as_prep.&adv.作为;当作","natural_adj.自然的","butterfly_n.蝴蝶","visitor_n.游客;访问者","tired_adj.疲倦的;疲劳的","stay_v.停留;待","stay up late_深夜不睡;熬夜","away_adv.离开;远离","run away 跑开","mouse_n.老鼠;耗子","baby_adj.幼小的;n.婴儿","shout_v.呼叫;喊叫","shout at…_冲……大声叫嚷","woof_int.(狗叫声)汪汪","language_n.语言","fly_v.飞","kite_n.风筝","fiy a kite_放风筝","high_adj.&adv.高的(地)","high school_中学","ago_adv.以前","India_n.印度","tent_n.帐篷","put up_搭起;举起","moon_n.月亮","surprise_n.惊奇;惊讶;v.使吃惊","get a surprise_吃惊","snake_n.蛇","scared_adj.惊慌的;吓坏了的","move_v.移动","shout to…_对……大声喊叫","start_v.开始;着手","jump_v.跳;跃","up and down_上上下下;起伏","wake_v.弄醒;醒","wake…up_把……弄醒","into_prep.到……里面;进入","forest_n.森林","ear_n.耳朵"]}};function q(e,t){return Math.floor(Math.random()*(t-e+1))+e}function G(e,t){return{exp:function(e,t){var n=e.split("_"),a=[];a.push(n[1]),a.push(" ");for(var i=O()(n[0]),o=q(1,i.length);o>0;){var r=q(0,i.length-1),s=i[r];"_"!=s&&" "!=s&&(i[r]="_ "),o--}var l=i.join("");return a.push(l),a}(e).join(""),result:e.split("_")[0]}}function I(e,t,n,a){var i=function(e,t){var n=0;return t.forEach(function(t){n+=V[e]["unit-"+t].length}),n}(e,t);if(void 0!=i&&0!=i){a>i&&(a=i);var o=function(e,t,n){for(var a=[];n>0;){var i=q(e,t);a.includes(i)||(a.push(i),n--)}return a}(0,i-1,a);console.log(o);var r=[];t.forEach(function(t){V[e]["unit-"+t].forEach(function(e){r.push(e)})});var s=[];return o.forEach(function(e){var t=G(r[e]);s.push(t)}),s}}var Y={name:"Preview",components:{CircleNumber:M,Answer:U},data:function(){return{examList:[],pageSize:30}},computed:{pageNum:function(){return Math.ceil(this.examList.length/this.pageSize)},examPageList:function(){var e=this;return this.pageNum>0?[].concat(m()(new Array(this.pageNum).keys())).map(function(t){var n=t*e.pageSize,a=(t+1)*e.pageSize;return e.examList.slice(n,a)}):[]}},methods:{examGenerator:function(e){this.pageSize=e.pageSize;var t=function(e){var t=e.grade||"7-0",n=e.units||[1];return e.questionType,I(t,n,0,e.examNum||100)}(e);this.examList=t.map(function(e){return{display:e.exp,answer:e.result}})},num2Chinese:function(e){return w(e)}}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam-preview"},[n("div",[e.examPageList&&e.examPageList.length>0?e._l(e.examPageList,function(t,a){return n("div",{key:a,staticClass:"sheet-page"},[n("div",{staticClass:"page-title"},[e._v("\n          单词题（"+e._s(e.num2Chinese(a+1))+"）\n        ")]),e._v(" "),n("div",{staticClass:"page-subtitle"},[e._v("\n          姓名：________________    \n          日期：________________    \n          得分：________    \n          用时：________\n        ")]),e._v(" "),n("div",{staticClass:"page-content"},[e._l(t,function(t,a){return[n("div",{key:a,staticClass:"page-content-item"},[n("span",{staticClass:"item-cell"},[n("CircleNumber",{staticClass:"item-index",attrs:{num:a+1}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.display)}})],1)])]})],2)])}):e._e()],2),e._v(" "),n("Answer",{attrs:{"exam-page-list":e.examPageList}})],1)},staticRenderFns:[]};var D={name:"English",components:{Option:A,Preview:n("VU/8")(Y,B,!1,function(e){n("grko")},"data-v-30f457d2",null).exports},data:function(){return{examList:[]}},computed:{pageNum:function(){return Math.floor(this.examList.length/30)-1}},methods:{handleExamGenerator:function(){var e=this.$refs.option.getOption();e.examNum=parseInt(e.pageCount*e.pageSize,10),console.log("参数：",e),this.$refs.examPreview.examGenerator(e)},handlePrint:function(){window.print()}}},K={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"math"},[t("div",{staticClass:"exam"},[t("div",{staticClass:"print_hide"},[t("div",{staticClass:"option"},[t("Option",{ref:"option"})],1),this._v(" "),t("div",{staticClass:"buttons"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:this.handleExamGenerator}},[this._v("\n          生成\n        ")]),this._v(" "),t("el-button",{on:{click:this.handlePrint}},[this._v("\n          打印\n        ")])],1)]),this._v(" "),t("Preview",{ref:"examPreview"})],1)])},staticRenderFns:[]};var Q={name:"EnglishHome",components:{topHeader:l,bottomFooter:d,mainEnglish:n("VU/8")(D,K,!1,function(e){n("yZPH")},"data-v-97d6c354",null).exports}},Z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home"}},[t("top-header",{staticClass:"print_hide"}),this._v(" "),t("main",{staticClass:"app-body"},[t("main-english")],1),this._v(" "),t("bottom-footer",{staticClass:"print_hide"})],1)},staticRenderFns:[]};var J={name:"About",components:{topHeader:l,bottomFooter:d}},W={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"about"}},[t("top-header"),this._v(" "),this._m(0),this._v(" "),t("bottom-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aboutContent"},[e._v("\n    一个可以生成试题的网站，适用于幼儿园、小学、初中同学单元测试"),n("br"),e._v(" "),n("h4",[e._v("支持功能")]),e._v(" "),n("ul",[n("li",[e._v("\n        数学：加减乘除混合运算\n      ")]),e._v(" "),n("li",[e._v("\n        英语：单词训练\n      ")]),e._v(" "),n("li",[e._v("\n        可设置题目数量，可打印题目\n      ")])]),e._v(" "),n("h4",[e._v("访问方式")]),e._v(" "),n("ul",[n("li",[e._v("在线访问："),n("a",{attrs:{href:"https://leanfish2011.github.io/e-learn",target:"_blank"}},[e._v("轻松学-题库")])]),e._v(" "),n("li",[e._v("离线使用：下载压缩包，用浏览器打开index.html即可访问\n        "),n("ul",[n("li",[e._v("\n            链接: "),n("a",{attrs:{href:"https://pan.baidu.com/s/1mq_SrofNQIh-GDL9na8OSA",target:"_blank"}},[e._v("下载链接")])]),e._v(" "),n("li",[e._v("\n            提取码: 7jgn\n          ")])])])]),e._v(" "),n("br"),e._v(" "),n("br"),e._v("\n    使用中有任何问题或者建议，可给作者发邮件：leanfish2011@163.com"),n("br")])}]};var X=[{path:"/",component:R},{path:"/english",component:n("VU/8")(Q,Z,!1,function(e){n("IKBt")},"data-v-10187c8a",null).exports},{path:"/about",component:n("VU/8")(J,W,!1,function(e){n("+RBS")},"data-v-006dc866",null).exports}],ee=n("zL8q"),te=n.n(ee);n("tvR6");a.default.config.productionTip=!1,a.default.use(r.a),a.default.use(te.a);var ne=new r.a({routes:X,mode:"hash"});new a.default({el:"#app",components:{App:o},template:"<App/>",router:ne})},R5DH:function(e,t){},"T3/o":function(e,t){},YiEU:function(e,t){},Yw87:function(e,t){},"d/Sy":function(e,t){},fOvU:function(e,t){},grko:function(e,t){},o0E4:function(e,t){},tvR6:function(e,t){},vtsx:function(e,t){},yZPH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a6356e332f7db1be5c7f.js.map