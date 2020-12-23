(()=>{"use strict";var e,r,n,t,o,i,a,d={192:(e,r,n)=>{n(864);var t=document.querySelector(".app__values");window.matchMedia("screen amd (min-width:500px)"),function(){t.innerHTML="";var e=document.createElement("table");document.createElement("thead").innerHTML="<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>",e.appendChild("thead"),t.appendChild(e)}()},754:(e,r,n)=>{n.r(r),n.d(r,{default:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{font-size:14px;font-family:"Montserrat",sans-serif}@media screen and (min-width: 500px){html{font-size:16px}}strong{font-weight:700}h1{font-size:1.5rem}h2{font-size:1.2rem;margin-bottom:10px}p{margin-bottom:10px}.header{background-color:#f7a72e;color:white;padding:20px 0;margin-bottom:20px}.header__container{display:flex;align-items:center}.header__logo{margin-right:10px;width:40px}.container{max-width:1000px;width:100%;padding:0 20px;margin:0 auto}img{max-width:100%}\n',""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},864:(e,r,n)=>{var t=n(379),o=n.n(t),i=n(754),a=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var d=i.default.locals;e.hot.accept(754,(r=>{i=n(754),function(e,r,n){if(!e&&r||e&&!r)return!1;var t;for(t in e)if(e[t]!==r[t])return!1;for(t in r)if(!e[t])return!1;return!0}(d,i.default.locals)?(d=i.default.locals,a(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i.default.locals},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function a(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function d(e,r){for(var n={},t=[],o=0;o<e.length;o++){var d=e[o],c=r.base?d[0]+r.base:d[0],l=n[c]||0,s="".concat(c," ").concat(l);n[c]=l+1;var u=a(s),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:m(f,r),references:1}),t.push(s)}return t}function c(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,s=(l=[],function(e,r){return l[e]=r,l.filter(Boolean).join("\n")});function u(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=s(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function m(e,r){var n,t,o;if(r.singleton){var i=h++;n=p||(p=c(r)),t=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=d(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=a(n[t]);i[o].references--}for(var c=d(e,r),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=c}}}}},c={};function l(e){if(c[e])return c[e].exports;var r=c[e]={id:e,exports:{}},n={id:e,module:r,factory:d[e],require:l};return l.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require),r.exports}l.m=d,l.c=c,l.i=[],l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var n in r)l.o(r,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>"main.bundle.css",l.hmrF=()=>"main."+l.h()+".hot-update.json",l.h=()=>"f14dadccc185bb0881b8",l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="Magic-Slider:",l.l=(n,t,o)=>{if(e[n])e[n].push(t);else{var i,a;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var s=d[c];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+o),i.src=n),e[n]=[t];var u=(r,t)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),a&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t,o={},i=l.c,a=[],d=[],c="idle";function s(e){c=e;for(var r=0;r<d.length;r++)d[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function f(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return s("check"),l.hmrM().then((function(t){if(!t)return s(m()?"ready":"idle"),null;s("prepare");var o=[];return r=[],n=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,r){return l.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),o)}))}))}))}function p(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var a=function(e){o||(o=e)},d=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)d.push(r[n])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(d))}function m(){if(t)return n||(n=[]),Object.keys(l.hmrI).forEach((function(e){t.forEach((function(r){l.hmrI[e](r,n)}))})),t=void 0,!0}l.hmrD=o,l.i.push((function(h){var m,v,g,y=h.module,b=function(n,t){var o=i[t];if(!o)return n;var d=function(r){if(o.hot.active){if(i[r]){var d=i[r].parents;-1===d.indexOf(t)&&d.push(t)}else a=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),a=[];return n(r)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(d,f,l(f));return d.e=function(e){return function(e){switch(c){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},d}(h.require,h.id);y.hot=(m=h.id,v=y,g={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){a=v.parents.slice(),e=m,l(m)},active:!0,accept:function(e,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=r||function(){};else g._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":n=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return c;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:o[m]},e=void 0,g),y.parents=a,y.children=[],a=[],h.require=b})),l.hmrC={},l.hmrI={}})(),l.p="/",n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=d,o.parentNode.removeChild(o),t(c)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,r,d,c,s,u)=>{s.push(a),e.forEach((e=>{var r=l.miniCssF(e),a=l.p+r;const d=t(r,a);d&&c.push(new Promise(((r,t)=>{var c=n(e,a,(()=>{c.as="style",c.rel="preload",r()}),t);o.push(d),i.push(c)})))}))},(()=>{var e,r,n,t,o={179:0},i={};function a(e){return new Promise(((r,n)=>{i[e]=r;var t=l.p+l.hu(e),o=new Error;l.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,n(o)}}))}))}function d(i){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,c=l.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var u=c.parents[s],f=l.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),d(n[u],[i])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,e=void 0;var c={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(l.o(r,p)){var h,m=r[p],v=!1,g=!1,y=!1,b="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(p in u[p]=m,d(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(c[p]||(c[p]=[]),d(c[p],h.outdatedDependencies[p]));y&&(d(s,[h.moduleId]),u[p]=f)}r=void 0;for(var w,E=[],_=0;_<s.length;_++){var x=s[_];l.c[x]&&l.c[x].hot._selfAccepted&&u[x]!==f&&!l.c[x].hot._selfInvalidated&&E.push({module:x,require:l.c[x].hot._requireSelf,errorHandler:l.c[x].hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var i=t.pop(),a=l.c[i];if(a){var d={},u=a.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,d);for(l.hmrD[i]=d,a.hot.active=!1,delete l.c[i],delete c[i],_=0;_<a.children.length;_++){var f=l.c[a.children[_]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in c)if(l.o(c,p)&&(a=l.c[p]))for(w=c[p],_=0;_<w.length;_++)r=w[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](l);for(var o in c)if(l.o(c,o)){var a=l.c[o];if(a){w=c[o];for(var d=[],f=[],p=0;p<w.length;p++){var h=w[p],m=a.hot._acceptedDependencies[h];if(m){if(-1!==d.indexOf(m))continue;d.push(m),f.push(h)}}for(var v=0;v<d.length;v++)try{d[v].call(null,w)}catch(r){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[v],error:r}),i.ignoreErrored||e(r)}}}for(var g=0;g<E.length;g++){var y=E[g],b=y.module;try{y.require(b)}catch(r){if("function"==typeof y.errorHandler)try{y.errorHandler(r)}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:n,originalError:r}),i.ignoreErrored||e(n),e(r)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:b,error:r}),i.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdateMagic_Slider=(e,n,o)=>{for(var a in n)l.o(n,a)&&(r[a]=n[a]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},l.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(d)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(i,c,s,u,f,p){f.push(d),e={},n=c,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){l.o(o,r)&&void 0!==o[r]&&(u.push(a(r)),e[r]=!0)})),l.f&&(l.f.jsonpHmr=function(r,n){e&&!l.o(e,r)&&l.o(o,r)&&void 0!==o[r]&&(n.push(a(r)),e[r]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(192)})();