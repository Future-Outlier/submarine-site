(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{137:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),i=r(7),a=(r(0),r(205)),c={title:"Submarine Launcher"},o={unversionedId:"designDocs/wip-designs/submarine-launcher",id:"designDocs/wip-designs/submarine-launcher",isDocsHomePage:!1,title:"Submarine Launcher",description:"\x3c!--",source:"@site/docs/designDocs/wip-designs/submarine-launcher.md",slug:"/designDocs/wip-designs/submarine-launcher",permalink:"/docs/next/designDocs/wip-designs/submarine-launcher",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/designDocs/wip-designs/submarine-launcher.md",version:"current",sidebar:"docs",previous:{title:"Generic Expeiment Spec",permalink:"/docs/next/designDocs/submarine-server/experimentSpec"},next:{title:"Cluster Server Design - High-Availability",permalink:"/docs/next/designDocs/wip-designs/submarine-clusterServer"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirement",id:"requirement",children:[{value:"Cloud-Native Service",id:"cloud-native-service",children:[]},{value:"Service discovery",id:"service-discovery",children:[]}]},{value:"Design",id:"design",children:[{value:"Launcher",id:"launcher",children:[]},{value:"Launcher On Docker",id:"launcher-on-docker",children:[]},{value:"Launcher On Kubernetes",id:"launcher-on-kubernetes",children:[]},{value:"Launcher On Yarn",id:"launcher-on-yarn",children:[]},{value:"Launcher On AWS",id:"launcher-on-aws",children:[]},{value:"Launcher On GCP",id:"launcher-on-gcp",children:[]},{value:"Launcher On Azure",id:"launcher-on-azure",children:[]}]}],u={toc:s};function l(e){var n=e.components,c=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Please note that this design doc is working-in-progress and need more works to complete. "))),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Submarine is built and run in Cloud Native, taking advantage of the cloud computing model."),Object(a.b)("p",null,"To give full play to the advantages of cloud computing.\nThese applications are characterized by rapid and frequent build, release, and deployment.\nCombined with the features of cloud computing, they are decoupled from the underlying hardware and operating system,\nand can easily meet the requirements of scalability, availability, and portability. And provide better economy."),Object(a.b)("p",null,"In the enterprise data center, submarine can support k8s/yarn/docker three resource scheduling systems;\nin the public cloud environment, submarine can support these cloud services in GCE/AWS/Azure;"),Object(a.b)("h2",{id:"requirement"},"Requirement"),Object(a.b)("h3",{id:"cloud-native-service"},"Cloud-Native Service"),Object(a.b)("p",null,"The submarine server is a long-running services in the daemon mode.\nThe submarine server is mainly used by algorithm engineers to provide online front-end functions such as algorithm development,\nalgorithm debugging, data processing, and workflow scheduling.\nAnd submarine server also mainly used for back-end functions such as scheduling and execution of jobs, tracking of job status, and so on."),Object(a.b)("p",null,"Through the ability of rolling upgrades, we can better provide system stability.\nFor example, we can upgrade or restart the workbench server without affecting the normal operation of submitted jobs."),Object(a.b)("p",null,"You can also make full use of system resources.\nFor example, when the number of current developers or job tasks increases,\nThe number of submarine server instances can be adjusted dynamically."),Object(a.b)("p",null,"In addition, submarine will provide each user with a completely independent workspace container.\nThis workspace container has already deployed the development tools and library files commonly used by algorithm engineers including their operating environment.\nAlgorithm engineers can work in our prepared workspaces without any extra work."),Object(a.b)("p",null,"Each user's workspace can also be run through a cloud service."),Object(a.b)("h3",{id:"service-discovery"},"Service discovery"),Object(a.b)("p",null,"With the cluster function of submarine, each service only needs to run in the container,\nand it will automatically register the service in the submarine cluster center.\nSubmarine cluster management will automatically maintain the relationship between service and service, service and user."),Object(a.b)("h2",{id:"design"},"Design"),Object(a.b)("p",null,Object(a.b)("img",{alt:"cloud-service",src:r(247).default})),Object(a.b)("h3",{id:"launcher"},"Launcher"),Object(a.b)("p",null,"The submarine launcher module defines the complete interface.\nBy using this interface, you can run the submarine server, and workspace in k8s / yarn / docker / AWS / GCE / Azure."),Object(a.b)("h3",{id:"launcher-on-docker"},"Launcher On Docker"),Object(a.b)("p",null,"In order to allow some small and medium-sized users without k8s/yarn to use submarine,\nwe support running the submarine system in docker mode."),Object(a.b)("p",null,"Users only need to provide several servers with docker runtime environment.\nThe submarine system can automatically cluster these servers into clusters, manage all the hardware resources of the cluster,\nand run the service or workspace container in this cluster through scheduling algorithms."),Object(a.b)("h3",{id:"launcher-on-kubernetes"},"Launcher On Kubernetes"),Object(a.b)("p",null,"submarine operator"),Object(a.b)("h3",{id:"launcher-on-yarn"},"Launcher On Yarn"),Object(a.b)("p",null,"[TODO]"),Object(a.b)("h3",{id:"launcher-on-aws"},"Launcher On AWS"),Object(a.b)("p",null,"[TODO]"),Object(a.b)("h3",{id:"launcher-on-gcp"},"Launcher On GCP"),Object(a.b)("p",null,"[TODO]"),Object(a.b)("h3",{id:"launcher-on-azure"},"Launcher On Azure"),Object(a.b)("p",null,"[TODO]"))}l.isMDXComponent=!0},205:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return h}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=t,h=d["".concat(c,".").concat(p)]||d[p]||b[p]||a;return r?i.a.createElement(h,o(o({ref:n},u),{},{components:r})):i.a.createElement(h,o({ref:n},u))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},247:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/multi-dc-cloud-420a103fad1e4af8a56287f083760d92.png"}}]);