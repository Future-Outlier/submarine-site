(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),i=(n(0),n(205)),a={title:"Jupyter Notebook"},c={unversionedId:"gettingStarted/notebook",id:"version-0.6.0/gettingStarted/notebook",isDocsHomePage:!1,title:"Jupyter Notebook",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/gettingStarted/notebook.md",slug:"/gettingStarted/notebook",permalink:"/docs/gettingStarted/notebook",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/gettingStarted/notebook.md",version:"0.6.0",sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/gettingStarted/quickstart"},next:{title:"Experiment REST API",permalink:"/docs/userDocs/api/experiment"}},s=[{value:"Working with notebooks",id:"working-with-notebooks",children:[{value:"Notebooks Web UI",id:"notebooks-web-ui",children:[]}]},{value:"Experiment with your notebook",id:"experiment-with-your-notebook",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide describes how to use Jupyter notebook in Submarine to launch\nand manage Jupyter notebooks."),Object(i.b)("h2",{id:"working-with-notebooks"},"Working with notebooks"),Object(i.b)("p",null,"We recommend using Web UI to manage notebooks."),Object(i.b)("h3",{id:"notebooks-web-ui"},"Notebooks Web UI"),Object(i.b)("p",null,"Notebooks can be started from the Web UI. You can click the \u201cNotebook\u201d tab in the\nleft-hand panel to manage your notebooks."),Object(i.b)("p",null,Object(i.b)("img",{src:n(249).default})),Object(i.b)("p",null,"To create a new notebook server, click \u201cNew Notebook\u201d. You should see a form for entering\ndetails of your new notebook server."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Notebook Name : Name of the notebook server. It should follow the rules below.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Contain at most 63 characters."),Object(i.b)("li",{parentName:"ol"},"Contain only lowercase alphanumeric characters or '-'."),Object(i.b)("li",{parentName:"ol"},"Start with an alphabetic character."),Object(i.b)("li",{parentName:"ol"},"End with an alphanumeric character."))),Object(i.b)("li",{parentName:"ul"},"Environment : It defines a set of libraries and docker image."),Object(i.b)("li",{parentName:"ul"},"CPU and Memory"),Object(i.b)("li",{parentName:"ul"},"GPU (optional)"),Object(i.b)("li",{parentName:"ul"},"EnvVar (optional) : Injects environment variables into the notebook.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"If you\u2019re not sure which environment you need, please choose the environment \u201cnotebook-env\u201d\nfor the new notebook.")),Object(i.b)("p",null,Object(i.b)("img",{src:n(250).default})),Object(i.b)("p",null,"You should see your new notebook server. Click the name of your notebook server to connect to it."),Object(i.b)("p",null,Object(i.b)("img",{src:n(251).default})),Object(i.b)("h2",{id:"experiment-with-your-notebook"},"Experiment with your notebook"),Object(i.b)("p",null,"The environment \u201cnotebook-env\u201d includes Submarine Python SDK which can talk to Submarine Server to\ncreate experiments, as the example below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from __future__ import print_function\nimport submarine\nfrom submarine.experiment.models.environment_spec import EnvironmentSpec\nfrom submarine.experiment.models.experiment_spec import ExperimentSpec\nfrom submarine.experiment.models.experiment_task_spec import ExperimentTaskSpec\nfrom submarine.experiment.models.experiment_meta import ExperimentMeta\nfrom submarine.experiment.models.code_spec import CodeSpec\n\n# Create Submarine Client\nsubmarine_client = submarine.ExperimentClient()\n\n# Define TensorFlow experiment spec\nenvironment = EnvironmentSpec(image='apache/submarine:tf-dist-mnist-test-1.0')\nexperiment_meta = ExperimentMeta(name='mnist-dist',\n                                 namespace='default',\n                                 framework='Tensorflow',\n                                 cmd='python /var/tf_dist_mnist/dist_mnist.py --train_steps=100',\n                                 env_vars={'ENV1': 'ENV1'})\n\nworker_spec = ExperimentTaskSpec(resources='cpu=1,memory=1024M',\n                                 replicas=1)\nps_spec = ExperimentTaskSpec(resources='cpu=1,memory=1024M',\n                                 replicas=1)\ncode_spec = CodeSpec(sync_mode='git', url='https://github.com/apache/submarine.git')\n\nexperiment_spec = ExperimentSpec(meta=experiment_meta,\n                                 environment=environment,\n                                 code=code_spec,\n                                 spec={'Ps' : ps_spec,'Worker': worker_spec})\n\n# Create experiment\nexperiment = submarine_client.create_experiment(experiment_spec=experiment_spec)\n\n")),Object(i.b)("p",null,"You can create a new notebook, paste the above code and run it. Or, you can find the notebook ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/submarine-sdk/pysubmarine/example/submarine_experiment_sdk.ipynb"},Object(i.b)("inlineCode",{parentName:"a"},"submarine_experiment_sdk.ipynb"))," inside the launched notebook session. You can open it, try it out."),Object(i.b)("p",null,"After experiment submitted to Submarine server, you can find the experiment jobs on the UI."))}b.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=b(n),l=o,d=m["".concat(a,".").concat(l)]||m[l]||u[l]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},249:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/notebook-list-507c0f9a50f6cd5637891c13c62d4650.png"},250:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/notebook-form-1c2959c2de638b11edb28f20e2fe171b.png"},251:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/created-notebook-360544388021273ece4a1d7fba8900ee.png"}}]);