"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2735],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?o.createElement(k,u(u({ref:t},c),{},{components:n})):o.createElement(k,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2228:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),u=["components"],i={},p=void 0,s={unversionedId:"adminDocs/yarn/workbench/notebook/setup-jupyter",id:"version-0.6.0/adminDocs/yarn/workbench/notebook/setup-jupyter",title:"setup-jupyter",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/adminDocs/yarn/workbench/notebook/setup-jupyter.md",sourceDirName:"adminDocs/yarn/workbench/notebook",slug:"/adminDocs/yarn/workbench/notebook/setup-jupyter",permalink:"/docs/0.6.0/adminDocs/yarn/workbench/notebook/setup-jupyter",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/adminDocs/yarn/workbench/notebook/setup-jupyter.md",tags:[],version:"0.6.0",frontMatter:{}},c={},l=[{value:"Experiment environment",id:"experiment-environment",level:2},{value:"Setup Kubernetes",id:"setup-kubernetes",level:3},{value:"Deploy Jupyter Notebook",id:"deploy-jupyter-notebook",level:3}],d={toc:l};function m(e){var t=e.components,i=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-jupyter-notebook-on-kubernetes"},"Deploy Jupyter Notebook on Kubernetes"),(0,a.kt)("p",null,"This guide covers the deployment Jupyter Notebook on kubernetes cluster."),(0,a.kt)("h2",{id:"experiment-environment"},"Experiment environment"),(0,a.kt)("h3",{id:"setup-kubernetes"},"Setup Kubernetes"),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," to setup a Kubernetes cluster on a local machine."),(0,a.kt)("p",null,"You can use Extra mounts to mount your host path to kind node and use Extra port mappings to port\nforward to the kind nodes. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/configuration/#extra-mounts"},"kind configuration"),"\nfor more details."),(0,a.kt)("p",null,"You need to create a kind config file. The following is an example :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  extraMounts:\n  # add a mount from /path/to/my/files on the host to /files on the node\n  - hostPath: /tmp/submarine\n    containerPath: /tmp/submarine\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  # exposing additional ports to be used for NodePort services\n  - containerPort: 30070\n    hostPort: 8888\n    protocol: TCP\n")),(0,a.kt)("p",null,"Running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kind create cluster --image kindest/node:v1.15.6 --config <path-to-kind-config> --name k8s-submarine\nkubectl create namespace submarine\n")),(0,a.kt)("h3",{id:"deploy-jupyter-notebook"},"Deploy Jupyter Notebook"),(0,a.kt)("p",null,"Once you have a running Kubernetes cluster, you can write a YAML file to deploy a jupyter notebook.\nIn this ",(0,a.kt)("a",{target:"_blank",href:n(5342).Z},"example yaml"),", we use ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/jupyter/minimal-notebook/"},"jupyter/minimal-notebook"),"\nto make a single notebook running on the kind node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f jupyter.yaml --namespace submarine\n")),(0,a.kt)("p",null,"Once jupyter notebook is running, you can access the notebook server from the browser using http://localhost:8888 on local machine."),(0,a.kt)("p",null,"You can enter and store a password for your notebook server with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl exec -it <jupyter-pod-name> -- jupyter notebook password\n")),(0,a.kt)("p",null,"After restarting the notebook server,  you can login jupyter notebook with your new password."),(0,a.kt)("p",null,"If you want to use JupyterLab :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:8888/lab\n")))}m.isMDXComponent=!0},5342:function(e,t,n){t.Z=n.p+"assets/files/jupyter-b412bca5cd2199cfea640f5453431d9d.yaml"}}]);