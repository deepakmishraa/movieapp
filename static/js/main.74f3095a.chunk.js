(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[1],{107:function(e,n,t){},108:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(27),o=t.n(i),s=t(22),a=t(5),j=t(55),l=t(26),u=t(39),d=t.n(u),h=(t(94),t(95),t(2)),b=function(e){var n=e.list;return Object(h.jsx)("div",{className:"movie-box",children:Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n&&n.poster_path),alt:"".concat(n&&n.title," Poster")}),Object(h.jsx)("p",{className:"font",children:"".concat(n&&n.title," Poster")})]})})},f=function(){var e=Object(c.useState)(),n=Object(l.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(1),o=Object(l.a)(i,2),s=o[0],j=o[1],u=Object(c.useState)(),f=Object(l.a)(u,2),m=f[0],O=f[1],y=Object(c.useRef)(null);Object(c.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=531c8779023f70f5ec45da60cc337e58&language=en-US&page=".concat(s)).then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[s]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(a.h,{children:[Object(h.jsx)(a.f,{children:Object(h.jsx)(a.m,{className:"BgHeader",children:Object(h.jsx)(a.e,{children:Object(h.jsxs)(a.k,{children:[Object(h.jsx)(a.b,{size:"6",children:Object(h.jsx)(a.l,{className:"Header",children:"Movies App"})}),Object(h.jsx)(a.b,{size:"6","size-md":"4","offset-md":"1",className:"serchdiv",children:Object(h.jsx)("form",{onSubmit:function(e){var n;e.preventDefault();var t=null===(n=y.current)||void 0===n?void 0:n.value;d.a.get("https://api.themoviedb.org/3/search/movie?api_key=531c8779023f70f5ec45da60cc337e58&query=".concat(t)).then((function(e){""==e.data.results?alert("not Found"):r(e.data.results)})).catch((function(e){return console.log(e)}))},children:Object(h.jsx)(a.g,{type:"text",className:"searchbox",placeholder:"Search.....",value:m,onChange:function(e){O(e.target.value),console.log(e.target)},id:"searchdata",ref:y})})})]})})})}),Object(h.jsx)(a.c,{className:"Bg",children:Object(h.jsx)("div",{className:"maindiv",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"grid",children:t&&t.map((function(e){return Object(h.jsx)(b,{list:e})}))})})})}),Object(h.jsx)(a.d,{children:Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("a",{onClick:function(){return j(--s)},children:"\xab"}),Object(h.jsx)("a",{onClick:function(){return j(1)},children:"1"}),Object(h.jsx)("a",{className:"".concat(2===s?"active":""),onClick:function(){return j(2)},children:"2"}),Object(h.jsx)("a",{className:"".concat(3===s?"active":""),onClick:function(){return j(3)},children:"3"}),Object(h.jsx)("a",{className:"".concat(4===s?"active":""),onClick:function(){return j(4)},children:"4"}),Object(h.jsx)("a",{className:"".concat(5===s?"active":""),onClick:function(){return j(5)},children:"5"}),Object(h.jsx)("a",{className:"".concat(6===s?"active":""),onClick:function(){return j(6)},children:"6"}),Object(h.jsx)("a",{className:"".concat(7===s?"active":""),onClick:function(){return j(7)},children:"7"}),Object(h.jsx)("a",{onClick:function(){return j(++s)},children:"\xbb"})]})})]})})},m=(t(97),t(98),t(99),t(100),t(101),t(102),t(103),t(104),t(105),t(106),t(107),function(){return Object(h.jsx)(a.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(a.j,{children:[Object(h.jsx)(s.b,{exact:!0,path:"/",children:Object(h.jsx)(s.a,{to:"/home"})}),Object(h.jsx)(s.b,{exact:!0,path:"/home",children:Object(h.jsx)(f,{})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,170)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),O()},67:function(e,n,t){var c={"./ion-action-sheet.entry.js":[110,5],"./ion-alert.entry.js":[111,6],"./ion-app_8.entry.js":[112,7],"./ion-avatar_3.entry.js":[113,17],"./ion-back-button.entry.js":[114,18],"./ion-backdrop.entry.js":[115,43],"./ion-button_2.entry.js":[116,19],"./ion-card_5.entry.js":[117,20],"./ion-checkbox.entry.js":[118,21],"./ion-chip.entry.js":[119,22],"./ion-col_3.entry.js":[120,44],"./ion-datetime_3.entry.js":[121,10],"./ion-fab_3.entry.js":[122,23],"./ion-img.entry.js":[123,45],"./ion-infinite-scroll_2.entry.js":[124,46],"./ion-input.entry.js":[125,24],"./ion-item-option_3.entry.js":[126,25],"./ion-item_8.entry.js":[127,26],"./ion-loading.entry.js":[128,27],"./ion-menu_3.entry.js":[129,28],"./ion-modal.entry.js":[130,8],"./ion-nav_2.entry.js":[131,14],"./ion-popover.entry.js":[132,9],"./ion-progress-bar.entry.js":[133,29],"./ion-radio_2.entry.js":[134,30],"./ion-range.entry.js":[135,31],"./ion-refresher_2.entry.js":[136,11],"./ion-reorder_2.entry.js":[137,16],"./ion-ripple-effect.entry.js":[138,47],"./ion-route_4.entry.js":[139,32],"./ion-searchbar.entry.js":[140,33],"./ion-segment_2.entry.js":[141,34],"./ion-select_3.entry.js":[142,35],"./ion-slide_2.entry.js":[143,48],"./ion-spinner.entry.js":[144,13],"./ion-split-pane.entry.js":[145,49],"./ion-tab-bar_2.entry.js":[146,36],"./ion-tab_2.entry.js":[147,15],"./ion-text.entry.js":[148,37],"./ion-textarea.entry.js":[149,38],"./ion-toast.entry.js":[150,39],"./ion-toggle.entry.js":[151,12],"./ion-virtual-scroll.entry.js":[152,50]};function r(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(c)},r.id=67,e.exports=r},69:function(e,n,t){var c={"./ion-icon.entry.js":[153,57]};function r(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(c)},r.id=69,e.exports=r},94:function(e,n,t){},95:function(e,n,t){}},[[108,3,4]]]);
//# sourceMappingURL=main.74f3095a.chunk.js.map