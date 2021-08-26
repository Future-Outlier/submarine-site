(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(205)),i={title:"Docker Images for MXNet"},l={unversionedId:"userDocs/yarn/WriteDockerfileMX",id:"userDocs/yarn/WriteDockerfileMX",isDocsHomePage:!1,title:"Docker Images for MXNet",description:"\x3c!--",source:"@site/docs/userDocs/yarn/WriteDockerfileMX.md",slug:"/userDocs/yarn/WriteDockerfileMX",permalink:"/docs/next/userDocs/yarn/WriteDockerfileMX",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/yarn/WriteDockerfileMX.md",version:"current"},c=[{value:"How to create docker images to run MXNet on YARN",id:"how-to-create-docker-images-to-run-mxnet-on-yarn",children:[]},{value:"Use examples to build your own MXNet docker images",id:"use-examples-to-build-your-own-mxnet-docker-images",children:[{value:"Manually build Docker image:",id:"manually-build-docker-image",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-create-docker-images-to-run-mxnet-on-yarn"},"How to create docker images to run MXNet on YARN"),Object(o.b)("p",null,"Dockerfile to run MXNet on YARN needs two parts:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Base libraries which MXNet depends on")),Object(o.b)("p",null,"1) OS base image, for example ",Object(o.b)("inlineCode",{parentName:"p"},"ubuntu:18.04")),Object(o.b)("p",null,"2) MXNet dependent libraries and packages. \\\nFor example ",Object(o.b)("inlineCode",{parentName:"p"},"python"),", ",Object(o.b)("inlineCode",{parentName:"p"},"scipy"),". For GPU support, you also need ",Object(o.b)("inlineCode",{parentName:"p"},"cuda"),", ",Object(o.b)("inlineCode",{parentName:"p"},"cudnn"),", etc."),Object(o.b)("p",null,"3) MXNet package."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Libraries to access HDFS")),Object(o.b)("p",null,"1) JDK"),Object(o.b)("p",null,"2) Hadoop"),Object(o.b)("p",null,"Here's an example of a base image (without GPU support) to install MXNet:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'FROM ubuntu:18.04\n\n# Install some development tools and packages\n# MXNet 1.6 is going to be the last MXNet release to support Python2\nRUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata git \\\n    wget zip python3 python3-pip python3-distutils libgomp1 libopenblas-dev libopencv-dev\n\n# Install latest MXNet using pip (without GPU support)\nRUN pip3 install mxnet\n\nRUN echo "Install python related packages" && \\\n    pip3 install --user graphviz==0.8.4 ipykernel jupyter matplotlib numpy pandas scipy sklearn  && \\\n    python3 -m ipykernel.kernelspec\n')),Object(o.b)("p",null,"On top of above image, add files, install packages to access HDFS"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64\nRUN apt-get update && apt-get install -y openjdk-8-jdk wget\n\n# Install hadoop\nENV HADOOP_VERSION="3.1.2"\nRUN wget https://archive.apache.org/dist/hadoop/common/hadoop-${HADOOP_VERSION}/hadoop-${HADOOP_VERSION}.tar.gz\n# If you are in mainland China, you can use the following command.\n# RUN wget http://mirrors.hust.edu.cn/apache/hadoop/common/hadoop-${HADOOP_VERSION}/hadoop-${HADOOP_VERSION}.tar.gz\n\nRUN tar zxf hadoop-${HADOOP_VERSION}.tar.gz\nRUN ln -s hadoop-${HADOOP_VERSION} hadoop-current\nRUN rm hadoop-${HADOOP_VERSION}.tar.gz\n')),Object(o.b)("p",null,"Build and push to your own docker registry: Use ",Object(o.b)("inlineCode",{parentName:"p"},"docker build ... ")," and ",Object(o.b)("inlineCode",{parentName:"p"},"docker push ...")," to finish this step."),Object(o.b)("h2",{id:"use-examples-to-build-your-own-mxnet-docker-images"},"Use examples to build your own MXNet docker images"),Object(o.b)("p",null,"We provided some example Dockerfiles for you to build your own MXNet docker images."),Object(o.b)("p",null,"For latest MXNet"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"docker/mxnet/base/ubuntu-18.04/Dockerfile.cpu.mxnet_latest"),": Latest MXNet that supports CPU"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"docker/mxnet/base/ubuntu-18.04/Dockerfile.gpu.mxnet_latest"),": Latest MXNet that supports GPU, which is prebuilt to CUDA10.")),Object(o.b)("h1",{id:"build-docker-images"},"Build Docker images"),Object(o.b)("h3",{id:"manually-build-docker-image"},"Manually build Docker image:"),Object(o.b)("p",null,"Under ",Object(o.b)("inlineCode",{parentName:"p"},"docker/mxnet")," directory, run ",Object(o.b)("inlineCode",{parentName:"p"},"build-all.sh")," to build all Docker images. This command will build the following Docker images:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mxnet-latest-cpu-base:0.0.1")," for base Docker image which includes Hadoop, MXNet"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mxnet-latest-gpu-base:0.0.1")," for base Docker image which includes Hadoop, MXNet, GPU base libraries.")))}u.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);