(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{54722:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(56911)}])},48418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,l=(a=t(67294))&&a.__esModule?a:{default:a},c=t(76273),i=t(90387),u=t(57190);var f={};function s(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),a=l.default.useMemo((function(){var r=o(c.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?c.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,h=a.as,p=e.children,v=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var g=(r=l.default.Children.only(p))&&"object"===typeof r&&r.ref,j=o(u.useIntersection({rootMargin:"200px"}),2),w=j[0],_=j[1],x=l.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);l.default.useEffect((function(){var e=_&&t&&c.isLocalURL(d),r="undefined"!==typeof m?m:n&&n.locale,o=f[d+"%"+h+(r?"%"+r:"")];e&&!o&&s(n,d,h,{locale:r})}),[h,d,_,m,t,n]);var O={ref:x,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:i,scroll:l}))}(e,n,d,h,v,y,b,m)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&s(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof m?m:n&&n.locale,E=n&&n.isLocaleDomain&&c.getDomainLocale(h,k,n&&n.locales,n&&n.domainLocales);O.href=E||c.addBasePath(c.addLocale(h,k,n&&n.defaultLocale))}return l.default.cloneElement(r,O)};r.default=d},57190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!c,u=a.useRef(),f=o(a.useState(!1),2),s=f[0],d=f[1],h=o(a.useState(r?r.current:null),2),p=h[0],v=h[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,l=n.elements;return l.set(e,r),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:t}))}),[n,p,t,s]);return a.useEffect((function(){if(!c&&!s){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),a.useEffect((function(){r&&v(r.current)}),[r]),[y,s]};var a=t(67294),l=t(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},53629:function(e,r,t){"use strict";var n=t(85893),o=t(68527),a=t(41664);t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}r.Z=function(e){var r,t=e.href,l=e.isInternal,u=void 0===l||l,f=e.onClick,s=void 0===f?function(){}:f,d=e.as,h=e.children,p=e.hardRefresh,v=void 0!==p&&p,y=i(e,["href","isInternal","onClick","as","children","hardRefresh"]),b={color:"red.500"};if(u)return v?(0,n.jsx)(o.rU,c({href:t,onClick:s,_hover:b},y,{children:h})):(0,n.jsx)(a.default,{href:t,as:d,passHref:!0,children:(0,n.jsx)(o.rU,c({onClick:s,_hover:b},y,{children:h}))});var m=null!==d&&void 0!==d?d:t;return r=/^(https|http|mailto)/.test(m)?m:"/".concat(m),(0,n.jsx)(o.rU,c({href:r,_hover:b,onClick:s},y,{children:h}))}},56911:function(e,r,t){"use strict";t.r(r);var n=t(85893),o=t(68527),a=t(53629),l=(t(67294),t(48081));r.default=function(){var e=(0,l.PR)();return(0,n.jsx)(o.M5,{children:(0,n.jsx)("section",{className:"page_404",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-sm-12 ",children:(0,n.jsxs)("div",{className:"col-sm-10 col-sm-offset-1 text-center",children:[(0,n.jsx)("div",{className:"four_zero_four_bg",children:(0,n.jsx)("h1",{className:"text-center ",children:"404"})}),(0,n.jsxs)("div",{className:"contant_box_404",children:[(0,n.jsx)("h3",{className:"h2",children:"Look like you\\'re lost"}),(0,n.jsx)("p",{children:"the page you are looking for not avaible!"}),(0,n.jsx)(a.Z,{href:"null"!==e.token?"/dashboard":"/login",className:"link_404",children:"Go to Home"})]})]})})})})})})}},41664:function(e,r,t){e.exports=t(48418)}},function(e){e.O(0,[8527,9774,2888,179],(function(){return r=54722,e(e.s=r);var r}));var r=e.O();_N_E=r}]);