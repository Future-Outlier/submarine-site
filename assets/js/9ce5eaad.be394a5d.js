"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3073],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3527:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},u=void 0,c={type:"mdx",permalink:"/releases/submarine-release-0.7.0",source:"@site/src/pages/releases/submarine-release-0.7.0.md",description:"\x3c!--",frontMatter:{}},p=[],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apache-submarine-release-070"},"Apache Submarine Release 0.7.0"),(0,o.kt)("p",null,"The Apache Submarine Community is pleased to announce the availability of the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.7.0")," release."),(0,o.kt)("p",null,"The community put significant effort into improving Apache Submarine since the last release.\n152 patches for improvements and bug fixes. The highlighted features are as follows:"),(0,o.kt)("p",null,"The highlighted features are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submarine agent - it will directly update pods status in the DB, and reduce submarine server overhead."),(0,o.kt)("li",{parentName:"ul"},"Support deploying model through workbench"),(0,o.kt)("li",{parentName:"ul"},"Upgrade default Kubernetes client API"),(0,o.kt)("li",{parentName:"ul"},"Improve workbench UI/UX"),(0,o.kt)("li",{parentName:"ul"},"Submarine CLI")),(0,o.kt)("p",null,"We encourage to ",(0,o.kt)("a",{parentName:"p",href:"/docs/download"},"download")," the latest release. Feedback through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/community/"},"mailing lists")," is very welcome."),(0,o.kt)("p",null,"You can visit ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12350377&styleName=&projectId=12322824"},"issue tracker")," for full list of issues that are resolved."))}f.isMDXComponent=!0}}]);