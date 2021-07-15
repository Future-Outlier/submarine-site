(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(145)),o={title:"How to Run Integration Test"},c={unversionedId:"devDocs/IntegrationTest",id:"devDocs/IntegrationTest",isDocsHomePage:!1,title:"How to Run Integration Test",description:"\x3c!---",source:"@site/docs/devDocs/IntegrationTest.md",slug:"/devDocs/IntegrationTest",permalink:"/docs/devDocs/IntegrationTest",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/IntegrationTest.md",version:"current",sidebar:"docs",previous:{title:"Development Guide",permalink:"/docs/devDocs/Development"},next:{title:"How to Run Integration K8s Test",permalink:"/docs/devDocs/IntegrationTestK8s"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"E2E test",id:"e2e-test",children:[{value:"E2E tests can be executed both locally and in Travis (For workbench developer)",id:"e2e-tests-can-be-executed-both-locally-and-in-travis-for-workbench-developer",children:[]},{value:"Run the existing tests.",id:"run-the-existing-tests",children:[]},{value:"Add your own integration test",id:"add-your-own-integration-test",children:[]}]}],s={toc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now, Apache Submarine supports two kinds of integration test: ",Object(i.b)("inlineCode",{parentName:"p"},"test-e2e")," and ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s"),". These two modules can be found in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/submarine-test"},"submarine/submarine-test")," directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Currently, there are some differences between ",Object(i.b)("inlineCode",{parentName:"p"},"test-e2e")," and ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s")," in operation mode. To elaborate, ",Object(i.b)("inlineCode",{parentName:"p"},"test-e2e")," needs to deploy Apache Submarine locally, while ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s")," deploys Apache Submarine via k8s.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"These two test modules can be applied to different test scenarios. (In the future, these two test modules may be combined or adjusted)"))),Object(i.b)("h2",{id:"e2e-test"},"E2E test"),Object(i.b)("h3",{id:"e2e-tests-can-be-executed-both-locally-and-in-travis-for-workbench-developer"},"E2E tests can be executed both locally and in Travis (For workbench developer)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run E2E tests locally:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Step1: Follow ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/website/docs/adminDocs/yarn/workbench/HowToRun.md"},"HowToRun.md")," to launch the submarine-server and database."),Object(i.b)("li",{parentName:"ul"},"Step2: Run workbench (Angular version) locally")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"cd submarine/submarine-workbench/workbench-web\nnpm start\n// Check 127.0.0.1:4200\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Step3: Modify the port from 8080 to 4200",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/WebDriverManager.java"},"WebDriverManager.java"),": ",Object(i.b)("inlineCode",{parentName:"li"},'url = "http://localhost:8080";')," --\x3e ",Object(i.b)("inlineCode",{parentName:"li"},'url = "http://localhost:4200";')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"Your Unit test case"),": ",Object(i.b)("inlineCode",{parentName:"li"},"8080")," --\x3e ",Object(i.b)("inlineCode",{parentName:"li"},"4200")))),Object(i.b)("li",{parentName:"ul"},"Step4: Comment the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/ChromeWebDriverProvider.java"},"ChromeWebDriverProvider.java"),": ",Object(i.b)("inlineCode",{parentName:"li"},'chromeOptions.addArguments("--headless");')," --\x3e ",Object(i.b)("inlineCode",{parentName:"li"},'//chromeOptions.addArguments("--headless");')),Object(i.b)("li",{parentName:"ul"},"With the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option, the selenium will be executed in background."))),Object(i.b)("li",{parentName:"ul"},"Step5: Run E2E test cases (Please check the following section ",Object(i.b)("strong",{parentName:"li"},"Run the existing tests"),")"))),Object(i.b)("li",{parentName:"ul"},"Run E2E tests in Travis:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Step1: Make sure that the port must be 8080 rather than in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/WebDriverManager.java"},"WebDriverManager.java")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"all test cases"),"."),Object(i.b)("li",{parentName:"ul"},"Step2: Make sure that the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option is not commented in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/ChromeWebDriverProvider.java"},"ChromeWebDriverProvider.java"),"."),Object(i.b)("li",{parentName:"ul"},"Step3: If you push the commit to Github, the Travis CI will execute automatically and you can check it in ",Object(i.b)("inlineCode",{parentName:"li"},"https://travis-ci.com/${your_github_account}/${your_repo_name}"),".")))),Object(i.b)("h3",{id:"run-the-existing-tests"},"Run the existing tests."),Object(i.b)("h5",{id:"move-to-the-working-directory"},"Move to the working directory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd submarine/submarine-test/test-e2e\n")),Object(i.b)("h5",{id:"compile--run"},"Compile & Run."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Following command will compile all files and run ",Object(i.b)("strong",{parentName:"p"},"all"),' files ending with "IT" in the ',Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"directory"),"."),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"For linux",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"mvn verify\n"))),Object(i.b)("li",{parentName:"ul"},"For MacOS")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre"},"mvn clean install -U\n")),Object(i.b)("p",{parentName:"blockquote"},"Run a specific testcase"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre"},"mvn -Dtest=${your_test_case_file_name} test //ex: mvn -Dtest=loginIT test\n"))),Object(i.b)("h5",{id:"result"},"Result"),Object(i.b)("p",null,"If all of the function under test are succeeded, it will show."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"BUILD SUCCESS\n")),Object(i.b)("p",null,"Otherwise, it will show."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"BUILD FAILURE\n")),Object(i.b)("h3",{id:"add-your-own-integration-test"},"Add your own integration test"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Create a new file ending with "IT" under "submarine/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration/".'),Object(i.b)("li",{parentName:"ol"},"Your public class is recommended to extend AbstractSubmarineIT. The class AbstractSubmarineIT contains some commonly used functions.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"  WebElement pollingWait(final By locator, final long timeWait); // Find element on the website.\n  void clickAndWait(final By locator); // Click element and wait for 1 second.\n  void sleep(long millis, boolean logOutput); // Let system sleep a period of time.\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"There are also some commonly used functions except in AbstractSubmarineIT.java.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"  // In WebDriverManager.java:\n  public static WebDriver getWebDriver(); // This return a firefox webdriver which has been set to your workbench website.\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Add ",Object(i.b)("a",{parentName:"li",href:"https://junit.org/junit5/docs/current/user-guide/"},"JUnit")," annotation before your testing function, e.g., @Beforeclass, @Test, and @AfterClass. You can refer to ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration/loginIT.java"},"loginIT.java"),"."),Object(i.b)("li",{parentName:"ol"},"Use command mentioned above to compile and run to test whether it works as your anticipation.")))}l.isMDXComponent=!0}}]);