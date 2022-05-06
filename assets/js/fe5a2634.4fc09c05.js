"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3500],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Python SDK Development"},s=void 0,p={unversionedId:"userDocs/submarine-sdk/pysubmarine/development",id:"version-0.6.0/userDocs/submarine-sdk/pysubmarine/development",title:"Python SDK Development",description:"\x3c!---",source:"@site/versioned_docs/version-0.6.0/userDocs/submarine-sdk/pysubmarine/development.md",sourceDirName:"userDocs/submarine-sdk/pysubmarine",slug:"/userDocs/submarine-sdk/pysubmarine/development",permalink:"/docs/0.6.0/userDocs/submarine-sdk/pysubmarine/development",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/submarine-sdk/pysubmarine/development.md",tags:[],version:"0.6.0",frontMatter:{title:"Python SDK Development"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"PySubmarine Docker",id:"pysubmarine-docker",level:3},{value:"Coding Style",id:"coding-style",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Generate python SDK from swagger",id:"generate-python-sdk-from-swagger",level:3},{value:"Model Management Model Development",id:"model-management-model-development",level:3},{value:"Upload package to PyPi",id:"upload-package-to-pypi",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page provides general Python development guidelines and source build instructions"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"This is required for developing & testing changes, we recommend installing pysubmarine\nin its own conda environment by running the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda create --name submarine-dev python=3.6\nconda activate submarine-dev\n\n# Install auto-format and lints (lint-requirements.txt is in ./dev-support/style-check/python)\npip install -r lint-requirements.txt\n\n# Install mypy (mypy-requirements.txt is in ./dev-support/style-check/python)\npip install -r mypy-requirements.txt\n\n# test-requirements.txt is in ./submarine-sdk/pysubmarine/github-actions\npip install -r test-requirements.txt\n\n# Installs pysubmarine from current checkout\npip install ./submarine-sdk/pysubmarine\n")),(0,l.kt)("h3",{id:"pysubmarine-docker"},"PySubmarine Docker"),(0,l.kt)("p",null,"We also use docker to provide build environments for CI, development,\ngenerate python sdk from swagger."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./run-pysubmarine-ci.sh\n")),(0,l.kt)("p",null,"The script does the following things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start an interactive bash session"),(0,l.kt)("li",{parentName:"ul"},"Mount submarine directory to /workspace and set it as home"),(0,l.kt)("li",{parentName:"ul"},"Switch user to be the same user that calls the ",(0,l.kt)("inlineCode",{parentName:"li"},"run-pysubmarine-ci.sh"))),(0,l.kt)("h3",{id:"coding-style"},"Coding Style"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/PyCQA/isort"},"isort")," to sort the Python imports and ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/psf/black"},"black")," to format Python code"),(0,l.kt)("li",{parentName:"ul"},"Both style is configured in ",(0,l.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,l.kt)("li",{parentName:"ul"},"To autoformat code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./dev-support/style-check/python/auto-format.sh\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/PyCQA/flake8"},"flake8")," to verify the linter, its' configure is in ",(0,l.kt)("inlineCode",{parentName:"li"},".flake8"),"."),(0,l.kt)("li",{parentName:"ul"},"Also, we are using ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/python/mypy"},"mypy")," to check the static type in ",(0,l.kt)("inlineCode",{parentName:"li"},"submarine-sdk/pysubmarine/submarine"),"."),(0,l.kt)("li",{parentName:"ul"},"Verify linter pass before submitting a pull request by running:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./dev-support/style-check/python/lint.sh\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you encouter a unexpected format, use the following method")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# fmt: off\n  "Unexpected format, formated by yourself"\n# fmt: on\n')),(0,l.kt)("h3",{id:"unit-testing"},"Unit Testing"),(0,l.kt)("p",null,"We are using ",(0,l.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/latest/"},"pytest")," to develop our unit test suite.\nAfter building the project (see below) you can run its unit tests like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd submarine-sdk/pysubmarine\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run unit test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'pytest --cov=submarine -vs -m "not e2e"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run integration test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'pytest --cov=submarine -vs -m "e2e"\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Before run this command in local, you should make sure the submarine server is running.")),(0,l.kt)("h3",{id:"generate-python-sdk-from-swagger"},"Generate python SDK from swagger"),(0,l.kt)("p",null,"We use ",(0,l.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/installation/#jar"},"open-api generator"),"\nto generate pysubmarine client API that used to communicate with submarine server."),(0,l.kt)("p",null,"If change below files, please run ",(0,l.kt)("inlineCode",{parentName:"p"},"./dev-support/pysubmarine/gen-sdk.sh"),"\nto generate latest version of SDK."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-server/server-core/src/main/java/org/apache/submarine/server/Bootstrap.java"},"Bootstrap.java")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-server/server-core/src/main/java/org/apache/submarine/server/rest/ExperimentRestApi.java"},"ExperimentRestApi.java"))),(0,l.kt)("h3",{id:"model-management-model-development"},"Model Management Model Development"),(0,l.kt)("p",null,"For local development, we can access cluster's service easily thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://www.telepresence.io/"},"telepresence"),".\nTo elaborate, we can develop the sdk in local but can reach out to mlflow server by proxy."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install telepresence follow ",(0,l.kt)("a",{parentName:"li",href:"https://www.telepresence.io/reference/install"},"the instruction"),"."),(0,l.kt)("li",{parentName:"ol"},"Start proxy pod")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"telepresence --new-deployment submarine-dev\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"You can develop as if in the cluster.")),(0,l.kt)("h3",{id:"upload-package-to-pypi"},"Upload package to PyPi"),(0,l.kt)("p",null,"For Apache Submarine committer and PMCs to do a new release."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Change the version from 0.x.x-SNAPSHOT to 0.x.x\nin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-sdk/pysubmarine/setup.py"},"setup.py")),(0,l.kt)("li",{parentName:"ol"},"Install Python packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd submarine-sdk/pysubmarine\npip install -r github-actions/pypi-requirements.txt\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Compiling Your Package")),(0,l.kt)("p",null,"It will create ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dist"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"project.egg.info"),"\nin your local directory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python setup.py bdist_wheel\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Upload python package to TestPyPI for testing")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python -m twine upload --repository testpypi dist/*\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Upload python package to PyPi")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python -m twine upload --repository-url https://upload.pypi.org/legacy/ dist/*\n")))}d.isMDXComponent=!0}}]);