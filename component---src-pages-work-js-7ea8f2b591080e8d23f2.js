(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167);a(26);function o(e){var t=e.style,a=e.title,n=e.url,i=e.type,o=e.color;return r.a.createElement("div",{style:Object.assign({display:"flex",justifyContent:"center",alignItems:"center"},t)},r.a.createElement("span",{style:{background:o,padding:"2px 5px 1px 5px",fontSize:12,textTransform:"capitalize",display:"inline-block",verticalAlign:"text-bottom",color:"#0d0d0d"}},i),a&&n&&r.a.createElement("a",{href:n,style:{marginLeft:5}},a))}var c=a(166),l=a(59);t.default=Object(l.b)(function(e){return{mode:e.mode}})(function(e){var t=e.mode,l=e.location.pathname;Object(n.useEffect)(function(){delete a.c[188],a(188)},[t]);return r.a.createElement(i.a,{currentPath:l},r.a.createElement(c.a,{title:"Work",keywords:["work","hire","frontend","developer","arqamfc","lynks"]}),r.a.createElement("h1",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:35}},"Hire Me",r.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"medium","data-locale":"en_US","data-type":"horizontal","data-theme":"day"===t?"light":"dark","data-vanity":"zeyadetman"},r.a.createElement("a",{className:"LI-simple-link",href:"https://eg.linkedin.com/in/zeyadetman"},"Zeyad Etman"))),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:15}},[{title:"Front-End Development",url:"https://lynks.com",logo:"https://bosta.co/images/clients/lynks-logo-en.png",date:"Jan 2019 – Present"},{title:"Front-End Development",url:"https://www.arqamfc.com/",logo:"https://static.wixstatic.com/media/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png/v1/fill/w_402,h_274,al_c,usm_0.66_1.00_0.01/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png",date:"Jun 2018 – Nov 2018"}].map(function(e,t){var a=e.date,n=e.title,i=e.url,c=e.logo;return e.current,r.a.createElement("div",{className:"content",key:t,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{height:150,width:150,display:"flex",alignItems:"center"}},r.a.createElement("a",{href:i},r.a.createElement("img",{src:c,width:"150px"}))),r.a.createElement("div",null,r.a.createElement(o,{type:n,color:"rgb(226, 226, 226)",style:{marginBottom:5,fontWeight:600}}),r.a.createElement(o,{type:a,color:"rgb(255, 202, 43)"})))})))})},164:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(35),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.withPrefix});a(165);var d=r.a.createContext({}),s=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},165:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},166:function(e,t,a){"use strict";var n=a(172),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(181),d=a.n(l),s=a(164);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(s.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var u="1025518380"},167:function(e,t,a){"use strict";a(26);var n=a(170),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(164),d={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},s={style:{color:"#fff"},className:"night-mode"},m=a(173),u=(a(174),a(175),a(171)),p=a.n(u),g=(a(176),function(e){var t=e.toggleMode,a=e.mode,n=(e.currentPath,"day"===a?d:s),o=Object(m.useMedia)({maxWidth:"1111px"},!0),c=Object(m.useMedia)({maxWidth:"512px"},!0),u=Object(r.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:o,hideMyName:c}),g=u[0],f=u[1],y=function(e){t(e);try{localStorage.setItem("mode",e)}catch(a){console.log(a)}};return i.a.createElement("header",Object.assign({},n,{className:n.className+" main-header"}),i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:p.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===a?{filter:"invert(100%)"}:{},c?{}:{marginBottom:10}),alt:"logo"}),!g.isShowMenuActive&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!c&&"Zeyad Etman"))),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(g.isShowMenuActive||!o)&&i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",activeClassName:"active-page-link"},"home")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/work",activeClassName:"active-page-link"},"work")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),o&&i.a.createElement("a",{href:"javascript:void(0)",style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){f("TOGGLE_SHOW_MENU")}},"☰"),"day"===a?i.a.createElement("i",{key:a,onClick:function(){return y("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):i.a.createElement("i",{key:a,onClick:function(){return y("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}})))}),f=a(59),y=(a(177),a(178),a(179),a(180),function(e){var t=e.children,a=e.mode,o=e.toggleMode,c=e.currentPath,m="day"===a?d:s;return Object(r.useEffect)(function(){"night"===a?(m=s,document.body.style.backgroundColor="#0e0e0e"):(m=d,document.body.style.backgroundColor="#fff")},[a]),i.a.createElement(l.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,mode:a,currentPath:c,toggleMode:o}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},m,{style:Object.assign({},m.style),mode:a}),t)))},data:n})});y.propTypes={children:c.a.node.isRequired};t.a=Object(f.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(y)},169:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(61),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},171:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},188:function(e,t,a){var n;a(36),a(209),(n=window).LIRenderAll=function(){function e(e){var t=e.getAttribute("data-size"),a=e.getAttribute("data-locale"),n=e.getAttribute("data-type"),r=e.getAttribute("data-theme"),i=e.getAttribute("data-vanity"),o=e.getAttribute("data-version"),c=e.getAttribute("data-ei"),l=e.getAttribute("data-entity"),s=e.getAttribute("data-iscreate"),m=Math.round(1e6*Math.random());c=c?"https://badges.linkedin-ei.com/":"https://badges.linkedin.com/",a=["locale="+encodeURIComponent(a),"badgetype="+encodeURIComponent(n),"badgetheme="+encodeURIComponent(r),"uid="+encodeURIComponent(m),"version="+encodeURIComponent(o)],"v2"===o?(c+="view",a.push("badgesize="+encodeURIComponent(t)),a.push("entity="+encodeURIComponent(l)),a=a.concat(function(e){return Array.prototype.slice.call(e.attributes).filter(function(e){return-1!==e.name.lastIndexOf("data-key-",0)}).map(function(e){return encodeURIComponent(e.name.replace("data-","").toLowerCase())+"="+encodeURIComponent(e.value)})}(e))):(c+="profile",a.push("maxsize="+encodeURIComponent(t)),a.push("trk="+encodeURIComponent("profile-badge")),a.push("vanityname="+encodeURIComponent(i))),s&&a.push("fromCreate=true"),t=c+"?"+a.join("&"),e.setAttribute("data-uid",m),(e=document.createElement("script")).src=t,d.push(e),document.body.appendChild(e)}function t(e,a){if("SCRIPT"!==e.tagName||s[e.src]||a&&(!a||e.getAttribute("data-isartdeco")))for(var n=0,r=e.childNodes;n<r.length;)t(r[n++],a);else e.parentNode.replaceChild(function(e){for(var t=document.createElement("script"),a=e.attributes.length-1;0<=a;a--)t.setAttribute(e.attributes[a].name,e.attributes[a].value);return t}(e),e),s[e.src]=!0;return e}function a(){(c>=l&&0<l||c>=m.length)&&(delete n.LIBadgeCallback,d.map(function(e){document.body.removeChild(e)}))}var r,i,o,c=0,l=0,d=[],s={},m=Array.prototype.slice.call(document.querySelectorAll(".LI-profile-badge, .LI-entity-badge"));for(r=0,i=m.length;r<i;r++)(o=m[r]).getAttribute("data-rendered")||(l++,o.setAttribute("data-rendered",!0),e(o));n.LIBadgeCallback=function(e,n){var r,o,l,d;for(c++,r=0,i=m.length;r<i;r++)d=(o=m[r]).getAttribute("data-iscreate"),(l=parseInt(o.getAttribute("data-uid"),10))===n&&((l=document.createElement("div")).innerHTML=e,o.appendChild(l),t(o,d));a()}},"complete"===document.readyState?n.LIRenderAll():n.addEventListener("load",n.LIRenderAll,!1)},209:function(e,t,a){var n=a(27).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-work-js-7ea8f2b591080e8d23f2.js.map