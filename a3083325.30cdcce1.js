(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var l=n(3),r=n(7),o=(n(0),n(139)),a={title:"Model Client"},i={unversionedId:"userDocs/submarine-sdk/model-client",id:"userDocs/submarine-sdk/model-client",isDocsHomePage:!1,title:"Model Client",description:"\x3c!--",source:"@site/docs/userDocs/submarine-sdk/model-client.md",slug:"/userDocs/submarine-sdk/model-client",permalink:"/docs/userDocs/submarine-sdk/model-client",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/submarine-sdk/model-client.md",version:"current",sidebar:"docs",previous:{title:"Experiment Client",permalink:"/docs/userDocs/submarine-sdk/experiment-client"},next:{title:"Tracking",permalink:"/docs/userDocs/submarine-sdk/tracking"}},c=[{value:"class ModelClient()",id:"class-modelclient",children:[{value:"<code>ModelsClient(tracking_uri=None, registry_uri=None)-&gt;ModelsClient</code>",id:"modelsclienttracking_urinone-registry_urinone-modelsclient",children:[]},{value:"<code>ModelsClient.start()-&gt;[Active Run]</code>",id:"modelsclientstart-active-run",children:[]},{value:"<code>ModelsClient.log_param(key, value)-&gt;None</code>",id:"modelsclientlog_paramkey-value-none",children:[]},{value:"<code>ModelsClient.log_params(params)-&gt;None</code>",id:"modelsclientlog_paramsparams-none",children:[]},{value:"<code>ModelsClient.log_metric(self, key, value, step=None)-&gt;None</code>",id:"modelsclientlog_metricself-key-value-stepnone-none",children:[]},{value:"<code>ModelsClient.log_metrics(self, metrics, step=None)-&gt;None</code>",id:"modelsclientlog_metricsself-metrics-stepnone-none",children:[]},{value:"<code>(Beta) ModelsClient.save_model(self, model_type, model, artifact_path, registered_model_name=None)</code>",id:"beta-modelsclientsave_modelself-model_type-model-artifact_path-registered_model_namenone",children:[]},{value:"<code>(Beta) ModelsClient.load_model(self, name, version)-&gt;mlflow.pyfunc.PyFuncModel</code>",id:"beta-modelsclientload_modelself-name-version-mlflowpyfuncpyfuncmodel",children:[]},{value:"<code>(Beta) ModelsClient.update_model(self, name, new_name)-&gt;None</code>",id:"beta-modelsclientupdate_modelself-name-new_name-none",children:[]},{value:"<code>(Beta) ModelsClient.delete_model(self, name, version)-&gt;None</code>",id:"beta-modelsclientdelete_modelself-name-version-none",children:[]}]}],s={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"class-modelclient"},"class ModelClient()"),Object(o.b)("p",null,"The submarine ModelsClient provides a high-level API for logging metrics / parameters and managing models."),Object(o.b)("h3",{id:"modelsclienttracking_urinone-registry_urinone-modelsclient"},Object(o.b)("inlineCode",{parentName:"h3"},"ModelsClient(tracking_uri=None, registry_uri=None)->ModelsClient")),Object(o.b)("p",null,"Initialize a ",Object(o.b)("inlineCode",{parentName:"p"},"ModelsClient")," instance."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"tracking_uri"),": If run in Submarine, you do not need to specify it. Otherwise, specify the external tracking_uri."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"registry_uri"),":  If run in Submarine, you do not need to specify it. Otherwise, specify the external registry_uri."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"ModelsClient instance"))),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmodelClient = ModelsClient(tracking_uri="0.0.0.0:4000", tracking_uri="0.0.0.0:5000")\n')),Object(o.b)("h3",{id:"modelsclientstart-active-run"},Object(o.b)("inlineCode",{parentName:"h3"},"ModelsClient.start()->[Active Run]")),Object(o.b)("p",null,"For details of ",Object(o.b)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/_modules/mlflow/tracking/fluent.html#ActiveRun"},"Active Run")),Object(o.b)("p",null,'Start a new Mlflow run, and direct the logging of the artifacts and metadata to the Run named "worker_i" under Experiment "job_id". If in distributed training, worker and job id would be parsed from environment variable. If in local traning, worker and job id will be generated.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Active Run"))),Object(o.b)("h3",{id:"modelsclientlog_paramkey-value-none"},Object(o.b)("inlineCode",{parentName:"h3"},"ModelsClient.log_param(key, value)->None")),Object(o.b)("p",null,"Log parameter under the current run."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"key")," \u2013 Parameter name"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"value")," \u2013 Parameter value"))),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_param("learning_rate", 0.01)\n')),Object(o.b)("h3",{id:"modelsclientlog_paramsparams-none"},Object(o.b)("inlineCode",{parentName:"h3"},"ModelsClient.log_params(params)->None")),Object(o.b)("p",null,"Log a batch of params for the current run."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"params")," \u2013 Dictionary of param_name: String -> value"))),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nparams = {"learning_rate": 0.01, "n_estimators": 10}\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_params(params)\n')),Object(o.b)("h3",{id:"modelsclientlog_metricself-key-value-stepnone-none"},Object(o.b)("inlineCode",{parentName:"h3"},"ModelsClient.log_metric(self, key, value, step=None)->None")),Object(o.b)("p",null,"Log a metric under the current run."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"key")," \u2013 Metric name (string)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"value")," \u2013 Metric value (float)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," \u2013 Metric step (int). Defaults to zero if unspecified."))),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_metric("mse", 2500.00)\n')),Object(o.b)("h3",{id:"modelsclientlog_metricsself-metrics-stepnone-none"},Object(o.b)("inlineCode",{parentName:"h3"},"ModelsClient.log_metrics(self, metrics, step=None)->None")),Object(o.b)("p",null,"Log multiple metrics for the current run."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"metrics")," \u2013 Dictionary of metric_name: String -> value: Float."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," \u2013 A single integer step at which to log the specified Metrics. If unspecified, each metric is logged at step zero."))),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmetrics = {"mse": 2500.00, "rmse": 50.00}\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_metrics(metrics)\n')),Object(o.b)("h3",{id:"beta-modelsclientsave_modelself-model_type-model-artifact_path-registered_model_namenone"},Object(o.b)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.save_model(self, model_type, model, artifact_path, registered_model_name=None)")),Object(o.b)("p",null,"Save model to model registry."),Object(o.b)("h3",{id:"beta-modelsclientload_modelself-name-version-mlflowpyfuncpyfuncmodel"},Object(o.b)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.load_model(self, name, version)->mlflow.pyfunc.PyFuncModel")),Object(o.b)("p",null,"Load a model from model registry."),Object(o.b)("h3",{id:"beta-modelsclientupdate_modelself-name-new_name-none"},Object(o.b)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.update_model(self, name, new_name)->None")),Object(o.b)("p",null,"Update a model by new name."),Object(o.b)("h3",{id:"beta-modelsclientdelete_modelself-name-version-none"},Object(o.b)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.delete_model(self, name, version)->None")),Object(o.b)("p",null,"Delete a model in model registry."))}m.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var l=n(0),r=n.n(l);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=m(n),u=l,p=b["".concat(a,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(p,i(i({ref:t},s),{},{components:n})):r.a.createElement(p,i({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);