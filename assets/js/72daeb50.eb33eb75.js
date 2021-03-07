(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),i=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},l=function(e){var t=i(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=i(a),m=n,u=l["".concat(o,".").concat(m)]||l[m]||d[m]||r;return a?c.a.createElement(u,b(b({ref:t},s),{},{components:a})):c.a.createElement(u,b({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var s=2;s<r;s++)o[s]=a[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},500:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(3),c=a(8),r=(a(0),a(1052)),o={id:"core.tablenotfoundexception",title:"Class: TableNotFoundException",sidebar_label:"TableNotFoundException",hide_title:!0},b={unversionedId:"api/classes/core.tablenotfoundexception",id:"version-4.4/api/classes/core.tablenotfoundexception",isDocsHomePage:!1,title:"Class: TableNotFoundException",description:"Class: TableNotFoundException",source:"@site/versioned_docs/version-4.4/api/classes/core.tablenotfoundexception.md",slug:"/api/classes/core.tablenotfoundexception",permalink:"/docs/api/classes/core.tablenotfoundexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.tablenotfoundexception.md",version:"4.4",lastUpdatedBy:"Daan Roet",lastUpdatedAt:1615129492,sidebar_label:"TableNotFoundException",sidebar:"version-4.4/API",previous:{title:"Class: TableExistsException",permalink:"/docs/api/classes/core.tableexistsexception"},next:{title:"Class: TimeType",permalink:"/docs/api/classes/core.timetype"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],s={toc:p};function i(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-tablenotfoundexception"},"Class: TableNotFoundException"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TableNotFoundException"),Object(r.b)("p",null,"Exception for an unknown table referenced in a statement detected in the driver."),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},Object(r.b)("em",{parentName:"a"},"DatabaseObjectNotFoundException"))),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"TableNotFoundException")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new TableNotFoundException"),"(",Object(r.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.tablenotfoundexception"},Object(r.b)("em",{parentName:"a"},"TableNotFoundException"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"previous")),Object(r.b)("td",{parentName:"tr",align:null},"Error")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.tablenotfoundexception"},Object(r.b)("em",{parentName:"a"},"TableNotFoundException"))),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"code"},"code"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"code"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#code"},"code")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errmsg"},"errmsg"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"errmsg"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#errmsg"},"errmsg")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errno"},"errno"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"errno"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#errno"},"errno")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"message"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#message"},"message")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"name"},"name"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#name"},"name")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(r.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(r.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Optional override for formatting stack traces"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"},"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#preparestacktrace"},"prepareStackTrace")),Object(r.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#sqlmessage"},"sqlMessage")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sqlstate"},"sqlState"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"sqlState"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#sqlstate"},"sqlState")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stack"},"stack"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"stack"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#stack"},"stack")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#stacktracelimit"},"stackTraceLimit")),Object(r.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(r.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(r.b)("em",{parentName:"p"},"object"),", ",Object(r.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Create .stack property on a target object"),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"targetObject")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"object"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(r.b)("td",{parentName:"tr",align:null},"Function")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException")),Object(r.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}i.isMDXComponent=!0}}]);