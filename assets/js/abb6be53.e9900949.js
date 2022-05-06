"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7852],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=o.createContext({}),c=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,d=p["".concat(m,".").concat(h)]||p[h]||l[h]||n;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4355:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=r(7462),i=r(3366),n=(r(7294),r(3905)),a=["components"],s={title:"Guide for Apache Submarine Committers"},m=void 0,c={unversionedId:"community/HowToCommit",id:"version-0.6.0/community/HowToCommit",title:"Guide for Apache Submarine Committers",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/community/HowToCommit.md",sourceDirName:"community",slug:"/community/HowToCommit",permalink:"/docs/0.6.0/community/HowToCommit",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/community/HowToCommit.md",tags:[],version:"0.6.0",frontMatter:{title:"Guide for Apache Submarine Committers"},sidebar:"docs",previous:{title:"Apache Submarine Community",permalink:"/docs/0.6.0/community/"},next:{title:"How To Contribute to Submarine",permalink:"/docs/0.6.0/community/contributing"}},u={},l=[{value:"New committers",id:"new-committers",level:2},{value:"Review",id:"review",level:2},{value:"Reject",id:"reject",level:2},{value:"Commit individual patches",id:"commit-individual-patches",level:2},{value:"Adding Contributors role",id:"adding-contributors-role",level:2}],p={toc:l};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page contains Hadoop Core-specific guidelines for committers."),(0,n.kt)("h2",{id:"new-committers"},"New committers"),(0,n.kt)("p",null,"New committers are encouraged to first read Apache's generic committer documentation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/new-committers-guide.html"},"Apache New Committer Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/committers.html"},"Apache Committer FAQ"))),(0,n.kt)("p",null,"The first act of a new core committer is typically to add their name to the\ncredits page. This requires changing the site source in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine-site/blob/master/community/member.md"},"https://github.com/apache/submarine-site/blob/master/community/member.md"),". Once done,\nupdate the Submarine website as described\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine-site/blob/asf-site/README.md"},"here"),"\n(TLDR; don't forget to regenerate the site with hugo, and commit the generated\nresults, too)."),(0,n.kt)("h2",{id:"review"},"Review"),(0,n.kt)("p",null,"Submarine committers should, as often as possible, attempt to review patches\nsubmitted by others. Ideally every submitted patch will get reviewed by a\ncommitter within a few days. If a committer reviews a patch they've not\nauthored, and believe it to be of sufficient quality, then they can commit the\npatch, otherwise the patch should be cancelled with a clear explanation for why\nit was rejected."),(0,n.kt)("p",null,"The list of submitted patches can be found in the GitHub\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/pulls"},"Pull Requests")," page.\nCommitters should scan the list from top-to-bottom,\nlooking for patches that they feel qualified to review and possibly commit."),(0,n.kt)("p",null,"For non-trivial changes, it is best to get another committer to review & approve\nyour own patches before commit."),(0,n.kt)("h2",{id:"reject"},"Reject"),(0,n.kt)("p",null,"Patches should be rejected which do not adhere to the guidelines in\n",(0,n.kt)("a",{parentName:"p",href:"/docs/0.6.0/community/contributing"},"Contribution Guidelines"),". Committers should always be\npolite to contributors and try to instruct and encourage them to contribute\nbetter patches. If a committer wishes to improve an unacceptable patch, then it\nshould first be rejected, and a new patch should be attached by the committer\nfor review."),(0,n.kt)("h2",{id:"commit-individual-patches"},"Commit individual patches"),(0,n.kt)("p",null,"Submarine uses git for source code version control. The writable repo is at -\n",(0,n.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/repos/asf/submarine.git"},"https://gitbox.apache.org/repos/asf/submarine.git")),(0,n.kt)("p",null,"It is strongly recommended to use the cicd script to merge the PRs.\nSee the instructions at\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/dev-support/cicd"},"https://github.com/apache/submarine/tree/master/dev-support/cicd")),(0,n.kt)("h2",{id:"adding-contributors-role"},"Adding Contributors role"),(0,n.kt)("p",null,"There are three roles (Administrators, Committers, Contributors) in the project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Contributors who have Contributors role can become assignee of the issues in the project."),(0,n.kt)("li",{parentName:"ul"},"Committers who have Committers role can set arbitrary roles in addition to Contributors role."),(0,n.kt)("li",{parentName:"ul"},"Committers who have Administrators role can edit or delete all comments, or even delete issues in addition to Committers role.")),(0,n.kt)("p",null,"How to set roles"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to ASF JIRA"),(0,n.kt)("li",{parentName:"ol"},"Go to the project page (e.g. ",(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/SUBMARINE"},"https://issues.apache.org/jira/browse/SUBMARINE")," )"),(0,n.kt)("li",{parentName:"ol"},'Hit "Administration" tab'),(0,n.kt)("li",{parentName:"ol"},'Hit "Roles" tab in left side'),(0,n.kt)("li",{parentName:"ol"},"Add Administrators/Committers/Contributors role")))}h.isMDXComponent=!0}}]);