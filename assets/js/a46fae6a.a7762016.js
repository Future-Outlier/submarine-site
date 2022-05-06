"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5975],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],m={title:"Submarine Client"},o=void 0,d={unversionedId:"userDocs/submarine-sdk/submarine-client",id:"userDocs/submarine-sdk/submarine-client",title:"Submarine Client",description:"\x3c!--",source:"@site/docs/userDocs/submarine-sdk/submarine-client.md",sourceDirName:"userDocs/submarine-sdk",slug:"/userDocs/submarine-sdk/submarine-client",permalink:"/docs/next/userDocs/submarine-sdk/submarine-client",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/submarine-sdk/submarine-client.md",tags:[],version:"current",frontMatter:{title:"Submarine Client"},sidebar:"docs",previous:{title:"Submarine CLI",permalink:"/docs/next/userDocs/submarine-sdk/submarine-cli"},next:{title:"Experiment Client",permalink:"/docs/next/userDocs/submarine-sdk/experiment-client"}},p={},c=[{value:"class SubmarineClient()",id:"class-submarineclient",level:2},{value:"<code>log_metric(job_id, key, value, worker_index, timestamp, step) -&gt; None</code>",id:"log_metricjob_id-key-value-worker_index-timestamp-step---none",level:4},{value:"<code>log_param(job_id, key, value, worker_index) -&gt; None</code>",id:"log_paramjob_id-key-value-worker_index---none",level:4},{value:"<code>save_model(model, model_type, registered_model_name, input_dim, output_dim) -&gt; None</code>",id:"save_modelmodel-model_type-registered_model_name-input_dim-output_dim---none",level:4},{value:"<code>create_serve(self, model_name, model_version, async_req = True) -&gt; dict</code>",id:"create_serveself-model_name-model_version-async_req--true---dict",level:4},{value:"<code>delete_serve(self, model_name, model_version, async_req) -&gt; None</code>",id:"delete_serveself-model_name-model_version-async_req---none",level:4}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"class-submarineclient"},"class SubmarineClient()"),(0,l.kt)("p",null,"Client of submarine to log metric/param, save model and create/delete serve."),(0,l.kt)("h4",{id:"log_metricjob_id-key-value-worker_index-timestamp-step---none"},(0,l.kt)("inlineCode",{parentName:"h4"},"log_metric(job_id, key, value, worker_index, timestamp, step) -> None")),(0,l.kt)("p",null,"Log a single key-value metric with job id and worker index. The value must always be a number."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"job_id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The job name to which the metric should be logged."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"key"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Metric name."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"value"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"Metric worker_index."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"worker_index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter worker_index."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Datetime"),(0,l.kt)("td",{parentName:"tr",align:null},"Time when this metric was calculated. Defaults to the current system time."),(0,l.kt)("td",{parentName:"tr",align:"center"},"datetime.now()")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"step"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"A single integer step at which to log the specified Metrics, by default it's 0."),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"log_paramjob_id-key-value-worker_index---none"},(0,l.kt)("inlineCode",{parentName:"h4"},"log_param(job_id, key, value, worker_index) -> None")),(0,l.kt)("p",null,"Log a single key-value parameter with job id and worker index. The key and value are both strings."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"job_id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The job name to which the parameter should be logged."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"key"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter name."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"value"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter value."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"worker_index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter worker_index."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")))),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"save_modelmodel-model_type-registered_model_name-input_dim-output_dim---none"},(0,l.kt)("inlineCode",{parentName:"h4"},"save_model(model, model_type, registered_model_name, input_dim, output_dim) -> None")),(0,l.kt)("p",null,"Save a model into the minio pod."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"model"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Model artifact."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"model_type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Version of a registered model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"registered_model_name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"If it is not ",(0,l.kt)("inlineCode",{parentName:"td"},"None"),", the model will be registered into the model registry with this name."),(0,l.kt)("td",{parentName:"tr",align:"center"},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"input_dim"),(0,l.kt)("td",{parentName:"tr",align:"center"},"List<String",">"),(0,l.kt)("td",{parentName:"tr",align:null},"The input dimension of the model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"output_dim"),(0,l.kt)("td",{parentName:"tr",align:"center"},"List<String",">"),(0,l.kt)("td",{parentName:"tr",align:null},"The output dimension of the model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"None")))),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"create_serveself-model_name-model_version-async_req--true---dict"},(0,l.kt)("inlineCode",{parentName:"h4"},"create_serve(self, model_name, model_version, async_req = True) -> dict")),(0,l.kt)("p",null,"Create serve of a model through Seldon Core."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"model_name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of a registered model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"model_version"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Version of a registered model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"async_req"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute request asynchronously."),(0,l.kt)("td",{parentName:"tr",align:"center"},"True")))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),"\nReturn a dictionary with inference url."),(0,l.kt)("h4",{id:"delete_serveself-model_name-model_version-async_req---none"},(0,l.kt)("inlineCode",{parentName:"h4"},"delete_serve(self, model_name, model_version, async_req) -> None")),(0,l.kt)("p",null,"Delete a serving model."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"model_name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of a registered model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"model_version"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Version of a registered model."),(0,l.kt)("td",{parentName:"tr",align:"center"},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"async_req"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute request asynchronously."),(0,l.kt)("td",{parentName:"tr",align:"center"},"True")))))}s.isMDXComponent=!0}}]);