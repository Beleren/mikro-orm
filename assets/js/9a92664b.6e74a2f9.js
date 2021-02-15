(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1051:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),m=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),o=m(a),O=r,d=o["".concat(b,".").concat(O)]||o[O]||s[O]||c;return a?n.a.createElement(d,p(p({ref:t},i),{},{components:a})):n.a.createElement(d,p({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var i=2;i<c;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},646:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),c=(a(0),a(1051)),b={id:"core.filecacheadapter",title:"Class: FileCacheAdapter",sidebar_label:"FileCacheAdapter",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.filecacheadapter",id:"api/classes/core.filecacheadapter",isDocsHomePage:!1,title:"Class: FileCacheAdapter",description:"Class: FileCacheAdapter",source:"@site/docs/api/classes/core.filecacheadapter.md",slug:"/api/classes/core.filecacheadapter",permalink:"/docs/next/api/classes/core.filecacheadapter",editUrl:null,version:"current",sidebar_label:"FileCacheAdapter",sidebar:"API",previous:{title:"Class: ExceptionConverter",permalink:"/docs/next/api/classes/core.exceptionconverter"},next:{title:"Class: ForeignKeyConstraintViolationException",permalink:"/docs/next/api/classes/core.foreignkeyconstraintviolationexception"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"VERSION",id:"version",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"get",id:"get",children:[]},{value:"getHash",id:"gethash",children:[]},{value:"path",id:"path",children:[]},{value:"set",id:"set",children:[]}]}],i={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-filecacheadapter"},"Class: FileCacheAdapter"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".FileCacheAdapter"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FileCacheAdapter"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/core.cacheadapter"},Object(c.b)("em",{parentName:"a"},"CacheAdapter")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new FileCacheAdapter"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options"),": { ",Object(c.b)("inlineCode",{parentName:"p"},"cacheDir"),": ",Object(c.b)("em",{parentName:"p"},"string"),"  }, ",Object(c.b)("inlineCode",{parentName:"p"},"baseDir"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"pretty?"),": ",Object(c.b)("em",{parentName:"p"},"boolean"),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.filecacheadapter"},Object(c.b)("em",{parentName:"a"},"FileCacheAdapter"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",{parentName:"tr",align:null},"{ ",Object(c.b)("inlineCode",{parentName:"td"},"cacheDir"),": ",Object(c.b)("em",{parentName:"td"},"string"),"  }"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"baseDir")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"pretty")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"boolean")),Object(c.b)("td",{parentName:"tr",align:null},"false")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.filecacheadapter"},Object(c.b)("em",{parentName:"a"},"FileCacheAdapter"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L9"},"packages/core/src/cache/FileCacheAdapter.ts:9")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"version"},"VERSION"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"VERSION"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L9"},"packages/core/src/cache/FileCacheAdapter.ts:9")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"clear"},"clear"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"clear"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Clears all items stored in the cache."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Implementation of: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.cacheadapter"},"CacheAdapter")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L51"},"packages/core/src/cache/FileCacheAdapter.ts:51")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get"},"get"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"get"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Gets the items under ",Object(c.b)("inlineCode",{parentName:"p"},"name")," key from the cache."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Implementation of: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.cacheadapter"},"CacheAdapter")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L18"},"packages/core/src/cache/FileCacheAdapter.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gethash"},"getHash"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"getHash"),"(",Object(c.b)("inlineCode",{parentName:"p"},"origin"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"null")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"origin")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"null")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L62"},"packages/core/src/cache/FileCacheAdapter.ts:62")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"path"},"path"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"path"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"string"),">"),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"string"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L57"},"packages/core/src/cache/FileCacheAdapter.ts:57")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"set"},"set"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"set"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"origin"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"origin")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f43afc2/packages/core/src/cache/FileCacheAdapter.ts#L38"},"packages/core/src/cache/FileCacheAdapter.ts:38")))}m.isMDXComponent=!0}}]);