(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(213),a(217)),l=a(221),c=a(264),o=a.n(c),m=a(265),s=a(273),u=a(274),d=a(238);t.default=function(e){e.location.pathname;return r.a.createElement(i.a,{currentPath:"/home/"},r.a.createElement(l.a,{title:"Home",keywords:["zeyadetman","portfolio"]}),r.a.createElement("div",{style:{textAlign:"center",margin:"0px auto",width:"80%",minWidth:320}},r.a.createElement("img",{src:o.a,style:{borderRadius:"50%",width:200,border:"5px solid #f2ece0",boxShadow:"0px 2px 14px rgba(0,0,0,0.6)"}}),r.a.createElement("h2",{className:"text-vertical-margin"},"Zeyad Etman"),r.a.createElement("h3",{className:"text-vertical-margin"},"Software Engineer, Front-End Developer"),r.a.createElement("p",null,"I do stuff ",r.a.createElement("i",{className:"twa twa-zap"})," on the Internet.")),r.a.createElement("ul",{style:{display:"flex",justifyContent:"center"},className:"social-network"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/zeyadetman"},r.a.createElement(m.a,{icon:s.b}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/zeyadetman"},r.a.createElement(m.a,{icon:s.d}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/zeyadetman"},r.a.createElement(m.a,{icon:s.a}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/zeyadetman"},r.a.createElement(m.a,{icon:s.c}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:zeyadetman@gmail.com"},r.a.createElement(m.a,{icon:u.a})))),r.a.createElement(d.a,null))}},213:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(72),l=a.n(i);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return i.withPrefix});a(214),a(9).default.enqueue;var c=r.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||i,staticQueryData:e})})}},214:function(e,t,a){var n;e.exports=(n=a(216))&&n.default||n},215:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},r={style:{color:"#fff"},className:"night-mode"}},216:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(100);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},217:function(e,t,a){"use strict";(function(e){a(20),a(223),a(142);var n=a(218),r=a(0),i=a.n(r),l=a(213),c=a(215),o=a(219),m=a(99),s=(a(228),a(229),a(230),a(231),a(233));s.a.initialize("UA-50784035-2"),"undefined"!=typeof window&&s.a.pageview(window.location.pathname+window.location.search);t.a=Object(m.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(function(t){var a=t.children,m=t.mode,s=t.toggleMode,u=t.currentPath,d="day"===m?c.a:c.b,f=Object(r.useState)(e&&e.localStorage&&Number(e.localStorage.isSaveBatteryMode)||1),p=f[0],g=f[1];return Object(r.useEffect)(function(){"night"===m?(d=c.b,document.body.style.backgroundColor="#0e0e0e"):(d=c.a,document.body.style.backgroundColor="#fff")},[m]),i.a.createElement(l.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(o.a,{siteTitle:e.site.siteMetadata.title,mode:m,currentPath:u,toggleMode:s,isSaveBatteryMode:p,setSaveBatteryMode:function(e){localStorage.setItem("isSaveBatteryMode",e?1:0),g(e)}}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},d,{style:Object.assign({},d.style),mode:m}),a)))},data:n})})}).call(this,a(141))},218:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},219:function(e,t,a){"use strict";a(20);var n=a(0),r=a.n(n),i=a(213),l=a(224),c=(a(225),a(215)),o=(a(226),a(220)),m=a.n(o),s=a(277);a(227);t.a=function(e){var t=e.toggleMode,a=e.mode,o=(e.currentPath,e.isSaveBatteryMode),u=e.setSaveBatteryMode,d="day"===a?c.a:c.b,f=Object(l.useMedia)({maxWidth:"1111px"},!0),p=Object(l.useMedia)({maxWidth:"512px"},!0),g=Object(n.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:f,hideMyName:p}),E=g[0],y=g[1],h=Object(s.a)();o||(h={}),Object(n.useEffect)(function(){"isSupported"in h&&"level"in h&&"charging"in h&&h.level>.6&&h.charging?u(!1):"isSupported"in h&&"level"in h&&"charging"in h&&h.level<.25&&!h.charging&&"day"===a&&o&&t()},[h]);var v=function(e){t(e);try{localStorage.setItem("mode",e)}catch(a){return a}};return r.a.createElement("header",Object.assign({},d,{className:d.className+" main-header"}),r.a.createElement("div",{className:"main-logo"},r.a.createElement("img",{src:m.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===a?{filter:"invert(100%)"}:{},{},p?{}:{marginBottom:10}),alt:"logo"}),!E.isShowMenuActive&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!p&&"Zeyad Etman"))),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(E.isShowMenuActive||!f)&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.a,{to:"/",activeClassName:"active-page-link"},"home")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/work",activeClassName:"active-page-link"},"work")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/snippets",activeClassName:"active-page-link"},"Snippets")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),f&&r.a.createElement("a",{style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){y("TOGGLE_SHOW_MENU")}},"☰"),"day"===a?r.a.createElement("i",{title:"Day mode is on",onClick:function(){return v("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Dark mode is on",onClick:function(){return v("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}}),o?r.a.createElement("i",{title:"Save battery mode is on",onClick:function(){return u(!1)},className:"twa twa-battery",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Save battery mode is off",onClick:function(){return u(!0)},className:"twa twa-electric-plug",style:{fontSize:"2em"}})))}},220:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},221:function(e,t,a){"use strict";var n=a(222),r=a(0),i=a.n(r),l=a(232),c=a.n(l),o=a(213);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,m=e.title;return i.a.createElement(o.b,{query:s,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:m,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},t.a=m;var s="1025518380"},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},238:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),i=a(213),l=function(e){var t=e.page,a=e.info;return r.a.createElement("div",{className:"card",style:{padding:"15px 1.5em"}},r.a.createElement("h3",{style:{textAlign:"center",marginTop:0}},t.path?r.a.createElement(i.a,{to:t.path},t.title):r.a.createElement("a",{href:"javascript:void(0);"},t.title)),a)},c=[{page:{path:"/projects",title:"Side Projects & Tools"},info:"I'm building some cool stuff to learn new things, and make the internet a better place."},{page:{path:"/blog",title:"Writing"},info:r.a.createElement("p",null,"I'm Writing from time to time, mainly programming and a little of mathematics. You also can follow me on"," ",r.a.createElement("a",{href:"https://dev.to/zeyadetman"},"dev.to"))},{page:{title:"Follow Me"},info:r.a.createElement("p",null,"You can follow me on ",r.a.createElement("a",{href:"https://github.com/zeyadetman"},"GitHub"),", ",r.a.createElement("a",{href:"https://twitter.com/zeyadetman"},"Twitter"),", ",r.a.createElement("a",{href:"https://www.facebook.com/zeyadetman"},"Facebook"),", ",r.a.createElement("a",{href:"https://www.linkedin.com/in/zeyadetman"},"LinkedIn"),", ",r.a.createElement("a",{href:"https://stackoverflow.com/users/5721245/zeyad-etman"},"Stack Overflow"),", ",r.a.createElement("a",{href:"https://www.quora.com/profile/Zeyad-Etman"},"Quora"),", ",r.a.createElement("a",{href:"mailto:zeyadetman@gmail.com"},"Email"),".")}];function o(){return r.a.createElement("div",{style:{marginTop:"15px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:"15px"}},c.map(function(e){var t=e.page,a=e.info;return r.a.createElement(l,{page:t,key:t.title,info:a})}))}},264:function(e,t,a){e.exports=a.p+"static/me-397f4ea337b200a3fa5de6c5da9c0e5a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-e3f0c313fc80de973efb.js.map