(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5886],{15578:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/leads",function(){return n(15476)}])},17184:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(85893),a=n(20949),i=n(68527),o=n(83814),l=n(42341),u=n(82666),s=n(51436),c=n(17563),d=n(92814),p=n(67294),f=n(27030),y="FUZZY_TEXT_SEARCH",g="FULL_TEXT_SEARCH",m="OPTIONS_SEARCH",h="INTEGER_SEARCH",v="INTEGER_GREATER_THAN_SEARCH",x="INTEGER_LESS_THAN_SEARCH",b=[{name:"Email",type:g,key:"email",id:"email"},{name:"First name",type:y,key:"firstName",id:"firstName"},{name:"Last name",type:y,key:"lastName",id:"lastName"},{name:"Phone Number",type:y,key:"phone",id:"phone"},{name:"Address",type:y,key:"address",id:"address"},{name:"City",type:y,key:"city",id:"city"},{name:"Age",type:h,key:"age",id:"age"},{name:"Age greater than",type:v,key:"age",id:"age_greater"},{name:"Age less than",type:x,key:"age",id:"age_less"},{name:"State",type:y,key:"state",id:"state"},{name:"Zip Code",type:g,key:"postalCode",id:"postalCode"},{name:"Gender",type:m,key:"gender",options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}],id:"gender"}],j=n(11163);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}function S(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(e){var t,n=e.selectedFilter,a=e.handleFilterValueChange,i=e.filterIndex;return n.type===m?(0,r.jsx)(f.Z,{onChange:function(e){return a(e,n,i)},options:n.options,placeholder:"Filter",selected:null!==(t=n.value)&&void 0!==t?t:""}):(0,r.jsx)(u.o,{name:n.name,handleChange:function(e){return a(e,n,i)},type:n.type===g||n.type===y?"text":"number",placeholder:n.name,value:n.value,TextInputProps:{padding:"0.4rem",fontSize:""}})},A=function(e){var t,n=e.setAllSelectedFilters,u=e.pageType,k=(0,a.If)().colorMode,C=(0,j.useRouter)(),A={type:"",options:[],name:"",value:"",key:"",id:""},T={fuzzy:{},match:{},integerGreater:{},integerLess:{},pageType:u},w=(0,p.useState)(!1),N=w[0],O=w[1],F=(0,p.useState)([A]),R=F[0],Z=F[1],I=(0,p.useState)([{label:"",value:"",disabled:!1}]),P=I[0],L=I[1],z=b.map((function(e){return{label:e.name,value:e.id,disabled:!1}}));(0,p.useEffect)((function(){L(z)}),[]),(0,p.useEffect)((function(){if(Object.keys(R).length&&R[0].value){var e=[];R.forEach((function(t){e.push(t.key)})),L((function(t){return t.map((function(t){return e.includes(t.value)?E({},t,{disabled:!0}):E({},t,{disabled:!1})}))}))}}),[R]);var G=function(e,t,n){var r=e.target.value;Z((function(e){return e.map((function(e,n){return e===t?E({},e,{value:r}):e}))})),O(!0)};return(0,r.jsxs)(i.xu,{width:"350px",children:[(0,r.jsxs)(i.kC,{padding:"15px 20px",alignItems:"center",justifyContent:"space-between",w:"100%",bg:o.We[k],borderRadius:"10px 10px 0px 0px",marginBottom:"7px",children:[(0,r.jsx)(i.xu,{as:"h3",fontSize:"16px",color:o.ZP.greyDark,fontWeight:500,children:"Filter"}),(0,r.jsx)(i.xu,{as:"span",color:o.ZP.influenceRed,fontWeight:500,cursor:"pointer",onClick:function(){Z([A]),L(z);var e=C.query;e.page="1",C.push("?".concat(c.stringify(e))),n(T)},children:"Clear"})]}),(0,r.jsxs)(i.xu,{bg:o.We[k],p:"12px",children:[R.map((function(e,t){return(0,r.jsxs)(i.kC,{justifyContent:"flex-start",width:"full",my:6,children:[(0,r.jsx)(i.xu,{width:"45%",pr:4,children:(0,r.jsx)(f.Z,{onChange:function(t){return function(e,t){var n=b.find((function(t){return t.id===e.target.value}));n&&(n.value="",Z((function(e){return e.map((function(e){return e===t?n:e}))})),O(!1))}(t,e)},options:P,placeholder:"Filter",noValue:!!(null===e||void 0===e?void 0:e.type),selected:(null===e||void 0===e?void 0:e.type)?e.id:""})}),(null===e||void 0===e?void 0:e.type)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.xu,{width:"45%",pr:2,children:(0,r.jsx)(_,{selectedFilter:e,handleFilterValueChange:G,filterIndex:t})}),(0,r.jsx)(i.xu,{as:"span",cursor:"pointer",margin:"auto",onClick:function(){return t=e,void Z((function(e){return e.filter((function(e){return e!==t}))}));var t},children:(0,r.jsx)(d.G,{icon:s.NBC,style:{margin:"auto 5px"}})})]})]},t)})),(0,r.jsx)(i.xu,{as:"div",p:3,borderTop:"1px solid #ededed",mt:8,children:(0,r.jsxs)(i.xu,{onClick:N?function(){Z((function(e){return S(e).concat([A])})),O(!1)}:function(){},as:N?"a":"p",cursor:N?"pointer":"default",color:N?"rgb(44 110 203)":"rgb(140 145 150)",children:[(0,r.jsx)(d.G,{icon:s.r8p,style:{margin:"auto 5px"}}),"Add Filter"]})}),(0,r.jsx)(l.Z,{bgColor:"light"===k?o.ZP.greyDarker:o.ZP.influenceRed,marginTop:"20px",marginBottom:"25px",type:"button",onClick:function(){R.forEach((function(e){var t=e.type,n=e.value,r=e.key;if(n)switch(t){case y:T.fuzzy[r]=n;break;case h:case m:case g:T.match[r]=n;break;case v:T.integerGreater[r]=n;break;case x:T.integerLess[r]=n}}));var e=C.query;e.page="1",C.push("?".concat(c.stringify(e))),n(T)},disabled:!(null===(t=R[0])||void 0===t?void 0:t.value),children:"Apply Filter"})]})]})}},15476:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(67294),i=n(25617),o=n(11163),l=n(51273),u=n(17184),s=n(17667),c=n(15406),d=n(19130),p=n(53329);t.default=function(){var e=(0,i.v9)((function(e){return e.leads})),t=e.allLeads,n=e.loading,f=(0,o.useRouter)(),y=(0,i.I0)(),g=f.query.sc,m=f.query.page||"1",h=f.query.pageSize||p.L8,v=(0,a.useState)(void 0),x=v[0],b=v[1];(0,a.useEffect)((function(){y((0,c.oC)({page:m,pageSize:h},{filters:x}))}),[m,h,x]);var j=(0,r.jsx)(u.Z,{pageType:"LEADS_DATA_POINTS",setAllSelectedFilters:b});return n?(0,r.jsx)(l.Z,{filter:j,children:(0,r.jsx)(d.gl,{})}):(0,r.jsx)(l.Z,{filter:j,children:(0,r.jsx)(s.Z,{leads:t,pageType:"allLeads",socialColumns:null===g||void 0===g?void 0:g.split(","),pageSize:h})})}}},function(e){e.O(0,[8523,8527,3588,3084,3061,5715,6345,5787,6636,2429,550,1273,9774,2888,179],(function(){return t=15578,e(e.s=t);var t}));var t=e.O();_N_E=t}]);