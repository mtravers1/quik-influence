"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1049],{11312:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(85893),a=t(11604),l=t(68527),i=t(79042),o=t(59876),s=t(79521),c=t(67294),u=t(92814),m=t(51436);function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}function b(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function g(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=c.forwardRef((function(e,r){var t=e.indeterminate,l=b(e,["indeterminate"]),i=c.useRef(),o=r||i;return c.useEffect((function(){o.current.indeterminate=t}),[o,t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.m$.input,f({type:"checkbox",ref:o},l))})})),x=function(e){var r=e.title,t=e.columns,d=e.data,p=e.pageSize,b=e.onRowSelected,x=e.variant,y=c.useMemo((function(){return t}),[t]),v=(0,s.useTable)({columns:y,data:d,initialState:{pageIndex:0,pageSize:p}},s.useSortBy,s.usePagination,s.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var r=e.getToggleAllRowsSelectedProps;return(0,n.jsx)(a.m$.div,{justifyContent:"center",d:"flex",children:(0,n.jsx)(h,f({},r()))})},Cell:function(e){var r=e.row;return(0,n.jsx)(a.m$.div,{children:(0,n.jsx)(h,f({},r.getToggleRowSelectedProps()))})}}].concat(g(e))}))})),j=v.getTableProps,S=v.headerGroups,w=v.prepareRow,C=v.getTableBodyProps,k=v.page,P=v.canPreviousPage,M=v.canNextPage,I=v.pageOptions,A=v.nextPage,O=v.previousPage,E=v.selectedFlatRows,F=v.state.pageIndex;return c.useEffect((function(){E&&b&&"function"===typeof b&&b(E.map((function(e){return e.original})))}),[E]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.kC,{flex:1,justifyContent:"flex-end",mb:"4",mr:"8",children:[(0,n.jsx)(l.kC,{mr:"16"}),(0,n.jsx)(l.kC,{children:(0,n.jsxs)(l.xv,{fontSize:"md",children:["Total:"," ",(0,n.jsxs)(l.xv,{as:"span",fontWeight:"semibold",children:[null===d||void 0===d?void 0:d.length," ",r]})]})})]}),(0,n.jsxs)(i.iA,f({variant:x},j(),{children:[(0,n.jsx)(i.hr,{children:S.map((function(e,r){return(0,n.jsx)(i.Tr,f({},e.getHeaderGroupProps(),{children:e.headers.map((function(e,r){return(0,n.jsxs)(i.Th,f({},e.getHeaderProps(e.getSortByToggleProps()),{isNumeric:e.isNumeric,fontSize:"1rem",padding:".5rem",pr:".54rem",textTransform:"capitalize",children:[e.render("Header"),(0,n.jsx)(a.m$.span,{children:e.isSorted?e.isSortedDesc?(0,n.jsx)(o.AS,{"aria-label":"sorted descending"}):(0,n.jsx)(o.$l,{"aria-label":"sorted ascending"}):null})]}),r)}))}),r)}))}),(0,n.jsx)(i.p3,f({},C(),{children:k.map((function(e,r){return w(e),(0,n.jsx)(i.Tr,f({},e.getRowProps(),{children:e.cells.map((function(e,r){return(0,n.jsx)(i.Td,f({},e.getCellProps(),{isNumeric:e.column.isNumeric,textTransform:"capitalize",children:e.render("Cell")}),r)}))}),r)}))}))]})),(0,n.jsxs)(l.kC,{width:"full",justifyContent:"flex-end",alignItems:"center",my:8,mt:2,children:[P&&(0,n.jsx)(a.m$.button,{type:"button",onClick:function(){return O()},children:(0,n.jsx)(u.G,{icon:m.Uu6,style:{margin:"auto 10px"}})}),(0,n.jsxs)(l.xv,{fontSize:"md",mr:"6",children:["Page ",(0,n.jsx)("b",{children:F+1})," of ",I.length]}),M&&(0,n.jsx)(a.m$.button,{type:"button",onClick:function(){return A()},children:(0,n.jsx)(u.G,{icon:m.I4f,style:{margin:"auto 10px"}})})]})]})},y=x;x.defaultProps={pageSize:50};var v=y},35566:function(e,r,t){var n=t(85893),a=t(38655),l=t(20949),i=t(79762),o=t(68527),s=t(34651),c=t(67294),u=t(83814);function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(l.push(n.value),!r||l.length!==r);i=!0);}catch(s){o=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(o)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.Z=function(e){var r=e.handleChange,t=e.name,m=e.label,d=e.labelProps,b=e.error,g=e.initialImage,h=e.previewImage,x=void 0===h||h,y=f(c.useState(""),2),v=y[0],j=y[1],S=c.useRef(),w=(0,l.If)().colorMode;(0,c.useEffect)((function(){if(g){j(g)}}),[g]);var C={buttons:{choose:{images:{one:' <div className="image">'.concat(g?"Edit Image":"Upload Image","</div>")}}}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.NI,{isInvalid:!!b,children:[x&&(0,n.jsxs)(n.Fragment,{children:[" ",!!m&&(0,n.jsx)(i.lX,p({fontSize:"1.6rem",color:"light"===w?u.ZP.black:"#FFFFFF",htmlFor:"multiRangeSelector","data-testid":"textInput-label"},d,{children:m})),v&&(0,n.jsx)(o.xu,{maxW:150,pb:10,children:(0,n.jsx)(s.Ee,{src:v,alt:"image to upload"})})]}),(0,n.jsx)(a.G,{ref:S,publicKey:"6a12dbb10199ec6bfeb3",onChange:function(){},localeTranslations:C,imagesOnly:!0,previewStep:!0,onFileSelect:function(e){e?e.done((function(e){return function(e){e.smartURL="".concat(e.cdnUrl,"-/preview/-/quality/smart/"),j(e.smartURL);var n={};n.target={name:t,value:e.cdnUrl,type:"image-upload",checked:void 0},r(n)}(e)})):console.log("File removed from widget")},clearable:!0}),b&&(0,n.jsx)(i.J1,{"data-testid":"textInput-error",fontSize:"xl",children:b})]})})}},51049:function(e,r,t){t.d(r,{Z:function(){return le}});var n=t(34051),a=t.n(n),l=t(85893),i=t(67294),o=t(28609),s=t(20949),c=t(68527),u=t(79762),m=t(42341),d=t(27030),p=t(82666),f=t(48091),b=t(28582),g=t(25675),h=t(83814),x=t(57525),y=t(85851),v=[{name:"name",label:"Campaign Name",errorMessage:"Enter your campaign name",required:!0,type:"text",pattern:y.Y1},{name:"description",label:"Campaign Description",errorMessage:"Describe your campaign",required:!0,type:"text",pattern:y.Y1},{name:"status",label:"Campaign Status",required:!0,errorMessage:"Select a campaign status",type:"select",options:[{label:"OPEN",value:x.o1},{label:"CLOSED",value:x.m$}],pattern:y.Y1},{name:"campaignDate",label:"Campaign Start Date",errorMessage:"Enter your campaign start date",required:!0,type:"date",pattern:y.Y1},{name:"paidType",label:"Payment Type",errorMessage:"Select payment type",required:!0,type:"select",options:[{label:"Paid",value:x.N2},{label:"Unpaid",value:x.up}],pattern:y.Y1},{name:"prices",label:"Price",errorMessage:"Enter your campaign price",type:"amount",dependent:{name:"paidType",value:"PAID"}},{name:"formData",label:"Select Form Fields",errorMessage:"Enter your form fields",required:!1,disabled:!1,ranges:[],type:"multi-select",options:[{label:"Instagram Handle",value:"instagramId"},{label:"Tiktok Handle",value:"tiktokHandle"},{label:"Facebook Handle",value:"facebookHandle"},{label:"Twitter Handle",value:"twitterHandle"}],pattern:y.Y1,extraLabel:"(add as many as apply)"},{name:"redirectUrl",label:"Redirect Url",errorMessage:"Enter a valid URL e.g: http://test.com/something",required:!0,type:"text",pattern:y.Wh},{name:"banner",label:"Campaign Banner",errorMessage:"Upload campaign banner",required:!0,type:"image-upload",pattern:y.Y1}],j=t(95868);function S(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return S(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=[{number:1,name:"name",label:"Campaign Name",errorMessage:"Enter your campaign name",required:!0,type:"text",pattern:y.Y1},{number:2,name:"description",label:"Campaign Description",errorMessage:"Describe your campaign",required:!0,type:"text",pattern:y.Y1},{number:3,name:"campaignDate",label:"Campaign Start Date",errorMessage:"Enter your campaign start date",required:!0,type:"datetime-local",pattern:y.Y1},{number:4,name:"audience",label:"Audience",errorMessage:"Select atleast one audience",required:!1,disabled:!1,type:"multi-select",ranges:[],options:[{label:"Sports ",value:"sports"},{label:"Tv Shows",value:"tvshows"},{label:"Animals",value:"animals"}],pattern:y.Y1,extraLabel:"(add as many as apply)"},{name:"gender",label:"Gender ",errorMessage:"Select your gender",required:!0,disabled:!1,isChild:!0,type:"select",options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}],pattern:y.Y1},{name:"age",label:"Age ",errorMessage:"Select your age",required:!0,disabled:!1,isChild:!0,type:"select",options:[{label:"18-25",value:"18-25"},{label:"25-35",value:"25-35"},{label:"35-50",value:"35-50"},{label:"50-71",value:"50-71"},{label:"71-100",value:"71-100"}],pattern:y.Y1},{name:"locations",label:"Locations ",errorMessage:"Add at least one location age",required:!0,disabled:!1,isChild:!0,type:"multi-select",options:j.D.reduce((function(e,r){return w(e).concat([{label:r,value:r}])}),[]),pattern:y.Y1},{name:"leadTable",label:"Display Results ",errorMessage:"Add at least one location age",required:!1,disabled:!1,isChild:!0,type:"table",pattern:y.Y1},{name:"adSpend",label:"Ad Spend",disabled:!0,extraLabel:"select daily spending for your campaign",errorMessage:"Enter your ad spend",required:!1,type:"range-selector",pattern:y.Y1,ranges:[{title:"How many SMS Messages would you like to send?",min:1,max:1e3,isMoney:!1,rangeProps:{maxW:"30rem"},rangeTitleProps:{fontSize:"md",fontWeight:"semibold"}}]},{number:5,name:"message",label:"SMS Message",errorMessage:"enter the SMS Message",required:!0,type:"textarea",pattern:y.Y1},{name:"adImage",label:"Add Ad Image",errorMessage:"Add ad image",required:!1,isChild:!0,type:"image-upload",pattern:y.Y1},{name:"adPreview",label:"SMS Ad Preview",required:!1,isChild:!0,type:"ad-preview",pattern:y.Y1},{number:6,name:"phone",label:"Send Test Ad",placeholder:"Enter Phone Number",errorMessage:"enter phone number",required:!0,type:"text",pattern:y.Y1},{number:7,name:"submit",label:"Submit Campaign",extralabel:"We will review your campaign and a correspond charges and approval decision to you",required:!1,type:"submit",pattern:y.Y1}];function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function P(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=[{number:1,name:"name",label:"Campaign Name",errorMessage:"Enter your campaign name",required:!0,type:"text",pattern:y.Y1},{number:2,name:"description",label:"Campaign Description",errorMessage:"Describe your campaign",required:!0,type:"text",pattern:y.Y1},{number:3,name:"campaignDate",label:"Campaign Start Date",errorMessage:"Enter your campaign start date",required:!0,type:"datetime-local",pattern:y.Y1},{number:4,name:"audience",label:"Audience",errorMessage:"Select atleast one audience",required:!1,disabled:!1,type:"multi-select",options:[{label:"Sports ",value:"sports"},{label:"Tv Shows",value:"tvshows"},{label:"Animals",value:"animals"}],pattern:y.Y1,extraLabel:"(add as many as apply)"},{name:"gender",label:"Gender ",errorMessage:"Select your gender",required:!0,disabled:!1,isChild:!0,type:"select",options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}],pattern:y.Y1},{name:"age",label:"Age ",errorMessage:"Select your age",required:!0,disabled:!1,isChild:!0,type:"select",options:[{label:"18-25",value:"18-25"},{label:"25-35",value:"25-35"},{label:"35-50",value:"35-50"},{label:"50-71",value:"50-71"},{label:"71-100",value:"71-100"}],pattern:y.Y1},{name:"locations",label:"Locations ",errorMessage:"Add at least one location",required:!0,disabled:!1,isChild:!0,type:"multi-select",options:j.D.reduce((function(e,r){return P(e).concat([{label:r,value:r}])}),[]),pattern:y.Y1},{name:"leadTable",label:"Display Results ",errorMessage:"",required:!1,disabled:!1,isChild:!0,type:"table",pattern:y.Y1},{number:5,name:"message",label:"Email Message",errorMessage:"enter the Email Message",required:!1,type:"textarea",pattern:y.Y1},{number:6,name:"email",label:"Send Test Ad",placeholder:"Enter Email Address",errorMessage:"enter email address",required:!0,type:"text",pattern:y.Vm},{number:7,name:"submit",label:"Submit Campaign",extralabel:"We will review your campaign and a correspond charges and approval decision to you",required:!1,type:"submit",pattern:y.Y1}],I=t(51436),A=[{name:"firstName",label:"First Name",icon:I.ILF,errorMessage:"Enter your First name",required:!0,pattern:y.Y1},{name:"lastName",label:"Last Name",icon:I.ILF,errorMessage:"Enter your last name",required:!0,pattern:y.Y1},{name:"phone",label:"Phone Number",icon:I.j1w,required:!0,errorMessage:"Enter your phone number",pattern:y.d0},{name:"email",label:"Your Email Address",icon:I.ntl,errorMessage:"Enter your address",required:!0,pattern:y.Vm},{name:"instagramId",label:"Your Instagram handle",icon:I.IBq,errorMessage:"Enter your instagram handle",required:!0,pattern:y.Y1},{name:"facebookHandle",label:"Your Facebook profile",icon:I.IBq,errorMessage:"Enter your facebook profile",required:!1,pattern:y.Y1},{name:"tiktokHandle",label:"Your Tiktok handle",icon:I.IBq,errorMessage:"Enter your tiktok handle",required:!1,pattern:y.Y1},{name:"twitterHandle",label:"Your twitter Handle",icon:I.IBq,errorMessage:"Enter your twitter handle",required:!1,pattern:y.Y1},{name:"age",label:"Age",icon:I.ILF,errorMessage:"Please add your age",required:!0,pattern:y.qC}],O=t(80918),E=t(47398);function F(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){F(e,r,t[r])}))}return e}var q=function(e){var r=e.label,t=e.error,n=e.extraLabel,a=e.labelProps,o=e.ranges,m=(0,s.If)().colorMode,d=(0,i.useState)([10,5]),p=d[0],f=d[1];return(0,l.jsx)(c.xu,{maxW:"60rem",pt:8,children:(0,l.jsxs)(u.NI,{isInvalid:!!t,children:[!!r&&(0,l.jsxs)(u.lX,D({fontSize:"1.6rem",color:"light"===m?h.ZP.black:"#FFFFFF",htmlFor:"multiRangeSelector","data-testid":"textInput-label"},a,{children:[r,n&&(0,l.jsx)(c.xu,{as:"span",fontSize:"md",mx:"4",children:n})]})),o.map((function(e,r){return(0,l.jsxs)(c.xu,{my:4,children:[(0,l.jsx)(c.xv,D({size:"md",color:h.ZP.greyDarker},e.rangeTitleProps,{children:e.title})),(0,l.jsxs)(O.iR,D({colorScheme:"teal",id:e.title,min:e.min,max:e.max,mt:10,defaultValue:30,onChange:function(e){return function(e,r){f(p.map((function(t,n){return n===r?e:t})))}(e,r)}},e.rangeProps,{children:[(0,l.jsx)(O.Uj,{bg:h.ZP.influenceRed,children:(0,l.jsx)(O.Ms,{bg:"light"===m?h.ZP.black:"#FFFFFF"})}),(0,l.jsx)(E.u,{color:"dark"===m?h.ZP.black:"#FFFFFF",fontSize:"lg",placement:"top",isOpen:!0,label:e.isMoney?"$".concat(p[r]):p[r],children:(0,l.jsx)(O.gs,{})})]}),e.title)]})})),t&&(0,l.jsx)(u.J1,{"data-testid":"textInput-error",fontSize:"xl",children:t})]})})},z=t(96356);function T(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function H(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){H(e,r,t[r])}))}return e}function L(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return T(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(e){var r=e.selectOptions,t=e.label,n=e.labelProps,a=e.selectProps,o=e.extraLabel,s=e.handleChange,u=e.name,m=(e.error,e.initialvalue),p=(0,i.useState)(m||[]),f=p[0],b=p[1];(0,i.useEffect)((function(){var e={};e.target={name:u,value:f,type:"multi-select",checked:void 0},s(e)}),[f]);return(0,l.jsxs)(c.xu,{maxW:"30rem",minW:"30rem",pt:8,children:[(0,l.jsx)(d.Z,{onChange:function(e){f.includes(e.target.value)||b(L(f).concat([e.target.value]))},options:r||[],selectProps:Y({height:"4.5rem",fontSize:"1.4rem"},a),label:t,labelProps:n,extraLabel:o,noValue:!1}),(0,l.jsx)(c.kC,{flexWrap:"wrap",spacing:4,mt:5,children:f&&f.map((function(e,r){return(0,l.jsxs)(z.Vp,{size:"lg",variant:"solid",borderRadius:"full",colorScheme:"blackAlpha",mx:2,children:[e,(0,l.jsx)(z.SD,{"data-test-id":"remove-opt",onClick:function(){return r=e,void b(f.filter((function(e){return e!==r})));var r}})]},"".concat(e,"_").concat(r))}))})]})},_=t(2379),N=t(35566),R=t(48081),Z=t(11163),U=t(9229),$=t(92814);var B=[{Header:"Lead Id",accessor:"id"},{Header:"Name",accessor:"name"},{Header:"Phone",accessor:"phone"},{Header:"Email",accessor:"email"},{Header:"State",accessor:"state"},{Header:"Created On",accessor:"createdOn"}],G=t(60662),X=t(11312);function V(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function J(e,r,t,n,a,l,i){try{var o=e[l](i),s=o.value}catch(c){return void t(c)}o.done?r(s):Promise.resolve(s).then(n,a)}function K(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var l=e.apply(r,t);function i(e){J(l,n,a,i,o,"next",e)}function o(e){J(l,n,a,i,o,"throw",e)}i(void 0)}))}}function Q(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){Q(e,r,t[r])}))}return e}function re(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return V(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var te={fontSize:"1.4rem",fontWeight:"semibold"},ne={height:"3rem",width:"30rem",fontSize:"1.4rem"},ae=function(e){if(e)return A.reduce((function(r,t){return e.includes(t.name)?re(r).concat([ee({},t,{pattern:t.pattern.toString()})]):r}),[])},le=function(e){var r=e.initialdata,t=e.type,n=(0,o.I2)(U.Z),x=(0,s.If)().colorMode,y=(0,Z.useRouter)(),j=(0,i.useState)(!1),S=j[0],w=j[1],k=(0,i.useState)([]),P=k[0],A=k[1],O=(0,i.useState)([]),E=O[0],F=O[1];(0,i.useEffect)((function(){D()}),[]);var D=function(){var e=K(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.be.get("/users/leads/get-own-leads?pageSize=1000&page=1");case 3:r=e.sent,t=(t=r.data.data.rows).map((function(e){return ee({},e,{name:"".concat(e.firstName," ").concat(e.lastName),createdOn:(0,b.Z)(new Date(e.createdAt),"dd/MM/yyyy")})})),F(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({title:"Error While Fetching...",description:e.t0.message,status:"error",duration:4e3,isClosable:!0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=K(a().mark((function e(r){var t,l,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.to,l=r.message,t&&l){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,w(!0),e.next=7,(0,G.Gf)("/api/messages",{to:[t],body:l,mediaUrls:[V.adImage]});case 7:if(500!==(i=e.sent).statusCode){e.next=10;break}throw new Error(i.message);case 10:"success"===i.status&&n({title:"SMS Successfully Sent.",description:"The SMS has been successfully sent.",status:"success",duration:4e3,isClosable:!0,variant:"top-accent"}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),o=Array.isArray(e.t0.message)?e.t0.message.join(", "):e.t0.message,n({title:o,description:"",status:"error",duration:4e3,isClosable:!0});case 17:return e.prev=17,w(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,13,17,20]])})));return function(r){return e.apply(this,arguments)}}(),T=function(){var e=K(a().mark((function e(r){var t,l,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.to,l=r.message,t&&l){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,w(!0),e.next=7,(0,G.Gf)("/api/send_email",{subject:"QuickInfluence Lead",to:[t],body:l});case 7:if(500!==(i=e.sent).statusCode){e.next=10;break}throw new Error(i.message);case 10:"success"===i.status&&n({title:"Email Successfully Sent.",description:"The Email has been successfully sent.",status:"success",duration:4e3,isClosable:!0,variant:"top-accent"}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),o=Array.isArray(e.t0.message)?e.t0.message.join(", "):e.t0.message,n({title:o,description:"",status:"error",duration:4e3,isClosable:!0});case 17:return e.prev=17,w(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,13,17,20]])})));return function(r){return e.apply(this,arguments)}}(),H=function(e){return e.map((function(e){if(e.disabled)return null;switch(e.type){case"select":return(0,l.jsxs)(c.HC,{ml:e.isChild?"5":0,pt:8,display:"flex",flexDir:"row",alignItems:"center",mb:"8",children:[(0,l.jsx)(c.xv,{fontSize:"2xl",mx:"8",fontWeight:"black",children:"".concat(e.number?e.number+".":"")}),(0,l.jsx)(d.Z,{error:Q[e.name]?e.errorMessage:void 0,onChange:L,options:e.options||[],label:e.label,labelProps:te,name:e.name,selected:V[e.name],selectProps:ne})]},"campaigne_form_".concat(e.name));case"multi-select":var n;return(0,l.jsxs)(c.HC,{ml:e.isChild?"5":0,maxW:"30rem",minW:"30rem",display:"flex",flexDir:"row",alignItems:"center",mb:"8",children:[(0,l.jsx)(c.xv,{fontSize:"2xl",mx:"8",fontWeight:"black",children:"".concat(e.number?e.number+".":"")}),(0,l.jsx)(W,{selectOptions:e.options,selectProps:ne,label:e.label,labelProps:te,extraLabel:null!==(n=e.extraLabel)&&void 0!==n?n:e.extraLabel,handleChange:L,name:e.name,error:Q[e.name]?e.errorMessage:void 0})]},"campaigne_form_".concat(e.name));case"range-selector":var a;return(0,l.jsxs)(c.HC,{ml:e.isChild?"5":0,display:"flex",flexDir:"row",alignItems:"center",mb:"8",children:[(0,l.jsx)(c.xv,{fontSize:"2xl",mx:"8",fontWeight:"black",children:"".concat(e.number?e.number+".":"")}),(0,l.jsx)(q,{label:e.label,labelProps:te,extraLabel:null!==(a=e.extraLabel)&&void 0!==a?a:e.extraLabel,ranges:e.ranges})]},"campaigne_form_".concat(e.name));case"image-upload":return(0,l.jsxs)(c.HC,{display:"flex",flexDir:"row",alignItems:"center",ml:e.isChild?"5":0,maxW:"30rem",mb:"8",pt:8,children:[(0,l.jsx)(c.xv,{fontSize:"2xl",mx:"8",fontWeight:"black",children:"".concat(e.number?e.number+".":"")}),(0,l.jsx)(N.Z,{name:e.name,handleChange:L,label:e.label,labelProps:te,initialImage:V[e.name]})]},"campaigne_form_".concat(e.name));case"table":return(0,l.jsxs)(c.HC,{display:"flex",flexDir:"column",alignItems:"flex-start",ml:e.isChild?"5":0,maxW:"80rem",mb:"8",pt:8,overflow:"auto",children:[(0,l.jsx)(c.xv,ee({ml:"14",color:"dark"===x?"white":"black"},te,{children:e.label})),(0,l.jsx)(c.xu,{children:(0,l.jsx)(X.Z,{title:"Leads",data:E,columns:B,onRowSelected:A,variant:"leadTable"})})]},"campaigne_form_".concat(e.name));case"submit":return(0,l.jsxs)(c.HC,{display:"flex",flexDir:"row",alignItems:"center",justifyContent:"center",ml:e.isChild?"5":0,maxW:"60rem",mb:"8",pt:8,children:[(0,l.jsx)(c.xv,{fontSize:"2xl",mx:"8",fontWeight:"black",children:"".concat(e.number?e.number+".":"")}),(0,l.jsxs)(c.xu,{children:[(0,l.jsx)(u.lX,ee({mb:"3",color:"dark"===x?"white":"black"},te,{children:"Submit Campaign"})),(0,l.jsx)(c.xv,{fontSize:"lg",children:"We will review your campaign and correspond any changes or approval decision to you"}),(0,l.jsxs)(m.Z,{maxW:"204px",mt:"8",p:"6",fontSize:"lg",isDisabled:re,onClick:J,children:[r?"Update":"Submit"," Campaign"," ",re&&(0,l.jsx)(g.default,{src:_.Z,alt:"",width:50,height:50})]})]})]},"campaigne_form_".concat(e.name));case"ad-preview":return(0,l.jsxs)(c.HC,{alignItems:"center",ml:e.isChild?"5rem":0,maxW:"30rem",mb:"8",pt:8,children:[(0,l.jsx)(c.xv,{fontSize:"xl",mb:"3",color:"dark"===x?"white":"gray",fontWeight:"semibold",children:e.label}),(0,l.jsx)(c.kC,{bgColor:"light"===x?"#CECECE":"black",minW:"50rem",maxW:"50rem",h:"20rem",mb:"8",children:(0,l.jsxs)(c.kC,{alignSelf:"end",mb:"4",ml:"4",h:"15rem",w:"35rem",maxH:"15rem",overflow:"auto",bgColor:h.YI[x],border:"1px solid ".concat(h.uH[x]),borderRadius:30,borderBottomLeftRadius:"none",p:"8",pb:0,flexDir:"column",children:[(0,l.jsx)(c.xv,{dangerouslySetInnerHTML:{__html:(o=V.message,o.replace(/(https?:\/\/[^\s]+)/g,(function(e){return'<a style="color: #007FFF;" href="'+e+'">'+e+"</a>"})))},fontSize:"md",fontWeight:"semibold",mb:"5"}),V.adImage&&(0,l.jsx)(c.xu,{justifyContent:"center",alignItems:"center",children:(0,l.jsx)(g.default,{src:V.adImage,alt:"Ad Image",width:"200",height:"70"})})]})})]},"campaigne_form_".concat(e.name));default:var i;return(0,l.jsxs)(c.HC,{ml:e.isChild?"5":0,display:"flex",flexDir:"row",alignItems:"center",mb:"8",children:[(0,l.jsx)(c.xv,{fontSize:"2xl",mx:"8",fontWeight:"black",children:"".concat(e.number?e.number+".":"")}),(0,l.jsxs)(c.kC,{flexDir:"column",flex:1,children:[(0,l.jsx)(p.o,{error:Q[e.name]?e.errorMessage:void 0,name:e.name,label:e.label,value:V[e.name],handleChange:L,type:e.type,placeholder:e.placeholder||e.label,extraLabel:null!==(i=e.extraLabel)&&void 0!==i?i:e.extraLabel,formControlProps:{pt:8,maxW:e.label.includes("Send Test Ad")?"25rem":"40rem"},labelProps:{fontSize:"1.4rem",fontWeight:"semibold"},TextInputProps:{p:".6rem",pl:4,size:"lg"}}),e.label.includes("Send Test Ad")&&(0,l.jsx)(m.Z,{maxW:"25rem",mt:"8",mb:"8",p:"6",disabled:S,isLoading:S,fontSize:"lg",onClick:function(){!function(e){var r=e.type,t=e.to,n=e.message;"SMS"!=r?"Email"!=r||T({to:t,message:n}):z({to:t,message:n})}({type:t,to:"Email"===t?V.email:"SMS"===t?V.phone:"",message:V.message})},bgColor:"#7B7B7B",children:"Send"})]})]},"campaigne_form_".concat(e.name))}var o}))},Y=(0,f.Z)({inputs:function(e){switch(e){case"Email":return M;case"SMS":return C;default:return v}}(t),initials:r||{},cb:function(){var e=K(a().mark((function e(l){var i,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="Default"!==t&&{message:V.message,to:P.map((function(e){return{id:e.id,email:e.email,phone:e.phone}})),mediaUrls:[V.adImage],timezone:Intl.DateTimeFormat().resolvedOptions().timeZone},o=ae(l.formData),s=ee({type:t,name:l.name,description:l.description,status:l.status||"SCHEDULED",redirectUrl:l.redirectUrl,paidType:l.paidType,banner:l.banner,formData:{form:o},campaignDate:l.campaignDate,prices:l.prices},i),!r){e.next=9;break}return e.next=6,R.be.put("/users/campaign/".concat(r.id),s);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,R.be.post("/users/create/campaign",s);case 11:e.t0=e.sent;case 12:e.t0&&(n({title:r?"Campaign updated successfully!":"Your campaign has been created successfully!",description:"",status:"success",duration:4e3,isClosable:!0}),setTimeout((function(){y.push("/dashboard/campaigns")}),2e3));case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),L=Y.handleChange,V=Y.inputTypes,J=Y.handleSubmit,Q=Y.errors,re=Y.loading;return"SMS"===t?(0,l.jsxs)(c.kC,{flexDirection:"column",children:[(0,l.jsxs)(c.kC,{flexDir:"row",alignItems:"center",onClick:y.back,_hover:{cursor:"pointer"},children:[(0,l.jsx)($.G,{icon:I.A35,size:"xs"}),(0,l.jsx)(c.xv,{fontWeight:"bold",pl:"2",children:"Back"})]}),(0,l.jsxs)(c.kC,{flexDir:"column",mt:"16",children:[(0,l.jsx)(c.X6,{fontSize:"1.5rem",children:"New SMS Campaign"}),(0,l.jsx)(c.xv,{mt:"3",fontSize:"lg",children:"Here is where your new campaign will come to life. Select you preferences and design your campaign below."})]}),(0,l.jsx)(c.kC,{bg:h.fP[x],minH:"100%",h:"100%",w:"60vw",mt:"8",pb:"16",children:(0,l.jsx)("form",{action:"post",children:(0,l.jsx)(c.GS,{size:"2xl",style:{listStyle:"none"},children:H(C)})})})]}):"Email"===t?(0,l.jsxs)(c.kC,{flexDirection:"column",children:[(0,l.jsxs)(c.kC,{flexDir:"row",alignItems:"center",onClick:y.back,_hover:{cursor:"pointer"},children:[(0,l.jsx)($.G,{icon:I.A35,size:"xs"}),(0,l.jsx)(c.xv,{fontWeight:"bold",pl:"2",children:"Back"})]}),(0,l.jsxs)(c.kC,{flexDir:"column",mt:"16",children:[(0,l.jsx)(c.X6,{fontSize:"1.5rem",children:"New Email Campaign"}),(0,l.jsx)(c.xv,{mt:"3",fontSize:"lg",children:"Here is where your new campaign will come to life. Select you preferences and design your campaign below."})]}),(0,l.jsx)(c.kC,{bg:h.fP[x],minH:"100%",h:"100%",w:"60vw",mt:"8",pb:"16",children:(0,l.jsx)("form",{action:"post",children:(0,l.jsx)(c.GS,{size:"2xl",style:{listStyle:"none"},children:H(M)})})})]}):(0,l.jsxs)(c.kC,{flexDirection:"column",children:[(0,l.jsxs)(c.X6,{size:"xl",children:[" ",r?"Edit":"New"," Campaign"]}),(0,l.jsx)(c.xv,{my:"10",color:h.ZP.greyLighter,children:r?"Make changes to your existing campaign here.":"Here is where your new campaign will come to life. Select your preferences and design your campaign below."}),(0,l.jsx)("form",{action:"post",children:(0,l.jsxs)(c.GS,{size:"2xl",children:[v.map((function(e,r){if(e.disabled)return null;switch(e.type){case"select":return(0,l.jsx)(c.HC,{maxW:"60rem",pt:8,children:(0,l.jsx)(d.Z,{error:Q[e.name]?e.errorMessage:void 0,onChange:L,options:e.options||[],label:e.label,name:e.name,selected:V[e.name],selectProps:{height:"4.5rem",fontSize:"1.4rem"}})},"campaigne_form_".concat(r));case"multi-select":var t;return(0,l.jsx)(c.HC,{children:(0,l.jsx)(W,{selectOptions:e.options,label:e.label,extraLabel:null!==(t=e.extraLabel)&&void 0!==t?t:e.extraLabel,handleChange:L,name:e.name,error:Q[e.name]?e.errorMessage:void 0,initialvalue:V.formData||[]})},"campaigne_form_".concat(r));case"range-selector":var n;return(0,l.jsx)(c.HC,{children:(0,l.jsx)(q,{label:e.label,extraLabel:null!==(n=e.extraLabel)&&void 0!==n?n:e.extraLabel,ranges:e.ranges})},"campaigne_form_".concat(r));case"image-upload":return(0,l.jsx)(c.HC,{maxW:"60rem",pt:8,children:(0,l.jsx)(N.Z,{name:e.name,handleChange:L,label:e.label,initialImage:V[e.name]})},"campaigne_form_".concat(r));default:var a;return(0,l.jsx)(c.HC,{children:(0,l.jsx)(p.o,{error:Q[e.name]?e.errorMessage:void 0,name:e.name,label:e.label,value:V[e.name],formControlProps:{pt:8,maxW:"60rem"},handleChange:L,type:e.type,placeholder:e.label,TextInputProps:{},extraLabel:null!==(a=e.extraLabel)&&void 0!==a?a:e.extraLabel})},"campaigne_form_".concat(r))}})),(0,l.jsxs)(c.HC,{my:20,children:[(0,l.jsx)(u.lX,{fontSize:"1.6rem",color:"light"===x?h.ZP.black:"#FFFFFF",htmlFor:"multiRangeSelector","data-testid":"textInput-label",children:"Submit Campaign"}),(0,l.jsx)(c.xv,{children:"We will review your campaign and correspond any changes or approval decision to you"}),(0,l.jsxs)(m.Z,{maxW:"204px",mt:12,onClick:J,children:[r?"Update":"Create"," Campaign"," ",re&&(0,l.jsx)(g.default,{src:_.Z,alt:"",width:50,height:50})]})]})]})})]})}}}]);