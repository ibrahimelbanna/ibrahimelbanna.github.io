(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var o=n(0),r=n.n(o),i=n(72),a=n.n(i);n.d(t,"a",function(){return a.a}),n.d(t,"c",function(){return i.withPrefix});n(213),n(9).default.enqueue;var c=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,o=e.query,i=e.render,a=n?n.data:t[o]&&t[o].data;return r.a.createElement(r.a.Fragment,null,a&&i(a),!a&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,o=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:o||i,staticQueryData:e})})}},213:function(e,t,n){var o;e.exports=(o=n(218))&&o.default||o},214:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},r={style:{color:"#fff"},className:"night-mode"}},215:function(e,t,n){"use strict";(function(e){n(20),n(142);var o=n(219),r=n(0),i=n.n(r),a=n(212),c=n(214),u=n(220),s=n(99),l=(n(227),n(228),n(229),n(230),n(233));l.a.initialize("UA-50784035-2"),"undefined"!=typeof window&&l.a.pageview(window.location.pathname+window.location.search);t.a=Object(s.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(function(t){var n=t.children,s=t.mode,l=t.toggleMode,d=t.currentPath,p="day"===s?c.a:c.b,f=Object(r.useState)(e.localStorage.isSaveBatteryMode||!1),m=f[0],w=f[1];return Object(r.useEffect)(function(){"night"===s?(p=c.b,document.body.style.backgroundColor="#0e0e0e"):(p=c.a,document.body.style.backgroundColor="#fff")},[s]),i.a.createElement(a.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(u.a,{siteTitle:e.site.siteMetadata.title,mode:s,currentPath:d,toggleMode:l,isSaveBatteryMode:m,setSaveBatteryMode:function(e){localStorage.setItem("isSaveBatteryMode",e),w(e)}}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},p,{style:Object.assign({},p.style),mode:s}),n)))},data:o})})}).call(this,n(141))},216:function(e,t,n){"use strict";var o=n(222),r=n(0),i=n.n(r),a=n(231),c=n.n(a),u=n(212);function s(e){var t=e.description,n=e.lang,r=e.meta,a=e.keywords,s=e.title;return i.a.createElement(u.b,{query:l,render:function(e){var o=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(r)})},data:o})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var l="1025518380"},217:function(e,t,n){var o,r,i;n(28),n(39),n(38),i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r=!1,i="push",a="readyState",c="onreadystatechange",u={},s={},l={},d={};function p(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return r;return 1}function f(e,t){p(e,function(e){return t(e),1})}function m(t,n,o){t=t[i]?t:[t];var r=n&&n.call,a=r?n:o,c=r?t.join(""):n,y=t.length;function h(e){return e.call?e():u[e]}function b(){if(!--y)for(var e in u[c]=1,a&&a(),l)p(e.split("|"),h)&&!f(l[e],h)&&(l[e]=[])}return setTimeout(function(){f(t,function t(n,o){return null===n?b():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(c&&(s[c]=1),2==d[n]?b():setTimeout(function(){t(n,!0)},0)):(d[n]=1,c&&(s[c]=1),void w(n,b)))})},0),m}function w(e,r){var i,u=n.createElement("script");u.onload=u.onerror=u[c]=function(){u[a]&&!/^c|loade/.test(u[a])||i||(u.onload=u[c]=null,i=1,d[e]=2,r())},u.async=1,u.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(u,o.lastChild)}return m.get=w,m.order=function(e,t,n){!function o(r){r=e.shift(),e.length?m(r,o):m(r,t,n)}()},m.path=function(t){e=t},m.urlArgs=function(e){t=e},m.ready=function(e,t,n){e=e[i]?e:[e];var o,r=[];return!f(e,function(e){u[e]||r[i](e)})&&p(e,function(e){return u[e]})?t():(o=e.join("|"),l[o]=l[o]||[],l[o][i](t),n&&n(r)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=i():void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)},218:function(e,t,n){"use strict";n.r(t);n(20);var o=n(0),r=n.n(o),i=n(101);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},219:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},220:function(e,t,n){"use strict";n(20);var o=n(0),r=n.n(o),i=n(212),a=n(223),c=(n(224),n(214)),u=(n(225),n(221)),s=n.n(u),l=n(271);n(226);t.a=function(e){var t=e.toggleMode,n=e.mode,u=(e.currentPath,e.isSaveBatteryMode),d=e.setSaveBatteryMode,p="day"===n?c.a:c.b,f=Object(a.useMedia)({maxWidth:"1111px"},!0),m=Object(a.useMedia)({maxWidth:"512px"},!0),w=Object(o.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:f,hideMyName:m}),y=w[0],h=w[1],b=Object(l.a)();u||(b={}),Object(o.useEffect)(function(){"isSupported"in b&&"level"in b&&"charging"in b&&b.level<.25&&!b.charging&&"day"===n&&u&&t()},[b]);var g=function(e){t(e);try{localStorage.setItem("mode",e)}catch(n){console.log(n)}};return r.a.createElement("header",Object.assign({},p,{className:p.className+" main-header"}),r.a.createElement("div",{className:"main-logo"},r.a.createElement("img",{src:s.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===n?{filter:"invert(100%)"}:{},{},m?{}:{marginBottom:10}),alt:"logo"}),!y.isShowMenuActive&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!m&&"Zeyad Etman"))),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(y.isShowMenuActive||!f)&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.a,{to:"/",activeClassName:"active-page-link"},"home")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/work",activeClassName:"active-page-link"},"work")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),f&&r.a.createElement("a",{style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){h("TOGGLE_SHOW_MENU")}},"☰"),"day"===n?r.a.createElement("i",{title:"Day mode is on",onClick:function(){return g("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Dark mode is on",onClick:function(){return g("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}}),u?r.a.createElement("i",{title:"Save battery mode is on",onClick:function(){return d(!1)},className:"twa twa-battery",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Save battery mode is off",onClick:function(){return d(!0)},className:"twa twa-electric-plug",style:{fontSize:"2em"}})))}},221:function(e,t,n){e.exports=n.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},235:function(e,t,n){"use strict";n(20);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var u=n(126);function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?Object(u.a)(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n(0),w=n.n(m),y=n(15),h=n.n(y),b=n(251),g=n.n(b),v=n(240),M=n.n(v);n.d(t,"b",function(){return E}),n.d(t,"a",function(){return O});var C="https://platform.twitter.com/widgets.js";f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e)}},{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{sourceType:h.a.oneOf(["profile","likes","list","collection","URL","widget"]).isRequired,screenName:g()(h.a.string,function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)}),userId:g()(h.a.number,function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)}),ownerScreenName:g()(h.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),slug:g()(h.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),id:g()(h.a.oneOfType([h.a.number,h.a.string]),function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType}),url:g()(h.a.string,function(e){return"url"===e.sourceType}),widgetId:g()(h.a.string,function(e){return"widget"===e.sourceType}),options:h.a.object,autoHeight:h.a.bool,theme:h.a.oneOf(["dark","light"]),linkColor:h.a.string,borderColor:h.a.string,noHeader:h.a.bool,noFooter:h.a.bool,noBorders:h.a.bool,noScrollbar:h.a.bool,transparent:h.a.bool,lang:h.a.string});var E=function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}();f(E,"propTypes",{url:h.a.string.isRequired,options:h.a.object});var O=function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}();f(O,"propTypes",{screenName:h.a.string.isRequired,options:h.a.object}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tag:h.a.string.isRequired,options:h.a.object}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{screenName:h.a.string.isRequired,options:h.a.object}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"renderWidget",value:function(){var e=this;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then(function(t){e.props.onLoaded&&e.props.onLoaded(t)}):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){e.renderWidget()})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tweetId:h.a.string.isRequired,options:h.a.object,onLoaded:h.a.func}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"shareMoment"})}}]),t}(),"propTypes",{momentId:h.a.string.isRequired,options:h.a.object}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:h.a.number.isRequired,options:h.a.object}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:h.a.string.isRequired}),f(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,m["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;M.a.canUseDOM&&n(217)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{username:h.a.string.isRequired,options:h.a.object})},251:function(e,t,n){"use strict";n(35),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(o,r,i){for(var a=arguments.length,c=Array(3<a?a-3:0),u=3;u<a;u++)c[u-3]=arguments[u];return function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(1!=!!e||!e)}(t,o,r,i)?function(e,t){return Object.hasOwnProperty.call(e,t)}(o,r)?e.apply(void 0,[o,r,i].concat(c)):function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")}(o,r,i,n):e.apply(void 0,[o,r,i].concat(c))}}}}]);
//# sourceMappingURL=2-740b1d5d648234ea70f2.js.map