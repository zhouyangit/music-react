webpackJsonp([0,4,5,9,10],{176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(5),a=n(194),s=(n.n(a),function(e){var t=e.playlist,n=t.creator,r=t.id,a=t.imgUrl,s=t.title;return o.a.createElement("div",{className:"songcard"},o.a.createElement("div",{className:"album-img"},o.a.createElement(i.b,{to:{pathname:"/playlistinfo/"+r}},o.a.createElement("img",{src:a,alt:"playlist-cover"}))),o.a.createElement("p",{className:"title"},s),o.a.createElement("p",{className:"creator"},"by ",n))});t.default=s},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(5),a=n(198),s=(n.n(a),function(e){var t=e.navlist;return o.a.createElement("div",{className:"navtab"},o.a.createElement("ul",{className:"items"},t.map(function(e){return o.a.createElement("li",{key:e.path,className:"item"},o.a.createElement(i.c,{to:e.path},e.text))})))});t.default=Object(i.g)(s)},179:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return g});var a,s,l=n(0),u=n.n(l),c=n(8),f=n(199),p=n.n(f),d=n(65),h=n(62),m=n(201),b=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),v=p.a.Swiper,y=function(e){var t={width:730,height:336,autoplay:!0,autoplayInterval:3e3,arrows:!0,arrowsType:"dark",dots:!0,dotsColor:"#bc2f2e",dotsSize:"large"};return u.a.createElement(v,t,e.map(function(e){return u.a.createElement("div",{key:e.imgurl},u.a.createElement("img",{src:e.imgurl,alt:"slick"}))}))},g=(a=Object(c.b)(function(e){return{swiperObj:e.swiper}},{fetchSwiperImg:d.a}))(s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.swiperObj.items.length||this.props.fetchSwiperImg()}},{key:"render",value:function(){var e=this.props.swiperObj,t=e.isFetching,n=e.items;return u.a.createElement("div",{className:"special-page"},t?u.a.createElement(h.a,null):n.length&&y(n))}}]),t}(l.Component))||s},180:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return v});var a,s,l=n(0),u=n.n(l),c=n(8),f=n(64),p=n(176),d=n(62),h=n(202),m=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=function(e){return e.map(function(e){return u.a.createElement(p.default,{key:e.id,playlist:e})})},v=(a=Object(c.b)(function(e){return{songcardlist:e.songcardlist}},{fetchCardList:f.a,keepScroll:f.b}))(s=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.handleScroll=function(){var e=i.contentNode,t=e.scrollTop,n=e.clientHeight,r=e.scrollHeight,o=e.isFetching;if(t+n===r&&!o){var a=i.props.songcardlist,s=a.pageNum,l=a.limit;i.props.fetchCardList(s,l)}},a=n,o(i,a)}return i(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props.songcardlist,t=e.cardList,n=e.pageNum,r=e.limit,o=e.scrollPoint;t.length||this.props.fetchCardList(n,r),this.contentNode.scrollTop=o}},{key:"componentWillUnmount",value:function(){var e=this.contentNode.scrollTop;this.props.keepScroll(e)}},{key:"render",value:function(){var e=this,t=this.props.songcardlist.cardList;return u.a.createElement("div",{className:"songcard-page",ref:function(t){e.contentNode=t},onScroll:this.handleScroll},t.length?b(t):u.a.createElement(d.a,null))}}]),t}(l.Component))||s},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(5),a=n(192),s=n(178),l=n(179),u=n(180),c=n(207),f=(n.n(c),function(e){var t=e.match,n=e.location.pathname,r=[{path:t.url+"/specialpage",text:"\u4e2a\u6027\u63a8\u8350",component:l.default},{path:t.url+"/playlist",text:"\u6b4c\u5355",component:u.default}];return o.a.createElement("div",{className:"findMusic"},"/findmusic"===n?o.a.createElement(i.d,{to:"/findmusic/playlist"}):null,o.a.createElement(a.a,{title:"\u53d1\u73b0\u97f3\u4e50"}),o.a.createElement(s.default,{navlist:r}),o.a.createElement("div",{className:"level2-views"},r.map(function(e){return o.a.createElement(i.e,{key:e.path,path:e.path,component:e.component})})))});t.default=f},192:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(193),a=(n.n(i),function(e){return o.a.createElement("h4",{className:"subtitle"},e.title)});t.a=a},193:function(e,t,n){t=e.exports=n(175)(void 0),t.push([e.i,".subtitle {\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n",""])},194:function(e,t,n){t=e.exports=n(175)(void 0),t.push([e.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.songcard {\n  width: 145px;\n  height: 200px;\n  margin-right: 20px;\n  margin-bottom: 30px;\n  overflow: hidden;\n}\n.songcard .album-img {\n  width: 100%;\n  height: 145px;\n  margin-bottom: 10px;\n}\n.songcard .title {\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 10px;\n}\n.songcard .creator {\n  font-size: 12px;\n  color: #a4a4a5;\n  text-align: left;\n}\n",""])},198:function(e,t,n){t=e.exports=n(175)(void 0),t.push([e.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.navtab {\n  border-bottom: 1px solid rgba(7,17,27,0.2);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.navtab .items .item {\n  float: left;\n  margin-right: 25px;\n}\n.navtab .items .item > a {\n  display: block;\n  font-size: 16px;\n  color: #000;\n  height: 45px;\n  line-height: 45px;\n}\n.navtab .items .item > a.active {\n  border-bottom: 2px solid #bc2f2e;\n}\n",""])},199:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=n(0)},function(e,t){e.exports=n(1)},function(e,t){e.exports=n(200)},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function i(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,u;if(t.transform&&e.css){if(!(u=t.transform(e.css)))return function(){};e.css=u}if(t.singleton){var f=v++;n=b||(b=s(t)),r=c.bind(null,n,f,!1),o=c.bind(null,n,f,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=g(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var f,p,d={},h=(f=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===p&&(p=f.apply(this,arguments)),p}),m=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,v=0,y=[],g=n(8);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a];(l=d[s.id]).refs--,i.push(l)}for(e&&r(o(e,t),t),a=0;a<i.length;a++){var l;if(0===(l=i[a]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n.r(t);var i=n(0),a=n.n(i),s=n(1),l=n.n(s),u=n(2),c=n.n(u),f=(n(10),"/Users/zhaozhiwen/Zzw/react/react-tiny-swiper/src/components/Swiper/Dots/Dots.jsx"),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d={normal:"haiqiu-swiper-dot-normal",small:"haiqiu-swiper-dot-small",large:"haiqiu-swiper-dot-large"},h=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={dotArr:[]},o.slide=function(e){(0,o.props.handleDotsClick)(e)},r(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component||i.PureComponent),p(t,[{key:"componentWillMount",value:function(){var e=this.props.dotsNum,t=new Array(e+1).join().split("").map(function(e,t){return{index:t+1,status:!1}});t[0].status=!0,this.setState({dotArr:t})}},{key:"componentWillReceiveProps",value:function(e){var t=this.state.dotArr,n=e.index,r=e.dotsNum;t.forEach(function(e){var t=e;t.status=!1,t.index===n&&(t.status=!0)}),0===n&&(t[t.length-1].status=!0),n===r+1&&(t[0].status=!0);var o=t.slice();this.setState({dotArr:o})}},{key:"render",value:function(){var e=this,t=this.state.dotArr,n=this.props,r=n.dotsSize,o=n.dotsColor,i=c()(""+d[r],"haiqiu-swiper-dot");return a.a.createElement("div",{className:"haiqiu-swiper-dots-box",__source:{fileName:f,lineNumber:68},__self:this},t.map(function(t){return a.a.createElement("div",{className:i,style:{background:t.status?""+o:"#e5e5e5"},key:t.index,onClick:function(){e.slide(t.index)},__source:{fileName:f,lineNumber:70},__self:e})}))}}]),t}(),m=(n(7),"/Users/zhaozhiwen/Zzw/react/react-tiny-swiper/src/components/Swiper/Swiper.jsx"),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v={dark:"haiqiu-swiper-arrow-dark",light:"haiqiu-swiper-arrow-light"},y=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={index:1,left:-730,distance:730,height:336},r.autoPlay=function(){r.props.autoplay&&r.startAutoPlay()},r.startAutoPlay=function(){var e=r.props.autoplayInterval;r.autoTimer=setInterval(function(){r.next()},e)},r.stopAutoPlay=function(){clearInterval(r.autoTimer)},r.removeAutoPlaySideEffect=function(){window.onblur=function(){r.stopAutoPlay()},window.onfocus=function(){r.stopAutoPlay(),r.autoPlay()}},r.pre=function(){var e=r.state,t=e.index,n=e.distance,o=r.props.children;return 0===t?(r.setState({left:-o.length*n,index:o.length},function(){r.pre()}),!1):(r.animateBox(t-1),!0)},r.next=function(){var e=r.state,t=e.index,n=e.distance;return t===r.props.children.length+1?(r.setState({left:-1*n,index:1},function(){r.next()}),!1):(r.animateBox(t+1),!0)},r.handleDotsClick=function(e){var t=r.state,n=t.index,o=t.distance,i=r.props.children;return 0===n?(r.setState({left:-i.length*o,index:i.length},function(){r.animateBox(e)}),!1):n===i.length+1?(r.setState({left:-1*o,index:1},function(){r.animateBox(e)}),!1):(r.animateBox(e),!0)},r.animateBox=function(e){r.setState({index:e},function(){r.move()})},r.move=function(){var e=r.state,t=e.index,n=e.distance;cancelAnimationFrame(r.timer),r.timer=requestAnimationFrame(function e(){var o=r.props.onChange,i=r.state.left,a=-t*n;if(i===a)return cancelAnimationFrame(r.timer),"[object Function]"===Object.prototype.toString.call(o)&&o(t,t-1),!0;var s=(a-i)/10;return s=s>0?Math.ceil(s):Math.floor(s),r.setState({left:i+s}),r.timer=requestAnimationFrame(e),!1})},r.cloneChildren=function(e){var t=i.Children.count(e);if(t<=1)return e;var n=new Array(t+2);return i.Children.forEach(e,function(e,r){n[r+1]=e,0===r?n[t+1]=e:r===t-1&&(n[0]=e)}),n},r.getBoxWidth=function(){var e=r.state.distance;return(r.props.children.length+2)*e},r.getBoxItemWidth=function(){return r.getBoxWidth()/r.clonedChildren.length},o(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component||i.PureComponent),b(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.width,n=e.height;this.setState({left:-t,distance:t,height:n})}},{key:"componentDidMount",value:function(){this.removeAutoPlaySideEffect(),this.autoPlay()}},{key:"componentWillUnmount",value:function(){this.stopAutoPlay(),this.setState=function(){}}},{key:"render",value:function(){var e=this,t=this.state,n=t.left,r=t.distance,o=t.height,s=t.index,l=this.props,u=l.children,f=l.arrows,p=l.dots,d=l.dotsSize,b=l.dotsColor,y=l.arrowsType,g={index:s,dotsSize:d,dotsColor:b,dotsNum:u.length,handleDotsClick:this.handleDotsClick};this.clonedChildren=this.cloneChildren(u);var w=c()("haiqiu-swiper-arrow","haiqiu-swiper-arrow-pre",""+v[y]),x=c()("haiqiu-swiper-arrow","haiqiu-swiper-arrow-next",""+v[y]);return a.a.createElement("div",{className:"haiqiu-swiper",style:{width:r+"px",height:o+"px"},onMouseOver:function(){clearInterval(e.autoTimer)},onMouseOut:function(){e.autoPlay()},__source:{fileName:m,lineNumber:258},__self:this},f&&a.a.createElement("span",{className:w,onClick:this.pre,__source:{fileName:m,lineNumber:264},__self:this},"<"),a.a.createElement("div",{className:"haiqiu-swiper-box",style:{width:this.getBoxWidth()+"px",left:n+"px"},__source:{fileName:m,lineNumber:265},__self:this},i.Children.map(this.clonedChildren,function(t,n){return Object(i.cloneElement)(t,{key:n-1,style:{width:e.getBoxItemWidth()+"px",height:"100%"}})})),f&&a.a.createElement("span",{className:x,onClick:this.next,__source:{fileName:m,lineNumber:277},__self:this},">"),p&&a.a.createElement(h,Object.assign({},g,{__source:{fileName:m,lineNumber:278},__self:this})))}}]),t}();y.propTypes={width:l.a.number,height:l.a.number,autoplay:l.a.bool,autoplayInterval:l.a.number,dots:l.a.bool,dotsColor:l.a.string,dotsSize:l.a.oneOf(["normal","small","large"]),arrows:l.a.bool,arrowsType:l.a.oneOf(["dark","light"]),onChange:l.a.func},y.defaultProps={width:730,height:336,autoplay:!0,autoplayInterval:3e3,arrows:!0,arrowsType:"light",dots:!0,dotsColor:"#31A896",dotsSize:"normal"};var g={Swiper:y};t.default=g},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".haiqiu-swiper {\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.haiqiu-swiper .haiqiu-swiper-box {\n  height: 100%;\n  position: absolute;\n  left: 0;\n}\n.haiqiu-swiper .haiqiu-swiper-box>div {\n  float: left;\n}\n.haiqiu-swiper .haiqiu-swiper-box>div>img {\n  width: 100%;\n  height: 100%;\n}\n.haiqiu-swiper .haiqiu-swiper-box.move-animation {\n  transition: all 0.4s;\n}\n.haiqiu-swiper .haiqiu-swiper-box.stop-animation {\n  transition: all 0s;\n}\n.haiqiu-swiper .haiqiu-swiper-arrow {\n  border-radius: 50%;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  font-size: 20px;\n  z-index: 2;\n}\n.haiqiu-swiper .haiqiu-swiper-arrow-dark {\n  background-color: rgba(10,10,10,0.5);\n  color: #fff;\n}\n.haiqiu-swiper .haiqiu-swiper-arrow-light {\n  background-color: rgba(255,255,255,0.5);\n  color: #000;\n}\n.haiqiu-swiper .haiqiu-swiper-arrow-pre {\n  left: 10px;\n}\n.haiqiu-swiper .haiqiu-swiper-arrow-next {\n  right: 10px;\n}\n",""])},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o),r.locals&&(e.exports=r.locals)},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".haiqiu-swiper-dots-box {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.haiqiu-swiper-dots-box .haiqiu-swiper-dot {\n  background: #e5e5e5;\n  border-radius: 50%;\n  cursor: pointer;\n  display: inline-block;\n  margin: 5px;\n}\n.haiqiu-swiper-dots-box .haiqiu-swiper-dot-small {\n  width: 10px;\n  height: 10px;\n}\n.haiqiu-swiper-dots-box .haiqiu-swiper-dot-normal {\n  width: 15px;\n  height: 15px;\n}\n.haiqiu-swiper-dots-box .haiqiu-swiper-dot-large {\n  width: 20px;\n  height: 20px;\n}\n",""])},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o),r.locals&&(e.exports=r.locals)}])},200:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},201:function(e,t,n){t=e.exports=n(175)(void 0),t.push([e.i,"",""])},202:function(e,t,n){t=e.exports=n(175)(void 0),t.push([e.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.songcard-page {\n  display: -webkit-box;\n  display: -moz-box;\n  display: flex;\n  -moz-flex-direction: row;\n  -o-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  flex-direction: row;\n  -moz-flex-wrap: wrap;\n  -o-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  justify-content: space-between;\n  height: 100%;\n  overflow-y: auto;\n}\n",""])},207:function(e,t,n){t=e.exports=n(175)(void 0),t.push([e.i,".findMusic {\n  margin: 20px 30px;\n}\n.findMusic .level2-views {\n  height: 600px;\n  overflow: auto;\n}\n.findMusic .level2-views::-webkit-scrollbar {\n  display: none;\n}\n",""])}});
//# sourceMappingURL=0.406a9c3c.chunk.js.map