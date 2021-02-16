(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{1051:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),i=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(a),O=n,s=m["".concat(c,".").concat(O)]||m[O]||o[O]||b;return a?r.a.createElement(s,p(p({ref:t},d),{},{components:a})):r.a.createElement(s,p({ref:t},d))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var d=2;d<b;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},838:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(8),b=(a(0),a(1051)),c={id:"knex.knex-1.orderby",title:"Interface: OrderBy<TRecord, TResult>",sidebar_label:"OrderBy",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.knex-1.orderby",id:"api/interfaces/knex.knex-1.orderby",isDocsHomePage:!1,title:"Interface: OrderBy<TRecord, TResult>",description:"Interface: OrderBy",source:"@site/docs/api/interfaces/knex.knex-1.orderby.md",slug:"/api/interfaces/knex.knex-1.orderby",permalink:"/docs/next/api/interfaces/knex.knex-1.orderby",editUrl:null,version:"current",sidebar_label:"OrderBy",sidebar:"API",previous:{title:"Interface: OracleDbConnectionConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.oracledbconnectionconfig"},next:{title:"Interface: PgConnectionConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.pgconnectionconfig"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],d={toc:l};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-orderbytrecord-tresult"},"Interface: OrderBy<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".OrderBy"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord, ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"p"},"desc"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"order?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"td"},"desc"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1369"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"order?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1373"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnDefs"),": (keyof TRecord ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"p"},"column"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord ; ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"p"},"desc"),"  }",">",")[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"columnDefs")),Object(b.b)("td",{parentName:"tr",align:"left"},"(keyof TRecord ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"td"},"column"),": ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord ; ",Object(b.b)("inlineCode",{parentName:"td"},"order?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"td"},"desc"),"  }",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1374"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnDefs"),": (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"p"},"column"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"  }",">",")[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"columnDefs")),Object(b.b)("td",{parentName:"tr",align:"left"},"(",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"td"},"column"),": ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ; ",Object(b.b)("inlineCode",{parentName:"td"},"order?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"  }",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1382"))}i.isMDXComponent=!0}}]);