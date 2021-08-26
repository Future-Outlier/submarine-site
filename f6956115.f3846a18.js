(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),p=(n(0),n(205)),i={title:"Experiment Template REST API"},l={unversionedId:"api/experiment-template",id:"version-0.6.0/api/experiment-template",isDocsHomePage:!1,title:"Experiment Template REST API",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/api/experiment-template.md",slug:"/api/experiment-template",permalink:"/docs/api/experiment-template",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/api/experiment-template.md",version:"0.6.0",sidebar:"api",previous:{title:"Experiment REST API",permalink:"/docs/api/experiment"},next:{title:"Notebook REST API",permalink:"/docs/api/notebook"}},m=[{value:"Create experiment template",id:"create-experiment-template",children:[{value:"List experiment template",id:"list-experiment-template",children:[]},{value:"Get experiment template",id:"get-experiment-template",children:[]},{value:"Patch template",id:"patch-template",children:[]},{value:"Delete template",id:"delete-template",children:[]},{value:"Use template to create a experiment",id:"use-template-to-create-a-experiment",children:[]}]}],c={toc:m};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Note: The Experiment API is in the alpha stage which is subjected to incompatible changes in\nfuture releases.")),Object(p.b)("p",null,'Developers can register a parameterized experiment as an experiment template,\nFor example, if the developer wants to change the following "--learning_rate=0.1" to parameters.'),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'"experimentSpec": {\n  "meta": {\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.1 --batch_size=150"\n  }, \n  "...": "..."\n}\n')),Object(p.b)("p",null,"They can use two curly braces as placeholders, the template format will be as"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'"experimentSpec": {\n  "meta": {\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate={{learning_rate}} --batch_size=150"\n  }, \n  "...": "..."\n}\n')),Object(p.b)("p",null,"The template parameters format will be as"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "learning_rate",\n  "value": 0.1,\n  "required": true,\n  "description": "This is learning_rate of training."\n}\n')),Object(p.b)("p",null,"name: placeholder name\nvalue; default value\nrequired: Indicates whether the user must enter parameters, when required is true, value can be null\ndescription: Introduction of this parameter"),Object(p.b)("p",null,"Users can use existing experiment templates and adjust the default value to create experiments.\nAfter the user submits the experiment template, the submarine server finds the corresponding template based on the name. And the template handler converts input parameters to an actual experiment, such as a distributed TF experiment."),Object(p.b)("p",null,'The "replicas", "cpu", "memory" of resources will be automatically parameterized, so developers do not need to add them.\nFor example, if there are "Ps" and "Worker" under spec, the following parameters will be automatically appended.'),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"spec.Ps.replicas\nspec.Ps.resourceMap.cpu\nspec.Ps.resourceMap.memory\nspec.Worker.replicas\nspec.Worker.resourceMap.cpu\nspec.Worker.resourceMap.memory\n")),Object(p.b)("h2",{id:"create-experiment-template"},"Create experiment template"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"POST /api/v1/template")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example Request")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "name": "my-tf-mnist-template",\n  "author": "author",\n  "description": "This is a template to run tf-mnist",\n  "parameters": [{\n      "name": "learning_rate",\n      "value": 0.1,\n      "required": true,\n      "description": "This is learning_rate of training."\n    },\n    {\n      "name": "batch_size",\n      "value": 150,\n      "required": true,\n      "description": "This is batch_size of training."\n    },\n    {\n      "name": "experiment_name",\n      "value": "tf-mnist1",\n      "required": true,\n      "description": "the name of experiment."\n    }\n  ],\n  "experimentSpec": {\n    "meta": {\n      "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate={{learning_rate}} --batch_size={{batch_size}}",\n      "name": "{{experiment_name}}",\n      "envVars": {\n        "ENV1": "ENV1"\n      },\n      "framework": "TensorFlow",\n      "namespace": "default"\n    },\n    "spec": {\n      "Ps": {\n        "replicas": 1,\n        "resources": "cpu=1,memory=1024M"\n      },\n      "Worker": {\n        "replicas": 1,\n        "resources": "cpu=1,memory=1024M"\n      }\n    },\n    "environment": {\n      "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/template\n')),Object(p.b)("h3",{id:"list-experiment-template"},"List experiment template"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"GET /api/v1/template")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example Request:")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/template\n")),Object(p.b)("h3",{id:"get-experiment-template"},"Get experiment template"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"GET /api/v1/template/{name}")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example Request:")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/template/my-tf-mnist-template\n")),Object(p.b)("h3",{id:"patch-template"},"Patch template"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"PATCH /api/v1/template/{name}")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n  "name": "my-tf-mnist-template",\n  "author": "author-new",\n  "description": "This is a template to run tf-mnist",\n  "parameters": [{\n      "name": "learning_rate",\n      "value": 0.1,\n      "required": true,\n      "description": "This is learning_rate of training."\n    },\n    {\n      "name": "batch_size",\n      "value": 150,\n      "required": true,\n      "description": "This is batch_size of training."\n    },\n    {\n      "name": "experiment_name",\n      "value": "tf-mnist1",\n      "required": true,\n      "description": "the name of experiment."\n    }\n  ],\n  "experimentSpec": {\n    "meta": {\n      "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate={{learning_rate}} --batch_size={{batch_size}}",\n      "name": "{{experiment_name}}",\n      "envVars": {\n        "ENV1": "ENV1"\n      },\n      "framework": "TensorFlow",\n      "namespace": "default"\n    },\n    "spec": {\n      "Ps": {\n        "replicas": 1,\n        "resources": "cpu=1,memory=1024M"\n      },\n      "Worker": {\n        "replicas": 1,\n        "resources": "cpu=1,memory=1024M"\n      }\n    },\n    "environment": {\n      "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/template/my-tf-mnist-template\n')),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},'"description", "parameters", "experimentSpec", "author" etc can be updated using this API.\n"name" of experiment template is not supported.')),Object(p.b)("h3",{id:"delete-template"},"Delete template"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"GET /api/v1/template/{name}")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example Request:")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/template/my-tf-mnist-template\n")),Object(p.b)("h3",{id:"use-template-to-create-a-experiment"},"Use template to create a experiment"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"POST /api/v1/experiment/{template_name}")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example Request:")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n    "name": "tf-mnist",\n    "params": {\n        "learning_rate":"0.01",\n        "batch_size":"150",\n        "experiment_name":"newexperiment1"\n    }\n}\n\' http://127.0.0.1:32080/api/v1/experiment/my-tf-mnist-template\n')))}s.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),o=s(n),b=a,d=o["".concat(i,".").concat(b)]||o[b]||u[b]||p;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=b;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);