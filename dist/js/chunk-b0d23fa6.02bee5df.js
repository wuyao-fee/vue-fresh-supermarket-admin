(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0d23fa6"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},2923:function(t,e,r){},3207:function(t,e,r){"use strict";r("ef55")},"59f0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},[r("search-box",{attrs:{data:t.categoryList},on:{submit:t.searchSubmit}}),r("a-button",{staticClass:"product-add-btn"},[r("router-link",{attrs:{to:{name:"ProductAdd"}}},[t._v("添加商品")])],1),r("product-table",{attrs:{data:t.tableData,page:t.page,categotyList:t.categoryList},on:{change:t.changePage,edit:t.editProduct,remove:t.removeProduct}})],1)},o=[],a=r("5530"),i=r("1da1"),c=(r("96cf"),r("159b"),r("d81d"),r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-box"},[r("a-form-model",{attrs:{layout:"inline",model:t.searchForm},on:{submit:t.handleSubmit},nativeOn:{submit:function(t){t.preventDefault()}}},[r("a-form-model-item",{attrs:{label:"搜索关键字"}},[r("a-input",{attrs:{placeholder:"请输入关键字"},model:{value:t.searchForm.searchWord,callback:function(e){t.$set(t.searchForm,"searchWord",e)},expression:"searchForm.searchWord"}})],1),r("a-form-model-item",{attrs:{label:"商品类目"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择商品类目",allowClear:""},on:{change:t.handleChange}},t._l(t.data,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-model-item",[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 搜索 ")])],1)],1)],1)}),u=[],s={data:function(){return{searchForm:{searchWord:"",category:""}}},props:["data"],created:function(){},methods:{handleSubmit:function(){this.$emit("submit",this.searchForm)},handleChange:function(t){console.log(t),this.searchForm.category=t}}},l=s,h=(r("3207"),r("2877")),f=Object(h["a"])(l,c,u,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-table",{attrs:{columns:t.columns,"data-source":t.tableData,pagination:t.page},on:{change:t.changePage},scopedSlots:t._u([{key:"operation",fn:function(e,n){return r("div",{},[r("a-button",{on:{click:function(e){return t.editProduct(n)}}},[t._v("编辑")]),r("a-button",{on:{click:function(e){return t.removeProduct(n)}}},[t._v("删除")])],1)}}])})},m=[],y=[{title:"ID",dataIndex:"id",key:"id"},{title:"标题",dataIndex:"title",key:"address title",ellipsis:!0},{title:"描述",dataIndex:"desc",key:"desc",ellipsis:!0},{title:"类名",dataIndex:"categoryName",key:"category",ellipsis:!0},{title:"预售价",dataIndex:"price",key:"price"},{title:"折扣价",dataIndex:"price_off",key:"price_off"},{title:"标签",dataIndex:"tags",key:"tags",ellipsis:!0},{title:"限购数量",dataIndex:"inventory",key:"inventory",ellipsis:!0},{title:"上架状态",dataIndex:"status",key:"status",ellipsis:!0,customRender:function(t,e){return 1===e.status?"上架":"下架"}},{title:"操作",dataIndex:"operation",key:"operation",width:"200px",scopedSlots:{customRender:"operation"}}],g={data:function(){return{columns:y}},props:["data","page"],computed:{tableData:function(){return this.data.map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{key:t.id})}))}},methods:{changePage:function(t){this.$emit("change",t)},editProduct:function(t){this.$emit("edit",t)},removeProduct:function(t){this.$emit("remove",t)}}},v=g,b=Object(h["a"])(v,p,m,!1,null,null,null),w=b.exports,x=r("bb36"),L={list:function(t){return x["a"].get("products/all",{params:t})},remove:function(t){return x["a"].delete("products/".concat(t.id))}},_=r("c405"),k={data:function(){return{tableData:[],searchForm:{},categoryList:[],page:{current:1,pageSize:10,showSizeChanger:!0,total:1},categoryObj:{}}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].list().then((function(e){t.categoryList=e.data,e.data.forEach((function(e){t.categoryObj[e.id]=e}))}));case 2:t.getTableData();case 3:case"end":return e.stop()}}),e)})))()},components:{searchBox:d,productTable:w},methods:{searchSubmit:function(t){console.log(t),this.searchForm=t,this.getTableData()},getTableData:function(){var t=this;L.list(Object(a["a"])({page:this.page.current,size:this.page.pageSize},this.searchForm)).then((function(e){console.log(e),t.page.total=e.total,t.tableData=e.data.map((function(e){return Object(a["a"])(Object(a["a"])({},e),{},{categoryName:t.categoryObj[e.category].name})}))}))},changePage:function(t){this.page=t,this.getTableData()},editProduct:function(t){this.$router.push({name:"ProductEdit",params:{id:t.id}})},removeProduct:function(t){var e=this,r=this.$createElement;this.$confirm({title:"确认删除",content:function(){return r("div",{style:"color:red;"},["确认删除标题为：".concat(t.title,"的商品吗？")])},onOk:function(){L.remove({id:t.id}).then((function(){e.getTableData()}))},onCancel:function(){console.log("Cancel")},class:"comfirm-box"})}}},E=k,O=(r("675f"),Object(h["a"])(E,n,o,!1,null,null,null));e["default"]=O.exports},"675f":function(t,e,r){"use strict";r("2923")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(D){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new F(n||[]);return a._invoke=E(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function y(){}function g(){}function v(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==r&&n.call(x,a)&&(b=x);var L=v.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=h;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return I()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=L.constructor=v,v.constructor=g,g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("category/all",{params:t})}}},ef55:function(t,e,r){}}]);
//# sourceMappingURL=chunk-b0d23fa6.02bee5df.js.map