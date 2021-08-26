(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{119:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),i=(t(0),t(205)),c={title:"Building Submarine Spark Security Plugin"},u={unversionedId:"userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",id:"userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",isDocsHomePage:!1,title:"Building Submarine Spark Security Plugin",description:"\x3c!--",source:"@site/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin.md",slug:"/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",permalink:"/docs/next/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin.md",version:"current",sidebar:"docs",previous:{title:"Submarine Spark Security Plugin",permalink:"/docs/next/userDocs/submarine-security/spark-security/README"},next:{title:"MLflow UI",permalink:"/docs/next/userDocs/others/mlflow"}},s=[],o={toc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Submarine Spark Security Plugin is built using ",Object(i.b)("a",{parentName:"p",href:"http://maven.apache.org"},"Apache Maven"),". To build it, ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to the root direct of submarine project and run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mvn clean package -Dmaven.javadoc.skip=true -DskipTests -pl :submarine-spark-security\n")),Object(i.b)("p",null,"By default, Submarine Spark Security Plugin is built against Apache Spark ",Object(i.b)("inlineCode",{parentName:"p"},"2.3.x")," and Apache Ranger ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0"),", which may be incompatible with other Apache Spark or Apache Ranger releases."),Object(i.b)("p",null,"Currently, available profiles are:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Spark"),": ",Object(i.b)("inlineCode",{parentName:"p"},"-Pspark-2.3"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pspark-2.4"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pspark-3.0")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Ranger"),": ",Object(i.b)("inlineCode",{parentName:"p"},"-Pranger-1.2"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pranger-2.0")))}p.isMDXComponent=!0},205:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(o.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||i;return t?a.a.createElement(d,u(u({ref:r},o),{},{components:t})):a.a.createElement(d,u({ref:r},o))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=m;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var o=2;o<i;o++)c[o]=t[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);