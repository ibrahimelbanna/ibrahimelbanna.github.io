(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167),c=a(166);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},164:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(35),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.withPrefix});a(165);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},165:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},166:function(e,t,a){"use strict";var n=a(172),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(181),s=a.n(l),u=a(164);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var m="1025518380"},167:function(e,t,a){"use strict";a(26);var n=a(170),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(164),s={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},u={style:{color:"#fff"},className:"night-mode"},d=a(173),m=(a(174),a(175),a(171)),g=a.n(m),p=(a(176),function(e){var t=e.toggleMode,a=e.mode,n=(e.currentPath,"day"===a?s:u),c=Object(d.useMedia)({maxWidth:"1111px"},!0),o=Object(d.useMedia)({maxWidth:"512px"},!0),m=Object(r.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:c,hideMyName:o}),p=m[0],f=m[1],y=function(e){t(e);try{localStorage.setItem("mode",e)}catch(a){console.log(a)}};return i.a.createElement("header",Object.assign({},n,{className:n.className+" main-header"}),i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:g.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===a?{filter:"invert(100%)"}:{},o?{}:{marginBottom:10}),alt:"logo"}),!p.isShowMenuActive&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!o&&"Zeyad Etman"))),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(p.isShowMenuActive||!c)&&i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",activeClassName:"active-page-link"},"home")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/work",activeClassName:"active-page-link"},"work")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),c&&i.a.createElement("a",{href:"javascript:void(0)",style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){f("TOGGLE_SHOW_MENU")}},"☰"),"day"===a?i.a.createElement("i",{key:a,onClick:function(){return y("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):i.a.createElement("i",{key:a,onClick:function(){return y("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}})))}),f=a(59),y=(a(177),a(178),a(179),a(180),function(e){var t=e.children,a=e.mode,c=e.toggleMode,o=e.currentPath,d="day"===a?s:u;return Object(r.useEffect)(function(){"night"===a?(d=u,document.body.style.backgroundColor="#0e0e0e"):(d=s,document.body.style.backgroundColor="#fff")},[a]),i.a.createElement(l.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(p,{siteTitle:e.site.siteMetadata.title,mode:a,currentPath:o,toggleMode:c}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},d,{style:Object.assign({},d.style),mode:a}),t)))},data:n})});y.propTypes={children:o.a.node.isRequired};t.a=Object(f.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(y)},169:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(61),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},171:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9d1af5a69b498b82f3e3.js.map