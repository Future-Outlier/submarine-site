"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[706],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return p}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,b=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?t.createElement(b,a(a({ref:r},c),{},{components:n})):t.createElement(b,a({ref:r},c))}));function p(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6558:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var t=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Project Architecture"},u=void 0,l={unversionedId:"devDocs/README",id:"version-0.7.0/devDocs/README",title:"Project Architecture",description:"\x3c!--",source:"@site/versioned_docs/version-0.7.0/devDocs/README.md",sourceDirName:"devDocs",slug:"/devDocs/",permalink:"/docs/devDocs/",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/devDocs/README.md",tags:[],version:"0.7.0",frontMatter:{title:"Project Architecture"},sidebar:"docs",previous:{title:"Tensorboard",permalink:"/docs/userDocs/others/tensorboard"},next:{title:"Dependencies for Submarine",permalink:"/docs/devDocs/Dependencies"}},c={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Submarine Project Structure",id:"2-submarine-project-structure",level:2},{value:"2.1. submarine-client",id:"21-submarine-client",level:3},{value:"2.2. submarine-cloud-v2",id:"22-submarine-cloud-v2",level:3},{value:"2.3. submarine-commons",id:"23-submarine-commons",level:3},{value:"2.4. submarine-dist",id:"24-submarine-dist",level:3},{value:"2.5. submarine-sdk",id:"25-submarine-sdk",level:3},{value:"2.6. submarine-server",id:"26-submarine-server",level:3},{value:"2.7. submarine-test",id:"27-submarine-test",level:3},{value:"2.8. submarine-workbench",id:"28-submarine-workbench",level:3},{value:"2.9 dev-support",id:"29-dev-support",level:3}],m={toc:d};function p(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,o.kt)("p",null,"This document mainly describes the structure of each module of the Submarine project, the development and test description of each module."),(0,o.kt)("h2",{id:"2-submarine-project-structure"},"2. Submarine Project Structure"),(0,o.kt)("h3",{id:"21-submarine-client"},"2.1. submarine-client"),(0,o.kt)("p",null,"Provide the CLI interface for submarine user. (Currently only support YARN service (deprecated))"),(0,o.kt)("h3",{id:"22-submarine-cloud-v2"},"2.2. submarine-cloud-v2"),(0,o.kt)("p",null,"The operator for Submarine application. For details, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/README.md"},"README on github"),"."),(0,o.kt)("h3",{id:"23-submarine-commons"},"2.3. submarine-commons"),(0,o.kt)("p",null,"Define utility function used in multiple packages, mainly related to hadoop."),(0,o.kt)("h3",{id:"24-submarine-dist"},"2.4. submarine-dist"),(0,o.kt)("p",null,"Store the pre-release files."),(0,o.kt)("h3",{id:"25-submarine-sdk"},"2.5. submarine-sdk"),(0,o.kt)("p",null,"Provide Python SDK for submarine user."),(0,o.kt)("h3",{id:"26-submarine-server"},"2.6. submarine-server"),(0,o.kt)("p",null,"Include core server, restful api, and k8s submitter."),(0,o.kt)("h3",{id:"27-submarine-test"},"2.7. submarine-test"),(0,o.kt)("p",null,"Provide end-to-end and k8s test for submarine."),(0,o.kt)("h3",{id:"28-submarine-workbench"},"2.8. submarine-workbench"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"workbench-server: is a Jetty-based web server service. Workbench-server provides RESTful interface and Websocket interface. The RESTful interface provides workbench-web with management capabilities for databases such as project, department, user, and role."),(0,o.kt)("li",{parentName:"ul"},"workbench-web: is a web front-end service based on Angular.js framework. With workbench-web users can manage Submarine project, department, user, role through browser. You can also use the notebook to develop machine learning algorithms, model release and other lifecycle management.")),(0,o.kt)("h3",{id:"29-dev-support"},"2.9 dev-support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mini-submarine"),": by using the docker image provided by Submarine, you can\nexperience all the functions of Submarine in a single docker environment, while\nmini-submarine also provides developers with a development and testing\nenvironment, Avoid the hassle of installing and deploying the runtime\nenvironment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"submarine-installer"),": submarine-installer is our submarine runtime\nenvironment installation tool for yarn-3.1+ and above.By using\nsubmarine-installer, it is easy to install and deploy system services such as\n",(0,o.kt)("inlineCode",{parentName:"li"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nvidia-docker"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nvidia driver"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ETCD"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Calico network")," etc.\nrequired by yarn-3.1+.")))}p.isMDXComponent=!0}}]);