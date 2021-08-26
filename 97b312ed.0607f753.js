(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(205)),o={title:"How to Build Submarine"},c={unversionedId:"devDocs/BuildFromCode",id:"devDocs/BuildFromCode",isDocsHomePage:!1,title:"How to Build Submarine",description:"\x3c!--",source:"@site/docs/devDocs/BuildFromCode.md",slug:"/devDocs/BuildFromCode",permalink:"/docs/next/devDocs/BuildFromCode",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/BuildFromCode.md",version:"current",sidebar:"docs",previous:{title:"Dependencies for Submarine",permalink:"/docs/next/devDocs/Dependencies"},next:{title:"Development Guide",permalink:"/docs/next/devDocs/Development"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Quick Start",id:"quick-start",children:[{value:"Build Your Custom Submarine Docker Images",id:"build-your-custom-submarine-docker-images",children:[]},{value:"Building source code / binary distribution",id:"building-source-code--binary-distribution",children:[]},{value:"Building source code / binary distribution with Maven Wrapper",id:"building-source-code--binary-distribution-with-maven-wrapper",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JDK 1.8"),Object(i.b)("li",{parentName:"ul"},"Maven 3.3 or later ( < 3.8.1 )"),Object(i.b)("li",{parentName:"ul"},"Docker")),Object(i.b)("h2",{id:"quick-start"},"Quick Start"),Object(i.b)("h3",{id:"build-your-custom-submarine-docker-images"},"Build Your Custom Submarine Docker Images"),Object(i.b)("p",null,"Submarine provides default Docker image in the release artifacts, sometimes you would like to do some modifications on the images. You can rebuild Docker image after you make changes."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that you need to make sure the images built above can be accessed in k8s\nUsually this needs to rename and push to a proper Docker registry.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mvn clean package -DskipTests\n")),Object(i.b)("p",null,"Build submarine server image:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./dev-support/docker-images/submarine/build.sh\n")),Object(i.b)("p",null,"Build submarine database image:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./dev-support/docker-images/database/build.sh\n")),Object(i.b)("h3",{id:"building-source-code--binary-distribution"},"Building source code / binary distribution"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Checking releases for licenses")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean org.apache.rat:apache-rat-plugin:check\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create binary distribution with default hadoop version")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean package -DskipTests\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-2.9.x version")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean package -DskipTests -Phadoop-2.9\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-2.10.x version")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean package -DskipTests -Phadoop-2.10\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-3.1.x version")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean package -DskipTests -Phadoop-3.1\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-3.2.x version")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean package -DskipTests -Phadoop-3.2\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create source code distribution")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn clean package -DskipTests -Psrc\n")),Object(i.b)("h3",{id:"building-source-code--binary-distribution-with-maven-wrapper"},"Building source code / binary distribution with Maven Wrapper"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maven Wrapper (Optional): Maven Wrapper can help you avoid dependencies problem about Maven version.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# Setup Maven Wrapper (Maven 3.6.1)\nmvn -N io.takari:maven:0.7.7:wrapper -Dmaven=3.6.1\n\n# Check Maven Wrapper\n./mvnw -version\n\n# Replace 'mvn' with 'mvnw'. Example:\n./mvnw clean package -DskipTests\n")))}b.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);