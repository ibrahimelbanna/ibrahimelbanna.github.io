(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{210:function(e,t,n){"use strict";n.r(t);n(147),n(148);var o=n(261),r=n(0),a=n.n(r),i=n(217),s=n(221),c=n(213),l=n(262),u=n.n(l);function d(e){var t=e.excerpt,n=e.title,o=e.date,r=e.id,i=e.timeToRead,s=e.slug;return a.a.createElement("article",{className:u.a.articleSummary+" article",key:r},a.a.createElement("header",null,a.a.createElement("h3",null,a.a.createElement(c.a,{to:"/"+s},n)," "),a.a.createElement("small",{className:"article-meta"},a.a.createElement("span",null,o),"   •   ",a.a.createElement("span",null,i+" "+(i>1?"mins":"min")+" read"))),a.a.createElement("p",null,t))}var p=n(236),m=(n(242),n(263)),f=n.n(m);function h(e){var t=e.location.pathname;return a.a.createElement(i.a,{currentPath:t},a.a.createElement(s.a,{title:"Blog",keywords:["zeyadetman","blog","technical"]}),a.a.createElement(c.b,{query:"432827260",render:function(e){var t=e.allMarkdownRemark.edges;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:f.a.blogPageH1},"Writings & Thoughts",a.a.createElement(p.a,{screenName:"zeyadetman"})),t.map(function(e){var t=e.node;return!t.fields.slug.includes("/ar/")&&a.a.createElement(d,{title:t.frontmatter.title,date:t.frontmatter.date,id:t.id,timeToRead:t.timeToRead,excerpt:t.excerpt,key:t.id,slug:t.fields.slug})}))},data:o}))}n.d(t,"default",function(){return h})},212:function(e,t,n){var o,r,a;n(28),n(38),n(37),a=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r=!1,a="push",i="readyState",s="onreadystatechange",c={},l={},u={},d={};function p(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return r;return 1}function m(e,t){p(e,function(e){return t(e),1})}function f(t,n,o){t=t[a]?t:[t];var r=n&&n.call,i=r?n:o,s=r?t.join(""):n,w=t.length;function b(e){return e.call?e():c[e]}function y(){if(!--w)for(var e in c[s]=1,i&&i(),u)p(e.split("|"),b)&&!m(u[e],b)&&(u[e]=[])}return setTimeout(function(){m(t,function t(n,o){return null===n?y():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(s&&(l[s]=1),2==d[n]?y():setTimeout(function(){t(n,!0)},0)):(d[n]=1,s&&(l[s]=1),void h(n,y)))})},0),f}function h(e,r){var a,c=n.createElement("script");c.onload=c.onerror=c[s]=function(){c[i]&&!/^c|loade/.test(c[i])||a||(c.onload=c[s]=null,a=1,d[e]=2,r())},c.async=1,c.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(c,o.lastChild)}return f.get=h,f.order=function(e,t,n){!function o(r){r=e.shift(),e.length?f(r,o):f(r,t,n)}()},f.path=function(t){e=t},f.urlArgs=function(e){t=e},f.ready=function(e,t,n){e=e[a]?e:[e];var o,r=[];return!m(e,function(e){c[e]||r[a](e)})&&p(e,function(e){return c[e]})?t():(o=e.join("|"),u[o]=u[o]||[],u[o][a](t),n&&n(r)),f},f.done=function(e){f([null],e)},f},e.exports?e.exports=a():void 0===(r="function"==typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=r)},213:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var o=n(0),r=n.n(o),a=n(72),i=n.n(a);n.d(t,"a",function(){return i.a}),n.d(t,"c",function(){return a.withPrefix});n(214),n(9).default.enqueue;var s=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,o=e.query,a=e.render,i=n?n.data:t[o]&&t[o].data;return r.a.createElement(r.a.Fragment,null,i&&a(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,n=e.query,o=e.render,a=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:n,render:o||a,staticQueryData:e})})}},214:function(e,t,n){var o;e.exports=(o=n(216))&&o.default||o},215:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},r={style:{color:"#fff"},className:"night-mode"}},216:function(e,t,n){"use strict";n.r(t);n(20);var o=n(0),r=n.n(o),a=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},217:function(e,t,n){"use strict";(function(e){n(20),n(223),n(142);var o=n(218),r=n(0),a=n.n(r),i=n(213),s=n(215),c=n(219),l=n(99),u=(n(228),n(229),n(230),n(231),n(233));u.a.initialize("UA-50784035-2"),"undefined"!=typeof window&&u.a.pageview(window.location.pathname+window.location.search);t.a=Object(l.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(function(t){var n=t.children,l=t.mode,u=t.toggleMode,d=t.currentPath,p="day"===l?s.a:s.b,m=Object(r.useState)(e&&e.localStorage&&Number(e.localStorage.isSaveBatteryMode)||1),f=m[0],h=m[1];return Object(r.useEffect)(function(){"night"===l?(p=s.b,document.body.style.backgroundColor="#0e0e0e"):(p=s.a,document.body.style.backgroundColor="#fff")},[l]),a.a.createElement(i.b,{query:"2994927498",render:function(e){return a.a.createElement("div",{style:{margin:"0 auto"}},a.a.createElement(c.a,{siteTitle:e.site.siteMetadata.title,mode:l,currentPath:d,toggleMode:u,isSaveBatteryMode:f,setSaveBatteryMode:function(e){localStorage.setItem("isSaveBatteryMode",e?1:0),h(e)}}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a.a.createElement("main",Object.assign({},p,{style:Object.assign({},p.style),mode:l}),n)))},data:o})})}).call(this,n(141))},218:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},219:function(e,t,n){"use strict";n(20);var o=n(0),r=n.n(o),a=n(213),i=n(224),s=(n(225),n(215)),c=(n(226),n(220)),l=n.n(c),u=n(277);n(227);t.a=function(e){var t=e.toggleMode,n=e.mode,c=(e.currentPath,e.isSaveBatteryMode),d=e.setSaveBatteryMode,p="day"===n?s.a:s.b,m=Object(i.useMedia)({maxWidth:"1111px"},!0),f=Object(i.useMedia)({maxWidth:"512px"},!0),h=Object(o.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:m,hideMyName:f}),w=h[0],b=h[1],y=Object(u.a)();c||(y={}),Object(o.useEffect)(function(){"isSupported"in y&&"level"in y&&"charging"in y&&y.level>.6&&y.charging?d(!1):"isSupported"in y&&"level"in y&&"charging"in y&&y.level<.25&&!y.charging&&"day"===n&&c&&t()},[y]);var g=function(e){t(e);try{localStorage.setItem("mode",e)}catch(n){return n}};return r.a.createElement("header",Object.assign({},p,{className:p.className+" main-header"}),r.a.createElement("div",{className:"main-logo"},r.a.createElement("img",{src:l.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===n?{filter:"invert(100%)"}:{},{},f?{}:{marginBottom:10}),alt:"logo"}),!w.isShowMenuActive&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!f&&"Zeyad Etman"))),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(w.isShowMenuActive||!m)&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(a.a,{to:"/",activeClassName:"active-page-link"},"home")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/work",activeClassName:"active-page-link"},"work")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/snippets",activeClassName:"active-page-link"},"Snippets")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),m&&r.a.createElement("a",{style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){b("TOGGLE_SHOW_MENU")}},"☰"),"day"===n?r.a.createElement("i",{title:"Day mode is on",onClick:function(){return g("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Dark mode is on",onClick:function(){return g("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}}),c?r.a.createElement("i",{title:"Save battery mode is on",onClick:function(){return d(!1)},className:"twa twa-battery",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Save battery mode is off",onClick:function(){return d(!0)},className:"twa twa-electric-plug",style:{fontSize:"2em"}})))}},220:function(e,t,n){e.exports=n.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},221:function(e,t,n){"use strict";var o=n(222),r=n(0),a=n.n(r),i=n(232),s=n.n(i),c=n(213);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return a.a.createElement(c.b,{query:u,render:function(e){var o=t||e.site.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:o})}l.defaultProps={lang:"en",meta:[],keywords:[]},t.a=l;var u="1025518380"},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},235:function(e,t,n){"use strict";n(35),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(o,r,a){for(var i=arguments.length,s=Array(3<i?i-3:0),c=3;c<i;c++)s[c-3]=arguments[c];return function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(1!=!!e||!e)}(t,o,r,a)?function(e,t){return Object.hasOwnProperty.call(e,t)}(o,r)?e.apply(void 0,[o,r,a].concat(s)):function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")}(o,r,a,n):e.apply(void 0,[o,r,a].concat(s))}}},236:function(e,t,n){"use strict";n(20);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}var c=n(103);function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?Object(c.a)(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(0),h=n.n(f),w=n(15),b=n.n(w),y=n(235),g=n.n(y),v=n(237),C=n.n(v);n.d(t,"b",function(){return E}),n.d(t,"a",function(){return M});var k="https://platform.twitter.com/widgets.js";m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e)}},{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{sourceType:b.a.oneOf(["profile","likes","list","collection","URL","widget"]).isRequired,screenName:g()(b.a.string,function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)}),userId:g()(b.a.number,function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)}),ownerScreenName:g()(b.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),slug:g()(b.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),id:g()(b.a.oneOfType([b.a.number,b.a.string]),function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType}),url:g()(b.a.string,function(e){return"url"===e.sourceType}),widgetId:g()(b.a.string,function(e){return"widget"===e.sourceType}),options:b.a.object,autoHeight:b.a.bool,theme:b.a.oneOf(["dark","light"]),linkColor:b.a.string,borderColor:b.a.string,noHeader:b.a.bool,noFooter:b.a.bool,noBorders:b.a.bool,noScrollbar:b.a.bool,transparent:b.a.bool,lang:b.a.string});var E=function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}();m(E,"propTypes",{url:b.a.string.isRequired,options:b.a.object});var M=function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}();m(M,"propTypes",{screenName:b.a.string.isRequired,options:b.a.object}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tag:b.a.string.isRequired,options:b.a.object}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{screenName:b.a.string.isRequired,options:b.a.object}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"renderWidget",value:function(){var e=this;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then(function(t){e.props.onLoaded&&e.props.onLoaded(t)}):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){e.renderWidget()})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tweetId:b.a.string.isRequired,options:b.a.object,onLoaded:b.a.func}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"shareMoment"})}}]),t}(),"propTypes",{momentId:b.a.string.isRequired,options:b.a.object}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:b.a.number.isRequired,options:b.a.object}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:b.a.string.isRequired}),m(function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(212)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{username:b.a.string.isRequired,options:b.a.object})},261:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"5db60ea1-8e57-599f-9792-aa0289261d5d",excerpt:"Hi all, in this post I'll share with you some frontend code, that we can write it in another way,\nAnd everything is working well, doesn't…",frontmatter:{title:"Another way to write your JavaScript",date:"September 09, 2019"},timeToRead:4,fields:{slug:"blog/posts/Another-way-to-write-your-JavaScript/"},wordCount:{words:382}}},{node:{id:"29174a56-1e94-54b9-8822-547299567178",excerpt:"Hello everyone, In this post (Two parts) I'll convert a reactjs code from a class component to a functional component. Focusing on  and…",frontmatter:{title:"From ReactJS Class Component to Functional Component - useState (Part 1)",date:"March 09, 2019"},timeToRead:3,fields:{slug:"blog/posts/from-reactjs-class-component-to-functional-component-usestate-part-1/"},wordCount:{words:300}}},{node:{id:"e3b2405b-90b0-53aa-9596-4747649fe2bd",excerpt:"قمت بتجديد مدونتي على Gatsbyjs بدلاً من Jekyll…",frontmatter:{title:"طوّرت مدونتى من jekyll الى GatsbyJS, عليك تجربتها",date:"March 02, 2019"},timeToRead:1,fields:{slug:"blog/posts/revamp-my-blog-from-jekyll-to-gatsby-and-you-have-to-try/ar/"},wordCount:{words:263}}},{node:{id:"a7b5c049-8bbe-59d7-b288-ee4c5e5a6ff5",excerpt:"I revamped my blog to be built on Gatsbyjs instead of Jekyll, Everything become cleaner, and faster. In this post I'll explain what are the…",frontmatter:{title:"Revamp my blog from Jekyll to Gatsby, and You have to try",date:"March 02, 2019"},timeToRead:1,fields:{slug:"blog/posts/revamp-my-blog-from-jekyll-to-gatsby-and-you-have-to-try/"},wordCount:{words:312}}},{node:{id:"7756bd25-f4b2-5bb0-9d29-b0cabd46325a",excerpt:"Pure Functions Vs Impure Functions Hello, in this post I'll explain the difference between pure and impure functions in JavaScript, and How…",frontmatter:{title:"Refactoring Functions",date:"February 14, 2019"},timeToRead:3,fields:{slug:"blog/posts/refactoring-functions/"},wordCount:{words:421}}},{node:{id:"9e3d1a08-837c-5c50-a523-9806f89b87ff",excerpt:"HashTables Before we make a hashtable, let's talk about its components , , and . read them even if you know! Components Arrays?  if we  the…",frontmatter:{title:"Hashtables for newbies",date:"September 26, 2018"},timeToRead:3,fields:{slug:"blog/posts/hashtables-for-newbies/"},wordCount:{words:373}}},{node:{id:"0fc5742f-42a8-5c72-a226-74bba62ab2b7",excerpt:"In this post, i'll explain how to pass a state between components in Reactjs.\nWe'll build a small 'How many books did you read?' app, in…",frontmatter:{title:"How to pass state between components in reactjs (Full Code)",date:"July 25, 2018"},timeToRead:4,fields:{slug:"blog/posts/How-to-pass-state-between-components-in-reactjs/"},wordCount:{words:401}}},{node:{id:"041dfc63-dbc5-5929-bd30-dd931596f2b5",excerpt:"السﻻم عليكم، فى البوست ده (متقسم على جزئين) هحول reactjs code من الـ class component للـ functional component…",frontmatter:{title:"ReactJS من Class Component الى Functional Component - useState (الجزء الاول بالعربى)",date:"March 09, 2018"},timeToRead:3,fields:{slug:"blog/posts/from-reactjs-class-component-to-functional-component-usestate-part-1/ar/"},wordCount:{words:250}}},{node:{id:"f623634b-5e43-537f-b436-bbb5c94cb57b",excerpt:"The problem i want to talk about in this post that we consider our minds should have one direction or thought, and this direction must be…",frontmatter:{title:"Developers should have two minds, technical mind and business mind.",date:"December 03, 2017"},timeToRead:4,fields:{slug:"blog/posts/Developers-should-have-two-minds/"},wordCount:{words:743}}},{node:{id:"ff2df7ab-8023-57c4-ac51-c8b1504f0080",excerpt:"Assalamu Alaikum everyone :D\nI just finished my fourth and last project on Intermediate Front End Development Projects on freecodecamp and…",frontmatter:{title:"Intermediate Front End Development Projects on freecodecamp in two days",date:"September 13, 2017"},timeToRead:3,fields:{slug:"blog/posts/intermediate-front-end-development-projects-on-freecodecamp-in-two-days/"},wordCount:{words:390}}},{node:{id:"69335b5c-82ec-5266-bc3f-b460b2d25afe",excerpt:"",frontmatter:{title:"What's the number of Triangles in irregular hexagon ?",date:"July 21, 2017"},timeToRead:1,fields:{slug:"blog/posts/whats-the-number-of-triangles-in-irregular-hexagon/"},wordCount:{words:null}}},{node:{id:"955f983f-275b-57d3-b779-a1c1f1533c78",excerpt:"‘A’ is a criminal, he wants to rob a bank so he asked his friends ‘B’ and ‘C’ for help. They robbed the bank successfully but unfortunately…",frontmatter:{title:"How Dropbox Knows When You’re Sharing Copyrighted Stuff?",date:"June 30, 2017"},timeToRead:1,fields:{slug:"blog/posts/how-dropbox-knows-when-youre-sharing-copyrighted-stuff/"},wordCount:{words:156}}},{node:{id:"6b80c25e-0f81-5974-ad19-cdc1f99f45ba",excerpt:"the program takes the file path from user, then calculates its sha-256 hash, then takes the folder path from user to search in and start…",frontmatter:{title:"Remove Duplicate Files in python",date:"June 21, 2017"},timeToRead:1,fields:{slug:"blog/posts/remove-duplicate-files-in-python/"},wordCount:{words:50}}},{node:{id:"fe9d073e-fcde-5e02-ae3f-79b72039902a",excerpt:'The Puzzle "ABCD * D = DCBA", Replace every character with a number to make the equation mathematically right. The Solution using brute…',frontmatter:{title:"ABCD * D = DCBA (Puzzle+Solution)",date:"April 07, 2017"},timeToRead:1,fields:{slug:"blog/posts/abcd-d-dcba-puzzlesolution/"},wordCount:{words:27}}},{node:{id:"85132f20-22c2-579b-a707-ccdcc1b07f15",excerpt:"Here's the problem from Mr.Honner Blog: I was recently reminded of an excellent math problem involving mixtures. Imagine yourself sitting in…",frontmatter:{title:"Coffee and Cream problem, My solution",date:"June 21, 2016"},timeToRead:2,fields:{slug:"blog/posts/coffee-and-cream-problem-my-solution/"},wordCount:{words:229}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-4592d12edb1ed839b26a.js.map