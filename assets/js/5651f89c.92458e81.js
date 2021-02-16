(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1051:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=m(a),O=n,j=l["".concat(c,".").concat(O)]||l[O]||s[O]||b;return a?r.a.createElement(j,o(o({ref:t},i),{},{components:a})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},385:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),b=(a(0),a(1051)),c={id:"core.connection",title:"Class: Connection",sidebar_label:"Connection",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.connection",id:"api/classes/core.connection",isDocsHomePage:!1,title:"Class: Connection",description:"Class: Connection",source:"@site/docs/api/classes/core.connection.md",slug:"/api/classes/core.connection",permalink:"/docs/next/api/classes/core.connection",editUrl:null,version:"current",sidebar_label:"Connection",sidebar:"API",previous:{title:"Class: ConfigurationLoader",permalink:"/docs/next/api/classes/core.configurationloader"},next:{title:"Class: ConnectionException",permalink:"/docs/next/api/classes/core.connectionexception"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[]},{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"options",id:"options",children:[]},{value:"platform",id:"platform",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"connect",id:"connect",children:[]},{value:"execute",id:"execute",children:[]},{value:"executeQuery",id:"executequery",children:[]},{value:"getClientUrl",id:"getclienturl",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"logQuery",id:"logquery",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"setMetadata",id:"setmetadata",children:[]},{value:"setPlatform",id:"setplatform",children:[]},{value:"transactional",id:"transactional",children:[]}]}],i={toc:p};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-connection"},"Class: Connection"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".Connection"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Connection")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection"))))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Connection"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionoptions"},Object(b.b)("em",{parentName:"a"},"ConnectionOptions")),", ",Object(b.b)("inlineCode",{parentName:"p"},"type?"),": ",Object(b.b)("em",{parentName:"p"},"read")," ","|"," ",Object(b.b)("em",{parentName:"p"},"write"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.connectionoptions"},Object(b.b)("em",{parentName:"a"},"ConnectionOptions"))),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"read")," ","|"," ",Object(b.b)("em",{parentName:"td"},"write")),Object(b.b)("td",{parentName:"tr",align:"left"},"'write'")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L14"},"packages/core/src/connections/Connection.ts:14")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"client"},"client"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract")," ",Object(b.b)("strong",{parentName:"p"},"client"),": ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L14"},"packages/core/src/connections/Connection.ts:14")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L12"},"packages/core/src/connections/Connection.ts:12")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"options"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionoptions"},Object(b.b)("em",{parentName:"a"},"ConnectionOptions"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"platform"},"platform"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("strong",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L13"},"packages/core/src/connections/Connection.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"read")," ","|"," ",Object(b.b)("em",{parentName:"p"},"write"),"= 'write'"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"begin"},"begin"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"begin"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<unknown",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ctx?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<unknown",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L49"},"packages/core/src/connections/Connection.ts:49")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"close"},"close"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"close"),"(",Object(b.b)("inlineCode",{parentName:"p"},"force?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Closes the database connection (aka disconnect)"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"force?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L38"},"packages/core/src/connections/Connection.ts:38")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"commit"},"commit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"commit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ctx")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L53"},"packages/core/src/connections/Connection.ts:53")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"connect"},"connect"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"connect"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Establishes connection to database"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L28"},"packages/core/src/connections/Connection.ts:28")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"execute"},"execute"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"execute"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[], ",Object(b.b)("inlineCode",{parentName:"p"},"method?"),": ",Object(b.b)("em",{parentName:"p"},"all")," ","|"," ",Object(b.b)("em",{parentName:"p"},"get")," ","|"," ",Object(b.b)("em",{parentName:"p"},"run"),", ",Object(b.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"method?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"all")," ","|"," ",Object(b.b)("em",{parentName:"td"},"get")," ","|"," ",Object(b.b)("em",{parentName:"td"},"run"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ctx?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L61"},"packages/core/src/connections/Connection.ts:61")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"executequery"},"executeQuery"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"executeQuery"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"cb"),": () => ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"cb")),Object(b.b)("td",{parentName:"tr",align:"left"},"() => ",Object(b.b)("em",{parentName:"td"},"Promise"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L90"},"packages/core/src/connections/Connection.ts:90")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getclienturl"},"getClientUrl"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getClientUrl"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L75"},"packages/core/src/connections/Connection.ts:75")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionconfig"},Object(b.b)("em",{parentName:"a"},"ConnectionConfig"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionconfig"},Object(b.b)("em",{parentName:"a"},"ConnectionConfig"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L63"},"packages/core/src/connections/Connection.ts:63")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L43"},"packages/core/src/connections/Connection.ts:43")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isconnected"},"isConnected"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"isConnected"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<boolean",">"),Object(b.b)("p",null,"Are we connected to the database"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<boolean",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L33"},"packages/core/src/connections/Connection.ts:33")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"logquery"},"logQuery"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"logQuery"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"took?"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"took?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L104"},"packages/core/src/connections/Connection.ts:104")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rollback"},"rollback"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"rollback"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ctx")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L57"},"packages/core/src/connections/Connection.ts:57")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setmetadata"},"setMetadata"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setMetadata"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L82"},"packages/core/src/connections/Connection.ts:82")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setplatform"},"setPlatform"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setPlatform"),"(",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L86"},"packages/core/src/connections/Connection.ts:86")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"transactional"},"transactional"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"transactional"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"cb"),": (",Object(b.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"cb")),Object(b.b)("td",{parentName:"tr",align:"left"},"(",Object(b.b)("inlineCode",{parentName:"td"},"trx"),": ",Object(b.b)("em",{parentName:"td"},"any"),") => ",Object(b.b)("em",{parentName:"td"},"Promise"),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ctx?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(b.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4880fdb/packages/core/src/connections/Connection.ts#L45"},"packages/core/src/connections/Connection.ts:45")))}m.isMDXComponent=!0}}]);