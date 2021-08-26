(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(205)),o={title:"Submarine Local Deployment",slug:"/"},l={unversionedId:"gettingStarted/localDeployment",id:"gettingStarted/localDeployment",isDocsHomePage:!1,title:"Submarine Local Deployment",description:"\x3c!--",source:"@site/docs/gettingStarted/localDeployment.md",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/gettingStarted/localDeployment.md",version:"current"},c=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Deploy Kubernetes Cluster",id:"deploy-kubernetes-cluster",children:[]},{value:"Install Submarine on Kubernetes",id:"install-submarine-on-kubernetes",children:[]},{value:"Verify installation",id:"verify-installation",children:[]},{value:"Access Submarine in a Cluster",id:"access-submarine-in-a-cluster",children:[]},{value:"Open Workbench in the browser.",id:"open-workbench-in-the-browser",children:[]},{value:"Uninstall Submarine",id:"uninstall-submarine",children:[]}],s={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," (Helm v3 is minimum requirement.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),".")),Object(i.b)("h2",{id:"deploy-kubernetes-cluster"},"Deploy Kubernetes Cluster"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ minikube start --vm-driver=docker --cpus 8 --memory 4096 --disk-size=20G --kubernetes-version v1.15.11\n")),Object(i.b)("h2",{id:"install-submarine-on-kubernetes"},"Install Submarine on Kubernetes"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git clone https://github.com/apache/submarine.git\n$ cd submarine\n$ helm install submarine ./helm-charts/submarine\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"NAME: submarine\nLAST DEPLOYED: Fri Jan 29 05:35:36 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),Object(i.b)("h2",{id:"verify-installation"},"Verify installation"),Object(i.b)("p",null,"Once you got it installed, check with below commands and you should see similar outputs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"NAME                                              READY   STATUS    RESTARTS   AGE\nnotebook-controller-deployment-5db8b6cbf7-k65jm   1/1     Running   0          5s\npytorch-operator-7ff5d96d59-gx7f5                 1/1     Running   0          5s\nsubmarine-database-8d95d74f7-ntvqp                1/1     Running   0          5s\nsubmarine-server-b6cd4787b-7bvr7                  1/1     Running   0          5s\nsubmarine-traefik-9bb6f8577-66sx6                 1/1     Running   0          5s\ntf-job-operator-7844656dd-lfgmd                   1/1     Running   0          5s\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Note that if you encounter below issue when installation:"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Error: rendered manifests contain a resource that already exists.\nUnable to continue with install: existing resource conflict: namespace: , name: podgroups.scheduling.incubator.k8s.io, existing_kind: apiextensions.k8s.io/v1beta1, Kind=CustomResourceDefinition, new_kind: apiextensions.k8s.io/v1beta1, Kind=CustomResourceDefinition\n")),Object(i.b)("p",null,"It might be caused by the previous installed submarine charts. Fix it by running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl delete crd/tfjobs.kubeflow.org && kubectl delete crd/podgroups.scheduling.incubator.k8s.io && kubectl delete crd/pytorchjobs.kubeflow.org\n")),Object(i.b)("h2",{id:"access-submarine-in-a-cluster"},"Access Submarine in a Cluster"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# #Listen on port 32080 on all addresses, forwarding to 80 in the pod\n# Method1 -- using minikube ip + NodePort\n$ minikube ip  # you'll get the IP address of minikube, ex: 192.168.49.2\n\n# Method2 -- using port-forwarding\n$ kubectl port-forward --address 0.0.0.0 service/submarine-traefik 32080:80\n")),Object(i.b)("h2",{id:"open-workbench-in-the-browser"},"Open Workbench in the browser."),Object(i.b)("p",null,"Open http://{minikube ip}:32080(from Method1), ex: ",Object(i.b)("a",{parentName:"p",href:"http://192.168.49.2:32080"},"http://192.168.49.2:32080")),Object(i.b)("p",null,"or ",Object(i.b)("a",{parentName:"p",href:"http://127.0.0.1:32080"},"http://127.0.0.1:32080")," (from Method 2)."),Object(i.b)("p",null,"The default username and password is ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," and ",Object(i.b)("inlineCode",{parentName:"p"},"admin")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/DkZhyEG.png",alt:null})),Object(i.b)("h2",{id:"uninstall-submarine"},"Uninstall Submarine"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ helm delete submarine\n")))}b.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);