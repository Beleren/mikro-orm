(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,d=l["".concat(a,".").concat(m)]||l[m]||u[m]||i;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},672:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(8),i=(r(0),r(1051)),a={id:"core.migrationobject",title:"Interface: MigrationObject",sidebar_label:"MigrationObject",hide_title:!0},c={unversionedId:"api/interfaces/core.migrationobject",id:"version-4.4/api/interfaces/core.migrationobject",isDocsHomePage:!1,title:"Interface: MigrationObject",description:"Interface: MigrationObject",source:"@site/versioned_docs/version-4.4/api/interfaces/core.migrationobject.md",slug:"/api/interfaces/core.migrationobject",permalink:"/docs/api/interfaces/core.migrationobject",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.migrationobject.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613370286,sidebar_label:"MigrationObject",sidebar:"version-4.4/API",previous:{title:"Interface: ManyToOneOptions<T, O>",permalink:"/docs/api/interfaces/core.manytooneoptions"},next:{title:"Interface: MikroORMOptions<D>",permalink:"/docs/api/interfaces/core.mikroormoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"class",id:"class",children:[]},{value:"name",id:"name",children:[]}]}],s={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migrationobject"},"Interface: MigrationObject"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".MigrationObject"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrationObject"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"class"},"class"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"class"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},Object(i.b)("em",{parentName:"a"},"Constructor")),"<Migration",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L355"},"packages/core/src/typings.ts:355")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L354"},"packages/core/src/typings.ts:354")))}b.isMDXComponent=!0}}]);