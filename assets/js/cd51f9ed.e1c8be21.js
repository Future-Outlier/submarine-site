"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3731],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4844:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],p={title:"Notebook REST API"},i=void 0,s={unversionedId:"userDocs/api/notebook",id:"version-0.6.0/userDocs/api/notebook",title:"Notebook REST API",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/api/notebook.md",sourceDirName:"userDocs/api",slug:"/userDocs/api/notebook",permalink:"/docs/0.6.0/userDocs/api/notebook",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/api/notebook.md",tags:[],version:"0.6.0",frontMatter:{title:"Notebook REST API"},sidebar:"docs",previous:{title:"Experiment Template REST API",permalink:"/docs/0.6.0/userDocs/api/experiment-template"},next:{title:"Experiment Client",permalink:"/docs/0.6.0/userDocs/submarine-sdk/experiment-client"}},d={},m=[{value:"Create a Notebook Instance",id:"create-a-notebook-instance",level:2},{value:"Parameters",id:"parameters",level:3},{value:"<strong>NotebookSpec</strong>",id:"notebookspec",level:4},{value:"<strong>NotebookMeta</strong>",id:"notebookmeta",level:4},{value:"<strong>EnvironmentSpec</strong>",id:"environmentspec",level:4},{value:"<strong>NotebookPodSpec</strong>",id:"notebookpodspec",level:4},{value:"Code Example",id:"code-example",level:3},{value:"List notebook instances which belong to user",id:"list-notebook-instances-which-belong-to-user",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Get the notebook instance",id:"get-the-notebook-instance",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Delete the notebook instance",id:"delete-the-notebook-instance",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Code Example",id:"code-example-3",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-notebook-instance"},"Create a Notebook Instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /api/v1/notebook\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"NotebookSpec in request body."),(0,o.kt)("h4",{id:"notebookspec"},(0,o.kt)("strong",{parentName:"h4"},"NotebookSpec")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"meta"),(0,o.kt)("td",{parentName:"tr",align:null},"NotebookMeta"),(0,o.kt)("td",{parentName:"tr",align:null},"Meta data of the notebook.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"environment"),(0,o.kt)("td",{parentName:"tr",align:null},"EnvironmentSpec"),(0,o.kt)("td",{parentName:"tr",align:null},"Environment of the experiment template.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"spec"),(0,o.kt)("td",{parentName:"tr",align:null},"NotebookPodSpec"),(0,o.kt)("td",{parentName:"tr",align:null},"Spec of the notebook pods.")))),(0,o.kt)("h4",{id:"notebookmeta"},(0,o.kt)("strong",{parentName:"h4"},"NotebookMeta")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Notebook name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Notebook namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ownerId"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"User id.")))),(0,o.kt)("h4",{id:"environmentspec"},(0,o.kt)("strong",{parentName:"h4"},"EnvironmentSpec")),(0,o.kt)("p",null,"See more details in ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.6.0/userDocs/api/environment"},"environment api"),"."),(0,o.kt)("h4",{id:"notebookpodspec"},(0,o.kt)("strong",{parentName:"h4"},"NotebookPodSpec")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"envVars"),(0,o.kt)("td",{parentName:"tr",align:null},"Map<String, String",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Environmental variables.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resources"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Resourecs of the pod.")))),(0,o.kt)("h3",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "test-nb",\n    "namespace": "default",\n    "ownerId": "e9ca23d68d884d4ebb19d07889727dae"\n  },\n  "environment": {\n    "name": "notebook-env"\n  },\n  "spec": {\n    "envVars": {\n      "TEST_ENV": "test"\n    },\n    "resources": "cpu=1,memory=1.0Gi"\n  }\n}\n\' http://127.0.0.1:32080/api/v1/notebook\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Create a notebook instance",\n  "result":{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"creating",\n    "reason":"The notebook instance is creating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.6.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')),(0,o.kt)("h2",{id:"list-notebook-instances-which-belong-to-user"},"List notebook instances which belong to user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/v1/notebook\n")),(0,o.kt)("h3",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"In"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"User id.")))),(0,o.kt)("h3",{id:"code-example-1"},"Code Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/notebook?id=e9ca23d68d884d4ebb19d07889727dae\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"List all notebook instances",\n  "result":\n  [{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"waiting",\n    "reason":"ContainerCreating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.6.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  }],\n  "attributes":{}\n}\n')),(0,o.kt)("h2",{id:"get-the-notebook-instance"},"Get the notebook instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/v1/notebook/{id}\n")),(0,o.kt)("h3",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"In"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"Notebook id.")))),(0,o.kt)("h3",{id:"code-example-2"},"Code Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/notebook/notebook_1626160071451_0001\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Get the notebook instance",\n  "result":{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"waiting",\n    "reason":"ContainerCreating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.6.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')),(0,o.kt)("h2",{id:"delete-the-notebook-instance"},"Delete the notebook instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DELETE /api/v1/notebook/{id}\n")),(0,o.kt)("h3",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"In"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"Notebook id.")))),(0,o.kt)("h3",{id:"code-example-3"},"Code Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/notebook/notebook_1626160071451_0001\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Delete the notebook instance",\n  "result":{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"terminating",\n    "reason":"The notebook instance is terminating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.6.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')))}c.isMDXComponent=!0}}]);