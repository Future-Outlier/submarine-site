(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(145)),b={title:"Development Guide"},o={unversionedId:"devDocs/Development",id:"devDocs/Development",isDocsHomePage:!1,title:"Development Guide",description:"\x3c!--",source:"@site/docs/devDocs/Development.md",slug:"/devDocs/Development",permalink:"/docs/devDocs/Development",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/Development.md",version:"current",sidebar:"docs",previous:{title:"How to Build Submarine",permalink:"/docs/devDocs/BuildFromCode"},next:{title:"How to Run Integration Test",permalink:"/docs/devDocs/IntegrationTest"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Video",id:"video",children:[]},{value:"Develop server",id:"develop-server",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setting up checkstyle in IDE",id:"setting-up-checkstyle-in-ide",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Build from source",id:"build-from-source",children:[]}]},{value:"Develop workbench",id:"develop-workbench",children:[]},{value:"Develop database",id:"develop-database",children:[]},{value:"Develop operator",id:"develop-operator",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"From ",Object(i.b)("a",{parentName:"p",href:"/docs/"},"Getting Started/Submarine Local Deployment"),", you already know that Submarine is installed and uninstalled by Helm. As you can see by ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl get pods"),", there are nine major components in Submarine, including ",Object(i.b)("inlineCode",{parentName:"p"},"notebook-controller"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pytorch-operator"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-database"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-minio"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-mlflow"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-server"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-tensorboard"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-traefik"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"tf-job-operator"),". They are launched as pods in kubernetes from the corresponding docker images."),Object(i.b)("p",null,"Some of the components are borrowed from other projects (kubeflow, traefik), including ",Object(i.b)("inlineCode",{parentName:"p"},"notebook-controller"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pytorch-operator"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-traefik")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tf-job-operator"),". The rest of them are built by ourselves, including ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-database"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-minio"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-mlflow"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-tensorboard"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-server"),"."),Object(i.b)("p",null,"The purpose of the components are as the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"tf-job-operator"),": manage the operation of tensorflow jobs")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"pytorch-operator"),": manage the operation of pytorch jobs")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"notebook-controller"),": manage the operation of notebook instances")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"submarine-traefik"),": manage the ingress service")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"submarine-database"),": store metadata in mysql database")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"submarine-minio"),": store machine learning artifacts in minio object storage")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"submarine-mlflow"),": platform for managing the end-to-end machine learning lifecycle")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"submarine-tensorboard"),": tool for providing the measurements and visualizations during ml workflow.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"submarine-server"),": handle api request, submit job to container orchestration, and connect with database."))),Object(i.b)("p",null,"In this document, we focus on ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-server")," and ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-database"),". You can learn how to develop server, database, and workbench here."),Object(i.b)("h2",{id:"video"},"Video"),Object(i.b)("p",null,"From ",Object(i.b)("a",{parentName:"p",href:"https://youtu.be/32Na2k6Alv4"},"This Video"),", you will know how to deal with the configuration of Submarine and be able to contribute to it via Github."),Object(i.b)("h2",{id:"develop-server"},"Develop server"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JDK 1.8"),Object(i.b)("li",{parentName:"ul"},"Maven 3.3 or later ( < 3.8.1 )"),Object(i.b)("li",{parentName:"ul"},"Docker")),Object(i.b)("h3",{id:"setting-up-checkstyle-in-ide"},"Setting up checkstyle in IDE"),Object(i.b)("p",null,"Checkstyle plugin may help to detect violations directly from the IDE."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install Checkstyle+IDEA plugin from Preference -> Plugins"),Object(i.b)("li",{parentName:"ol"},"Open Preference -> Tools -> Checkstyle ->",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Set Checkstyle version:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Checkstyle version: 8.0"))),Object(i.b)("li",{parentName:"ol"},"Add (+) a new Configuration File",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Description: Submarine"),Object(i.b)("li",{parentName:"ul"},"Use a local checkstyle ${SUBMARINE_HOME}/dev-support/maven-config/checkstyle.xml"))))),Object(i.b)("li",{parentName:"ol"},"Open the Checkstyle Tool Window, select the Submarine rule and execute the check")),Object(i.b)("h3",{id:"testing"},"Testing"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Unit Test"),Object(i.b)("p",{parentName:"li"},"For each class, there is a corresponding testClass. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"SubmarineServerTest")," is used for testing ",Object(i.b)("inlineCode",{parentName:"p"},"SubmarineServer"),". Whenever you add a funtion in classes, you must write a unit test to test it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Integration Test"),Object(i.b)("p",{parentName:"li"},"See ",Object(i.b)("a",{parentName:"p",href:"/docs/devDocs/IntegrationTest"},"IntegrationTest.md")))),Object(i.b)("h3",{id:"build-from-source"},"Build from source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Before building"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"We assume the developer use ",Object(i.b)("strong",{parentName:"li"},"minikube")," as a local kubernetes cluster."),Object(i.b)("li",{parentName:"ol"},"Make sure you have ",Object(i.b)("strong",{parentName:"li"},"installed the submarine helm-chart")," in the cluster.")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Package the Submarine server into a new jar file"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mvn package -DskipTests\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build the new server docker image in minikube"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# switch to minikube docker daemon to build image directly in minikube\neval $(minikube docker-env)\n\n# run docker build\n./dev-support/docker-images/submarine/build.sh\n\n# exit minikube docker daemon\neval $(minikube docker-env -u)\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update server pod"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --set submarine.server.dev=true submarine ./helm-charts/submarine\n")),Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("inlineCode",{parentName:"p"},"submarine.server.dev")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", enabling the server pod to be launched with the new docker image."))),Object(i.b)("h2",{id:"develop-workbench"},"Develop workbench"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Deploy the Submarine"),Object(i.b)("p",{parentName:"li"},"Follow ",Object(i.b)("a",{parentName:"p",href:"/docs/"},"Getting Started/Submarine Local Deployment"),", and make sure you can connect to ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:32080")," in the browser.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the dependencies"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd submarine-workbench/workbench-web\nnpm install\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the workbench based on proxy server"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"The request sent to ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:4200")," will be redirected to ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:32080"),"."),Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:4200")," in browser to see the real-time change of workbench.")))),Object(i.b)("h2",{id:"develop-database"},"Develop database"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build the docker image"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# switch to minikube docker daemon to build image directly in minikube\neval $(minikube docker-env)\n\n# run docker build\n./dev-support/docker-images/database/build.sh\n\n# exit minikube docker daemon\neval $(minikube docker-env -u)\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Deploy new pods in the cluster"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --set submarine.database.dev=true submarine ./helm-charts/submarine\n")))),Object(i.b)("h2",{id:"develop-operator"},"Develop operator"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Before building"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"We assume the developer use ",Object(i.b)("strong",{parentName:"li"},"minikube")," as a local kubernetes cluster."),Object(i.b)("li",{parentName:"ol"},"Make sure you have ",Object(i.b)("strong",{parentName:"li"},"NOT")," installed the submarine helm-chart in the cluster.")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start the minikube cluster"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"minikube start --vm-driver=docker --kubernetes-version v1.15.11\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the dependencies"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd submarine-cloud-v2/\ngo mod vendor\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the operator out-of-cluster"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make\n./submarine-operator\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Deploy a Submarine"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f artifacts/examples/crd.yaml\nkubectl create ns submarine-user-test\nkubectl apply -n submarine-user-test -f artifacts/examples/example-submarine.yaml\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Exposing service"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# Method1 -- use minikube ip\nminikube ip  # you'll get the IP address of minikube, ex: 192.168.49.2\n\n# Method2 -- use port-forwarding\nkubectl port-forward --address 0.0.0.0 -n submarine-user-test service/traefik 32080:80\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"View workbench"),Object(i.b)("p",{parentName:"li"},"If you use method 1 in step 5, please go to ",Object(i.b)("inlineCode",{parentName:"p"},"http://{minikube ip}:32080"),", ex: ",Object(i.b)("a",{parentName:"p",href:"http://192.168.49.2:32080"},"http://192.168.49.2:32080")),Object(i.b)("p",{parentName:"li"},"If you use method 2 in step 5, please go to ",Object(i.b)("a",{parentName:"p",href:"http://127.0.0.1:32080"},"http://127.0.0.1:32080"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Delete submarine"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete submarine example-submarine -n submarine-user-test\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Stop the operator"),Object(i.b)("p",{parentName:"li"},"Press ctrl+c to stop the operator."))),Object(i.b)("p",null,"For other details, please check out the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/README.md"},"README")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/docs/developer-guide.md"},"Developer Guide")," on GitHub."))}p.isMDXComponent=!0},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(b,".").concat(u)]||m[u]||s[u]||i;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var c=2;c<i;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);