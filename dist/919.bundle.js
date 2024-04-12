"use strict";(self.webpackChunkbx24_template=self.webpackChunkbx24_template||[]).push([[919],{7724:(e,t,r)=>{r.d(t,{G:()=>u});var a,n,o,l=r(2982),c=r(885),s=r(7294),i=r(9732),d=r(7478);function u(e){var t=e.criterion,r=e.userData,a=e.changeRated;(0,s.useEffect)((function(){setTimeout(BX24.fitWindow,20)}),[]);var n=(0,s.useContext)(d.d),o=s.useContext(i.O),u=o.rates,f=o.setRates,p={task:n.options.taskId,user:r.id,criterion:t.ID,comm:"",rate:0},m=D(),v=s.useState(-1!==m),b=(0,c.Z)(v,2),E=b[0],h=b[1],L=s.useState(-1===m?0:u[m].rate),g=(0,c.Z)(L,2),R=g[0],H=g[1],y=s.useState(-1===m?"":u[m].comm),G=(0,c.Z)(y,2),x=G[0],S=G[1],I=s.useState(""!==x),w=(0,c.Z)(I,2),A=w[0],_=w[1];function D(){var e=-1;return u.find((function(t,r){return t.user===p.user&&t.criterion===p.criterion&&t.task===p.task&&(e=r,!0)})),e}function T(e,t){e&&(p.rate=e),t&&(p.comm=t),C()}function C(){var e=D(),t=(0,l.Z)(u);-1!=e?t.splice(e,1,p):t.push(p),f(t),a(t)}return s.createElement("li",{className:"list-group-item"},s.createElement("div",{className:"row align-items-center ".concat(E?"":"opacity-50")},s.createElement("label",{htmlFor:"rate".concat(p.user).concat(p.criterion,"Range"),className:"form-label col-4 mb-0"},s.createElement("input",{className:"form-check-input me-2",type:"checkbox",checked:E,onChange:function(){E?(H(0),function(){var e=D(),t=(0,l.Z)(u);-1!=e&&(t.splice(e,1),f(t)),a(t)}(),A&&(p.comm="",S(""),_(!A))):T(),h(!E)},id:"rate".concat(p.user).concat(p.criterion,"Range")}),t.NAME),s.createElement("div",{className:"col-3"},s.createElement("input",{disabled:!E,value:R,onChange:function(e){H(parseInt(e.target.value)),T(parseInt(e.target.value),x)},type:"range",className:"form-range",min:"0",max:"10"})),s.createElement("div",{className:"col-2 text-body-secondary text-center"},E?s.createElement(s.Fragment,null,R,"/10"):null),s.createElement("div",{className:"col-3"},E?s.createElement("ins",{style:{cursor:"pointer"},onClick:function(){A&&(p.comm="",S("")),_(!A),C(),setTimeout(BX24.fitWindow,20)}},"Комментарий"):null)),E&&A?s.createElement("div",{className:"form-floating my-2"},s.createElement("textarea",{className:"form-control",placeholder:"",id:"floatingTextarea",onInput:function(e){var t;t=e.target.value,S(t),p.comm=t.trim(),T(R,t.trim())},value:x}),s.createElement("label",{htmlFor:"floatingTextarea",className:"opacity-50"},"Комментарий")):null)}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(u,"useEffect{}\nuseContext{placementInfo}\nuseContext{{ rates, setRates }}\nuseState{[isEnabled, setEnable](rateId === -1 ? false : true)}\nuseState{[rate, setRate](rateId === -1 ? 0 : rates[rateId].rate)}\nuseState{[comm, setComm](rateId === -1 ? '' : rates[rateId].comm)}\nuseState{[isCommEnabled, setCommEnabled](comm === '' ? false : true)}"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(u,"RateCriterion","C:\\HARD WORK\\rateU-app\\src\\components\\placementApp-interface\\RateCriterion\\RateCriterion.jsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},2977:(e,t,r)=>{r.d(t,{x:()=>m});var a,n,o,l=r(885),c=r(7294),s=r(7724),i=r(9732),d=r(7478),u=r(7396),f=r(6249),p=r(9106);function m(e){var t=e.userData,r=e.criteria,a=e.rights,n=(0,c.useContext)(i.O),o=n.rates,m=(n.setRates,c.useState(!1)),v=(0,l.Z)(m,2),b=v[0],E=v[1],h=c.useState(!1),L=(0,l.Z)(h,2),g=L[0],R=L[1],H=(0,c.useContext)(d.d),y=(0,c.useContext)(u.S),G=c.useState(!1),x=(0,l.Z)(G,2),S=x[0],I=x[1],w=c.useState("M"),A=(0,l.Z)(w,2),_=A[0],D=A[1];function T(e){return e.some((function(e){return e.user===t.id&&e.task==H.options.taskId}))?(E(!0),!0):(E(!1),!1)}return(0,c.useEffect)((function(){(0,p.R)([t.id]).then((function(e){D(e[0].PERSONAL_GENDER)}))}),[]),(0,c.useEffect)((function(){T(o)&&R(!0),t.id!==y.ID&&I("haveSub"!==a||y.SUBORDINATES.find((function(e){return t.id==e.ID})))}),[]),c.createElement("div",{className:"card my-2"},c.createElement("div",{className:"card-header",role:"button",onClick:function(){S&&R(!g)}},c.createElement("div",{className:"row justify-content-between"},c.createElement("div",{className:"col"},c.createElement("div",{className:"row justify-content-between"},c.createElement("div",{className:"col"},t.name,b?c.createElement("span",{className:"opacity-50"}," ","F"===_?"- оценена":"- оценён"):null),c.createElement("div",{className:"col text-end"},S?null:c.createElement("span",{className:"opacity-50"}," ","Недостаточно прав для оценки")))),c.createElement("div",{className:"col-1 text-end"},c.createElement(f.D,{size:26,active:g&&S})))),g&&S?c.createElement("div",{className:"card-body"},c.createElement("ul",{className:"list-group"},r.map((function(e){return c.createElement(s.G,{key:e.ID,userData:t,criterion:e,changeRated:T})})))):null)}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(m,"useContext{{ rates, setRates }}\nuseState{[rated, setRated](false)}\nuseState{[isRateOn, setRateOn](false)}\nuseContext{placementInfo}\nuseContext{userInfo}\nuseState{[access, setAccess](false)}\nuseState{[genderUser, setGenderUser]('M')}\nuseEffect{}\nuseEffect{}"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(m,"RateUser","C:\\HARD WORK\\rateU-app\\src\\components\\placementApp-interface\\RateUser\\RateUser.jsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},8623:(e,t,r)=>{r.d(t,{d:()=>g});var a,n,o,l=r(5861),c=r(885),s=r(4687),i=r.n(s),d=r(7294),u=r(7478),f=r(7396),p=r(9732),m=r(7498),v=r(2977),b=r(9357),E=r(3038),h=r(2782),L=r(5604);function g(){var e=d.useState(),t=(0,c.Z)(e,2),r=t[0],a=t[1],n=(0,d.useContext)(u.d),o=(0,d.useContext)(f.S),s=d.useState([]),g=(0,c.Z)(s,2),R=g[0],H=g[1],y=d.useState([]),G=(0,c.Z)(y,2),x=G[0],S=G[1],I=d.useState(!0),w=(0,c.Z)(I,2),A=w[0],_=w[1],D=d.useState(void 0),T=(0,c.Z)(D,2),C=T[0],k=T[1];return(0,d.useEffect)((0,l.Z)(i().mark((function e(){var t,r,l,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m._)(n.options.taskId);case 2:return t=e.sent,e.next=5,(0,L.y)(t.task,void 0,o);case 5:if(!(r=e.sent)){e.next=19;break}return k(r),e.next=10,(0,b.E)();case 10:return(l=e.sent).length?H(l):_(!1),(c=t.task.accomplices).length&&(t.task.accomplices=c.filter((function(e){return e!=t.task.responsibleId}))),e.t0=S,e.next=17,(0,E.j)();case 17:e.t1=e.sent.map((function(e){return{task:e.PROPERTY_VALUES.TASK_ID,user:e.PROPERTY_VALUES.USER_ID,criterion:e.PROPERTY_VALUES.CRITERION_ID,comm:e.PROPERTY_VALUES.COMMENT,rate:e.PROPERTY_VALUES.RATE}})),(0,e.t0)(e.t1);case 19:a(t.task);case 20:case"end":return e.stop()}}),e)}))),[r,R]),r?d.createElement("div",null,d.createElement(p.O.Provider,{value:{rates:x,setRates:S}},A&&C?d.createElement(d.Fragment,null,d.createElement("h5",null,"Исполнитель"),d.createElement(v.x,{userData:r.responsible,criteria:R,rights:C}),r.accomplices.length>0?d.createElement(d.Fragment,null,d.createElement("h5",null,"Соисполнители"),d.createElement("div",null,r.accomplices.map((function(e){return d.createElement(v.x,{key:e,userData:r.accomplicesData[e],criteria:R,rights:C})})))):null,d.createElement(h.e,null)):d.createElement("div",null,C?"Пожалуйста, добавьте критерии для оценки в приложении RateU":"У вас нет необходимых прав для оценки в этой задаче."))):null}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(g,"useState{[task, setTask]}\nuseContext{placementInfo}\nuseContext{userInfo}\nuseState{[criteria, setCriteria]([])}\nuseState{[rates, setRates]([])}\nuseState{[isCriteriaAdded, setCriteriaAdded](true)}\nuseState{[rights, setRights](undefined)}\nuseEffect{}"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(g,"Responsibles","C:\\HARD WORK\\rateU-app\\src\\components\\placementApp-interface\\Responsibles\\Responsibles.jsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},2782:(e,t,r)=>{r.d(t,{e:()=>v});var a,n,o,l=r(5861),c=r(885),s=r(4687),i=r.n(s),d=r(7294),u=r(9732),f=r(2534),p=r(7478),m=r(2453);function v(){var e,t=(0,d.useContext)(p.d),r=d.useContext(u.O),a=r.rates,n=(r.setRates,d.useState(!1)),o=(0,c.Z)(n,2),s=o[0],v=o[1],b=d.useState(!1),E=(0,c.Z)(b,2),h=E[0],L=E[1];function g(){clearTimeout(e),e=setTimeout((function(){return v(!1)}),3e3)}function R(){return(R=(0,l.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,(0,f.j)(a,t.options.taskId);case 3:r=e.sent,L(!1),r&&(v(!0),g());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d.createElement("div",{className:"d-flex g-0 justify-content-end align-items-center"},d.createElement("div",{className:"ms-2"},h?d.createElement("div",{className:"spinner-grow",role:"status"},d.createElement("span",{className:"visually-hidden"},"Loading...")):null),d.createElement("button",{className:"".concat(m.Z.btnSave," btn text-light"),onClick:function(){return R.apply(this,arguments)}},s?"Сохранено":"Сохранить оценки"))}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(v,"useContext{placementInfo}\nuseContext{{ rates, setRates }}\nuseState{[isSaved, setSaved](false)}\nuseState{[isLoading, setLoading](false)}"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(v,"SaveRatesBtn","C:\\HARD WORK\\rateU-app\\src\\components\\placementApp-interface\\SaveRatesBtn\\SaveRatesBtn.jsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},6919:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var a=r(5861),n=r(885),o=r(4687),l=r.n(o),c=r(7294),s=r(8623),i=r(2534),d=(r(1984),r(7478)),u=r(9541),f=r(3379),p=r.n(f),m=r(7795),v=r.n(m),b=r(569),E=r.n(b),h=r(3565),L=r.n(h),g=r(9216),R=r.n(g),H=r(4589),y=r.n(H),G=r(3964),x={};x.styleTagTransform=y(),x.setAttributes=L(),x.insert=E().bind(null,"head"),x.domAPI=v(),x.insertStyleElement=R(),p()(G.Z,x);const S=G.Z&&G.Z.locals?G.Z.locals:void 0;var I;e=r.hmd(e),(I="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&I(e);var w=function(){var e=c.useState(!1),t=(0,n.Z)(e,2),r=t[0],o=t[1],f=(0,c.useContext)(d.d);(0,c.useEffect)((0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.j)(void 0,f.options.taskId);case 2:e.sent,o(!0);case 4:case"end":return e.stop()}}),e)}))));var p=c.useState(null),m=(0,n.Z)(p,2),v=m[0],b=m[1];return(0,c.useEffect)((function(){BX24.callMethod("app.info",{},(function(e){b(e.data().ID)}))}),[]),c.createElement("div",{className:"container position-relative py-3"},c.createElement("span",{className:"d-flex justify-content-between align-items-center"},c.createElement("h1",null,"Оценка сотрудников"),v?c.createElement("a",{href:"https://avtorit24.ru/marketplace/app/".concat(v,"/"),target:"_blank",className:"".concat(S.href," text-dark fs-6 text-decoration-none")},"Перейти к приложению",c.createElement(u.I,{className:"ms-2"})):""),r?c.createElement(s.d,null):c.createElement("div",{className:"containerLoader"},c.createElement("div",{className:"loader"})))};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(w,"useState{[isRatesLoaded, setRatesLoaded](false)}\nuseContext{placementInfo}\nuseEffect{}\nuseState{[id, setId](null)}\nuseEffect{}");var A=w;const _=A;var D,T;(D="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(D.register(w,"PlacementApp","C:\\HARD WORK\\rateU-app\\src\\components\\placementApp-interface\\interface\\ui\\PlacementApp.jsx"),D.register(A,"default","C:\\HARD WORK\\rateU-app\\src\\components\\placementApp-interface\\interface\\ui\\PlacementApp.jsx")),(T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&T(e)},6249:(e,t,r)=>{r.d(t,{D:()=>H});var a=r(7294),n=r(3379),o=r.n(n),l=r(7795),c=r.n(l),s=r(569),i=r.n(s),d=r(3565),u=r.n(d),f=r(9216),p=r.n(f),m=r(4589),v=r.n(m),b=r(7578),E={};E.styleTagTransform=v(),E.setAttributes=u(),E.insert=i().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=p(),o()(b.Z,E);const h=b.Z&&b.Z.locals?b.Z.locals:void 0;var L,g,R;function H(e){var t=e.size,r=e.width,n=e.height,o=e.active;return a.createElement("svg",{className:"".concat(h.ArrowDropDown," ").concat(o?h["ArrowDropDown--active"]:""),height:t||n||"48",width:t||r||"48",viewBox:"0 -960 960 960"},a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M480-381.847 277.848-581.999h404.304L480-381.847Z"}))}e=r.hmd(e),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&L(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&g.register(H,"ArrowDropDown","C:\\HARD WORK\\rateU-app\\src\\icons\\ArrowDropDown\\ArrowDropDown.jsx"),(R="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&R(e)},9541:(e,t,r)=>{r.d(t,{I:()=>c});var a,n,o,l=r(7294);function c(e){var t=e.className;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"".concat(t," bi bi-arrow-right"),viewBox:"0 0 16 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}))}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(c,"ArrowHref","C:\\HARD WORK\\rateU-app\\src\\icons\\ArrowHref\\ArrowHref.jsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},9106:(e,t,r)=>{var a;r.d(t,{R:()=>l}),e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,o,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t){if(t){var r=[],a=[];t.forEach((function(t){var n=e.find((function(e){return e.ID==t}));n?r.push(n):a.push(t)}));var n=[];return new Promise((function(t,o){0!=a.length?(a.map((function(e){n.push(["user.search",{ID:e}])})),BX24.callBatch(n,(function(a){a.forEach((function(t){var a,n;e.push(null===(a=t.data())||void 0===a?void 0:a.at(0)),r.push(null===(n=t.data())||void 0===n?void 0:n.at(0))})),t(r)}))):t(r)}))}}}();(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(l,"getUsers","C:\\HARD WORK\\rateU-app\\src\\utils\\createSavedUsers.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},9357:(e,t,r)=>{r.d(t,{E:()=>d});var a,n=r(5861),o=r(4687),l=r.n(o),c=r(5254);e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,i,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(){var a=(0,n.Z)(l().mark((function a(n){var o,s,i;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t&&(e=[]),!(e.length>0)){a.next=4;break}return n(e),a.abrupt("return");case 4:return a.next=6,(0,c.Y)();case 6:o=a.sent.criteriaSection,s=r?{ENTITY:"rates",FILTER:{SECTION:o}}:{ENTITY:"rates",FILTER:{ACTIVE:"Y",SECTION:o}},i=[],BX24.callMethod("entity.item.get",s,(function(t){i=i.concat(t.data()),t.more()?t.next():n(e=i)}));case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}}();(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(d,"getCriteria","C:\\HARD WORK\\rateU-app\\src\\utils\\getCriteria.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},3038:(e,t,r)=>{r.d(t,{j:()=>d});var a,n=r(5861),o=r(4687),l=r.n(o),c=r(5254);e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,i,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateBegin:null,dateEnd:null};return new Promise(function(){var a=(0,n.Z)(l().mark((function a(n){var o,s;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t&&(e=[]),!(e.length>0)){a.next=4;break}return n(e),a.abrupt("return");case 4:return a.next=6,(0,c.Y)();case 6:o=a.sent.ratesSection,s=[],BX24.callMethod("entity.item.get",{ENTITY:"rates",FILTER:{SECTION:o,">=DATE_CREATE":r.dateBegin,"<DATE_CREATE":r.dateEnd}},(function(t){s=s.concat(t.data()),t.more()?t.next():n(e=s)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}}();(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(d,"getRates","C:\\HARD WORK\\rateU-app\\src\\utils\\getRates.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},7498:(e,t,r)=>{var a;r.d(t,{_:()=>l}),e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,o,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["ID","RESPONSIBLE_ID","ACCOMPLICES","TITLE","CREATED_BY"];return new Promise((function(a){var n=e.find((function(e){return e.task.id==t}));n?a(n):BX24.callMethod("tasks.task.get",{taskId:t,select:r},(function(t){n=t.data(),e.push(n),a(n)}))}))}}();(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(l,"getTask","C:\\HARD WORK\\rateU-app\\src\\utils\\getTask.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},5604:(e,t,r)=>{r.d(t,{y:()=>d});var a,n,o,l=r(5861),c=r(4687),s=r.n(c),i=r(5753);function d(e,t,r){return new Promise(function(){var a=(0,l.Z)(s().mark((function a(n){var o,l;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!BX24.isAdmin()){a.next=4;break}n("isAdmin"),a.next=15;break;case 4:if(r){a.next=8;break}return a.next=7,(0,i.b)();case 7:r=a.sent;case 8:if(!e){a.next=12;break}if((null===(o=r)||void 0===o?void 0:o.ID)!==(null==e?void 0:e.createdBy)){a.next=12;break}return n("isCreator"),a.abrupt("return");case 12:t||(t=e.accomplices.concat(e.responsibleId)),l=r.SUBORDINATES.find((function(e){return t.includes(e.ID)})),n(l?"haveSub":void 0);case 15:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(d,"isAllowed","C:\\HARD WORK\\rateU-app\\src\\utils\\isAllowed.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},9732:(e,t,r)=>{r.d(t,{O:()=>c});var a,n=r(7294);e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,l,c=(0,n.createContext)();(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(c,"RatesContext","C:\\HARD WORK\\rateU-app\\src\\utils\\ratesContext.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)},2534:(e,t,r)=>{r.d(t,{j:()=>f});var a,n=r(5861),o=r(4687),l=r.n(o),c=r(5254),s=r(9357);function i(e,t){return e.find((function(e){return e.PROPERTY_VALUES.TASK_ID==t.task&&e.PROPERTY_VALUES.USER_ID==t.user&&e.PROPERTY_VALUES.CRITERION_ID==t.criterion}))}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t,r){return new Promise(function(){var a=(0,n.Z)(l().mark((function a(o){var d,u;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t||r||!e.length){a.next=3;break}return o(e),a.abrupt("return");case 3:return a.next=5,(0,c.Y)();case 5:d=a.sent.ratesSection,u=[],BX24.callMethod("entity.item.get",{ENTITY:"rates",FILTER:{SECTION:d}},function(){var a=(0,n.Z)(l().mark((function a(n){var c,f,p;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u=u.concat(n.data()),!n.more()){a.next=4;break}return n.next(),a.abrupt("return");case 4:return a.next=6,(0,s.E)();case 6:if(c=(c=a.sent).map((function(e){return e.ID})),r&&(u=u.filter((function(e){return e.PROPERTY_VALUES.TASK_ID==r&&c.includes(e.PROPERTY_VALUES.CRITERION_ID)}))),t){a.next=13;break}return e=u,o(u),a.abrupt("return");case 13:t&&r&&(t=t.filter((function(e){return e.task==r}))),f=[],t.forEach((function(e){(p=i(u,e))?p.PROPERTY_VALUES.COMMENT===e.comm&&p.PROPERTY_VALUES.RATE===e.rate||f.push(["entity.item.update",{ENTITY:"rates",ID:p.ID,PROPERTY_VALUES:{COMMENT:e.comm,RATE:parseInt(e.rate)}}]):f.push(["entity.item.add",{ENTITY:"rates",NAME:"rate".concat(e.task,"-").concat(e.user,"-").concat(e.criterion),PROPERTY_VALUES:{TASK_ID:parseInt(e.task),USER_ID:parseInt(e.user),CRITERION_ID:parseInt(e.criterion),COMMENT:e.comm,RATE:parseInt(e.rate)},SECTION:d}])})),u.forEach((function(e){t.some((function(t){return t.task===e.PROPERTY_VALUES.TASK_ID&&t.user===e.PROPERTY_VALUES.USER_ID&&t.criterion===e.PROPERTY_VALUES.CRITERION_ID}))||f.push(["entity.item.delete",{ENTITY:"rates",ID:e.ID}])})),f.length?BX24.callBatch(f,(function(e){console.log("saved succesfully"),o(e)})):o(u);case 18:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}}();(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(i,"findRate","C:\\HARD WORK\\rateU-app\\src\\utils\\saveRatesToEntity.js"),d.register(f,"getRates","C:\\HARD WORK\\rateU-app\\src\\utils\\saveRatesToEntity.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},1984:(e,t,r)=>{var a,n,o;function l(e){return e&&localStorage.setItem("employees",JSON.stringify(e)),JSON.parse(localStorage.getItem("employees"))}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateBegin:null,dateEnd:null};return e&&localStorage.setItem("period",JSON.stringify(t)),JSON.parse(localStorage.getItem("period"))}r.d(t,{hM:()=>l,Tq:()=>c}),e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(l,"saveEmployees","C:\\HARD WORK\\rateU-app\\src\\utils\\saveToLS.js"),n.register(c,"savePeriod","C:\\HARD WORK\\rateU-app\\src\\utils\\saveToLS.js"),n.register((function(e){return e&&localStorage.setItem("rates",JSON.stringify(e)),JSON.parse(localStorage.getItem("rates"))}),"saveRates","C:\\HARD WORK\\rateU-app\\src\\utils\\saveToLS.js")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},9987:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(8081),n=r.n(a),o=r(3645),l=r.n(o)()(n());l.push([e.id,".criteriaDropdown__d5c3f71:active {\r\n    background-color: #d4d1fd !important;\r\n} \r\n\r\n.criteriaDropdown__d5c3f71:hover {\r\n    background-color: white !important;\r\n    color: black;\r\n}\r\n\r\n.criteriaDropdownBtn__f993d8e:active {\r\n    background-color: white !important;\r\n}\r\n\r\n.criteriaDropdownBtn__f993d8e:hover {\r\n    background-color: white !important;\r\n}\r\n\r\n@property --r {\r\n\tsyntax: '<length-percentage>';\r\n\tinitial-value: 0px;\r\n\tinherits: false\r\n}\r\n\r\n.bgBtn__b7ab379 {\r\n\tplace-self: center;\r\n    border: none;\r\n\tbox-shadow: inset 1px 3px 1px #fff4;\r\n\tbackground: \r\n\t\tradial-gradient(circle at var(--x, 0%) var(--y, 0%), \r\n        #6443c7 calc(var(--r) - 1px), #7568c5 var(--r)) \r\n\t\t\tborder-box;\r\n\tcolor: white;\r\n\ttransition: --r .35s;\r\n}\r\n\r\n.bgBtn__b7ab379:hover {\r\n    &:hover { --r: 100% }\r\n}\r\n\r\n.bgBtn__b7ab379:active {\r\n    transform: scale(1.03);\r\n}\r\n\r\n.btnSave__e5b7ba6 {\r\n    place-self: center;\r\n    border: none;\r\n\tbox-shadow: inset 1px 3px 1px #fff4;\r\n\tbackground: \r\n\t\tradial-gradient(circle at var(--x, 0%) var(--y, 0%), \r\n        #2f816a calc(var(--r) - 1px), #3f937b var(--r)) \r\n\t\t\tborder-box;\r\n\tcolor: white;\r\n\ttransition: --r .35s;\r\n}\r\n\r\n.btnSave__e5b7ba6:hover {\r\n    &:hover { --r: 100% }\r\n}\r\n\r\n.btnSave__e5b7ba6:active {\r\n    transform: scale(1.03);\r\n}\r\n\r\n.btnReset__e29b60b {\r\n    place-self: center;\r\n    border: none;\r\n\tbox-shadow: inset 1px 3px 1px rgba(255, 255, 255, 0.489);\r\n\tbackground: \r\n\t\tradial-gradient(circle at var(--x, 0%) var(--y, 0%), \r\n        #cb3232 calc(var(--r) - 1px), #d35959 var(--r)) \r\n\t\t\tborder-box;\r\n\tcolor: white;\r\n\ttransition: --r .35s;\r\n}\r\n\r\n.btnReset__e29b60b:hover {\r\n    &:hover { --r: 100% }\r\n}\r\n\r\n.btnReset__e29b60b:active {\r\n    transform: scale(1.03);\r\n}\r\n\r\n.card__a97c6a2 {\r\n    box-shadow: 5px 4.5px 7px -3px #938f9f;\r\n}\r\n",""]),l.locals={criteriaDropdown:"criteriaDropdown__d5c3f71",criteriaDropdownBtn:"criteriaDropdownBtn__f993d8e",bgBtn:"bgBtn__b7ab379",btnSave:"btnSave__e5b7ba6",btnReset:"btnReset__e29b60b",card:"card__a97c6a2"};const c=l},3964:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(8081),n=r.n(a),o=r(3645),l=r.n(o)()(n());l.push([e.id,'.href__c786051 {\r\n    display: inline-block; \r\n}\r\n\r\n.href__c786051:after {\r\n    display: block; \r\n    content: ""; \r\n    height: 1px; \r\n    width: 0%; \r\n    background-color: #000; \r\n    transition: width 0.4s ease-in-out;\r\n}\r\n\r\n.href__c786051:hover:after {\r\n    width: 100%;\r\n}\r\n\r\n',""]),l.locals={href:"href__c786051"};const c=l},7578:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(8081),n=r.n(a),o=r(3645),l=r.n(o)()(n());l.push([e.id,".ArrowDropDown__e99fe87 {\n    transform: rotate(90deg);\n    fill: var(--bs-body-color);\n    transition: transform .2s ease;\n}\n\n.ArrowDropDown--active__a81bfa7 {\n    transform: none;\n}",""]),l.locals={ArrowDropDown:"ArrowDropDown__e99fe87","ArrowDropDown--active":"ArrowDropDown--active__a81bfa7"};const c=l},2453:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(3379),n=r.n(a),o=r(7795),l=r.n(o),c=r(569),s=r.n(c),i=r(3565),d=r.n(i),u=r(9216),f=r.n(u),p=r(4589),m=r.n(p),v=r(9987),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=f(),n()(v.Z,b);const E=v.Z&&v.Z.locals?v.Z.locals:void 0},2982:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(907),n=r(181);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);