"use strict";(self.webpackChunkbx24_template=self.webpackChunkbx24_template||[]).push([[331],{9106:(r,e,t)=>{var a;t.d(e,{R:()=>l}),r=t.hmd(r),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(r),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,o,l=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e){if(e){var t=[],a=[];e.forEach((function(e){var n=r.find((function(r){return r.ID==e}));n?t.push(n):a.push(e)}));var n=[];return new Promise((function(e,o){0!=a.length?(a.map((function(r){n.push(["user.search",{ID:r}])})),BX24.callBatch(n,(function(a){a.forEach((function(e){var a,n;e.error()?o(new Error(e.error().ex.error_description)):(r.push(null===(a=e.data())||void 0===a?void 0:a.at(0)),t.push(null===(n=e.data())||void 0===n?void 0:n.at(0)))})),e(t)}))):e(t)}))}}}();(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(l,"getUsers","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\createSavedUsers.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(r)},9357:(r,e,t)=>{t.d(e,{E:()=>s});var a,n=t(5861),o=t(4687),l=t.n(o),d=t(5254);r=t.hmd(r),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(r),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,i,s=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(){var a=(0,n.Z)(l().mark((function a(n,o){var c,i;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&(r=[]),!(r.length>0)){a.next=4;break}return n(t?r:u(r)),a.abrupt("return");case 4:return a.next=6,(0,d.Y)().catch((function(r){o(r)}));case 6:c=a.sent.criteriaSection,i=[],BX24.callMethod("entity.item.get",{ENTITY:"rates",FILTER:{SECTION:c}},(function(e){e.error()?o(new Error(e.error().ex.error_description)):(i=i.concat(e.data()),e.more()?e.next():(r=i,t||(i=u(i)),n(i)))}));case 9:case"end":return a.stop()}}),a)})));return function(r,e){return a.apply(this,arguments)}}())}}();function u(r){return r.filter((function(r){return"Y"===r.ACTIVE}))}(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"getCriteria","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\getCriteria.js"),c.register(u,"filterInactive","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\getCriteria.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(r)},3038:(r,e,t)=>{t.d(e,{j:()=>u});var a,n=t(2982),o=t(5861),l=t(4687),d=t.n(l),c=t(5254);r=t.hmd(r),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(r),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,s,u=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return new Promise(function(){var a=(0,o.Z)(d().mark((function a(o,l){var i,s,u;return d().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&(r=[]),!(r.length>0)){a.next=6;break}return i=(0,n.Z)(r),t&&(i=p(i,t)),o(i),a.abrupt("return");case 6:return a.next=8,(0,c.Y)().catch((function(r){return l(r)}));case 8:s=a.sent.ratesSection,u=[],BX24.callMethod("entity.item.get",{ENTITY:"rates",FILTER:{SECTION:s}},(function(e){e.error()?l(new Error(e.error().ex.error_description)):(u=u.concat(e.data()),e.more()?e.next():(r=u,t&&(u=p(u,t)),o(u)))}));case 11:case"end":return a.stop()}}),a)})));return function(r,e){return a.apply(this,arguments)}}())}}();function p(r,e){return r.filter((function(r){return new Date(r.DATE_CREATE)>=new Date(e.dateBegin)&&new Date(r.DATE_CREATE)<new Date(e.dateEnd||new Date)}))}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"getRates","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\getRates.js"),i.register(p,"filterByPeriod","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\getRates.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(r)},7498:(r,e,t)=>{var a;t.d(e,{_:()=>l}),r=t.hmd(r),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(r),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,o,l=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["ID","RESPONSIBLE_ID","ACCOMPLICES","TITLE","CREATED_BY"];return new Promise((function(a,n){var o=r.find((function(r){return r.task.id==e}));o?a(o):BX24.callMethod("tasks.task.get",{taskId:e,select:t},(function(e){e.error()?n(new Error(e.error().ex.error_description)):(o=e.data(),r.push(o),a(o))}))}))}}();(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(l,"getTask","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\getTask.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(r)},5604:(r,e,t)=>{t.d(e,{y:()=>s});var a,n,o,l=t(5861),d=t(4687),c=t.n(d),i=t(5753);function s(r,e,t){return new Promise(function(){var a=(0,l.Z)(c().mark((function a(n,o){var l,d,s;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!BX24.isAdmin()){a.next=4;break}n("isAdmin"),a.next=14;break;case 4:return a.next=6,(0,i.b)().catch((function(r){o(r)}));case 6:if(t=a.sent,!r){a.next=11;break}if((null===(d=t)||void 0===d?void 0:d.ID)!==(null==r?void 0:r.createdBy)){a.next=11;break}return n("isCreator"),a.abrupt("return");case 11:!e&&r&&(e=r.accomplices.concat(r.responsibleId)),s=null===(l=t.SUBORDINATES)||void 0===l?void 0:l.find((function(r){var t;return null===(t=e)||void 0===t?void 0:t.includes(r.ID)})),n(s?"haveSub":void 0);case 14:case"end":return a.stop()}}),a)})));return function(r,e){return a.apply(this,arguments)}}())}r=t.hmd(r),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(r),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(s,"isAllowed","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\isAllowed.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(r)},1984:(r,e,t)=>{var a,n,o;function l(r){return r&&localStorage.setItem("employees",JSON.stringify(r)),JSON.parse(localStorage.getItem("employees"))}function d(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateBegin:null,dateEnd:null};return r&&localStorage.setItem("period",JSON.stringify(e)),JSON.parse(localStorage.getItem("period"))}t.d(e,{hM:()=>l,Tq:()=>d}),r=t.hmd(r),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(r),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(l,"saveEmployees","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\saveToLS.js"),n.register(d,"savePeriod","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\saveToLS.js"),n.register((function(r){return r&&localStorage.setItem("rates",JSON.stringify(r)),JSON.parse(localStorage.getItem("rates"))}),"saveRates","C:\\xampp\\htdocs\\localapp-b24\\react-proj\\rateU\\rateu-app\\src\\utils\\saveToLS.js")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(r)},9987:(r,e,t)=>{t.d(e,{Z:()=>d});var a=t(8081),n=t.n(a),o=t(3645),l=t.n(o)()(n());l.push([r.id,"/* имя сотрудника */\r\n\r\n.EmployeeName__c540684 {\r\n\ttext-decoration: none;\r\n\tcolor: var(--bs-card-color);\r\n}\r\n\r\n/* дропдаун Выбор критериев */\r\n\r\n.criteriaDropdown__d5c3f71:active {\r\n\tbackground-color: #d4d1fd !important;\r\n}\r\n\r\n.criteriaDropdown__d5c3f71:hover {\r\n\tbackground-color: white !important;\r\n\tcolor: black;\r\n}\r\n\r\n.criteriaDropdownBtn__f993d8e:active {\r\n\tbackground-color: white !important;\r\n}\r\n\r\n.criteriaDropdownBtn__f993d8e:hover {\r\n\tbackground-color: white !important;\r\n}\r\n\r\n/* кнопки */\r\n\r\n@property --r {\r\n\tsyntax: '<length-percentage>';\r\n\tinitial-value: 0px;\r\n\tinherits: false\r\n}\r\n\r\n.bgBtn__b7ab379 {\r\n\tplace-self: center;\r\n\tborder: none;\r\n\tbox-shadow: inset 1px 3px 1px #fff4;\r\n\tbackground:\r\n\t\tradial-gradient(circle at var(--x, 0%) var(--y, 0%),\r\n\t\t\t#6443c7 calc(var(--r) - 1px), #7568c5 var(--r)) border-box;\r\n\tcolor: white;\r\n\ttransition: --r .35s;\r\n}\r\n\r\n.bgBtn__b7ab379:hover {\r\n\t&:hover {\r\n\t\t--r: 100%\r\n\t}\r\n}\r\n\r\n.bgBtn__b7ab379:active {\r\n\ttransform: scale(1.03);\r\n}\r\n\r\n/* кнопка Сохранить */\r\n\r\n.btnSave__e5b7ba6 {\r\n\tplace-self: center;\r\n\tborder: none;\r\n\tbox-shadow: inset 1px 3px 1px #fff4;\r\n\tbackground:\r\n\t\tradial-gradient(circle at var(--x, 0%) var(--y, 0%),\r\n\t\t\t#2f816a calc(var(--r) - 1px), #3f937b var(--r)) border-box;\r\n\tcolor: white;\r\n\ttransition: --r .35s;\r\n}\r\n\r\n.btnSave__e5b7ba6:hover {\r\n\t&:hover {\r\n\t\t--r: 100%\r\n\t}\r\n}\r\n\r\n.btnSave__e5b7ba6:active {\r\n\ttransform: scale(1.03);\r\n}\r\n\r\n/* кнопка Очистить */\r\n\r\n.btnReset__e29b60b {\r\n\tplace-self: center;\r\n\tborder: none;\r\n\tbox-shadow: inset 1px 3px 1px rgba(255, 255, 255, 0.489);\r\n\tbackground:\r\n\t\tradial-gradient(circle at var(--x, 0%) var(--y, 0%),\r\n\t\t\t#cb3232 calc(var(--r) - 1px), #d35959 var(--r)) border-box;\r\n\tcolor: white;\r\n\ttransition: --r .35s;\r\n}\r\n\r\n.btnReset__e29b60b:hover {\r\n\t&:hover {\r\n\t\t--r: 100%\r\n\t}\r\n}\r\n\r\n.btnReset__e29b60b:active {\r\n\ttransform: scale(1.03);\r\n}\r\n\r\n/* карточки */\r\n\r\n.card__a97c6a2 {\r\n\tbox-shadow: 5px 4.5px 7px -3px #938f9f;\r\n}",""]),l.locals={EmployeeName:"EmployeeName__c540684",criteriaDropdown:"criteriaDropdown__d5c3f71",criteriaDropdownBtn:"criteriaDropdownBtn__f993d8e",bgBtn:"bgBtn__b7ab379",btnSave:"btnSave__e5b7ba6",btnReset:"btnReset__e29b60b",card:"card__a97c6a2"};const d=l},2453:(r,e,t)=>{t.d(e,{Z:()=>g});var a=t(3379),n=t.n(a),o=t(7795),l=t.n(o),d=t(569),c=t.n(d),i=t(3565),s=t.n(i),u=t(9216),p=t.n(u),f=t(4589),b=t.n(f),v=t(9987),h={};h.styleTagTransform=b(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=p(),n()(v.Z,h);const g=v.Z&&v.Z.locals?v.Z.locals:void 0}}]);