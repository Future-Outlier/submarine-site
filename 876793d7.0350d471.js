(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return m}));var r=t(3),i=t(7),o=(t(0),t(205)),a={title:"Environments Implementation"},l={unversionedId:"designDocs/environments-implementation",id:"version-0.6.0/designDocs/environments-implementation",isDocsHomePage:!1,title:"Environments Implementation",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/designDocs/environments-implementation.md",slug:"/designDocs/environments-implementation",permalink:"/docs/designDocs/environments-implementation",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/designDocs/environments-implementation.md",version:"0.6.0",sidebar:"docs",previous:{title:"Implementation Notes",permalink:"/docs/designDocs/implementation-notes"},next:{title:"Experiment Implementation",permalink:"/docs/designDocs/experiment-implementation"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Environment API definition",id:"environment-api-definition",children:[]},{value:"VM-image and Docker-image",id:"vm-image-and-docker-image",children:[]},{value:"Kernel Implementation",id:"kernel-implementation",children:[]},{value:"Storage of Environment",id:"storage-of-environment",children:[]},{value:"How to implement to make user can easily use Submarine environments?",id:"how-to-implement-to-make-user-can-easily-use-submarine-environments",children:[]}],c={toc:s};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Environment profiles (or environment for short) defines a set of libraries and when Docker is being used, a Docker image in order to run an experiment or a notebook. "),Object(o.b)("p",null,"Docker and/or VM-image (such as, VirtualBox/VMWare images, Amazon Machine Images - AMI, Or custom image of Azure VM) defines the base layer of the environment. Please note that VM-image is different from VM instance type,"),Object(o.b)("p",null,"On top of that, users can define a set of libraries (such as Python/R) to install, we call it kernel."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example of Environment")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\n     +-------------------+\n     |+-----------------+|\n     || Python=3.7      ||\n     || Tensorflow=2.0  ||\n     |+---Exp Dependency+|\n     |+-----------------+|\n     ||OS=Ubuntu16.04   ||\n     ||CUDA=10.2        ||\n     ||GPU_Driver=375.. ||\n     |+---Base Library--+|\n     +-------------------+\n")),Object(o.b)("p",null,"As you can see, There're base libraries, such as what OS, CUDA version, GPU driver, etc. They can be achieved by specifying a VM-image / Docker image."),Object(o.b)("p",null,"On top of that, user can bring their dependencies, such as different version of Python, Tensorflow, Pandas, etc."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How users use environment?")),Object(o.b)("p",null,"Users can save different environment configs which can be also shared across the platform. Environment profiles can be used to run a notebook (e.g. by choosing different kernel from Jupyter), or an experiment. Predefined experiment library includes what environment to use so users don't have to choose which environment to use."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\n        +-------------------+\n        |+-----------------+|       +------------+\n        || Python=3.7      ||       |User1       |\n        || Tensorflow=2.0  ||       +------------+\n        |+---Kernel -------+|       +------------+\n        |+-----------------+|<----+ |User2       |\n        ||OS=Ubuntu16.04   ||     + +------------+\n        ||CUDA=10.2        ||     | +------------+\n        ||GPU_Driver=375.. ||     | |User3       |\n        |+---Base Library--+|     | +------------+\n        +-----Default-Env---+     |\n                                  |\n                                  |\n        +-------------------+     |\n        |+-----------------+|     |\n        || Python=3.3      ||     |\n        || Tensorflow=2.0  ||     |\n        |+---kernel--------+|     |\n        |+-----------------+|     |\n        ||OS=Ubuntu16.04   ||     |\n        ||CUDA=10.3        ||<----+\n        ||GPU_Driver=375.. ||\n        |+---Base Library--+|\n        +-----My-Customized-+\n")),Object(o.b)("p",null,'There\'re two environments in the above graph, "Default-Env" and "My-Customized", which can have different combinations of libraries for different experiments/notebooks. Users can choose different environments for different experiments as they want.'),Object(o.b)("p",null,"Environments can be added/listed/deleted/selected through CLI/SDK/UI."),Object(o.b)("h1",{id:"implementation"},"Implementation"),Object(o.b)("h2",{id:"environment-api-definition"},"Environment API definition"),Object(o.b)("p",null,"Let look at what object definition looks like to define an environment, API of environment looks like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'    name: "my_submarine_env",\n    vm-image: "...",\n    docker-image: "...", \n    kernel: \n       <object of kernel>\n    description: "this is the most common env used by team ABC"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vm-image")," is optional if we don't need to launch new VM (like running a training job in a cloud-remote machine). "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docker-image")," is required"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"kernel")," could be optional if kernel is already included by vm-image or docker-image."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," of the environment should be unique in the system, so user can reference it when create a new experiment/notebook.")),Object(o.b)("h2",{id:"vm-image-and-docker-image"},"VM-image and Docker-image"),Object(o.b)("p",null,'Docker-image and VM image should be prepared by system admin / SREs, it is hard for Data-Scientists to write an error-proof Dockerfile, and push/manage Docker images. This is one of the reason we hide Docker-image inside "environment", we will encourage users to customize their kernels if needed, but don\'t have to touch Dockerfile and build/push/manage new Docker images.'),Object(o.b)("p",null,"As a project, we will document what's the best practice and example of Dockerfiles. "),Object(o.b)("p",null,"Dockerfile should include proper ",Object(o.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," definition which pointed to our default script, so no matter it is notebook, or an experiment, we will setup kernel (see below) and other environment variables properly."),Object(o.b)("h2",{id:"kernel-implementation"},"Kernel Implementation"),Object(o.b)("p",null,"After investigating different alternatives (such as pipenv, venv, etc.), we decided to use Conda environment which nicely replaces Python virtual env, pip, and can also support other languages. More details can be found at: ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/@krishnaregmi/pipenv-vs-virtualenv-vs-conda-environment-3dde3f6869ed"},"https://medium.com/@krishnaregmi/pipenv-vs-virtualenv-vs-conda-environment-3dde3f6869ed")),Object(o.b)("p",null,"When once Conda, users can easily add, remove dependency of a Conda environment. User can also easily export environment to yaml file."),Object(o.b)("p",null,"The yaml file of Conda environment by using ",Object(o.b)("inlineCode",{parentName:"p"},"conda env export")," looks like: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"name: base\nchannels:\n  - defaults\ndependencies:\n  - _ipyw_jlab_nb_ext_conf=0.1.0=py37_0\n  - alabaster=0.7.12=py37_0\n  - anaconda=2020.02=py37_0\n  - anaconda-client=1.7.2=py37_0\n  - anaconda-navigator=1.9.12=py37_0\n  - anaconda-project=0.8.4=py_0\n  - applaunchservices=0.2.1=py_0\n")),Object(o.b)("p",null,"Including Conda kernel, the environment object may look like: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'name: "my_submarine_env",\n    vm-image: "...",\n    docker-image: "...", \n    kernel: \n      name: team_default_python_3.7\n      channels:\n        - defaults\n      dependencies:\n        - _ipyw_jlab_nb_ext_conf=0.1.0=py37_0\n        - alabaster=0.7.12=py37_0\n        - anaconda=2020.02=py37_0\n        - anaconda-client=1.7.2=py37_0\n        - anaconda-navigator=1.9.12=py37_0\n')),Object(o.b)("p",null,"When launch a new experiment / notebook session using the ",Object(o.b)("inlineCode",{parentName:"p"},"my_submarine_env"),", submarine server will use defined Docker image, and Conda kernel to launch of container. "),Object(o.b)("h2",{id:"storage-of-environment"},"Storage of Environment"),Object(o.b)("p",null,"Environment of Submarine is just a simple text file, so it will be persisted in Submarine metastore, which is ideally a Database. "),Object(o.b)("p",null,"Docker image is stored inside a regular Docker registry, which will be handled outside of the system. "),Object(o.b)("p",null,"Conda dependencies are stored in Conda channel (where referenced packages are stored), which will be handled/setuped separately. (Popular conda channels are ",Object(o.b)("inlineCode",{parentName:"p"},"default")," and ",Object(o.b)("inlineCode",{parentName:"p"},"conda-forge"),")"),Object(o.b)("p",null,"For more detailed discussion about storage-related implementations, please refer to ",Object(o.b)("a",{parentName:"p",href:"./storage-implementation"},"storage-implementation"),"."),Object(o.b)("h2",{id:"how-to-implement-to-make-user-can-easily-use-submarine-environments"},"How to implement to make user can easily use Submarine environments?"),Object(o.b)("p",null,"We like simplicities, and we don't want to leak complexities of implementations to the users. To make it happen, we have to do some works to hide complexities. "),Object(o.b)("p",null,"There're two primary uses of environments: experiments and notebook, for both of them, users should not do works like explictily call ",Object(o.b)("inlineCode",{parentName:"p"},"conda active $env_name")," to active environments. To make it happen, what we can do is to include following parts in Dockerfile "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'FROM ubuntu:18.04\n\n<Include whatever base-libraries like CUDA, etc.>\n\n<Make sure conda (with our preferred version) is installed>\n<Make sure Jupyter (with our preferred version) is installed>\n\n# This is just a sample of Dockerfile, users can do more customizations if needed\nENTRYPOINT ["/submarine-bootstrap.sh"]\n')),Object(o.b)("p",null,"When Submarine Server (this is implementation detail of Submarine Server, user will not see it at all) launch an experiment, or notebook, it will invoke following ",Object(o.b)("inlineCode",{parentName:"p"},"docker run")," command (or any other equvilant like using K8s spec): "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run <submarine_docker_image> --kernel <kernel_name> -- .... python train.py --batch_size 5 (and other parameters)\n")),Object(o.b)("p",null,"Similarily, to launch a notebook: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run <submarine_docker_image> --kernel <kernel_name> -- .... jupyter\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"submarine-bootstrap.sh")," is part of Submarine repo, and will handle ",Object(o.b)("inlineCode",{parentName:"p"},"--kernel")," argument which will invoke  ",Object(o.b)("inlineCode",{parentName:"p"},"conda active $kernel_name")," before anything else. (Like run the training job)."))}m.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),m=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),b=r,u=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return t?i.a.createElement(u,l(l({ref:n},c),{},{components:t})):i.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);