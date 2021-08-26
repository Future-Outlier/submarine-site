(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(205)),c={title:"Setup a Kubernetes cluster using KinD"},i={unversionedId:"gettingStarted/kind",id:"gettingStarted/kind",isDocsHomePage:!1,title:"Setup a Kubernetes cluster using KinD",description:"\x3c!--",source:"@site/docs/gettingStarted/kind.md",slug:"/gettingStarted/kind",permalink:"/docs/next/gettingStarted/kind",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/gettingStarted/kind.md",version:"current"},s=[{value:"Create Kubernetes cluster with KinD",id:"create-kubernetes-cluster-with-kind",children:[]},{value:"Kubernetes Dashboard (optional)",id:"kubernetes-dashboard-optional",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Create RBAC",id:"create-rbac",children:[]},{value:"Get access token (optional)",id:"get-access-token-optional",children:[]},{value:"Start dashboard service",id:"start-dashboard-service",children:[]}]}],d={toc:s};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-kubernetes-cluster-with-kind"},"Create Kubernetes cluster with KinD"),Object(o.b)("p",null,"We recommend users developing Submarine with minikube. However, ",Object(o.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},Object(o.b)("inlineCode",{parentName:"a"},"KinD"))," is also an option to setup a Kubernetes cluster on your local machine."),Object(o.b)("p",null,"Run the following command, and specify the KinD version and Kubernetes version ",Object(o.b)("a",{parentName:"p",href:"../devDocs/Dependencies"},Object(o.b)("inlineCode",{parentName:"a"},"here")),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Download the specific version of KinD (must >= v0.6.0)\nexport KIND_VERSION=v0.11.1\ncurl -Lo ./kind https://github.com/kubernetes-sigs/kind/releases/download/${KIND_VERSION}/kind-linux-amd64\n# Make the binary executable\nchmod +x ./kind\n# Move the binary to your executable path\nsudo mv ./kind /usr/local/bin/\n# Create cluster with specific version of kubernetes\nexport KUBE_VERSION=v1.15.12\nkind create cluster --image kindest/node:${KUBE_VERSION}\n")),Object(o.b)("h2",{id:"kubernetes-dashboard-optional"},"Kubernetes Dashboard (optional)"),Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"To deploy Dashboard, execute the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml\n")),Object(o.b)("h3",{id:"create-rbac"},"Create RBAC"),Object(o.b)("p",null,"Run the following commands to grant the cluster access permission of dashboard:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl create serviceaccount dashboard-admin-sa\nkubectl create clusterrolebinding dashboard-admin-sa --clusterrole=cluster-admin --serviceaccount=default:dashboard-admin-sa\n")),Object(o.b)("h3",{id:"get-access-token-optional"},"Get access token (optional)"),Object(o.b)("p",null,"If you want to use the token to login the dashboard, run the following commands to get key:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl get secrets\n# select the right dashboard-admin-sa-token to describe the secret\nkubectl describe secret dashboard-admin-sa-token-6nhkx\n")),Object(o.b)("h3",{id:"start-dashboard-service"},"Start dashboard service"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl proxy\n")),Object(o.b)("p",null,"Now access Dashboard at:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/")),Object(o.b)("p",null,"Dashboard screenshot:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(233).default})))}l.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,h=b["".concat(c,".").concat(p)]||b[p]||u[p]||o;return n?a.a.createElement(h,i(i({ref:t},d),{},{components:n})):a.a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},233:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/kind-dashboard-96b734dca17dd1d6043efad54f4c4725.png"}}]);